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

    geographyConfig: {

        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderColor: '#FDFDFD',
        popupOnHover: true,
        popupTemplate: function(geography, data) {

            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong>'
                + '<p>' + data.stories[Math.floor(Math.random() * data.stories.length)] + '</p></div>';
        },
        highlightOnHover: true,
        highlightFillColor: '#F17CB0',
        highlightBorderColor: 'rgba(255,255,255,0.4)',
        highlightBorderWidth: 1

    },

    //this is where the stories go or link to.
    data: {
        USA: {
            fillKey: 'blue',
            numberOfThings: 10381,
            stories: [
                'This is a story!',
                'This is another story.'
            ]
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
            numberOfThings: 1,
            stories: [
                'I remember the first article I edited seriously on Wikipedia was about marzipan; it’s my favorite treat. ' +
                    'From there, I started to write about my interests — vegetarianism, food, parenting, even Harry Potter. ' +
                    'I like things that are natural, things that are organic. Next on my list of things to write about: baby ' +
                    'formula. That’s the thing about Wikipedia: you can write about the interests you have and you can invite ' +
                    'others to help. And then you watch what you write grow. A few years ago, when I was pregnant for the first ' +
                    'time, I found myself at home, bored with nothing to do, so I found a hobby for myself — making soap. When ' +
                    'you make soap eventually you end up making so much that you can’t find enough friends to give it to as a ' +
                    'gift. So I started selling it. Now that I have a business, I use Wikipedia as a research tool (it has so ' +
                    'many useful links) and I share things that I learn from my business on Wikipedia, so that everyone can learn.' +
                    'Even though these days I only find time to edit Wikipedia once in awhile, when I tell people that I have ' +
                    'written articles for Wikipedia, people respect it. I grew up in a family of teachers who value academic ' +
                    'knowledge, so when I write in Wikipedia, I have the sense that I contribute to a thing that is greater ' +
                    'than myself. I love the idea that I can quietly make it better. — Aliona Bogdanova Aliona Bogdanova ' +
                    'operates a small online shop selling cosmetics and soap that is made from scratch. She currently lives ' +
                    'in Moscow (where she was born) with her husband and two sons. Image Attribution: Aliona Bogdanova by ' +
                    'Victor Grigas, under CC-BY-SA 3.0 Unported, from Wikimedia Commons.'
            ]
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
        }

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

