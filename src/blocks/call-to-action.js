import { registerBlockType } from "@wordpress/blocks";
import {
    RichText,
    InnerBlocks
} from "@wordpress/block-editor";

const ALLOWED_BLOCKS = [ 'core/button' ]

registerBlockType( 'learn-gutenber-block/call-to-action', {
    title: 'Call to Action',
    icon: 'admin-comments',
    category: 'common',
    keywords: [ 'cta', 'call to action' ],
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },
    /**
     * Edit Function
     */
    edit: ( { attributes, setAttributes } ) => {
        const {
            title,
            content
        } = attributes;

        /**
         * Set Title
         */
        function setTitle( value ) {
            setAttributes( { title: value } );
        }

        /**
         * Set Content
         */
        function setContent( value ) {
            setAttributes( { content: value } )
        }

        return(
            <>
                <div class="call-to-action">
                    <RichText
                        key="editable"
                        tagName="h2"
                        placeholder="Iconbox Title"
                        value={ title }
                        onChange={ setTitle }/>

                    <RichText
                        key="editable"
                        tagName="p"
                        placeholder="Iconbox content goes here...."
                        value={ content }
                        onChange={ setContent }/>
                    <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
                </div>
            </>
        )
    },
    /**
     * Save Function
     */
    save: ( { attributes } ) => {
        const {
            title,
            content
        } = attributes;

        return(
            <>
                <div class="call-to-action">
                    <h2>{ title }</h2>
                    <RichText.Content value={ content } tagName="p" />
                    <InnerBlocks.Content />
                </div>
            </>
        )
    }
} );