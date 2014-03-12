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

    if ($('.pieArea').length) {

        //if there are any pieArea classed areas,
        //iterate through each one to get their dataSets.
        //then draw each one.
        if($('.pieArea').length){

            var ids = $.map(  $('.pieArea'), function( num ){
                return num.id;
            });

            ids.forEach( function( id ){
                console.log($.parseJSON($('#' + id).attr('data-chartdata')));
                dataSet = $.parseJSON($('#' + id).attr('data-chartdata'));

                /**
                 * Pass JSON data to be drawn into a pie chart div.
                 *
                 * @param data
                 */
                function drawPieChart( data ) {

                    var colorArray = circleThroughColors(data.length),
                        context = $( '#' + id.replace( 'Area','') ).get( 0 ).getContext( '2d' ),
                        dataSet = [];

                    data.forEach( function( row, i ){
                        var n = i + 1;
                        dataSet.push( { value: row.count, color: colorArray[colorArray.length - n] } );
                        $( '#' + id.replace('Area','') + 'Filter' ).append(
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

            });

        }

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

                var dataSet = $.parseJSON($('#' + el_id).attr('data-chartdata')),
                //check the dataSet's format and proceed accordingly
                    formattedData = formatData(dataSet),
                    context = $( '#' + el_id.replace('Area','') ).get( 0 ).getContext( '2d' );

                new Chart(context).Bar(formattedData);

            });
        }
        if($('.lineArea').length){

            var ids = $.map($('.lineArea'), function(num){
                return num.id;
            });

            ids.forEach(function(el_id){

                var dataSet = $.parseJSON($('#' + el_id).attr('data-chartdata')),
                //check the dataSet's format and proceed accordingly
                    formattedData = formatData(dataSet),
                    context = $( '#' + el_id.replace("Area","") ).get( 0 ).getContext( '2d' );

                new Chart(context).Line(formattedData);

            });
        }
    }
    if ($('.mapArea').length) {

        if($('.mapArea').length){

            var ids = $.map($('.mapArea'), function(num){
                return num.id;
            });

            ids.forEach(function(el_id){

//                var data,
//                    jsonData,
//                    jsonDataSource = $('#' + el_id).attr('data-chartdata');
//                //ajax request to get the json data from frdata
//                $.ajax({
//                    dataType: "json",
//                    url: jsonDataSource,
//                    success: function( returnedData ){
//                        console.log( "got the data: ", returnedData );
//                        data = returnedData;
//                    }
//                }).done(function(){
//                    console.log("done function works.");
////                    jsonData = data;
////                    console.log("json data is: ", jsonData);
//                });
//
//                //get the fetched data into the correct array format.
//                var mapDataArrays = [['Country', 'Sum']], countryObj = {};
//                data.forEach(function(el,i){
//                    if(el.country) {
//                        var miniArray = [el.country, el.sum];
//                        mapDataArrays.push(miniArray);
//                        if(el.country in countryObj){
//                            countryObj[el.country] += el.sum;
//                        } else {
//                            countryObj[el.country] = el.sum;
//                        }
//                    }
//                });
//
//                var countryObjArray = [['Country', 'Sum']];
//                for (var key in countryObj){
//                    var sum = countryObj[key], val = sum.formatMoney(2, '.', ',');
//                    var arr = [key, countryObj[key]];
//                    countryObjArray.push(arr);
//                }

                new Datamap({

                    element: document.getElementById(el_id),

                    data: jsonData,

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

                        dataUrl: null, //if not null, ext.fundraisingChart.datamaps will fetch the map JSON (currently only supports ext.fundraisingChart.topojson)
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

            });
        }

    }

} ( mediaWiki, jQuery ));

