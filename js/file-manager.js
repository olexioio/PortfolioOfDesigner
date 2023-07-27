// var dt = new DataTransfer();
 
// $('.input-file input[type=file]').on('change', function(){
// 	let $files_list = $(this).closest('.input-file').next();
// 	$files_list.empty();
 
// 	for(var i = 0; i < this.files.length; i++){
// 		let new_file_input = '<div class="input-file-list-item">' +
// 			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
// 			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
// 			'</div>';
// 		$files_list.append(new_file_input);
// 		dt.items.add(this.files.item(i));
// 	};
// 	this.files = dt.files;
// });
 
// function removeFilesItem(target){
// 	let name = $(target).prev().text();
// 	let input = $(target).closest('.input-file-row').find('input[type=file]');	
// 	$(target).closest('.input-file-list-item').remove();	
// 	for(let i = 0; i < dt.items.length; i++){
// 		if(name === dt.items[i].getAsFile().name){
// 			dt.items.remove(i);
// 		}
// 	}
// 	input[0].files = dt.files;  
// }
let span = document.getElementById("span-drop");

function showFile(input) {
    // let file = input.files[0];
    // console.log(input.files.length);
    // span.innerHTML = file.name;
    // let inner = span.innerHTML;
    inner = "";
    span.innerHTML = "";
    let counter = 0;
    for(const file of input.files) {
        counter++;
        inner = "<br>"+counter+". "+file.name;
        span.innerHTML += inner;
        console.log(inner);
    }
}