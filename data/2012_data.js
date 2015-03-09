//releases
		var barChartData = {
			labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
			datasets : [
				{
					fillColor : "rgba(51,51,51,0.85)",
					strokeColor : "rgba(51,51,51,0.95)",
					scaleLineWidth : 1,
					data : [148, 134, 118, 95, 84, 102, 76, 110, 122, 188, 143, 114]
				},
			]

		}
		//releases by console
			var barChartData2 = {
				labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
				datasets : [
					//x360
					{
						fillColor : "rgba(216,221,140,0.95)",
						strokeColor : "rgba(216,221,140,1)",
						scaleLineWidth : 1,
						data : [9, 12, 24, 8, 11, 15, 6, 7, 19, 31, 20, 1]
					},
					//ps3
					{
						fillColor : "rgba(167,217,216,0.95)",
						strokeColor : "rgba(167,217,216,1)",
						scaleLineWidth : 1,
						data : [7, 14, 28, 7, 13, 16, 7, 14, 13, 26, 24, 4]
					},
					//wii
					{
						fillColor : "rgba(242,109,84,0.95)",
						strokeColor : "rgba(242,109,84,1)",
						scaleLineWidth : 1,
						data : [1, 3, 3, 2, 2, 7, 3, 2, 8, 12, 9, 1]
					},
				]



			}
		//Hardware sales
			var barChartData3 = {
				labels : ["PS3","X360","Wii","Wii-U","DS","3DS","PSP","Vita"],
				datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					scaleLineWidth : 1,
					data : [12.73, 11.09, 5.24, 2.24, 3.01, 14.41, 4.28, 3.67]
				},
				]

			}

		//Hardware sales USA
				var barChartDataUSA = {
				labels : ["PS3","X360","Wii","Wii-U","DS","3DS","PSP","Vita"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						scaleLineWidth : 1,
						data : [3.48, 6.32, 2.04, 0.93, 1.90, 3.69, .27, 1.17]
					},
				]

			}


		//Hardware sales JAPAN
				var barChartDataJAP = {
				labels : ["PS3","X360","Wii","Wii-U","DS","3DS","PSP","Vita"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						scaleLineWidth : 1,
						data : [1.23, .07, .47, .63, .06, 5.49, .88, .67, ]
					},
				]

			}


		//Hardware sales EUROPE
				var barChartDataEU = {
				labels : ["PS3","X360","Wii","Wii-U","DS","3DS","PSP","Vita"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						scaleLineWidth : 1,
						data : [5.42, 3.31, 2.04, .45, .66, 3.99, 1.72, 1.44]
					},
				]

			}

		//hardware sales 2
			var lineChartData = {
					labels : ["2005", "2006","2007","2008","2009","2010","2011","2012"],
					datasets : [
						//wii
						{
							fillColor : "rgba(242,109,84,0.8)",
							strokeColor : "rgba(242,109,84,1)",
							pointColor : "rgba(242,109,84,1)",
							pointStrokeColor : "rgba(220,220,220,0)",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(242,109,84,0.8)",
							data : [0, 2.95, 16.55, 24.18, 21.29, 17.32, 11.52, 5.24]
						},
						//ps3
						{
							fillColor : "rgba(176,228,227,0.8)",
							strokeColor : "rgba(176,228,227,1)",
							pointColor : "rgba(176,228,227,1)",
							pointStrokeColor : "rgba(220,220,220,0)",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(176,228,227,0.8)",
							data : [0, 1.25, 7.9, 10.2, 12.99, 13.89, 14.7, 12.7]
						},
						//360
						{
							fillColor : "rgba(216,221,140,0.8)",
							strokeColor : "rgba(216,221,140,1)",
							pointColor : "rgba(216,221,140,1)",
							pointStrokeColor : "rgba(220,220,220,0)",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(216,221,140,0.8)",
							data : [1.17, 6.8, 7.88, 10.91, 10.16, 13.25, 13.8, 11.9]
						}
					]

				}
		//Themes
		var radarChartData = {
				labels : ["Fantasy","Sci-Fi","Horror","Motorsports","Military","Comedy","Anime"],
				datasets : [
					//PC
					{
						fillColor : "rgba(207,122,159,0.25)",
						strokeColor : "rgba(207,122,159,1)",
						pointColor : "rgba(207,122,159,0.95)",
						pointStrokeColor : "#fff",
						data : [27, 28.7, 11.9, 2.8, 11.9, 12.6, 5.1]
					},
					//360
					{
						fillColor : "rgba(216,221,140,0.25)",
						strokeColor : "rgba(216,221,140,1)",
						pointColor : "rgba(216,221,140,0.95)",
						pointStrokeColor : "#fff",
						data : [22, 24.4, 11.4, 7.3, 17.1, 9.8, 8.1]
					},
					//PS3
					{
						fillColor : "rgba(176,228,227,0.25)",
						strokeColor : "rgba(176,228,227,1)",
						pointColor : "rgba(176,228,227,0.95)",
						pointStrokeColor : "#fff",
						data : [24.8, 21.7, 8.9, 5.1, 12.1, 12.1, 15.3]
					},
				]

			}

	//Genres
	var radarChartData2 = {
				labels : ["RPG","Fighting","Action","Sports","Driving","Shooter","Simulation"],
				datasets : [
					//PC
					{
						fillColor : "rgba(207,122,159,0.25)",
						strokeColor : "rgba(207,122,159,1)",
						pointColor : "rgba(207,122,159,0.95)",
						pointStrokeColor : "#fff",
						data : [19.9, 2.2, 32.9, 5.2, 6.9, 15.5, 17.4 ]
					},
					//360
					{
						fillColor : "rgba(216,221,140,0.25)",
						strokeColor : "rgba(216,221,140,1)",
						pointColor : "rgba(216,221,140,0.95)",
						pointStrokeColor : "#fff",
						data : [9.7, 11.3, 27.4, 16.9, 9.7, 15.3, 9.7]
					},
					//PS3
					{
						fillColor : "rgba(176,228,227,0.25)",
						strokeColor : "rgba(176,228,227,1)",
						pointColor : "rgba(176,228,227,0.95)",
						pointStrokeColor : "#fff",
						data : [14.2, 11.3, 28.4, 15.6, 7.8, 13.4, 9.2]
					},
				]

			}

	//xbox region sales
	var doughnutDataX360 = [
					//usa
					{
						value: 6321284,
						color:"#f26d54"
					},
					//Eu
					{
						value : 3316485,
						color:"#f29754"
					},
					//jap
					{
						value : 71927,
						color:"#fbda77"
					}

				];
	//ps3
	var doughnutDataPS3 = [
					//usa
					{
						value: 3480788,
						color:"#f26d54"
					},
					//Eu
					{
						value : 5426216,
						color:"#f29754"
					},
					//jap
					{
						value : 1233261,
						color:"#fbda77"
					}

				];
	//wii
	var doughnutDataWii = [
					//usa
					{
						value: 2042064,
						color:"#f26d54"
					},
					//Eu
					{
						value : 2040907,
						color:"#f29754"
					},
					//jap
					{
						value : 470125,
						color:"#fbda77"
					}

				];
	//wii-u
	var doughnutDataWiiU = [
					//usa
					{
						value: 933131,
						color:"#f26d54"
					},
					//Eu
					{
						value : 453301,
						color:"#f29754"
					},
					//jap
					{
						value : 633377,
						color:"#fbda77"
					}

				];
	//PSP
	var doughnutDataPSP = [
					//usa
					{
						value: 274023,
						color:"#f26d54"
					},
					//Eu
					{
						value : 1726814,
						color:"#f29754"
					},
					//jap
					{
						value : 880718,
						color:"#fbda77"
					}

				];
	//Vita
	var doughnutDataVita = [
					//usa
					{
						value: 1177049,
						color:"#f26d54"
					},
					//Eu
					{
						value : 1448651,
						color:"#f29754"
					},
					//jap
					{
						value : 670772,
						color:"#fbda77"
					}

				];
	//DS
	var doughnutDataDS = [
					//usa
					{
						value: 1904269,
						color:"#f26d54"
					},
					//Eu
					{
						value : 667157,
						color:"#f29754"
					},
					//jap
					{
						value : 66160,
						color:"#fbda77"
					}

				];
	//3ds
	var doughnutData3DS = [
					//usa
					{
						value: 3699639,
						color:"#f26d54"
					},
					//Eu
					{
						value : 3993952,
						color : "#f29754"
					},
					//jap
					{
						value : 5494390,
						color:"#fbda77"
					}

				];
	var bar1 = new Chart(document.getElementById("releases-overall").getContext("2d")).Bar(barChartData, {
	    scaleOverride : true,
	    scaleSteps : 20,
	    scaleStepWidth :10,
	    scaleStartValue : 0,
	});

	var bar2 = new Chart(document.getElementById("release-by-console").getContext("2d")).Bar(barChartData2, {

		scaleOverride : true,
		scaleSteps : 18,
		scaleStepWidth :2,
		scaleStartValue : 0,
	});


	var Line1 = new Chart(document.getElementById("hardware-sales-multiple").getContext("2d")).Line(lineChartData);

	var bar3 = new Chart(document.getElementById("hardware-sales").getContext("2d")).Bar(barChartData3, {
		scaleOverride : true,
		scaleSteps : 25,
		scaleStepWidth :.625,
		scaleStartValue : 0,
	});

	var bar4 = new Chart(document.getElementById("hardware-sales-usa").getContext("2d")).Bar(barChartDataUSA, {
		scaleOverride : true,
		scaleSteps : 28,
		scaleStepWidth :.25,
		scaleStartValue : 0,
	});
	var bar5 = new Chart(document.getElementById("hardware-sales-jap").getContext("2d")).Bar(barChartDataJAP, {
		scaleOverride : true,
		scaleSteps : 28,
		scaleStepWidth :.25,
		scaleStartValue : 0,
	});
	var bar6 = new Chart(document.getElementById("hardware-sales-eu").getContext("2d")).Bar(barChartDataEU, {
		scaleOverride : true,
		scaleSteps : 28,
		scaleStepWidth :.25,
		scaleStartValue : 0,
	});


	var myRadar1 = new Chart(document.getElementById("theme-trends").getContext("2d")).Radar(radarChartData,{
		scaleShowLabels : false,
		pointLabelFontSize : 10,
	});
	var myRadar2 = new Chart(document.getElementById("genre-trends").getContext("2d")).Radar(radarChartData2,{
		scaleShowLabels : false,
		pointLabelFontSize : 10,
	});
	var myDoughnut1 = new Chart(document.getElementById("region-sales-xbox").getContext("2d")).Doughnut(doughnutDataX360, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut2 = new Chart(document.getElementById("region-sales-ps3").getContext("2d")).Doughnut(doughnutDataPS3, {
		segmentStrokeColor : "#f5f5f5",
	});

	var myDoughnut3 = new Chart(document.getElementById("region-sales-wii").getContext("2d")).Doughnut(doughnutDataWii, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut4 = new Chart(document.getElementById("region-sales-wii-u").getContext("2d")).Doughnut(doughnutDataWiiU, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut5 = new Chart(document.getElementById("region-sales-psp").getContext("2d")).Doughnut(doughnutDataPSP, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut6 = new Chart(document.getElementById("region-sales-vita").getContext("2d")).Doughnut(doughnutDataVita, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut7 = new Chart(document.getElementById("region-sales-ds").getContext("2d")).Doughnut(doughnutDataDS, {
		segmentStrokeColor : "#f5f5f5",
	});
	var myDoughnut8 = new Chart(document.getElementById("region-sales-3ds").getContext("2d")).Doughnut(doughnutData3DS, {
		segmentStrokeColor : "#f5f5f5",
	});
