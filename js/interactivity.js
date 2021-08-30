// CALL TO ACTION BUTTON VARIABLES
// const c2a_btn = document.querySelectorAll(".c2a-btn");
const modal = document.querySelector(".modal-container");
const backdrop = document.querySelector(".backdrop");
const exit_icon = document.querySelector(".fas");
const modal_wrapper = document.querySelector(".all-mod-wrapper");

// const modal_wrapper = document.querySelector(".all-wrapper");

document.querySelectorAll(".c2a-btn").forEach((c2a_btn) => {
	c2a_btn.addEventListener("click", function () {
		modal.style.cssText = "opacity:1; display:block;  ";
		modal_wrapper.style.cssText = "opacity:1; display:block;  ";
		backdrop.style.cssText = "display:flex; justify-items:center; align-items:center";
		backdrop.addEventListener("click", function () {
			modal.style.cssText = "opacity:0; display:none;";
			modal_wrapper.style.cssText = "opacity:0; display:none;";
			backdrop.style.cssText = "display:none;";
		});
		exit_icon.addEventListener("click", function () {
			modal.style.cssText = "opacity:0; display:none; ";
			modal_wrapper.style.cssText = "opacity:0; display:none; ";
			backdrop.style.cssText = "display:none;";
		});
	});
});

// body.forEach((body) => {
// body.addEventListener("click", function () {
// 	body.style.cssText = "opacity: 1; background-color:pink";
// });
// });
// c2a_btn.addEventListener("click", function () {});

// VARIABLES
const slide1 = document.getElementsByClassName("slide1-test");
const slide2 = document.getElementsByClassName("slide2-test");
const slide3 = document.getElementsByClassName("slide3-test");
const slide4 = document.getElementsByClassName("slide4-test");
const title = document.querySelector(".text-title");

const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");

// TEST DOT SLIDER
dot1.addEventListener("click", function () {
	for (var i = 0; i < slide1.length; i++) {
		slide1[i].style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px); ";
	}
	for (var i = 0; i < slide2.length; i++) {
		slide2[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide3.length; i++) {
		slide3[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide4.length; i++) {
		slide4[i].style.cssText = "visibility:hidden; opacity:0";
	}
	// slide1.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	// slide2.style.cssText = "visibility:hidden; opacity:0";
	// slide3.style.cssText = "visibility:hidden; opacity:0";
	// slide4.style.cssText = "visibility:hidden; opacity:0";

	dot1.style.cssText = "background-color: black; border: 3px solid white";
	dot2.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot3.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot4.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
});

dot2.addEventListener("click", function () {
	// slide1.style.cssText = "visibility:hidden; opacity:0";
	// slide2.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	// slide3.style.cssText = "visibility:hidden; opacity:0";
	// slide4.style.cssText = "visibility:hidden; opacity:0";

	for (var i = 0; i < slide1.length; i++) {
		slide1[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide2.length; i++) {
		slide2[i].style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	}
	for (var i = 0; i < slide3.length; i++) {
		slide3[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide4.length; i++) {
		slide4[i].style.cssText = "visibility:hidden; opacity:0";
	}
	dot1.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot2.style.cssText = "background-color: black; border: 3px solid white";
	dot3.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot4.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
});

dot3.addEventListener("click", function () {
	// slide1.style.cssText = "visibility:hidden; opacity:0";
	// slide2.style.cssText = "visibility:hidden; opacity:0";
	// slide3.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	// slide4.style.cssText = "visibility:hidden; opacity:0";

	for (var i = 0; i < slide1.length; i++) {
		slide1[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide2.length; i++) {
		slide2[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide3.length; i++) {
		slide3[i].style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	}
	for (var i = 0; i < slide4.length; i++) {
		slide4[i].style.cssText = "visibility:hidden; opacity:0";
	}
	dot1.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot2.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot3.style.cssText = "background-color: black; border: 3px solid white";
	dot4.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
});

dot4.addEventListener("click", function () {
	// slide1.style.cssText = "visibility:hidden; opacity:0";
	// slide2.style.cssText = "visibility:hidden; opacity:0";
	// slide3.style.cssText = "visibility:hidden; opacity:0";
	// slide4.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";

	for (var i = 0; i < slide1.length; i++) {
		slide1[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide2.length; i++) {
		slide2[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide3.length; i++) {
		slide3[i].style.cssText = "visibility:hidden; opacity:0";
	}
	for (var i = 0; i < slide4.length; i++) {
		slide4[i].style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	}

	dot1.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot2.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot3.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	dot4.style.cssText = "background-color: black; border: 3px solid white";
});

// TEAM SLIDER

const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const card = document.querySelector("[data-target = 'card']");
const carousel = document.querySelector("[data-target= 'carousel_slider']");
const memberIcon = document.querySelector(".member-icon");

const carouselWidth = carousel.offsetWidth; /* get width of carousel*/
// The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets
// The getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element.
// The computed style is the style actually used in displaying the element, after "stylings" from multiple sources have been applied.
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(
	cardStyle.marginRight.match(/\d+/g)[0]
); /*converts a string to a number - 
The marginRight property sets or returns the right margin of an element.*/
const cardWidth = Number(cardStyle.width.match(/\d+/g)[0]);
console.log(cardWidth);

console.log(carouselWidth);
console.log(cardMarginRight);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit

//  const maxX = -(
// 	(card / 2) * carouselWidth +
// 	cardMarginRight * (cardCount / 3) -
// 	carouselWidth -
// 	cardMarginRight
// );

const maxX = -(cardWidth * 6 + cardMarginRight * 7);

console.log("Carousel Max = " + maxX);

// Add the click events

// leftButton.addEventListener("click", function () {
// 	if (offset !== 0) {
// 		offset += carouselWidth + cardMarginRight;
// 		carousel.style.transform = `translateX(${offset}px)`;
// 	}
// });

let offset = 0; /* Offset is a variable that will increment or 
decrement by (carouselWidth + cardMarginRight, or 648) every time we click one
 of the buttons. When the page loads, we want the carousel to start 
 right at the beginning, so offset is initialized to 0*/

leftButton.addEventListener("click", function () {
	if (offset !== 0) {
		offset += 3 * cardWidth + cardMarginRight * 3;
		carousel.style.transform = `translateX(${offset}px)`;
	}
});

// leftButton.addEventListener("click", function () {
// 	if (offset !== 0) {
// 		offset += carouselWidth/2;
// 		carousel.style.transform = `translateX(${offset}px)`;
// 	}
// });

// rightButton.addEventListener("click", function () {
// 	if (offset !== maxX) {
// 		offset -= carouselWidth + cardMarginRight;
// 		carousel.style.transform = `translateX(${offset}px)`;
// 	} else {
// 		offset = 0;
// 		carousel.style.transform = `translateX(${offset}px)`;
// 	}
// });
rightButton.addEventListener("click", function () {
	if (offset <= -825) {
		return false;
	} else if (offset > -825) {
		offset -= 3 * cardWidth + cardMarginRight * 3;

		carousel.style.transform = `translateX(${offset}px)`;
	}
	memberIcon.style.cssText = "z-index:5";
});
