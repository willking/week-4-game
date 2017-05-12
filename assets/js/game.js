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
          console.log('clicked');
		}
    });
	$chewy.on('click', function() {
		if($chewy)
		{
		  $('#chewy').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#jabba').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          console.log('clicked');
        }
    });
	$jabba.on('click', function() {
		if($jabba)
		{
		  $('#jabba').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#greedo').appendTo('#third-enemy')
          console.log('clicked');
        }
    });
	$greedo.on('click', function() {
		if($greedo)
		{
		  $('#greedo').appendTo('.choice')
		  $('#hansolo').appendTo('#first-enemy')
		  $('#chewy').appendTo('#second-enemy')
		  $('#jabba').appendTo('#third-enemy')
          console.log('clicked');
        }
    });

});