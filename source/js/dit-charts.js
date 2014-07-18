// DIT Charts

// Colour variables
 var fineArt = "#ffe400";
 var visComm = "#00a6eb";
 var interior = "#e50083";
 var product = "#e60004";
 var merch = "#940084";
 var visualArt = "#60b01f";

// Music Cover
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["Indie","Instrumental","Jazz","Pop","Rock","R&B"],
		datasets : [
			{		//Fine Art
					fillColor : "#ffe400",
					strokeColor : "ffe400",
					highlightFill : "ffe400",
					highlightStroke : "ffe400",
					data : [83, 9, 18, 55, 82, 18, 9]
				},
			{		//VisComm
					fillColor : "#00a6eb",
					strokeColor : "00a6eb",
					highlightFill: "00a6eb",
					highlightStroke: "00a6eb",
					data : [64, 25, 16, 48, 80, 24, 16]				
				},
			{		//Interior
					fillColor : "#e50083",
					strokeColor : "e50083",
					highlightFill: "e50083",
					highlightStroke: "e50083",
					data : [70, 10, 20, 50, 70, 20, 20]
				},	
			{		//Product Design	
					fillColor : "#e60004",
					strokeColor : "e60004",
					highlightFill: "e60004",
					highlightStroke: "e60004",
					data : [74, 37, 7.4, 29, 88, 7, 15]
			},
			{		//Visual Mechandising
					fillColor : "#940084",
					strokeColor : "940084",
					highlightFill: "940084",
					highlightStroke: "940084",
					data : [33, 1, 1, 67, 33, 133, 1]
			},
			{		//Visual Art
					fillColor : "#60b01f",
					strokeColor : "60b01f",
					highlightFill: "60b01f",
					highlightStroke: "60b01f",
					data : [1, 1, 33, 33, 1, 1, 1]
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("ditMusicCover").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true,
				showScale: false,
				barShowStroke: false,
				tooltipXPadding: 30,
				tooltipYPadding: 30,
				tooltipFontSize: 18,
				tooltipFontStyle: 'bold',
				// Boolean - If we want to override with a hard coded scale
				scaleOverride: true,
				// ** Required if scaleOverride is true **
				// Number - The number of steps in a hard coded scale
				scaleSteps: 2,
				// Number - The value jump in the hard coded scale
				scaleStepWidth: 50,
				// Number - The scale starting value
				scaleStartValue: 0,
		});
	}