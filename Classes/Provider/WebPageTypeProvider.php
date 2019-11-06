<?php
/**
 * Created by PhpStorm.
 * User: Andreas Sommer
 * Date: 06.11.2019
 * Time: 16:33
 */

namespace Belsignum\RteCKEditorMicrodata\Provider;

class WebPageTypeProvider
{
	public static function getTypesForTcaSelect()
	{
		$types = (new TypesProvider())->getWebPageTypes();

		\array_walk($types, function (&$type) {
			$type = [$type, $type];
		});

		return \array_merge([['', '']], $types);
	}
}
