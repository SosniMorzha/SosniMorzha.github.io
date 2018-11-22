jQuery('document').ready(function(){
var rightButtonId;
var val1, val2, counter=0, znak="+";
var plusOrMinus, range;
var a = [4];

var valMin = null, valMax = null;

while(valMin == null || valMax == null)
{
	valMin = prompt("Числа ОТ", 1);
	valMax = prompt("Числа ДО", 1000);
}

function NumberGenerator()
{
	val1 = Math.random() * (valMax - valMin) + valMin;
	val2 = Math.random() * (valMax - valMin) + valMin;
	
	val1 = parseInt(val1);
	val2 = parseInt(val2);	
	jQuery('#val1').html(val1);
	jQuery('#znak').html(znak);
	jQuery('#val2').html(val2);
	jQuery('#counter').html(counter);
}
	
NumberGenerator();
	
function BNG(val1, val2)
{
	for(var i=0; i<4; i++)
	{
		plusOrMinus = Math.random() * (2 - 1) + 1;
		range = Math.random() * (20 - 1) + 1;
		
		if(plusOrMinus == 1)
			a[i]=((val1+val2)-range);
		else
			a[i]=((val1+val2)+range);
	}
	rightButtonId = Math.random() * (3 - 0) + 0;
	rightButtonId = parseInt(rightButtonId);
	
	a[rightButtonId] = val1+val2;
	a[0] = parseInt(a[0]);
	a[1] = parseInt(a[1]);
	a[2] = parseInt(a[2]);
	a[3] = parseInt(a[3]);
	
	
	jQuery('#1').html(a[0]);
	jQuery('#2').html(a[1]);
	jQuery('#3').html(a[2]);
	jQuery('#4').html(a[3]);
}
BNG(val1, val2);

	$("button").click(function() {
		if ( parseInt($(this).attr('id')) == ++rightButtonId)
		{
			counter++;
			NumberGenerator();
			BNG(val1, val2);
			
		}else{
			alert(rightButtonId);
			counter--;
			NumberGenerator();
			BNG(val1, val2);
			
		}
	});
});