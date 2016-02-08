// ==UserScript==
// @include https://stardock.cs.virginia.edu/oh/
// ==/UserScript==
var ohfunc = function() {
	var not_empty_queue = false;
	var i = setInterval(function(){
			var position = document.documentElement.innerHTML.indexOf("<strong>EMPTY!</strong> The queue is currently empty. YAY!");
			if (position == -1) {
				if(!not_empty_queue) {
					not_empty_queue = true;
					alert("THERES SOMBODY IN THE QUEUE");
				}
			} else {
				not_empty_queue = false;
			}
	}, 5000);
}

$(document).ready(ohfunc);