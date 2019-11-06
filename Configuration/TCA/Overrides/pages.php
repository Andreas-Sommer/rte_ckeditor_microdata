<?php
call_user_func(function () {
	$rteCKeditorMicrodataFields = [
		'tx_rteckeditormicrodata_webpagetype' => [
			'exclude' => true,
			'label' => 'LLL:EXT:rte_ckeditor_microdata/Resources/Private/Language/locallang_db.xlf:pages.tx_rteckeditormicrodata_webpagetype',
			'config' => [
				'type' => 'select',
				'renderType' => 'selectSingle',
				'items' => \Belsignum\RteCKEditorMicrodata\Provider\WebPageTypeProvider::getTypesForTcaSelect(),
				'size' => 1,
				'maxitems' => 1,
				'behaviour' => [
					'allowLanguageSynchronization' => true,
				],
			],
		],
	];

	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $rteCKeditorMicrodataFields);
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
		'pages',
		'metatags',
		'tx_rteckeditormicrodata_webpagetype'
	);
});
