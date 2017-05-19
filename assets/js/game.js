$(document).ready(function() {

	// $('#gameMusic').play();

	//Objects
	var hansolo = {
		name: "Han Solo",
		attack: 5,
		hp: 100,
		counter: 0,
		src: "assets/images/hansolo.jpg",
	}

	var chewy = {
		name: "Chewy",
		attack: 25,
		hp: 180,
		counter: 0,
		src: "assets/images/chewy.jpg",
	}

	var jabba = {
		name: "Jabba",
		attack: 20,
		hp: 150,
		counter: 0,
		src: "assets/images/jabba.jpg",
	}

	var leia = {
		name: "Leia",
		attack: 8,
		hp: 120,
		counter: 0,
		src: "assets/images/leia.jpg",
	}

	var choices = [hansolo, chewy, jabba, leia];

	var charOptionsRow = $('#charOptions');
		$.each(choices, function(index, choice) {
		  // Create a new div.col-lg-3 to be appended to row.
		  var charOptionCol = $('<div>')
		    .addClass('char-option col-lg-3') 
		    .attr("charname", choice.name)
		    .attr("data-hp", choice.hp)
		    .attr("data-attack", choice.attack);
		    console.log(charOptionCol);

		  // Append image to col.
		  var charImg = $('<img>')
		    .addClass('char-img')
		    .attr('src', choice.src);
		  charOptionCol.append(charImg);

		  // Append text to col.
		  var charName = $('<h3>')
		    .addClass('char-name')
		    .text(choice.name);
		  charOptionCol.append(charName);

		  var charHealth = $('<h3>')
		    .addClass('char-hp')
		    .text(choice.hp);
		  charOptionCol.append(charHealth);

		  // Append column to row.
		  charOptionsRow.append(charOptionCol);
	});

	$(document).on('click', '.char-option', function() {
	
		for (var i =0; i < choices.length; i++) {
			$('.char-option').appendTo('.enemies');
		}

		$(this).appendTo('.you').removeClass('char-option col-lg-3').addClass('.you');

		$('.char-option').removeClass('char-option col-lg-3').addClass('enemy-option col-lg-3');

		$(function () {
		    $("#character-text").remove('#character-text');
		    $('#chosen-text').removeClass('hidden');
		    $('#fighting-text').removeClass('hidden');
		    $('#enemies-text').removeClass('hidden');
		});
	});

	$(document).on('click', '.enemy-option', function() {

		for (var i =0; i < choices.length; i++) {
			$('.enemy-option').appendTo('.enemies').removeClass('col-lg-3').addClass('col-lg-3');
		}

		$(this).appendTo('.fighting').removeClass('col-lg-3');

		$(function () {
			$('#attack-button').removeClass('hidden');
		});

	});

	// var selected = "";
	// var enemy = "";

	$(document).on('click', '#attack-button', function() {

			var selected = $('.you').children("data-hp");
			var enemy = $('.fighting').contents("data-hp");
			
			console.log(selected);
			console.log(enemy);

			function attack() {
				if(selected.hp >= 1 && enemy.hp >=1) {
					enemy.hp -= selected.attack;
					selected.hp -= enemy.attack;
					$(".hp" + selected).text(selected.hp);
					$(".hp" + enemy).text(enemy.hp);
				}
				if(selected.hp <=0) {
					$('.message').html("<h2>You lose!</h2>");
					$('.damage').text(selected.hp);
				}
				if(enemy.hp <= 0) {
					('.fighting').empty();
				}
			}

	});
});