$(document).ready(function() {
	var checkButton = '<button type="submit" id="check" name="check"></button>'
	var removeButton = '<button type="submit" id="added-remove" name="added-remove"></button>'

 $('#add').on("click", function() {
    buildList()
    });

function buildList() {
    var inputText = $('#add-items').val();
    var inputSpan = '<span id='+"added-item"+'>'+ inputText +'</span>'
    var listItem = '<li>'+ checkButton + inputSpan + removeButton +'</li>'
    $('#list ul').append(listItem);
    $('#add-items').val('');
    return false;
}

 $('#add-items').keydown(function (e) {
 	if (e.keyCode == 13) {
        buildList()
 		/* postItem(); */
 	console.log('keydown the enter key works');
    /* alert('I made the enter work'); */
 	}
 });
 /*
 $('#add-items').val();{
 value = $("#add-items").val(); 
 }*/
/*$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});*/

});