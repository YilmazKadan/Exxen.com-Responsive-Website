
// SLİDER FUNCTİON AND VARİABLE
const previous = document.getElementsByClassName("previous")[0];
const next = document.getElementsByClassName("next")[0];
const image_div = document.querySelector(".images");
var left = parseFloat(window.getComputedStyle(image_div).getPropertyValue("left"));
var images = image_div.querySelectorAll("img");
const image_width = parseFloat(window.getComputedStyle(images[0]).getPropertyValue("width"));
const image_margin_right = parseFloat(window.getComputedStyle(images[0]).getPropertyValue("margin-right"));


function image_copy_add(){
	for (var i = 0 ; i<= 20 ; i++){
		images.forEach(function(item){
            var img = document.createElement("img");
            var a_tag = document.createElement("a");
            a_tag.href = "#";
            img.src = item.src;
            a_tag.appendChild(img);
			image_div.appendChild(a_tag);
		});
	}
}
image_copy_add();
function previous_function(){
	if (left < 0) {
		left = left + (image_width + image_margin_right);
		image_div.style.left = left + "px";
	}
}
function next_function(){
	images = image_div.querySelectorAll("img");
	left = (left-(image_width + image_margin_right));
	image_div.style.left = parseFloat(left) + "px";
}
previous.addEventListener("click",() => {
	previous_function();
});
next.addEventListener("click",() => {
	next_function();
});
// SLİDER END