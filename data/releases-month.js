$(function () {
    $('#releases-all').highcharts({
        title: {
            text: 'Releases by Month',
            x: -20 //center
        },
        subtitle: {
            text: '2006 - 2013',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Number of Releases'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2006',
            data: [55, 83, 105, 65, 70, 81, 58, 84, 116, 160, 170, 87]
        }, {
            name: '2007',
            data: [53, 89, 118, 87, 96, 114, 80, 109, 132, 187, 175, 105]
        }, {
            name: '2008',
            data: [90, 98, 118, 83, 83, 121, 113, 117, 157, 206, 259, 146]
        },{
            name: '2009',
            data: [87, 133, 178, 143, 161, 190, 121, 151, 191, 228, 209, 177]
        },{
            name: '2010',
            data: [109, 136, 177, 132, 143, 159, 129, 112, 146, 170, 190, 168]
        },{
            name: '2011',
            data: [99, 103, 141, 125, 96, 135, 115, 98, 139, 144, 174, 128]
        },{
            name: '2012',
            data: [93, 136, 127, 105, 97, 112, 87, 134, 132, 196, 160, 125]
        },{
            name: '2013',
            data: [131, 88, 110, 116, 105, 102, 96, 94, 107, 135, 143, 106]
        }]
    });

    // XBOX RELEASES
    $('#releases-xbox').highcharts({
        title: {
            text: 'Releases by Month',
            x: -20 //center
        },
        subtitle: {
            text: '2006 - 2013',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Number of Releases'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2006',
            data: [55, 83, 105, 65, 70, 81, 58, 84, 116, 160, 170, 87]
        }, {
            name: '2007',
            data: [53, 89, 118, 87, 96, 114, 80, 109, 132, 187, 175, 105]
        }, {
            name: '2008',
            data: [90, 98, 118, 83, 83, 121, 113, 117, 157, 206, 259, 146]
        },{
            name: '2009',
            data: [87, 133, 178, 143, 161, 190, 121, 151, 191, 228, 209, 177]
        },{
            name: '2010',
            data: [109, 136, 177, 132, 143, 159, 129, 112, 146, 170, 190, 168]
        },{
            name: '2011',
            data: [99, 103, 141, 125, 96, 135, 115, 98, 139, 144, 174, 128]
        },{
            name: '2012',
            data: [93, 136, 127, 105, 97, 112, 87, 134, 132, 196, 160, 125]
        },{
            name: '2013',
            data: [131, 88, 110, 116, 105, 102, 96, 94, 107, 135, 143, 106]
        }]
    });



});
