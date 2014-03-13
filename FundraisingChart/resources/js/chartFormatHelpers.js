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

//let's make formatting easy, shall we
Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
   };

function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
};

function convertStringDatesToMoments(dataSet){

    dataSet.forEach(function(row,i){
        d = row.date;
        dateString = d.slice(0,10);
        newDate = moment(dateString);
        row['date'] = newDate;
    });

    return dataSet;

}

function getPreceding12Months(){
    //Returns the preceding 12 months, for dynamic data display on charts etc.
    //TODO: test this because I'm just slapping it in here for later (isn't used right now)
    var today = moment().format('YYYY-MM-DD'),
        one_year_ago = moment().subtract('months', 11),
        yesterday = moment(today).subtract('days', 31),
        one_yr_ago_month = (one_year_ago.month()),
        months = [];

    for(i = one_yr_ago_month; i<one_yr_ago_month+12; i++){
        var m = moment().add('months', i).month()
        months.push(moment().month(m).format('MMM'));
    }

    return months;
}