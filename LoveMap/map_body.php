<?php
/**
 * Wikimedia Foundation
 *
 * LICENSE
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */

class LoveMap {
    static function onParserInit( Parser $parser ) {
        $parser->setHook( 'loveMap', array(__CLASS__, 'mapRender') );
    }
    static function mapRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.loveMap');
        $pageTitle = "Wikimedia Stories";

        $ret  = Html::element('h1', array(''), $pageTitle);
        $ret .= Html::element('div', array('id' => 'loveMapArea'));

        return $ret;
    }
}