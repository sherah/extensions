<?php

$wgExtensionCredits['parserhook'][] = array(
	'path' => __FILE__,
	'name' => 'Fundraising Chart',
	'author' => 'Sherah Smith',
	'version' => '1.0.0',
	'descriptionmsg' => 'A tag that affords javascript chart embedding for fundraising datasets.',
	'url' => 'https://www.mediawiki.org/wiki/Extension:FundraisingChart',
);


$wgAutoloadClasses['FundraisingChart'] = $IP . '/extensions/FundraisingChart/fr_chart_body.php';
$wgHooks['ParserFirstCallInit'][] = 'FundraisingChart::onParserInit';

$wgResourceModules['ext.fundraisingChart'] = array(
	'styles'  => array('resources/css/style.css'),
    'scripts' => array('resources/js/chartFormatHelpers.js', 'resources/js/fundraising_charts.js'),
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'FundraisingChart',
    'dependencies' => array('moment', 'ext.fundraisingChart.bootstrap', 
        'ext.fundraisingChart.d3','ext.fundraisingChart.topojson', 
        'ext.fundraisingChart.datamaps', 'ext.fundraisingChart.chartsjs',)
);

$wgResourceModules['ext.fundraisingChart.bootstrap'] = array(
    'styles' => 'modules/ext.fundraisingChart.bootstrap/bootstrap.css',
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.d3'] = array(
    'scripts' => 'modules/ext.fundraisingChart.d3/d3.v3.js',
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.topojson'] = array(
    'scripts' => 'modules/ext.fundraisingChart.topojson/topojson.js',
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.datamaps'] = array(
    'scripts' => 'modules/ext.fundraisingChart.datamaps/datamaps.world.js',
    'dependencies' => array('ext.fundraisingChart.topojson', 'ext.fundraisingChart.d3'),
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.chartsjs'] = array(
    'scripts' => 'modules/ext.fundraisingChart.chartsjs/Chart.js',
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'FundraisingChart'
);
