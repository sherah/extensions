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

/**
 * Class FundraisingChart
 *
 *
 * Usage for the tag <fundraisingChart />:
 *
 * charttype: pie-chart, line-chart, or bar-chart
 * dataset: a URL that provides the JSON in the correct format for the chart.
 * the formats:
 * pie-chart:  json with count, uses the "count" field to generate the pie slices. so use counts.
 * make sure each count is sorted by month.
 * bar-chart:  json with 'date' x-axis and 'count' y-axis.
 * line-chart: json with date x-axis and total y-axis.
 * map-chart:  json map data in the datamaps format, usually with fillColor and associated data.
 * title: the title that will display at the top of this chart.
 * 
 */
class FundraisingChart {
    static function onParserInit( Parser $parser ) {
        $parser->setHook( 'fundraisingChart', array(__CLASS__, 'frChartRender') );
    }

    /**
     * Fetch the data to be displayed in the charts.
     *
     * todo: make safer by mapping URIs to URLs
     * @param $dataset
     * @return string
     */
    static function frChartDataSetFetch( $dataset ){
        $raw_json = file_get_contents($dataset);
        $d = json_decode($raw_json);

        return json_encode($d);
    }

    /**
     * Display charts
     *
     * @param $input
     * @param array $args
     * @param Parser $parser
     * @param PPFrame $frame
     * @return string
     */
    static function frChartRender( $input, array $args, Parser $parser, PPFrame $frame ) {
        $parser -> getOutput()->addModules('ext.fundraisingChart');

        if($args['dataset']){
            $dataset = FundraisingChart::frChartDataSetFetch( $args['dataset'] );
        }else{
            $dataset = "nothing";
        };

        $chartStyle = substr($args['charttype'], 0, -6);
        if($chartStyle !== 'map') {
            //create a unique id for the chart div in case multiple pie charts appear on the same page.
            $title = str_replace(' ', '', $args['title']);

            //associated chart data goes into its own attribute for javascript to listen to.
            $ret = '<div id="' . $chartStyle . 'ChartArea' . $title . '" class="' . $chartStyle . 'Area" data-chartdata=' . $dataset . '>';

            $ret .= '<table class="' . $chartStyle . 'ChartTable">';

            //set title.
            $ret .= '<tr><td colspan="2"><h1>' . $args['title'] . '</h1></td></tr>';

            $ret .= '<tr>';
            $ret .= '<td>';

            $ret .= '<canvas id="' . $chartStyle . 'Chart' . $title . '" class="' . $chartStyle . 'Canvas" height="400" width="650" margin-right="10"></canvas>';
            $ret .= '</td>';

            $ret .= '<td>';
            $ret .= '<div id="' . $chartStyle . 'Chart' . $title . 'Filter" class="' . $chartStyle . 'Filter"></div>';
            $ret .= '</td>';
            $ret .= '</tr>';

            $ret .= '</table>';
            $ret .= '</div>'; //close the chart type area.

        }
        else {

            $title = str_replace(' ', '', $args['title']);

            $ret = '<div id="mapChartArea' . $title . '" class="mapArea" data-chartdata=' . $dataset . '>';

            //set title.
            $ret .= '<h1>' . $args['title'] . '</h1></td></tr>';
            $ret .= '</div>';
        }

        return $ret;
    }
}


