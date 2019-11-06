# Microdata support for CKEditor for TYPO3

This extension adds a Microdata Implementation for TYPO3 to CKEditor.\
Add issues or explore the project on [github](https://github.com/belsignum/rte_ckeditor_microdata.git).

## Installation

1. Install the extension

    1. with composer from [packagist](https://packagist.org/packages/belsignum/rte-ckeditor-microdata)
    
        ```shell
        composer require belsignum/rte-ckeditor-microdata
        ```

    2. download from [TYPO3 TER](https://extensions.typo3.org/extension/rte_ckeditor_microdata/)

2. Activate the extension in Extension Manager

3. Add a preset for rte_ckeditor or override the default one

    1. via custom extension

        ```php
        <?php
        // EXT:my_ext/ext_localconf.php
        $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:my_ext/Configuration/RTE/Default.yaml';
        ```

    2. via AdditionalConfiguration.php

        ```php
        // /typo3conf/AdditionalConfiguration.php
        $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'fileadmin/Template/Configuration/RTE/Default.yaml';
        ```

4. Add custom RTE config

    ```yaml
    # EXT:my_ext/Configuration/RTE/Default.yaml
    # or:
    # fileadmin/Template/Configuration/RTE/Default.yaml
    imports:
      # Import default RTE config (for example)
      - { resource: "EXT:rte_ckeditor/Configuration/RTE/Default.yaml" }
      # Import the microdata plugin configuration
    - { resource: "EXT:rte_ckeditor_microdata/Configuration/RTE/Plugin.yaml" }

5. Mod existing RTE config

	```yaml
		# EXT:my_ext/Configuration/RTE/Default.yaml
		# or:
		# fileadmin/Template/Configuration/RTE/Default.yaml
		imports:
		  # Import the microdata plugin configuration
		- { resource: "EXT:rte_ckeditor_microdata/Configuration/RTE/Plugin.yaml" }

		editor:
		  config:
			# allow div and headers width attributes
			extraAllowedContent: >
			  div[itemprop, itemscope, itemtype](*);
			  h1[itemprop];
			  h2[itemprop];
			  h3[itemprop];
			  h4[itemprop];
			  h5[itemprop];
			  h6[itemprop];
	
## Usage

1. Edit page properties goto Metadata tab and select type of web page

2. Edit a content element with a RTE text field and hit the "Insert Microdata" button

3. Add your question and your answer. This will add a schema.org HTML structure pattern. You can modify it with RTE but keep the main structure

4. Test your site on [Google rich search results](https://search.google.com/test/rich-results)
  

## To fix
Add further implementations! Currently only the FAQ microdata is supported
