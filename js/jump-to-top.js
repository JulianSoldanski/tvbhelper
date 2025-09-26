// TVB Jump-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
  console.log("TVB Jump-to-top Script läuft!");
  
  // === Jump to Top Button ===
  let btn = document.getElementById("jumpToTop");
  if (!btn) {
    btn = document.createElement("a");
    btn.id = "jumpToTop";
    btn.className = "jump-to-top";
    btn.href = "#";
    btn.innerHTML = "🔝";
    btn.setAttribute("aria-label", "Nach oben scrollen");
    document.body.appendChild(btn);
  }

  // === Smart Header Hide/Show ===
  const header = document.querySelector("header.wp-block-template-part");
  const navMenus = header ? header.querySelectorAll('.wp-block-navigation, .wp-block-navigation__responsive-container') : [];
  let isMenuOpen = false;
  
  // Monitor menu state
  const checkMenuState = () => {
    isMenuOpen = false;
    navMenus.forEach(menu => {
      if (menu.classList.contains('is-menu-open') || 
          menu.classList.contains('has-modal-open') ||
          menu.querySelector('.wp-block-navigation__responsive-container.is-menu-open') ||
          menu.querySelector('.wp-block-navigation__responsive-dialog[open]')) {
        isMenuOpen = true;
      }
    });
    return isMenuOpen;
  };
  
  // MutationObserver für Menü-Änderungen
  if (header && navMenus.length > 0) {
    const observer = new MutationObserver(() => {
      checkMenuState();
    });
    
    navMenus.forEach(menu => {
      observer.observe(menu, { 
        attributes: true, 
        childList: true, 
        subtree: true 
      });
    });
  }
  
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    
    // Show/hide jump-to-top button
    if (currentScroll > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    
    // Header behavior - hide on scroll down, show on scroll up
    // BUT NOT when menu is open!
    if (header) {
      checkMenuState();
      
      if (!isMenuOpen) {
        if (currentScroll > lastScroll && currentScroll > 300) {
          // Scroll down → hide header
          header.style.transform = "translateY(-100%)";
        } else {
          // Scroll up → show header
          header.style.transform = "translateY(0%)";
        }
      } else {
        // Menu is open → always show header
        header.style.transform = "translateY(0%)";
      }
    }
    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    
    // Smooth transitions
    if (header) {
      if (currentScroll < 300 || isMenuOpen) {
        header.style.transition = "transform 0.0s ease";
      } else {
        header.style.transition = "transform 0.6s ease";
      }
    }
  });
  
  // Menu button event listeners
  if (navMenus.length > 0) {
    navMenus.forEach(menu => {
      const toggleButtons = menu.querySelectorAll('.wp-block-navigation__responsive-container-open, .wp-block-navigation__responsive-container-close, .wp-block-navigation-item__content');
      
      toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
          setTimeout(() => {
            checkMenuState();
            if (header && isMenuOpen) {
              header.style.transform = "translateY(0%)";
              header.style.transition = "transform 0.3s ease";
            }
          }, 50);
        });
      });
    });
  }
  
  // Smooth scroll to top on click
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (header) {
      header.style.transition = "transform 0.0s ease";
      header.style.transform = "translateY(0%)";
    }
  });
  
  // ESC key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setTimeout(() => {
        checkMenuState();
      }, 100);
    }
  });
  
  // Click outside menu closes it
  document.addEventListener('click', (e) => {
    if (isMenuOpen && header && !header.contains(e.target)) {
      setTimeout(() => {
        checkMenuState();
      }, 100);
    }
  });
});