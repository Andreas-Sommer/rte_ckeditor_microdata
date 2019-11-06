(function ($) {
	CKEDITOR.plugins.add('microdata', {
		icons: 'microdata',
		init: function(editor) {
			editor.addCommand('microdata', new CKEDITOR.dialogCommand('microdataDialog'));
			editor.ui.addButton('Microdata', {
				label: 'Insert Microdata',
				command: 'microdata',
				toolbar: 'insert'
			});
			CKEDITOR.dialog.add('microdataDialog', this.path + 'dialogs/microdata.js');
		}
	});
})(TYPO3.jQuery);
