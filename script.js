function navAnimation() {
    var nav = document.querySelector("nav")



    // Mouse Enter
    nav.addEventListener("mouseenter", function () {
        var tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "21vh"
        })
        tl.to("nav .nav-dropdown-item", {
            display: "block",
            x:20,
            duration:0.6,
            stagger:0.3,
            repeat:true
        })
        tl.from("nav .nav-dropdown-item", {
            y:20,
            stagger:0.6
        })
    })

    // Mouse Leave

    nav.addEventListener("mouseleave", function () {
        var tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "0vh"
        })
        tl.to("nav .nav-dropdown", {
            display: "block"
        })
        tl.to("nav .nav-dropdown", {
            y: 20,
            stagger: {
                amount: 0.2
            }
        })
    })

}

navAnimation()

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3], {
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3], {
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3], {
                x:dets.x - elem.getBoundingClientRect().x-10,
                y:dets.y - elem.getBoundingClientRect().y-60
            })
    })
    
})
}

page2Animation ()

function page3Video(){
    var page3center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click", function(){
    video.play()
    gsap.to(video, {
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click", function(){
    video.pause()
    gsap.to(video, {
        transform:"scaleX(0) scaleY(0)",
        opacity:0,
        borderRadius:0
    })
})
}
page3Video ()

function sec6Video(){
    var sec6 = document.querySelectorAll(".sec6-right")

sec6.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })

})
}

sec6Video ()

function projectCards (){
    var projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(function (card) {
        var video = card.querySelector('video');
        
        card.addEventListener('mouseenter', function () {
            video.style.opacity = 1;
            video.play();
        });
    
        card.addEventListener('mouseleave', function () {
            video.style.opacity = 0;
            video.pause();
            video.currentTime = 0;
        });
    });
}

projectCards ()

function page8Animation(){
    gsap.from("#bottom8-part2 h4, #bottom8-part3 h4, #bottom8-part4 h4", {
        x:100,
        duration:1,
        scrollTrigger:{
            trigger:"#bottom8-part2",
            scroller:"body",
            start:"top 80%",
            end:"top 10%",
            scrub:true
            
        }
    })
}
page8Animation ()

function loadingAnimation(){
    var tl = gsap.timeline();
tl.from("#page1", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2
});
tl.from("#page1", {
    scaleX: 0.7,
    scaleY: 0.2,
    y: "80%",
    duration: 1,
    ease: "expo.out"
});
tl.from("nav", {
    opacity: 0
});
tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
});

}

loadingAnimation ()





