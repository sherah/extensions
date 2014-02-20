/**
 * Created by sherahsmith on 2/20/14.
 */
var map = new Datamap({

    element: document.getElementById('loveMapArea'),

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

    //this is where the stories go or link to.
    data: {
        USA: {
            fillKey: 'blue',
            numberOfThings: 10381
        },
        // Argentina
        ARG: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Armenia
        ARM: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Australia
        AUS: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        //Bangladesh
        BGD: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Belgium
        BEL: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Bolivia
        BOL: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // Botswana
        BWA: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Brazil
        BRA: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Canada
        CAN: {
            fillKey: 'pink',
            numberOfThings: 1
        },
        // Cape Verde
        CPV: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Chile
        CHL: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // China / Hong Kong
        CHN: {
            fillKey: 'pink',
            numberOfThings: 1
        },
        // Colombia
        COL: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        // Croatia
        HRV: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // Czech Republic
        CZE: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Denmark
        DNK: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Egypt
        EGY: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Estonia
        EST: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // France
        FRA: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Germany
        DEU: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Ghana
        GHA: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Greece
        GRC: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Hungary
        HUN: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // India
        IND: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Iraq
        IRQ: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Israel
        ISR: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Italy
        ITA: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Japan
        JPN: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Kazakhstan
        KAZ: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        // Kenya
        KEN: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // Kyrgyz Republic
        KGZ: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Macedonia
        MKD: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Malaysia
        MYS: {
            fillKey: 'pink',
            numberOfThings: 1
        },
        // Mexico
        MEX: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Namibia
        NAM: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Nepal
        NPL: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Netherlands
        NLD: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Nigeria
        NGA: {
            fillKey: 'pink',
            numberOfThings: 1
        },
        // Pakistan
        PAK: {
            fillKey: 'purple',
            numberOfThings: 1
        },
        // Philippines
        PHL: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Poland
        POL: {
            fillKey: 'pink',
            numberOfThings: 1
        },
        // Portugal
        PRT: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Qatar
        QAT: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Russia
        RUS: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // Singapore
        SGP: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Slovenia
        SVN: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // South Africa
        ZAF: {
            fillKey: 'yellow',
            numberOfThings: 1
        },
        // South Korea
        PRK: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Spain
        ESP: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        // Sri Lanka
        LKA: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Sweden
        SWE: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        // Thailand
        THA: {
            fillKey: 'orange',
            numberOfThings: 1
        },
        // Tunisia
        TUN: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // Turkey
        TUR: {
            fillKey: 'red',
            numberOfThings: 1
        },
        // United Kingdom
        GBR: {
            fillKey: 'green',
            numberOfThings: 1
        },
        // Uruguay
        URY: {
            fillKey: 'blue',
            numberOfThings: 1
        },
        // Uzbekistan
        UZB: {
            fillKey: 'green',
            numberOfThings: 1
        },

    },

    geographyConfig: {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderColor: '#FDFDFD',
        popupTemplate: function(geography, data) { //this function should just return a string
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: true, //disable the popup while hovering
        highlightOnHover: true,
        highlightFillColor: '#F17CB0',
        highlightBorderColor: 'rgba(255,255,255,0.4)',
        highlightBorderWidth: 1
    }

});

//todo: fix this so map colors change animatedly.
//window.setInterval(function() {
//    var colors = d3.scale.category10();
//    map.updateChoropleth({
//        USA: colors(Math.random() * 10),
//        RUS: colors(Math.random() * 100),
//        AUS: colors(Math.random() * 150),
//        BRA: colors(Math.random() * 50),
//        CAN: colors(Math.random() * 50),
//        CHN: colors(Math.random() * 50),
//        IND: colors(Math.random() * 50)
//    });
//
//}, 2000);

