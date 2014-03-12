<?php

$wgExtensionCredits['parserhook'][] = array(
	'path' => __FILE__,
	'name' => 'Fundraising Chart',
	'author' => 'Sherah Smith',
	'version' => '1.0.0',
	'descriptionmsg' => 'fundraisingchart-desc',
	'url' => 'https://www.mediawiki.org/wiki/Extension:FundraisingChart',
);


$wgAutoloadClasses['FundraisingChart'] = $IP . '/extensions/FundraisingChart/fr_chart_body.php';
$wgHooks['ParserFirstCallInit'][] = 'FundraisingChart::onParserInit';

$wgResourceModules['ext.fundraisingChart'] = array(
	'styles'  => array('resources/css/style.css'),
	'scripts' => array('resources/js/Chart.min.js',
        'resources/js/chartFormatHelpers.js', 'resources/js/fundraising_charts.js'),
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'FundraisingChart',
    'dependencies' => 'moment'
);

$wgResourceModules['ext.fundraisingChart.bootstrap'] = array(
    'styles' => '/ext.fundraisingChart.bootstrap.min.css',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.d3'] = array(
    'scripts' => '/ext.fundraisingChart/d3/d3.v3.min.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.topojson'] = array(
    'scripts' => '/ext.fundraisingChart.topojson/topojson.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.datamaps'] = array(
    'scripts' => '/ext.fundraisingChart.datamaps/datamaps.world.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.chartsjs'] = array(
    'scripts' => '/ext.fundraisingChart/chartsJS/Chart.min.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);
