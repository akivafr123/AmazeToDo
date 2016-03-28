var main = function() {
	"use strict";

	var makeTabActive = function(tabNumber) {
		// construct the selector from the tabNunber
		var tabSelector = ".tabs a:nth-child(" + tabNunber + 
			") span";
		$(".tabs span").removeClass("active");
		$(tabSelector).addClass("active");		
	}

	$(".tabs a:nth-child(1)").on("click", function() {
		makeTabActive(1);
		return false;
	});

	$(".tabs a:nth-child(2)").on("click", function() {
		makeTabActive(2);
		return false;
	}

	$(".tabs a:nth-child(3)").on("click", function() {
		makeTabActive(3);
		return false;
	});
};


$(document).ready(main);