<?php
/**
 * Plugin Name: Learn Gutenberg Blocks
 * Plugin URI: http://example.com
 * Description: A learning plugin for gutenberg,
 * Author: Md Rabiul islam
 * Author URI: http://authoruri.com
 * Version: 1.0.0
 * Text-Domain: learn-gutenberg-blocks
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed

/**
 * Register Gutenber Scripts
 */
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_script(
        'learn-gutenberg-block-editor-script',
        plugins_url( 'build/index.js', __FILE__ ),
        [
            'wp-plugins',
            'wp-blocks',
            'wp-editor',
            'wp-edit-post',
            'wp-i18n',
            'wp-element',
            'wp-components',
            'wp-data'
        ]
    );
} );

/**
 * Enqueue Styles
 */
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'learn-gutenberg-block-style', plugins_url( 'assets/css/style.css', __FILE__ ), [], false, 'all' );
} );
add_action( 'admin_enqueue_scripts', function() {
    wp_enqueue_style( 'learn-gutenberg-block-editor-style', plugins_url( 'assets/css/editor.css', __FILE__ ), [], false, 'all' );
} );

/**
 * Register A Block
 */
add_action( 'init', function() {
    register_block_type(
        'learn-gutenber-block/call-to-action',
        [
            'style' => 'learn-gutenberg-block-style',
            'editor_style' => 'learn-gutenberg-block-editor-style',
            'editor_scripts' => 'learn-gutenberg-block-editor-script',
        ]
    );
} );