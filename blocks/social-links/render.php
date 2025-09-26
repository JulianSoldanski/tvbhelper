<?php
/**
 * Plugin Name: Social Links
 * Description: tvb social links
 * Version: 1.0
 * Author: Klemens
 */
defined( 'ABSPATH' ) || exit;

// Render-Funktion (Frontend)
function render_social_links( $attributes, $content ) {
    return file_get_contents( __DIR__ . '/render.html' );
}