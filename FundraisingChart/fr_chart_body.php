<?php
class FundraisingChart {
	static function onParserInit( Parser $parser ) {
		$parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
	}
	static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
		$ret = '<h1>IT WORKS WOWZERS.</h1>';
		return $ret;
	}
}