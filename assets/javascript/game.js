	// Generates the target number to guess.
	var number = Math.floor((Math.random() * 120) + 19);

	// Generates the randome values for each crystal.
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);

	// Initilize values
	var guessTotal = 0;
	var wins = 0;
	var losses = 0;
	var audioCrystal = new Audio("assets/sound/Cha-ching-sound.mp3");
	var audioWin = new Audio("assets/sound/Ta-Da.mp3");
	var audioLoss = new Audio("assets/sound/fail.mp3");
	var audioInstructions = new Audio("assets/sound/Swoosh.mp3");
	
	
	// Displays the target number to guess.
	$(".numberdisplay").html(number);

	// On click events for each crystal.
	$(".bluecrystal").click(function() {
		$( ".bluecrystal" ).effect( "bounce" );
		audioCrystal.play(); 
		update(blue);
	});

	$(".redcrystal").click(function() {
		$( ".redcrystal" ).effect( "bounce" );
		audioCrystal.play(); 
		update(red);
	});

	$(".yellowcrystal").click(function() {
		$( ".yellowcrystal" ).effect( "bounce" );
		audioCrystal.play(); 
		update(yellow);
	});

	$(".greencrystal").click(function() {
		$( ".greencrystal" ).effect( "bounce" );
		audioCrystal.play(); 
		update(green);
	});

	$(".dropdown").click(function() {
		$(".instructions").toggle("blind");
		audioInstructions.play(); 
	})

	// The reset function 
	function reset() {
		number = Math.floor((Math.random() * 120) + 19);
		$(".numberdisplay").html(number);
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		guessTotal = 0;
		$(".guessdisplay").html(guessTotal);
	};

	// Function updates total guess. 
	function update(color) {		
		guessTotal += color;
		$(".guessdisplay").empty();
		$(".guessdisplay").append(guessTotal);
		
		if (guessTotal > number) {	
			audioLoss.play(); 
			losses++;
			$("#lossesdisplay").html(losses);
			reset();
		} else if (guessTotal == number) {
			audioWin.play(); 
			wins++;
			$("#winsdisplay").html(wins);
			reset();
		};
	};
