let srcShow = document.getElementById("imgClickedAndChange").src;
const imgs = document.querySelectorAll(".showcase");

imgs.forEach(function (img) {
	img.addEventListener("click", function () {
		srcShow = img.src;
		console.log(srcShow);
	});
});
