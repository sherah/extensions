<?php

$wgExtensionCredits['parserhook'][] = array(
	'name' => 'Fundraising Chart',
	'author' => 'Sherah Smith',
	'version' => '1.0.0',
	'description' => 'A tag that affords javascript chart embedding for fundraising datasets.',
	'url' => 'https://www.mediawiki.org/wiki/Extension:FundraisingChart',
);


$wgAutoloadClasses['FundraisingChart'] = $IP . '/extensions/FundraisingChart/fr_chart_body.php';
$wgHooks['ParserFirstCallInit'][] = 'FundraisingChart::onParserInit';

$wgResourceModules['ext.fundraisingChart'] = array(
	'styles'  => array('resources/css/bootstrap.min.css', 'resources/css/style.css'),
	'scripts' => array('resources/js/underscore.min.js', 'resources/js/Chart.min.js',
        'resources/js/chartFormatHelpers.js', 'resources/js/pieChart.js', 'resources/js/barChart.js', 'resources/js/fr_chart.js'),
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'FundraisingChart'
);