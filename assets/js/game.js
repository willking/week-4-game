$(document).ready(function() {

	//Objects
	var hansolo = {
		name: "Han Solo",
		attack: 10,
		hp: 20,
		counter: 0,
		src: "http://www.themovieguys.net/wp-content/uploads/2010/12/HarrisonFord-300x300.jpg",
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


	// var start = true;

	// // Character Selection
	// var $hansolo = $('#hansolo');
	// var $chewy = $('#chewy');
	// var $jabba = $('#jabba');
	// var $greedo = $('#greedo');

	// // Choices
	// $hansolo.on('click', function() {
	// 	// var character = $(this).attr('data-character');
	// 	$hansolo = {
	// 		name: "Han Solo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$chewy = {
	// 		name: "Chewy",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$jabba = {
	// 		name: "Jabba",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$greedo = {
	// 		name: "Greedo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	if(start)
	// 	{
	// 	  $('#hansolo').appendTo('.choice')
	// 	  $('#chewy').appendTo('#first-enemy')
	// 	  $('#jabba').appendTo('#second-enemy')
	// 	  $('#greedo').appendTo('#third-enemy')
 //          $(function () {
 //          	$("#character-text").remove('#character-text');
 //     	  	$('#chosen-text').removeClass('hidden');
 //     	  	$('#enemies-text').removeClass('hidden');
 // 		  });
 // 		start = false;
	// 	}
	// 	if(start == false) {
	// 		game();
	// 	}
 //    });
	// $chewy.on('click', function() {
	// 	$hansolo = {
	// 		name: "Han Solo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$chewy = {
	// 		name: "Chewy",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$jabba = {
	// 		name: "Jabba",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$greedo = {
	// 		name: "Greedo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	if(start)
	// 	{
	// 	  $('#chewy').appendTo('.choice')
	// 	  $('#hansolo').appendTo('#first-enemy')
	// 	  $('#jabba').appendTo('#second-enemy')
	// 	  $('#greedo').appendTo('#third-enemy')
 //          $(function () {
 //          	$("#character-text").remove('#character-text');
 //     	  	$('#chosen-text').removeClass('hidden');
 //     	  	$('#enemies-text').removeClass('hidden');
 // 		  });
 // 		start = false;
 //        }
 //        if(start == false) {
	// 		game();
	// 	}
 //    });
	// $jabba.on('click', function() {
	// 	$hansolo = {
	// 		name: "Han Solo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$chewy = {
	// 		name: "Chewy",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$jabba = {
	// 		name: "Jabba",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$greedo = {
	// 		name: "Greedo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	if(start)
	// 	{
	// 	  $('#jabba').appendTo('.choice')
	// 	  $('#hansolo').appendTo('#first-enemy')
	// 	  $('#chewy').appendTo('#second-enemy')
	// 	  $('#greedo').appendTo('#third-enemy')
 //          $(function () {
 //          	$("#character-text").remove('#character-text');
 //     	  	$('#chosen-text').removeClass('hidden');
 //     	  	$('#enemies-text').removeClass('hidden');
 // 		  });
 // 		start = false;
 //        }
 //        if(start == false) {
	// 		game();
	// 	}
 //    });
	// $greedo.on('click', function() {
	// 	$hansolo = {
	// 		name: "Han Solo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$chewy = {
	// 		name: "Chewy",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$jabba = {
	// 		name: "Jabba",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	$greedo = {
	// 		name: "Greedo",
	// 		attack: 10,
	// 		hp: 20,
	// 		counter: 0,
	// 	}
	// 	if(start)
	// 	{
	// 	  $('#greedo').appendTo('.choice')
	// 	  $('#hansolo').appendTo('#first-enemy')
	// 	  $('#chewy').appendTo('#second-enemy')
	// 	  $('#jabba').appendTo('#third-enemy')
 //          $(function () {
 //          	$("#character-text").remove('#character-text');
 //     	  	$('#chosen-text').removeClass('hidden');
 //     	  	$('#enemies-text').removeClass('hidden');
 // 		  });
 // 		start = false;
 //        }
 //        if(start == false) {
	// 		game();
	// 	}
 //    });

	// function game() {
	// 	var attack = $("#attack");
	// 	attack.on('click', function() {
	// 		console.log('click');
	// 	});
	// }
});