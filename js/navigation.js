document.addEventListener("DOMContentLoaded", () => {
  //console.log("Script running – Search header with .wp-block-template-part");
  
  // === Button ===
  let btn = document.getElementById("jumpToTop");
  if (!btn) {
    btn = document.createElement("a");
    btn.id = "jumpToTop";
    btn.className = "jump-to-top";
    btn.href = "#";
    btn.innerHTML = "🔝";
    document.body.appendChild(btn);
  }
  
  // === Search for Header ===
  const header = document.querySelector("header.wp-block-template-part");
  //console.log("Header found:", header);
  
  // === Check for Navigation Menu ===
  const navMenus = header ? header.querySelectorAll('.wp-block-navigation, .wp-block-navigation__responsive-container') : [];
  let isMenuOpen = false;
  
  // Monitor menu state
  const checkMenuState = () => {
    isMenuOpen = false;
    navMenus.forEach(menu => {
      // Check verschiedene Menü-Zustände
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
    
    // Show/hide button
    if (currentScroll > 500) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    
    // Header transform - BUT NOT when menu is open!
    if (header) {
      checkMenuState(); // Update menu state
      
      // WICHTIG: Header nicht verstecken wenn Menü offen ist
      if (!isMenuOpen) {
        if (currentScroll > lastScroll && currentScroll > 500) {
          // scroll down → push header up
          header.style.transform = "translateY(-100%)";
        } else {
          // Scroll up → Show header again
          header.style.transform = "translateY(0%)";
        }
      } else {
        // Menü ist offen → Header immer sichtbar lassen
        header.style.transform = "translateY(0%)";
      }
    }
    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    
    // Transition handling
    if (currentScroll < 500 || isMenuOpen) {
      header.style.transition = "transform 0.0s ease";
    } else {
      header.style.transition = "transform 0.6s ease";
    }  
  });
  
  // Event Listeners für Menü-Buttons
  if (navMenus.length > 0) {
    navMenus.forEach(menu => {
      // Mobile Menu Toggle
      const toggleButtons = menu.querySelectorAll('.wp-block-navigation__responsive-container-open, .wp-block-navigation__responsive-container-close, .wp-block-navigation-item__content');
      
      toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Kurze Verzögerung um DOM-Updates abzuwarten
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
  
  // Smooth scroll on click
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (header) {
      header.style.transition = "transform 0.0s ease";
      header.style.transform = "translateY(0%)";
    }
  });
  
  // ESC-Taste schließt Menü
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setTimeout(() => {
        checkMenuState();
      }, 100);
    }
  });
  
  // Click außerhalb des Menüs
  document.addEventListener('click', (e) => {
    if (isMenuOpen && header && !header.contains(e.target)) {
      setTimeout(() => {
        checkMenuState();
      }, 100);
    }
  });
  
});