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
	$.ajaxSetup({  
		cache: false
	});
	getloadscript(3);
});
function getloadscript(num){
	$.getScript("/loadScripts.js", function(){
        loadScriptAndWait();
		}).fail(function(){ 
			num--;
			if(num>0)
			{
				// getloadscript(num);
				setTimeout("getloadscript(num)",200);
			}
			else{
				$("#loadingDivText").html("Error loading resources.");
			}
			
		});
}

//@ sourceURL=main.js