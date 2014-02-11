<?php
class FundraisingChart {
	static function onParserInit( Parser $parser ) {
		$parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
	}
	static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.fundraisingChart');

		$ret  = '<canvas id="pieChart">canvas</canvas>';
		$ret .= '<div id="pieChartFilter">filter</div>';
		return $ret;
	}
}