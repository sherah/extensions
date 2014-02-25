<?php
/**
 * Created by PhpStorm.
 * User: sherahsmith
 * Date: 2/20/14
 * Time: 11:04 AM
 */

class LoveMap {
    static function onParserInit( Parser $parser ) {
        $parser->setHook( 'loveMap', array(__CLASS__, 'mapRender') );
    }
    static function mapRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.loveMap');

        $ret  = '<h1>Fundraising Love Map</h1>';
        $ret .= '<div id="loveMapArea"></div>';

        return $ret;
    }
}