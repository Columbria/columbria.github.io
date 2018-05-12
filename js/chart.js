$(function () {

    Highcharts.chart('demo-chart-volume', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Water Area Volume delta'
        },
        xAxis: {
            categories: ['2016.06.22-2016.07.07', '2016.07.07-2018.06.22'],
            opposite: false,
            reversed: false
        },
        yAxis: {
            title: {
                text: 'Water Area Volume delta, Millions m\u00B3'
            }
        },
        series: [{
            showInLegend: false,
            name: 'Water Area',
            data: [-61.62, -151.58],
            dataLabels: {
                enabled: true,
                // rotation: -90,
                // y: 30, // 10 pixels down from the top
                style: {
                    fontSize: '15px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });


    Highcharts.chart('demo-chart-area', {
        title: {
            text: 'Water Area'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Water Area, m\u00B2'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            area: {
                dataLabels: {
                    enabled: true
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [
            {
                type: 'area',
                name: 'Elevation above see level',
                data: [
                    [1466553600000, 317.2],
                    [1500163200000, 315.5],
                    [1529712000000, 307.6]
                ]
            }
        ]
    });
    Highcharts.chart('demo-chart-elevation', {
        title: {
            text: 'Elevation above Sea'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Elevation above Sea, m'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            area: {
                dataLabels: {
                    enabled: true
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [
            {
                type: 'area',
                name: 'Water Area',
                data: [
                    [1466553600000, 34.943],
                    [1500163200000, 33.523],
                    [1529712000000, 29.634]
                ]
            }
        ]
    });
});
