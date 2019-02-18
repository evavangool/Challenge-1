/*DIT IS VOOR MAIN 1--------------------------------*/

window.onload = function() {
	CanvasJS.addColorSet("pieKleuren",
	        [//colorSet Array

	        "#DE625E", //beetje roze
	        "#3E484B", //grijs achtig
	        "#67B6AA", //zee blauw
	        "#E7C733", //geel
					"#A2D3EA", //licht blauw
	    ]);

var eetPercentage = [87.5,75,75,75,87.5]

var pie = new CanvasJS.Chart("pieEten", {
		backgroundColor: "#E0E0E0",
		colorSet: "pieKleuren",
		animationEnabled: true,
		data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 100 - eetPercentage[0], label: "Tussendoortjes"},
			{y: 100 - eetPercentage[1], label: "Ontbijt"},
			{y: 100 - eetPercentage[2], label: "Middageten"},
			{y: 100 - eetPercentage[3], label: "Avondeten"},
			{y: 100 - eetPercentage[4], label: "Toetjes"}
		]
	}]
});
pie.render();

/*DIT IS VOOR MAIN 2--------------------------------*/

var drinkPercentage = [72, 63, 50, 91]

CanvasJS.addColorSet("pieKleuren2",
				[//colorSet Array

				"#A2D3EA", //licht blauw
				"#3E484B", //grijs achtig
				"#DE625E", //beetje roze
				"#E7C733", //geel
		]);

var pieTwee = new CanvasJS.Chart("pieDrinken", {
		backgroundColor: "#E0E0E0",
		colorSet: "pieKleuren2",
		animationEnabled: true,
		data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 100 - drinkPercentage[0], label: "Alcoholische dranken"},
			{y: 100 - drinkPercentage[1] , label: "Warme dranken"},
			{y: 100 - drinkPercentage[2], label: "Koude dranken"},
			{y: 100 - drinkPercentage[3], label: "Sapjes"},
		]
	}]
});
pieTwee.render();

/*DIT IS VOOR MAIN 3--------------------------------*/

var brandstofPercentage = 25;

CanvasJS.addColorSet("donutShades",
				[//colorSet Array

				"#3E484B", //grijs achtig
				"#DE625E", //beetje roze
		]);

var donut = new CanvasJS.Chart("donutBrandstof", {
		backgroundColor: "#E0E0E0",
		colorSet: "donutShades",
		animationEnabled: true,
		data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 12,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 100 - brandstofPercentage, label: "Gebruikt" },
			{ y: brandstofPercentage, label: "Niet gebruikt" },
		]
	}]
});
donut.render();


/*DIT IS VOOR MAIN 4--------------------------------*/

var lijnTabel = new CanvasJS.Chart("lijnGrafiekKilometer",{
    backgroundColor: "#E0E0E0",
    animationEnabled: true,
    data: [{
    type: "line",
    lineColor: "#3E484B",
        dataPoints : [
		    { label: "12:00 uur",  y: 1000 , markerColor: "#A2D3EA"},
	      { label: "13:00 uur",  y: 1497 , markerColor: "#67B6AA"},
	      { label: "14:00 uur",  y: 2060 , markerColor: "#A2D3EA"},
	      { label: "15:00 uur",  y: 2780 , markerColor: "#67B6AA"},
		    { label: "16:00 uur",  y: 3120 , markerColor: "#A2D3EA"},
		    { label: "17:00 uur",  y: 3987 , markerColor: "#67B6AA"},
	      { label: "18:00 uur",  y: 4230 , markerColor: "#A2D3EA"},
	      { label: "19:00 uur",  y: 4780 , markerColor: "#67B6AA"},
				{ label: "20:00 uur",  y: 5402 , markerColor: "#A2D3EA"},
				{ label: "21:00 uur",  y: 6740 , markerColor: "#67B6AA"},
				{ label: "22:00 uur",  y: 6998 , markerColor: "#A2D3EA"},
				{ label: "23:00 uur",  y: 7653 , markerColor: "#67B6AA"},
				{ label: "00:00 uur",  y: 8764 , markerColor: "#A2D3EA"},
			]
    }]
});
lijnTabel.render();


}
