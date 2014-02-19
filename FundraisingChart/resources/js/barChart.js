/**
 * Created by sherahsmith on 2/18/14.
 * Uses the jQuery flot chart library to create bar charts based on
 * user-defined JSON data in
 */

 var setupBarCharts = function(){
    
    var formatData = function(set){

        //pass in json that contains the chart data needing to be expressed:
        //follow this convention:
        //
        //data = [
        //   x-axis: [specify a column],
        //   y-axis: [specify a column],
        //   json: {all the json}
        // ]

        //test data
        var data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }

        return data;
    };

    if($('.barArea').length){

        var ids = _.map($('.barArea'), function(num){
                return num.id;
            });

        ids.forEach(function(el_id){

            var dataSet = $.parseJSON($('#' + el_id).attr('data-chartdata')),
                //check the dataSet's format and proceed accordingly
                formattedData = formatData(dataSet),
                context = $( '#' + el_id.replace("Area","") ).get( 0 ).getContext( '2d' );

                new Chart(context).Bar(formattedData);

        });
    }


}
