<?php
/**
 * Created by PhpStorm.
 * User: Andreas Sommer
 * Date: 06.11.2019
 * Time: 16:35
 */

namespace Belsignum\RteCKEditorMicrodata\Provider;

class TypesProvider
{
	/**
	 * Get the WebPage types
	 * @see https://schema.org/WebPage
	 */
	public function getWebPageTypes(): array
	{
		return [
			/*'AboutPage',
			'CheckoutPage',
			'CollectionPage',
			'ContactPage',*/
			'FAQPage',
			/*'ImageGallery',
			'ItemPage',
			'ProfilePage',
			'QAPage',
			'SearchResultsPage',
			'VideoGallery',
			'WebPage',*/
		];
	}
}
