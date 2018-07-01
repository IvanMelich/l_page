var rightArrow = document.querySelector('.slaider__link');
var leftArrow = document.querySelector('.slaider__link--left');
var slaidImgs = document.querySelectorAll('.slaider-cover li');
var i = 0;


	rightArrow.onclick = function() {
		event.preventDefault();
		slaidImgs[i].style.display = "none";
		i++;
		if (i >= slaidImgs.length) {
			i = 0;
		}
		slaidImgs[i].style.display = "block";
	}

	leftArrow.onclick = function() {
		event.preventDefault();
		slaidImgs[i].style.display = "none";
		i--;
		if (i < 0) {
			i = slaidImgs.length - 1;
		}
		slaidImgs[i].style.display = "block";
	}

	













