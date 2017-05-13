$(document).ready(function() {

	var start = true;

	// Character Selection
	var $hansolo = $('#hansolo');
	var $chewy = $('#chewy');
	var $jabba = $('#jabba');
	var $greedo = $('#greedo');

	// Choices
	$hansolo.on('click', function() {
		if(start)
		{
		  $('#hansolo').appendTo('.choice')
		  $('#chewy').appendTo('#first-enemy')
		  $('#jabba').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
          	$("#character-text").remove('#character-text');
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
 		start = false;
		}
    });
	$chewy.on('click', function() {
		if(start)
		{
		  $('#chewy').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#jabba').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
          	$("#character-text").remove('#character-text');
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
 		start = false;
        }
    });
	$jabba.on('click', function() {
		if(start)
		{
		  $('#jabba').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
          	$("#character-text").remove('#character-text');
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
 		start = false;
        }
    });
	$greedo.on('click', function() {
		if(start)
		{
		  $('#greedo').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#jabba').appendTo('#third-enemy')
          $(function () {
          	$("#character-text").remove('#character-text');
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
 		start = false;
        }
    });

});