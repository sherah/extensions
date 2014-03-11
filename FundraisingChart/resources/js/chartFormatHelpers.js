/**
 * Cycle through available colors to generate a colors array of any specified length.
 * For general use in chart widgets.
 *
 * @param numberOfColors
 * @returns {Array}
 */
function circleThroughColors(numberOfColors) {

    var colors = [
        '#5DA5DA',
        '#FAA43A',
        '#60BD68',
        '#F17CB0',
        '#B2912F',
        '#B276B2',
        '#DECF3F',
        '#F15854'
    ],
    customSizedColorArray = [];
    customSizedColorArray.push(colors[0]);

    for( var i=1; i <= numberOfColors; i++ ){

        var newColor, lastColor;

        if(i === colors.length){
            newColor = colors[0];
        } else {
            lastColor = customSizedColorArray[i-1];
            newColor = colors[colors.indexOf(lastColor) + 1];
        }

        customSizedColorArray.push(newColor);

    }

    return customSizedColorArray;
}