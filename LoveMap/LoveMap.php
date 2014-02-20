<?php
/**
 * Created by PhpStorm.
 * User: sherahsmith
 * Date: 2/20/14
 * Time: 10:56 AM
 */

$wgExtensionCredits['parserhook'][] = array(
    'name' => 'Love Map',
    'author' => 'Sherah Smith',
    'version' => '1.0.0',
    'description' => 'An embeddable world map that highlights global stories of giving and love for the WMF.',
    'url' => 'https://www.mediawiki.org/wiki/Extension:LoveMap',
);

$wgAutoloadClasses['LoveMap'] = $IP . '/extensions/LoveMap/map_body.php';
$wgHooks['ParserFirstCallInit'][] = 'LoveMap::onParserInit';

$wgResourceModules['ext.loveMap'] = array(
    'styles'        => array('resources/css/style.css'),
    'scripts'       => array('resources/js/d3.v3.min.js', 'resources/js/topojson.js', 'resources/js/datamaps.world.js', 'resources/js/main.js'),
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'LoveMap'
);