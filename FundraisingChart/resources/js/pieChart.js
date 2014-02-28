//todo: mw.fundraisingChart namespace
//check to see if the function already exists (ask Roan for example?)
//todo: jsduck - documentation generator for js - use this format for comments etc
//todo: general code standards pass
//todo: ask Roan about how he feels about me using underscore generally
var setupPieCharts = function(){
    //if there are any pieArea classed areas,
    //iterate through each one to get their dataSets.
    //then draw each one.
    if($('.pieArea').length){

        var ids = _.map(  $('.pieArea'), function( num ){
            return num.id;
        });

        ids.forEach( function( id ){

            dataSet = $.parseJSON($('#' + id).attr('data-chartdata'));

            function drawPieChart( data ) {

                var colors = setupColors(),
                    colorArray = _.map( colors, function( n ){
                        return n;
                    }),
                    context = $( '#' + id.replace( 'Area','') ).get( 0 ).getContext( '2d' ),
                    dataSet = [];

                //todo: fix the fact that these colors run out. do a check on which array index - write function in helpers
                //was last used for color and then use the next one unless it's the last (first)
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



