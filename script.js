let images=[];
let index=0;
let slideInterval;
let transitionType = "fade"; // default

// PASSWORD
function checkPass(){
    let p=document.getElementById("pass").value;
    if(p==="iloveyou"){
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("intro").style.display="flex";
    }else{
        alert("Wrong password 😒");
    }
}

function enterSite(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";

    let audio = document.getElementById("music");
    audio.volume = 0.5;
    audio.play().catch(() => console.log("User interaction required to play music"));

    showCategory("us");
    setTimeout(()=> openMessage(),2000);
}

// change category
function showCategory(type){
    if(type==="us"){
        document.body.style.background="linear-gradient(black,pink)";
        images=["us/her1.jpg","us/her2.jpeg","us/her3.jpeg","us/us4.jpg","us/her4.jpeg","us/her5.jpg","us/her6.jpg","us/her8.jpeg","us/her9.jpg","us/her10.jpeg","us/her11.jpg","us/her12.jpg","us/her13.jpeg","us/her15.jpg","us/her16.jpg","us/her17.jpg","us/her18.jpg","us/her19.jpg"];
    }
    if(type==="her"){
        document.body.style.background="linear-gradient(black,red)";
        images=["her/y1.jpg","her/y2.jpg","her/y3.jpeg","her/y4.png","her/y5.png","her/y6.jpeg","her/1.jpeg","her/2.jpg","her/3.jpg","her/4.jpg","her/5.jpg","her/6.jpg","her/7.jpg","her/8.jpg","her/9.jpg","her/10.jpg","her/11.jpg","her/12.jpg","her/13.jpg","her/14.jpg","her/15.jpg","her/16.jpg","her/17.jpg","her/18.jpg","her/19.jpg","her/20.jpg","her/21.jpg","her/22.jpg","her/23.jpg","her/24.jpg","her/25.jpg","her/26.jpg","her/27.jpeg","her/28.jpeg","her/29.jpeg"];
    }
    if(type==="mine"){
        document.body.style.background="linear-gradient(black,blue)";
        images=["mine/me1.jpg","mine/me2.jpg","mine/me3.jpg","mine/me4.jpg","mine/5.jpg","mine/me6.jpg","mine/me7.jpg","mine/me8.jpg","mine/1.jpg","mine/2.jpg","mine/3.jpg","mine/4.jpeg","mine/5.jpg","mine/6.jpeg","mine/7.jpeg","mine/8.jpg"];
    }

    index=0;
    startSlide();
    loadGallery();
}

// change transition from select
function changeTransition(type){
    transitionType = type;
    startSlide();
}

// slideshow with multiple transitions
function startSlide(){
    clearInterval(slideInterval);
    let slide = document.getElementById("slide");

    function showNext(){
        switch(transitionType){
            case "fade":
                slide.style.opacity = 0;
                setTimeout(()=>{
                    index = (index + 1) % images.length;
                    slide.src = images[index];
                    slide.style.opacity = 1;
                },500);
                break;

            case "slide":
                slide.style.transform = "translateX(-100%)";
                slide.style.opacity = 0;
                setTimeout(()=>{
                    index = (index + 1) % images.length;
                    slide.src = images[index];
                    slide.style.transform = "translateX(100%)";
                    slide.style.opacity = 1;
                    setTimeout(()=> slide.style.transform="translateX(0)",50);
                },700);
                break;

            case "zoom":
                slide.style.opacity = 0;
                slide.style.transform = "scale(1)";
                setTimeout(()=>{
                    index = (index + 1) % images.length;
                    slide.src = images[index];
                    slide.style.opacity = 1;
                    slide.style.transform = "scale(1.2)";
                },500);
                break;

            case "flip":
                slide.style.transform = "rotateY(90deg)";
                slide.style.opacity = 0;
                setTimeout(()=>{
                    index = (index + 1) % images.length;
                    slide.src = images[index];
                    slide.style.transform = "rotateY(-90deg)";
                    slide.style.opacity = 1;
                    setTimeout(()=> slide.style.transform="rotateY(0deg)",50);
                },700);
                break;

            case "blur":
                slide.style.filter = "blur(10px)";
                slide.style.opacity = 0;
                setTimeout(()=>{
                    index = (index + 1) % images.length;
                    slide.src = images[index];
                    slide.style.filter = "blur(10px)";
                    slide.style.opacity = 1;
                    setTimeout(()=> slide.style.filter="blur(0px)",50);
                },700);
                break;
        }
    }

    slide.src = images[index];
    slide.style.opacity = 1;
    slide.style.transform = "scale(1)";
    slide.style.filter = "blur(0px)";

    slideInterval = setInterval(showNext,1000);
}

// gallery with float and stagger
function loadGallery(){
    let g=document.getElementById("gallery");
    g.innerHTML="";

    images.forEach((pic)=>{
        let img=document.createElement("img");
        img.src=pic;

        // random position buong screen
        let x=Math.random()*90;
        let y=Math.random()*80;
        let r=(Math.random()*40)-20;
        let size=80 + Math.random()*120;

        img.style.left=x+"%";
        img.style.top=y+"%";
        img.style.transform="rotate("+r+"deg)";
        img.style.width=size+"px";
        img.style.height=size+"px";

        g.appendChild(img);
    });
}

// MESSAGE POPUP
let msg = "I love you always hon. Kahit anong mangyari, ikaw at ikaw parin. Asa ka kung susukuan kita😝. Ikaw ang pinaka magandang nangyari sa buhay ko ❤️";
let i=0;

function openMessage(){
    document.getElementById("messageBox").style.display="flex";
    i = 0;
    typeMessage();
}

function closeMessage(){
    document.getElementById("messageBox").style.display="none";
}

function typeMessage(){
    let target=document.getElementById("loveText");
    target.innerHTML="";
    let typing=setInterval(()=>{
        if(i<msg.length){
            target.innerHTML+=msg.charAt(i);
            i++;
        }else{
            clearInterval(typing);
        }
    },40);
}

// LOVE LETTER PAGE
function showLoveLetter(){
    document.getElementById("main").style.display="none";
    document.getElementById("loveLetter").style.display="block";
    document.body.style.background="linear-gradient(black,purple)";
}

function backToMain(){
    document.getElementById("loveLetter").style.display="none";
    document.getElementById("main").style.display="block";
    showCategory("us");
}

// SECRET MESSAGE KEY
document.addEventListener("keydown",function(e){
    if(e.key==="l" || e.key==="L"){
        alert("Secret message: Ikaw lang ang mahal ko habang buhay ❤️");
    }
});
