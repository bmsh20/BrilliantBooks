// index to determine what slide is presented on the page.
var index = 1;

// index is passed through a function called changeSlide(), this determines which slide needs to be displayed
changeSlide(index);

// this function is executed when the user clicks on the next/previous slide buttons
// it executes the changeSlide() function and increments index with a supplied argument
// clicking on the next button executes the function with an argument of 1
// clicking on the previous button executes the function with an argument of -1
function controlSlide(indexTemp) {
    changeSlide(index += indexTemp);
}

// this function changes the image slide being displayed, takes in an index argument which determines what image is displayed
function changeSlide(indexTemp) {
    // This variable stores the class that contains the image slide
    var slidesAmount = document.getElementsByClassName("slideimage");

    // sets index to 1 (beginning of slideshow) if the index exceeds the length of the slideshow
    // this means that the slideshow will reset back to the first slide if the next button is clicked when the last slide is active.
    if(indexTemp > slidesAmount.length) {
        index = 1;
        
    }

    // sets index to the last slide if the previous button is clicked when the first slide is active
    if(indexTemp < 1) {
        index = slidesAmount.length;
    }
    

    // these if statements are responsible for displaying what slide should be active
    // it checks what the current index value is, and sets the respective slideshow image's CSS display property to "none" or "block"
    // ex: if the index is 1, it sets the display property of the inactive slides to "none", this hides the images
    // and sets the display property of slide 1 to "block", displaying it onscreen.
    // this is a hardcoded example, a for-loop could probably be used as a scalable solution.
    if(index == 1) {
        document.getElementById("slide3").style.display = "none";
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide1").style.display = "block";
    }
    else if(index == 2) {
        document.getElementById("slide3").style.display = "none";
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "block";
    }
    else if(index == 3) {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide3").style.display = "block";
    }
}