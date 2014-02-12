<?php
class FundraisingChart {
	static function onParserInit( Parser $parser ) {
		$parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
	}
	static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.fundraisingChart');

        $ret  = '<h1>Fundraising Donation Brackets</h1>';
        $ret .= '<table>';

        $ret .= '<tr>';
        $ret .= '<td>';
		$ret .= '<canvas id="pieChart">canvas</canvas>';
        $ret .= '</td>';

        $ret .= '<td>';
		$ret .= '<div id="pieChartFilter"></div>';
        $ret .= '</td>';
        $ret .= '</tr>';

		$ret .= '</table>';
		return $ret;
	}
}