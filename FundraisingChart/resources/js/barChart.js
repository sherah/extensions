/**
 * Created by sherahsmith on 2/18/14.
 * Uses the jQuery flot chart library to create bar charts based on
 * user-defined JSON data in
 */

    var checkdataSetFormat;

    if($('barArea').length){

        var ids = _.map($('.barArea'), function(num){
            return num.id;
        }),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        ids.forEach(function(id){

            var dataSet = $.parseJSON($('#' + id).attr('data-chartdata')),

            //check the dataSet's format and proceed accordingly
            format = checkdataSetFormat(dataSet);

            //known chart types will have their data checked.
            //otherwise, the user must include data formatted a certain JSONy way.
            //first iteration: mediums and methods charts (since I already built them).
            if( format === 'mediumChart' || format === 'methodChart'){
                _.each(dataSet, function(row){
                    if(!dataSet[row.date]){
                        dataSet[row.date] = [ row ];
                    }else{
                        dataSet[row.date].push(row);
                    }
                });

                //get data into the proper format
                var monthDataArraysObj = {};
                for(holder in dataSet){
                    var dayObj = dataSet[holder];
                    for (key in dayObj){
                        var d = dayObj[key]['date'];
                        var c = dayObj[key]['count'];

                        if(!dayObj[key]['utm_medium']){
                            var m = "Other";
                        } else {
                            var m = dayObj[key]['utm_medium'];
                        }

                        var mm = parseInt( moment(d).format('M') ) - 1;
                        if(monthDataArraysObj['month' + mm]){
                            if(monthDataArraysObj['month' + mm][m]){
                                monthDataArraysObj['month' + mm][m].push([d.format('D'), c]);
                            } else {
                                monthDataArraysObj['month' + mm][m] = {};
                                monthDataArraysObj['month' + mm][m] = [ [d.format('D'), c] ];
                            }

                        } else {
                            monthDataArraysObj['month' + mm] = {};
                            monthDataArraysObj['month' + mm][m] = {};
                            monthDataArraysObj['month' + mm][m] = [ [d.format('D'), c] ];
                        }

                    }
                }

            var megaArray = _.map(monthDataArraysObj, function(d){
                keyObjs = [];
                for( key in d ){
                    keyObjs.push({ label: key, data: d[key] });
                }
                return keyObjs;
            });

            } else {
                //todo: generic chart
            }
        });
    }

    checkdataSetFormat = function(set){
        //just testing.
        return 'mediumChart';
    };

