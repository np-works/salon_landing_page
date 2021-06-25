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

};

function currentSlide2() {
        test1.style.cssText = "visibility:hidden; opacity:0";
        test2.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
        test3.style.cssText = "visibility:hidden; opacity:0";
        test4.style.cssText = "visibility:hidden; opacity:0";
        slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
        slide2Dot.style.cssText = "background-color: black; border: 3px solid white";
        slide3Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
        slide4Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";

};

function currentSlide3() {
        test1.style.cssText = "visibility:hidden; opacity:0";
        test2.style.cssText = "visibility:hidden; opacity:0";
        test3.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
        test4.style.cssText = "visibility:hidden; opacity:0";
        slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
        slide2Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
        slide3Dot.style.cssText = "background-color: black; border: 3px solid white";
        slide4Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";


};

function currentSlide4() {
    test1.style.cssText = "visibility:hidden; opacity:0";
    test2.style.cssText = "visibility:hidden; opacity:0";
    test3.style.cssText = "visibility:hidden; opacity:0";
    test4.style.cssText = "visibility:visible; opacity:1; transform: translate(0, -15px)";
    slide1Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
    slide2Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
    slide3Dot.style.cssText = "background-color: white; border: 3px solid #cbc8c8";
    slide4Dot.style.cssText = "background-color: black; border: 3px solid white";

};



// TEST DOT SLIDER (for loop example)

// VARIABLES

const leftArrow = document.querySelector(".arrow1");
const rightArrow = document.querySelector(".arrow2");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
// may have to change to let
const slides = [slide1, slide2];
const amountofslides = slides.length;
// // currentIndex will change each time arrows are clicked so use let
// // currentIndex represents x which is the real value of the index
let currentSlide = 0; 



// function prevSlide(){
//     // can't go lower than index 0
//     if(currentSlide > 0){
//         // update index value
//         currentSlide--;
//         updateSlide();
//     }
// }
//     // for (var i=0; i = 0; i++){
//     //     slide2.style.cssText = "transform: translate(100vw, 0)";
//     // }
//     // for (var i=0; i = 1; i--){
//     //     slide2.style.cssText = "transform: translate(100vw, 0)";
//     // }


// function nextSlide(){
//         // can only be 0 or 1 in array
//     if(currentSlide = 0){
//         // update index value
//         currentSlide++;
//         updateSlide();
//     }
// }

// function updateSlide() {
//     slides[currentSlide].style.csssText = "transform: translate(100vw, 0)";

//   }

// leftArrow.addEventListener("click", prevSlide);
// rightArrow.addEventListener("click", nextSlide);

function nextSlide(){
    slide2.style.cssText = "transform: translate(100vw, 0)";
    slide1.style.cssText = "transform: translate(100vw, 0)";
    leftArrow.style.cssText = "display:inline-block";
    rightArrow.style.cssText = "display:none";
}

function prevSlide(){
    slide1.style.cssText = "transform: none";
    slide2.style.cssText = "transform: none";
    leftArrow.style.cssText = "display:none";
    rightArrow.style.cssText = "display:inline-block";
}
