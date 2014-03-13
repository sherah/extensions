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
	'styles'  => array('resources/css/style.css', 'modules/ext.fundraisingChart.bootstrap/bootstrap.min.css'),
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'FundraisingChart',
    'dependencies' => array('moment', 'ext.fundraisingChart.bootstrap', 'ext.fundraisingChart.chartFormatHelpers', 
        'ext.fundraisingChart.fundraising_charts', 'ext.fundraisingChart.chartsjs',
        'ext.fundraisingChart.d3', 'ext.fundraisingChart.topojson', 'ext.fundraisingChart.datamaps')
);

$wgResourceModules['ext.fundraisingChart.chartFormatHelpers'] = array(
    'scripts' => 'resources/js/chartFormatHelpers.js',
    'localBasePath' => '__DIR__/resources',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.fundraising_charts'] = array(
    'scripts' => 'resources/js/fundraising_charts.js',
    'localBasePath' => '__DIR__/resources',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.bootstrap'] = array(
    'styles' => 'modules/ext.fundraisingChart.bootstrap/bootstrap.min.css',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.d3'] = array(
    'scripts' => 'modules/ext.fundraisingChart.d3/d3.v3.min.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.topojson'] = array(
    'scripts' => 'modules/ext.fundraisingChart.topojson/topojson.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.datamaps'] = array(
    'scripts' => 'modules/ext.fundraisingChart.datamaps/datamaps.world.js',
    'dependencies' => array('ext.fundraisingChart.topojson', 'ext.fundraisingChart.d3'),
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);

$wgResourceModules['ext.fundraisingChart.chartsjs'] = array(
    'scripts' => 'modules/ext.fundraisingChart.chartsJS/Chart.min.js',
    'localBasePath' => '__DIR__/modules',
    'remoteExtPath' => 'FundraisingChart'
);
