<?php
class FundraisingChart {
	static function onParserInit( Parser $parser ) {
		$parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
	}
    static function frChartDataSetFetch( $dataset ){
        $raw_json = file_get_contents($dataset);
        $d = json_decode($raw_json);

        return json_encode($d);
    }
	static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.fundraisingChart');

        //according to the specified chart type, validate and present specified dataSet.
        $dataset = FundraisingChart::frChartDataSetFetch( $args['dataset'] );


        if($args['charttype'] === 'pie-chart'){

            //create a unique id for the chart div in case multiple pie charts appear on the same page.
            $title = str_replace(' ', '', $args['title']);

            //associated chart data goes into its own attribute for javascript to listen to.
            $ret = '<div id="pieChartArea' . $title . '" class="pieArea" data-chartdata=' . $dataset . '>';

            $ret .= '<table class="pieChartTable">';

            //set title.
            $ret .= '<tr><td colspan="2"><h1>' . $args['title'] . '</h1></td></tr>';

            $ret .= '<tr>';
            $ret .= '<td>';

            $ret .= '<canvas id="pieChart' . $title . '" class="pieCanvas" height="350" width="350" margin-right="10"></canvas>';
            $ret .= '</td>';

            $ret .= '<td>';
            $ret .= '<div id="pieChart' . $title . 'Filter" class="pieFilter"></div>';
            $ret .= '</td>';
            $ret .= '</tr>';

            $ret .= '</table>';
            $ret .= '</div>'; //close the chart type area.

        }
        if($args['charttype'] === 'bar-chart'){
            $ret = '<div id="barChartArea" data-chartdata=' . $dataset . '>';
            $ret .= '<table class="barChartTable">';

            $ret .= '<tr><td colspan="2"><h1>' . $args['title'] . '</h1></td></tr>';

            $ret .= '<tr>';
            $ret .= '<td>';

            //todo: fix chart id clashing possibility by passing in indexes or something
            $ret .= '<canvas id="barChart" height="350" width="650" margin-right="10"></canvas>';
            $ret .= '</td>';

            $ret .= '<td>';
            $ret .= '<div id="barChartFilter"></div>';
            $ret .= '</td>';
            $ret .= '</tr>';

            $ret .= '</table>';
            $ret .= '</div>'; //close the chart type area.
        }

		return $ret;
	}
}

//Usage for the tag <fundraisingChart />:

//charttype: pie-chart, line-chart, or bar-chart
//dataset:   a URL or URI that provides the JSON in the correct format for the chart.
    //todo: (provide documentation regarding correct formats for each.)
//title:     the title that will display at the top of this chart.