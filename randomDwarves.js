var dwarves = new Array(7);
var dwarfNames = new Array("Sleepy", "Sneezy", "Dopey", "Grumpy", "Happy", "Bashful", "Doc");
var dwarfChart

function initDwarves (sample) {
	
	for (var i = 0; i < dwarves.length; i++)
	{
		dwarves[i] = new Array(sample);
		dwarves[i][0] = [1,0];
	}
	
	var currentDwarf = Math.floor(Math.random()*dwarves.length);
	
	dwarves[currentDwarf][0] = [1,1];
	
	for (var j = 1; j < sample; j++)
	{
	
		currentDwarf = Math.floor(Math.random()*dwarves.length);
		
		for (var k = 0; k < dwarves.length; k++)
		{
			var currentCount = dwarves[k][j-1][1];
			if (k == currentDwarf) {
				dwarves[k][j] = [j+1,currentCount+1];
			} else {
				dwarves[k][j] = [j+1,currentCount];
			}			
		}
	}
	
	for (var d = 0; d < dwarves.length; d++)
	{
		for (var c = 0; c < dwarves[d].length; c++) {
			dwarves[d][c][1] = dwarves[d][c][1] / (c+1);
		}
	}		
}

function getDwarfName(index){
	return dwarfNames[index];
}

function getDwarf(index){
	return dwarves[index];
}

function initDwarfChart(graph) {
	initDwarves(25);

	dwarfChart = new JSChart(graph, 'line');

	for(var i = 0; i < dwarves.length; i++){
		dwarfChart.setDataArray(getDwarf(i), getDwarfName(i));
	}
	
	dwarfChart.setLineColor('#0000FF', 'Sleepy');
	dwarfChart.setLineColor('#00FF00', 'Sneezy');
	dwarfChart.setLineColor('#CC00FF', 'Dopey');
	dwarfChart.setLineColor('#FF0000', 'Grumpy');
	dwarfChart.setLineColor('#FFFF00', 'Happy');
	dwarfChart.setLineColor('#FFBB00', 'Bashful');
	dwarfChart.setLineColor('#AB4E52', 'Doc');

	dwarfChart.setBackgroundColor('#eee');
	dwarfChart.setAxisNameX('Sample Size');
	dwarfChart.setAxisNameY('Instances');
	dwarfChart.setTitle('Seven Dwarves');
	
	dwarfChart.setAxisPaddingBottom(40);
	dwarfChart.setTextPaddingBottom(10);

	dwarfChart.setIntervalStartY(0);
	dwarfChart.setIntervalEndY(1);
	dwarfChart.setLabelY([0.0,'0%']);
	dwarfChart.setLabelY([0.1,'10%']);
	dwarfChart.setLabelY([0.2,'20%']);
	dwarfChart.setLabelY([0.3,'30%']);
	dwarfChart.setLabelY([0.4,'40%']);	
	dwarfChart.setLabelY([0.5,'50%']);
	dwarfChart.setLabelY([0.6,'60%']);
	dwarfChart.setLabelY([0.7,'70%']);
	dwarfChart.setLabelY([0.8,'80%']);
	dwarfChart.setLabelY([0.9,'90%']);
	dwarfChart.setLabelY([1.0,'100%']);
	dwarfChart.setShowYValues(false);
	dwarfChart.setAxisValuesNumberY(11);
	
	dwarfChart.setLegendShow(true);
	dwarfChart.setLegendDetect(false);
	dwarfChart.setLegend('#0000FF', 'Sleepy');
	dwarfChart.setLegend('#00FF00', 'Sneezy');
	dwarfChart.setLegend('#CC00FF', 'Dopey');
	dwarfChart.setLegend('#FF0000', 'Grumpy');
	dwarfChart.setLegend('#FFFF00', 'Happy');
	dwarfChart.setLegend('#FFBB00', 'Bashful');
	dwarfChart.setLegend('#AB4E52', 'Doc');
	//dwarfChart.setLegendPosition(590, 80);
	
	dwarfChart.setSize(700, 400);
	dwarfChart.draw();
}

function redrawDwarf(sampleSize) {
	//dwarfChart.clearLabels()
	initDwarves(sampleSize);
	for(var i = 0; i < dwarves.length; i++){
		dwarfChart.setDataArray(getDwarf(i), getDwarfName(i));
	}
	dwarfChart.draw();
}
