/**
 * Set up all the charts.
 *
 * These functions rely on the following visualization libraries:
 *
 * ~ D3
 * ~ TopoJSON
 * ~ Charts.js
 * ~ Datamaps
 *
 */

( function ( mw, $) {

    //if there are any pieArea classed areas,
    //iterate through each one to get their dataSets.
    //then draw each one.
    if($('.pieArea').length){

        var ids = $.map(  $('.pieArea'), function( num ){
            return num.id;
        });

        ids.forEach( function( el_id ){

            var dataSet,
                jsonDataSource = $('#' + el_id).attr('data-chartdata');

            var setData = function(){

                /**
                 * Pass JSON data to be drawn into a pie chart div.
                 *
                 * @param data
                 */
                function drawPieChart( data ) {

                    var colorArray = circleThroughColors(data.length),
                        context = $( '#' + el_id.replace( 'Area','') ).get( 0 ).getContext( '2d' ),
                        dataSet = [];

                    data.forEach( function( row, i ){
                        var n = i + 1;
                        dataSet.push( { value: row.count, color: colorArray[colorArray.length - n] } );
                        $( '#' + el_id.replace('Area','') + 'Filter' ).append(
                            $( '<div>' ).append(
                                    $( '<div>' )
                                        .addClass('legendicon')
                                        .css( 'background-color', colorArray[colorArray.length - n])
                                ).append(
                                    $( '<span>' ).text( '$' + row.bracket_max )
                                )
                        );

                    });

                    new Chart(context).Doughnut(dataSet);
                }

                drawPieChart(dataSet);
            }

            $.ajax({
                dataType: "json",
                url: jsonDataSource,
                success: function( returnedData ){
                    dataSet = returnedData;
                    setData();
                }
            });

        });

        

    }
    if ($('.barArea').length || $('.lineArea').length) {

        /**
         * Format the data set in the attribute for the bar or line charts.
         * Return this data in the format readable by respective charting libraries.
         *
         * @param set
         * @returns {{labels: string[], datasets: *[]}}
         */
        var formatData = function(set){

            var datapoints = $.map(set, function(row){
                    return row.count;
                }),
                bardata,
                dateAgg = {};

            //todo: get the labels dynamically
            set.forEach(function(row){
                var d = row.date.slice(0,10);
                if(!dateAgg[moment(d).format('M')]){
                    dateAgg[moment(d).format('M')] = parseInt(row.count);
                }else{
                    dateAgg[moment(d).format('M')] += parseInt(row.count);
                }
            });

            bardata = $.map(dateAgg, function(n){
                return n;
            });

            return {
                //replace these labels
                labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : bardata
                    }
                ]
            }

        };

        if($('.barArea').length){

            var ids = $.map($('.barArea'), function(num){
                return num.id;
            });

            ids.forEach(function(el_id){

                var dataSet,
                    jsonDataSource = $('#' + el_id).attr('data-chartdata');

                var setData = function(){
                    //check the dataSet's format and proceed accordingly
                    formattedData = formatData(dataSet),
                    context = $( '#' + el_id.replace('Area','') ).get( 0 ).getContext( '2d' );

                    new Chart(context).Bar(formattedData);
                }

                $.ajax({
                    dataType: "json",
                    url: jsonDataSource,
                    success: function( returnedData ){
                        dataSet = returnedData;
                        setData();
                    }
                });

            });
        }
        if($('.lineArea').length){

            var ids = $.map($('.lineArea'), function(num){
                return num.id;
            });

            ids.forEach(function(el_id){

                var dataSet,
                    jsonDataSource = $('#' + el_id).attr('data-chartdata');

                var setData = function(){
                    //check the dataSet's format and proceed accordingly
                    formattedData = formatData(dataSet),
                    context = $( '#' + el_id.replace('Area','') ).get( 0 ).getContext( '2d' );

                    new Chart(context).Line(formattedData);
                }

                $.ajax({
                        dataType: "json",
                        url: jsonDataSource,
                        success: function( returnedData ){
                            dataSet = returnedData;
                            setData();
                        }
                });

            });
        }
    }
    if ($('.mapArea').length) {

        var ids = $.map($('.mapArea'), function(num){
            return num.id;
        });

        ids.forEach(function(el_id){
            
            //var dataSet,
                var jsonDataSource = $('#' + el_id).attr('data-chartdata');
                
                setData = function( dataSet ){
                    
                    var map = new Datamap({

                        element: document.getElementById(el_id),

                        data: dataSet,

                        fills: {
                            gray   : '#4D4D4D',
                            blue   : '#5DA5DA',
                            orange : '#FAA43A',
                            green  : '#60BD68',
                            pink   : '#F17CB0',
                            brown  : '#B2912F',
                            purple : '#B276B2',
                            yellow : '#DECF3F',
                            red    : '#F15854'
                        },

                        geographyConfig: {

                            dataUrl: null,
                            hideAntarctica: true,
                            borderWidth: 1,
                            borderColor: '#FDFDFD',
                            popupOnHover: true,
                            popupTemplate: function(geography, data) {
                                return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
                            },
                            highlightOnHover: true,
                            highlightFillColor: '#F17CB0',
                            highlightBorderColor: 'rgba(255,255,255,0.4)',
                            highlightBorderWidth: 1

                        }

                    });
                };

            //ajax request to get the json data from frdata
            $.ajax({
                dataType: 'json',
                url: jsonDataSource,
                success: function( returnedData ){
                    console.log("ajax");
                    //dataSet = returnedData;
                    setData( returnedData );
                }
            });

        });

    }

} ( mediaWiki, jQuery ));

