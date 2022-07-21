function cleanHtml(html) {
	// remove paragraph and bookmark
	html = html.replaceAll(/<p>|<\/p>|<span\sdata-cke-bookmark="1"\sstyle="display:\snone;">&nbsp;<\/span>/g, '');
	return html;
}

CKEDITOR.dialog.add('microdataDialog', function(editor) {
	var $parent, bookmarkElement;

	return {
		// Basic properties of the dialog window: title, minimum size.
		title: 'Microdata Properties',
		minWidth: 400,
		minHeight: 200,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab content.
				elements: [
					{
						// Text input field for the FAQ question.
						type: 'text',
						id: 'question',
						label: 'Question',

						// Validation checking whether the field is not empty.
						validate: CKEDITOR.dialog.validate.notEmpty("Question field cannot be empty.")
					},
					{
						// Text input field for the FAQ answer.
						type: 'textarea',
						id: 'answer',
						label: 'Answer',
						validate: CKEDITOR.dialog.validate.notEmpty("Answer field cannot be empty.")
					}
				]
			}
		],

		// This method is invoked once a user clicks the MICRODATA button, opening the dialog.
		onShow: function () {
			// store dialog
			var dialog = this;
			// get selection
			var selection = editor.getSelection();
			// create Bookmark
			var bookmark = selection.createBookmarks();
			// store bookmark element
			bookmarkElement = bookmark[0].startNode.$;
			// store whole FAQ entity
			$parent = $(bookmarkElement).parents('div[itemprop="mainEntity"]');
			// get header content
			var question = cleanHtml($parent.find(':header[itemprop="name"]').html());
			// get answer content
			var answer = cleanHtml($parent.find('div[itemprop="text"]').html());

			// provide contents in dialog
			dialog.setValueOf('tab-basic', 'question', question);
			dialog.setValueOf('tab-basic', 'answer', answer);
		},

		// This method is invoked once a user clicks the CANCEL button, aborting the dialog.
		onCancel: function () {
			// remove bookmark
			$(bookmarkElement).remove();
		},

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {
			// store dialog
			var dialog = this;
			var html = '<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">\n' +
				'    <h3 itemprop="name">' + dialog.getValueOf('tab-basic', 'question') + '</h3>\n' +
				'    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">\n' +
				'      <div itemprop="text">\n' +
								dialog.getValueOf('tab-basic', 'answer') +
				'      </div>\n' +
				'    </div>\n' +
				'  </div>';

			// remove parent html from rte dom
			$parent.remove();
			// Finally, insert the element into the editor at the caret position.
			editor.insertHtml(html);
		}

	};
});
