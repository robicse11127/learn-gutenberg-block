import { registerBlockType } from "@wordpress/blocks";

registerBlockType( 'learn-gutenber-block/call-to-action', {
    title: 'Call to Action',
    icon: 'admin-comments',
    category: 'common',
    keywords: [ 'cta', 'call to action' ],
    attributes: {

    },
    /**
     * Edit Function
     */
    edit: ( { attributes, setAttributes } ) => {
        return 'Hello Gutenberg!'
    },
    /**
     * Save Function
     */
    save: ( { attributes } ) => {

    }
} );