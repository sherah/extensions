var setupMapCharts = function(){

    if($('.mapArea').length){
        var ids = _.map($('.mapArea'), function(num){
            return num.id;
        });

        ids.forEach(function(el_id){
            console.log($(el_id).attr('data-chartdata'));
            var map = new Datamap({

                element: document.getElementById(el_id),

                data: $(el_id).attr('data-chartdata'),

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

                    dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
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
