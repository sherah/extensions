<?php
class FundraisingChart {
	static function onParserInit( Parser $parser ) {
		$parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
	}
    static function frChartDataSetFetch( $dataset ){
        //testing
        $raw_json = file_get_contents($dataset);
        $d = json_decode($raw_json);

        return json_encode($d);
    }
	static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.fundraisingChart');

        //according to the specified chart type, validate and present specified dataSet.
        $dataset = FundraisingChart::frChartDataSetFetch( $args['dataset'] );


        if($args['charttype'] === 'pie-chart'){
            $ret = '<div id="pieChartArea" data-chartdata=' . $dataset . '>';
            $ret .= '<table class="pieChartTable">';
            //set the title, which is the first argument given as a tag attribute
            $ret .= '<tr><td colspan="2"><h1>' . $args['title'] . '</h1></td></tr>';

            $ret .= '<tr>';
            $ret .= '<td>';

            //todo: fix chart id clashing possibility by passing in indexes or something
            $ret .= '<canvas id="pieChart" height="350" width="350" margin-right="10"></canvas>';
            $ret .= '</td>';

            $ret .= '<td>';
            $ret .= '<div id="pieChartFilter"></div>';
            $ret .= '</td>';
            $ret .= '</tr>';

            $ret .= '</table>';
            $ret .= '</div>'; //close the chart type area.
        }


		return $ret;
	}
}