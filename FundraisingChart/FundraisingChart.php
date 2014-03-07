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
	'styles'  => array('resources/css/bootstrap.min.css', 'resources/css/style.css'),
	'scripts' => array('resources/js/underscore.min.js', 'resources/js/d3.v3.min.js',
        'resources/js/topojson.js', 'resources/js/datamaps.world.js', 'resources/js/moment.js', 'resources/js/Chart.min.js',
        'resources/js/chartFormatHelpers.js', 'resources/js/fundraising_charts.js'),
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'FundraisingChart',
    'dependencies' => 'moment'
);

//get rid of underscore in favor of jquery
//make new resourceModules functions and refer to them in the main one.
//$wgResourceModules[] = array(
//    'styles'
//);
