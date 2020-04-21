//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){

	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		$("#result").hide();
		$("#resultimage").hide();

		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				// console.log(aoY);
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					// console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			console.log("done");

			
		});
		setTimeout(function() { 
			console.log("hanks");

			var hanks = $("#hanks").offset().top;
			var taxi = $("#taxi").offset().top;
			var pyle = $("#pyle").offset().top;
			var doc = $("#doc").offset().top;
			var billy = $("#billy").offset().top;
			var reeve = $("#reeve").offset().top;

			var ids = [
				'Tom Hanks, \"The Da Vinci Code\"',
				'Robert De Niro, \"Taxi Driver\"',
				'Gomer Pyle, \"Full Metal Jacket\"',
				'Doc Brown, \"Back to the Future\"',
				'Billy Ray Cyrus, \"Achy Breaky Heart\"',
				'Christopher Reeve, \"Superman (1978)\"',
			];
			var images = [
				'robhanks.png',
				'robtaxi.png',
				'robpyle.png',
				'robdoc.png',
				'robbilly.png',
				'robreeve.png',
			];
			var heights = [
				$("#hanks").offset().top,
				$("#taxi").offset().top,
				$("#pyle").offset().top,
				$("#doc").offset().top,
				$("#billy").offset().top,
				$("#reeve").offset().top,
			];

			const indexOfMaxValue = heights.indexOf(Math.min(...heights));
			console.log(heights)
			console.log(ids)
			$("#result").show();

			winningHaircut = ids[indexOfMaxValue];
			winningHaircutImage = images[indexOfMaxValue];

			console.log("winning haircut:");
			console.log(winningHaircut)
			$('#result').text(winningHaircut);
			document.getElementById('resultimage').src = winningHaircutImage;
			$("#resultimage").show();

		}, 7000);

	});


	
	
	
});//DOCUMENT READY
	

