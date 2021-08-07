// VARIABLES
const slide1Dot = document.querySelector(".slide1Dot");
const slide2Dot = document.querySelector(".slide2Dot");
const slide3Dot = document.querySelector(".slide3Dot");
const slide4Dot = document.querySelector(".slide4Dot");

const test1 = document.querySelector(".test1");
const test2 = document.querySelector(".test2");
const test3 = document.querySelector(".test3");
const test4 = document.querySelector(".test4");

// TEST DOT SLIDER
function currentSlide1() {
	test1.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	test2.style.cssText = "visibility:hidden; opacity:0";
	test3.style.cssText = "visibility:hidden; opacity:0";
	test4.style.cssText = "visibility:hidden; opacity:0";

	slide1Dot.style.cssText = "background-color: black; border: 3px solid white";
	slide2Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide3Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide4Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
}

function currentSlide2() {
	test1.style.cssText = "visibility:hidden; opacity:0";
	test2.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	test3.style.cssText = "visibility:hidden; opacity:0";
	test4.style.cssText = "visibility:hidden; opacity:0";
	slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide2Dot.style.cssText = "background-color: black; border: 3px solid white";
	slide3Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide4Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
}

function currentSlide3() {
	test1.style.cssText = "visibility:hidden; opacity:0";
	test2.style.cssText = "visibility:hidden; opacity:0";
	test3.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	test4.style.cssText = "visibility:hidden; opacity:0";
	slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide2Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide3Dot.style.cssText = "background-color: black; border: 3px solid white";
	slide4Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
}

function currentSlide4() {
	test1.style.cssText = "visibility:hidden; opacity:0";
	test2.style.cssText = "visibility:hidden; opacity:0";
	test3.style.cssText = "visibility:hidden; opacity:0";
	test4.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
	slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide2Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide3Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
	slide4Dot.style.cssText = "background-color: black; border: 3px solid white";
}

// TEAM SLIDER

const leftArrow = document.querySelector(".arrow1");
const rightArrow = document.querySelector(".arrow2");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
// may have to change to let

// const slides = [slide1, slide2];
// const amountofslides = slides.length;
// // currentIndex will change each time arrows are clicked so use let
// // currentIndex represents x which is the real value of the index

function nextSlide() {
	slide2.style.cssText = "transform: translate(100vw, 0)";
	slide1.style.cssText = "transform: translate(100vw, 0)";
	leftArrow.style.cssText = "display:inline-block";
	rightArrow.style.cssText = "display:none";
}

function prevSlide() {
	slide1.style.cssText = "transform: none";
	slide2.style.cssText = "transform: none";
	leftArrow.style.cssText = "display:none";
	rightArrow.style.cssText = "display:inline-block";
}

// TEAM SLIDER 2!!

const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const card = document.querySelector("[data-target = 'card']");
const carousel = document.querySelector("[data-target= 'carousel_slider']");

const carouselWidth = carousel.offsetWidth; /* get width of carousel*/
// The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets
// The getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element.
// The computed style is the style actually used in displaying the element, after "stylings" from multiple sources have been applied.
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(
	cardStyle.marginRight.match(/\d+/g)[0]
); /*converts a string to a number - 
The marginRight property sets or returns the right margin of an element.*/
console.log(carouselWidth);
console.log(cardMarginRight);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit

let offset = 0; /* Offset is a variable that will increment or 
decrement by (carouselWidth + cardMarginRight, or 648) every time we click one
 of the buttons. When the page loads, we want the carousel to start 
 right at the beginning, so offset is initialized to 0*/
const maxX = -(
	(cardCount / 2) * carouselWidth +
	cardMarginRight * (cardCount / 3) -
	carouselWidth -
	cardMarginRight
);

// Add the click events

leftButton.addEventListener("click", function () {
	if (offset !== 0) {
		offset += carouselWidth + cardMarginRight;
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
	if (offset <= maxX) {
		return false;
	} else {
		offset -= carouselWidth + cardMarginRight;

		carousel.style.transform = `translateX(${offset}px)`;
	}
});
