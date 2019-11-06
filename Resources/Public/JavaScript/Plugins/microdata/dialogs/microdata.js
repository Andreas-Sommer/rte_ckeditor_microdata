CKEDITOR.dialog.add('microdataDialog', function(editor) {
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

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.dialog
			var dialog = this;

			var html = '<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">\n' +
				'    <h3 itemprop="name">' + dialog.getValueOf('tab-basic', 'question') + '</h3>\n' +
				'    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">\n' +
				'      <div itemprop="text">\n' +
								dialog.getValueOf('tab-basic', 'answer') +
				'      </div>\n' +
				'    </div>\n' +
				'  </div>';

			// Finally, insert the element into the editor at the caret position.
			editor.insertHtml(html);
		}
	};
});
