/*****************************
* Project: Generic Web
* File: main.js
* Author: Leonardo Severini
* Last modify: 12/02/2013
******************************/
var deviceXML = null;
var httpComm = null;

//document.ontouchmove = function(e) {e.preventDefault()};

/**********
* load
***********************/

$(window).load(function(){
	var jifukuixxxx=true;
	console.log("Hello,my name is jifukui if you have any questions please contact with me, Email:805013833@qq.com");
	if(jifukuixxxx)
	{
		for (var  value in window.console)
		{
			if((typeof window.console[value])=="function")
			{
				window.console[value]=function(){return}
			}
		}
	}
	$.ajaxSetup({  
		cache: false
	});
	getloadscript(3);
});
function getloadscript(num)
{
	var val=num;
	$.getScript("/loadScripts.js", function(){
        loadScriptAndWait();
		}).fail(function(){ 
			val--;
			if(val>0)
			{
				// getloadscript(num);
				setTimeout(getloadscript(val),200);
			}
			else{
				$("#loadingDivText").html("Error loading resources.");
			}
			
		});
}

//@ sourceURL=main.js