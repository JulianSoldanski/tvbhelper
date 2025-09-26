<?php
// Social Media Links Block Pattern
if ( function_exists( 'register_block_pattern' ) ) {

    register_block_pattern(
        'custom/social-links',
        array(
            'title'       => __( 'Social Media Links', 'custom' ),
            'description' => __( 'Social Media Icons für Header und Footer', 'custom' ),
            'categories'  => array( 'footer', 'header', 'widgets' ),
            'content'     => '
<!-- wp:group {"className":"social-links","layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap","orientation":"horizontal"}} -->
<div class="wp-block-group social-links">
  
  <!-- wp:html -->
  <a href="https://instagram.com/tvb09_official" target="_blank" rel="noopener" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
    </svg>
  </a>
  <!-- /wp:html -->

  <!-- wp:html -->
  <a href="https://facebook.com/profile.php?id=61574002020588" target="_blank" rel="noopener" aria-label="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z"/>
    </svg>
  </a>
  <!-- /wp:html -->

  <!-- wp:html -->
  <a href="https://bsky.app/profile/tvb09.bsky.social" target="_blank" rel="noopener" aria-label="Bluesky">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M12 13.1c1.7-1.8 4.5-5.7 7.1-8.1 1-.9 2.4-1.3 3.5-.6 1 .6 1.5 2 1 3.2-.7 1.7-2.9 4.2-5.2 6 .9.8 2 1.9 2.8 3.2.8 1.2.9 2.8 0 3.9-.8 1-2.3 1.1-3.4.6-1.7-.9-3.5-2.7-5.7-5.6-2.2 2.9-4 4.7-5.7 5.6-1.1.5-2.6.4-3.4-.6-.9-1.1-.8-2.7 0-3.9.8-1.3 1.9-2.4 2.8-3.2-2.3-1.8-4.5-4.3-5.2-6-.5-1.2 0-2.6 1-3.2 1.1-.7 2.5-.3 3.5.6 2.6 2.4 5.4 6.3 7.1 8.1Z"/>
    </svg>
  </a>
  <!-- /wp:html -->

  <!-- wp:html -->
  <a href="https://bsky.brid.gy/tvb09.bsky.social" target="_blank" rel="noopener" aria-label="Mastodon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M21.6 7.6c-.3-2.3-2.4-4.2-4.9-4.6C13.3 2.5 10.7 2.5 8 3c-2.6.4-4.6 2.3-4.9 4.6-.3 2.5-.3 5 0 7.5.3 2.2 2 4 4.4 4.5 1.8.4 3.7.5 5.5.5s3.7-.1 5.5-.5c2.4-.5 4.1-2.3 4.4-4.5.3-2.5.3-5 0-7.5ZM14 16.5h-2v-4.2c0-.8-.3-1.2-1-1.2s-1 .4-1 1.2v4.2H8v-8h2v1c.5-.7 1.2-1.1 2-1.1 1.5 0 2 1 2 2.5v5.6Z"/>
    </svg>
  </a>
  <!-- /wp:html -->

  <!-- wp:html -->
  <a href="https://www.strava.com/clubs/tvb09" target="_blank" rel="noopener" aria-label="Strava">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M12 2 7 12h3l2-4 2 4h3Zm0 9-5 11h3l2-4 2 4h3Z"/>
    </svg>
  </a>
  <!-- /wp:html -->

  </div>
  <!-- /wp:group -->
  '
          )
      );

  }