// function checkEvent() {
//   var ypos = window.pageYOffset;
//   console.log(ypos)
// }

// window.addEventListener("scroll", checkEvent)

// Debounce Function
function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function check() {
  var g = $(window).scrollTop()
  console.log(g)
}


$(window).on('scroll', debounce(check) )