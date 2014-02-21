/**
 * Created by sherahsmith on 2/21/14.
 */
/**
 * Created by sherahsmith on 2/20/14.
 */
var map = new Datamap({

    element: document.getElementById('mapChartArea'),

    projection: 'mercator',

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
            //+ data.stories[Math.floor(Math.random() * data.stories.length)]
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        highlightOnHover: true,
        highlightFillColor: '#F17CB0',
        highlightBorderColor: 'rgba(255,255,255,0.4)',
        highlightBorderWidth: 1

    },

    //this is the format for the data.
    data: {
        USA: {
            fillKey: 'blue',
            numberOfThings: 10381,
            stories: [
                'This is a story!',
                'This is another story.'
            ]
        }
    }

});