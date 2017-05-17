$(document).ready(function() {

	// $('#gameMusic').play();

	//Objects
	var hansolo = {
		name: "Han Solo",
		attack: 10,
		hp: 20,
		counter: 0,
		src: "assets/images/hansolo.jpg",
	}

	var chewy = {
		name: "Chewy",
		attack: 10,
		hp: 20,
		counter: 0,
		src: "assets/images/chewy.jpg",
	}

	var jabba = {
		name: "Jabba",
		attack: 10,
		hp: 20,
		counter: 0,
		src: "assets/images/jabba.jpg",
	}

	var greedo = {
		name: "Greedo",
		attack: 10,
		hp: 20,
		counter: 0,
		src: "assets/images/greedo.jpg",
	}

	var choices = [hansolo, chewy, jabba, greedo];

	var charOptionsRow = $('#charOptions');
		$.each(choices, function(index, choice) {
		  // Create a new div.col-lg-3 to be appended to row.
		  var charOptionCol = $('<div>')
		    .addClass('char-option col-lg-3');

		  // Append image to col.
		  var charImg = $('<img>')
		    .addClass('char-img')
		    .attr('src', choice.src);
		  charOptionCol.append(charImg);

		  // Append text to col.
		  var charText = $('<h3>')
		    .addClass('char-text')
		    .text(choice.name);
		  charOptionCol.append(charText);

		  // Append column to row.
		  charOptionsRow.append(charOptionCol);
	});

	$(document).on('click', '.char-option', function() {
	
		for (var i =0; i < choices.length; i++) {
			$('.char-option').appendTo('.enemies');
		}

		$(this).appendTo('.you').removeClass('char-option col-lg-3');

		$('.char-option').removeClass('char-option col-lg-3').addClass('enemy-option col-lg-4');

		$(function () {
		    $("#character-text").remove('#character-text');
		    $('#chosen-text').removeClass('hidden');
		    $('#attack-button').removeClass('hidden');
		    $('#fighting-text').removeClass('hidden');
		    $('#enemies-text').removeClass('hidden');
		});
	});

	$(document).on('click', '.enemy-option', function() {

		for (var i =0; i < choices.length; i++) {
			$('.enemy-option').appendTo('.enemies').removeClass('col-lg-4').addClass('col-lg-4');
		}

		$(this).appendTo('.fighting').removeClass('col-lg-4');

	});
});