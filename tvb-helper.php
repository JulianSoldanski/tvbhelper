<?php
/*
Plugin Name: TVB Helper
Description: Lädt eigene JS- und CSS-Dateien
Version: 1.0
*/

if ( ! defined( 'ABSPATH' ) ) exit;

function tvb_scripts_enqueue() {
    wp_enqueue_script('jump-to-top', plugin_dir_url(__FILE__) . 'js/jump-to-top.js', array(), '1.0', true);
    wp_enqueue_style('jump-to-top-style', plugin_dir_url(__FILE__) . 'css/jump-to-top.css', array(), '1.0');
    wp_enqueue_style('social-links-style', plugin_dir_url(__FILE__) . 'patterns/social-links.css', array(), '1.0');
}
add_action('wp_enqueue_scripts', 'tvb_scripts_enqueue');

// Register blocks and patterns
function tvb_register() {
    // Register Social Links Pattern
    include plugin_dir_path( __FILE__ ) . 'patterns/social-links.php';
    
    // Register Social Links Block
    register_block_type( __DIR__ . '/blocks/social-links' );
}
add_action( 'init', 'tvb_register' );



