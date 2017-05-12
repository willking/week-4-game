$(document).ready(function() {

	// Character Selection
	var $hansolo = $('#hansolo');
	var $chewy = $('#chewy');
	var $jabba = $('#jabba');
	var $greedo = $('#greedo');

	// Choices
	$hansolo.on('click', function() {
		if($hansolo)
		{
		  $('#hansolo').appendTo('.choice')
		  $('#chewy').appendTo('#first-enemy')
		  $('#jabba').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
		}
    });
	$chewy.on('click', function() {
		if($chewy)
		{
		  $('#chewy').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#jabba').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
        }
    });
	$jabba.on('click', function() {
		if($jabba)
		{
		  $('#jabba').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          $(function () {
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
        }
    });
	$greedo.on('click', function() {
		if($greedo)
		{
		  $('#greedo').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#jabba').appendTo('#third-enemy')
          $(function () {
     	  	$('#chosen-text').removeClass('hidden');
     	  	$('#enemies-text').removeClass('hidden');
 		  });
        }
    });

});