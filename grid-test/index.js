//i've changed srcShow.src to srcShow
const srcShow = document.getElementById("imgClickedAndChange");
const imgs = document.querySelectorAll(".showcase");


imgs.forEach(function (img) {
	img.addEventListener("click", function (e) {
		let srcAttr = e.target.getAttribute("src")
		srcShow.src = srcAttr
	});
});


// this is how i would write the solution, in ES6 syntax
// not 1: both ways work the same
// not 2: i gess the lag that is happening when switching pics is due to high reselotion of the pics

// imgs.forEach( img => {
// 	img.addEventListener("click", e => {
// 		updateHomeImg(e)
// 	});
// });
// const updateHomeImg = e => {
// 	let srcAttr = e.target.getAttribute("src")
// 	srcShow.src = srcAttr
// }