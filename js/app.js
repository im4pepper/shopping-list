$(document).ready(function() {

 $('#add').on("click", function() {
    console.log( 'I made the click work' );
    alert('I made the click work');
    var new_task = $('#add-items').val();
    $('#list ul').append('<li>'+new_task+'</li>');
    return false;
    });

 $('#add-items').keydown(function (e) {
 	if (e.keyCode == 13) {
 	console.log( 'I made the enter work' );
    alert('I made the enter work');
 	}
 });

});