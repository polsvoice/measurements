var calculator = {
	init: function(){
		$( "#feetInMileButton" ).on( "click", calculator.printFeetInMile );
		$( "#calcFtInMileButton" ).on( "click", calculator.calcFtInMile );
		$( "#calcCircButton" ).on( "click", calculator.calcCirc );
	},
	printFeetInMile: function(){
		var feetInMile = $( "#feetInMile" );
		feetInMile.load( "/printFtInMiles", function( response, status, xhr ){
			if( status == "error" ){
				feetInMile.html( "Error: <strong>" + xhr.statusText + "</strong>" );
			}
		} );
	},
	calcFtInMile: function(){
		var miles = $( "#milesInput" ).val();
		$.ajax( {
			url: "/calcFtInMile",
			type: "GET",
			data: {
				"miles": miles
			},
			datatype: "json",
			success: function( data ){
				$( "#numFeet" ).html( data.result );
			},
			error: function( jqxhr, status, errorThrown ){
				console.log( jqxhr.responseText );
				console.log( status );
				console.log( errorThrown );
			}
		} );
	},
	calcCirc: function(){
		var radius = $( "#radiusInput" ).val();
		$.ajax( {
			url: "/calcCirc",
			type: "POST",
			data: {
				"radius": radius
			},
			datatype: "json",
			success: function( data ){
				$( "#printCirc" ).html( data.result );
			},
			error: function( jqxhr, status, errorThrown ){
				console.log( jqxhr.responseText );
				console.log( status );
				console.log( errorThrown );
			}
		} );
	}
};
calculator.init();
