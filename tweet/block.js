/**
 * Tweet Block.
 *
 * Custom tweet block.
 *
 * @since  1.0.0
 */
( function( blocks, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	var Editable = blocks.Editable;
	var children = blocks.query.children;

	blocks.registerBlockType( 'aa/tweet', {
		title: __( 'Tweet', 'gutenberg-boilerplate-es5' ),
		icon: 'twitter',
		category: 'common',

		attributes: {
			content: children( 'p' ),
		},

		edit: function( props ) {
			var content = props.attributes.content;
			var focus = props.focus;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				Editable,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
					// focus: focus,
					// onFocus: props.setFocus
				}
			);
		},

		save: function( props ) {
			var tweetContent = props.attributes.content;
			var tweetURI = 'https://twitter.com/home?status=' + encodeURIComponent( tweetContent );
			var attrs = {
				href: tweetURI,
				className: props.className,
				target: '_blank',
			};
			return el( 'a', attrs, tweetContent );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
);
