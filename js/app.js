$(document).ready(function() {

 $('#add').on("click", function() {
    console.log( 'clicking the + icon works' );
    /* alert('I made the click work'); */
    var new_task = $('#add-items').val();
    $('#list ul').append('<li>'+new_task+'</li>');
    return false;
    });

 $('#add-items').keydown(function (e) {
 	if (e.keyCode == 13) {
 		/* postItem(); */
 	console.log( 'keydown the enter key works' );
    /* alert('I made the enter work'); */
 	}
 });

/*$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});*/

});