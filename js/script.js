let loader = document.querySelector(".loading");
setTimeout(()=>{
loader.style.display = "none";
}, 5000)

// dom elements
let body = document.getElementById("body");

function closeMenu(){
    body.style = "grid-template-columns: 0 100% 0"
}

// for left-menu
function openLeftMenu(){
    body.style = "grid-template-columns: 100% 0 0";
}
// for right menu
function openRightMenu(){
    body.style = "grid-template-columns: 0 0 100%";
}

// for horizontal scroll
let hScrollBox = document.querySelectorAll(".horizontal-scroll-holder");

// scroll left
function swipeLeft(i){
    hScrollBox[i].scrollLeft -= 250
}

function swipeRight(i){
    hScrollBox[i].scrollLeft += 250
}

//slide show
let slideshow = document.querySelector(".slideshow")
let slideMaxNo = slideData.length;
let index = 0;
function next(){
    if(index != slideMaxNo){
        slideshow.innerHTML= `
        <div class="slide">
            <img src="${slideData[index].imgsrc}" alt="">
            <div class="banner-description">
                <h2 class="description">${slideData[index].name}</h2>
                <p>${slideData[index].tags}</p>
                <button class="m15">Watch</button>
                <button class="add" > + </button>
            </div>
            <button class="add" id="swipe" onclick="next()">&#62</button>
        </div>
    `
    }
}
function slideShow(){
    console.log(slideMaxNo)
    if(index == slideMaxNo){
        index= 0;
        slideshow.innerHTML= `
        <div class="slide">
            <img src="${slideData[index].imgsrc}" alt="">
            <div class="banner-description">
                <h2 class="description">${slideData[index].name}</h2>
                <p>${slideData[index].tags}</p>
                <button class="m15">Watch</button>
                <button class="add" > + </button>
            </div>
            <button class="add" id="swipe" onclick="next()">&#62</button>
        </div>
    `
    }
    else{
        slideshow.innerHTML= `
        <div class="slide">
            <img src="${slideData[index].imgsrc}" alt="">
            <div class="banner-description">
                <h2 class="description">${slideData[index].name}</h2>
                <p>${slideData[index].tags}</p>
                <button class="m15">Watch</button>
                <button class="add"> + </button>
            </div>
            <button class="add" id="swipe" onclick="next()">&#62</button>
        </div>
    `
    }
    index++;
    setTimeout(slideShow , 5000)

}


slideShow()