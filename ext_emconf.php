<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'CKEditor Microdata',
    'description' => 'Microdata integration for CKEditor.',
    'category' => 'be',
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Andreas Sommer',
    'author_email' => 'sommer@belsignum.com',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
        ],
        'conflicts' => [],
        'suggests' => [
            'setup' => '',
        ],
    ],
];
