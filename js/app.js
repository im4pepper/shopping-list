$(document).ready(function() {

 $('#add').on("click", function() {
    console.log( 'I made the click work' );
    alert('I made the click work');
    });

 $('#add-items').keyup(function (e) {
 	if (e.keyCode == 13) {
 	console.log( 'I made the enter work' );
    alert('I made the enter work');
 	}
 });

});