$(document).ready(function(){

      if($('#pieChartArea').length){
          var dataSet = $.parseJSON($('#pieChartArea').attr('data-chartdata'));

          console.log(dataSet);
          function drawPieChart( data ) {

            var colors = setupColors(),
            colorArray = _.map( colors, function( n ){
              return n;
            }),
            context = $( '#pieChart' ).get( 0 ).getContext( '2d' ),
            dataSet = [];

            data.forEach( function( row, i ){
              var n = i + 1;
              dataSet.push( { value: row.count, color: colorArray[colorArray.length - n] } );
              $( '#pieChartFilter' ).append(
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

});

