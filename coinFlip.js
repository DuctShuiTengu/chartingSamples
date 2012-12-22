var coin;
var coinChart

function initCoin(sample) {

	coin = new Array(sample);
	
	var thisFlip = Math.round(Math.random());
	
	coin[0] = [1, thisFlip];
	
	for(var i = 1; i < sample; i++) {
		thisFlip = Math.floor(Math.random()*2);
		
		coin[i] = [i+1, thisFlip + coin[i-1][1]];
	}
	
	for(var j = 0; j < sample; j++) {
		coin[j][1] = coin[j][1]/(j+1);
	}
}

function initCoinChart(div){
	coinChart = new JSChart(div, 'line');
	initCoin(25);
	coinChart.setDataArray(coin, 'coin');
	coinChart.setLineColor('#FF0000', 'coin');

	coinChart.setBackgroundColor('#eee');
	coinChart.setAxisNameX('Sample Size');
	coinChart.setAxisNameY('Instances');
	coinChart.setTitle('Flipping a Coin');
	
	coinChart.setAxisPaddingBottom(40);
	coinChart.setTextPaddingBottom(10);
	
	coinChart.setIntervalStartY(0.0);
	coinChart.setIntervalEndY(1.0);
	coinChart.setLabelY([0.0,'0%']);
	coinChart.setLabelY([0.25,'25%']);
	coinChart.setLabelY([0.5,'50%']);
	coinChart.setLabelY([0.75,'75%']);
	coinChart.setLabelY([1.0,'100%']);
	coinChart.setShowYValues(false);
	coinChart.setAxisValuesNumberY(5);
	
	coinChart.setSize(700, 400);
	coinChart.draw();
}

function redrawCoin(sample)
{
	initCoin(sample);
	coinChart.setDataArray(coin, 'coin');
	coinChart.draw();
}
