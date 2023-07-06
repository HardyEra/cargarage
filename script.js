// var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x-10+"px"
//     crsr.style.top =dets.y-10+"px"
    blur.style.left = dets.x-125+"px"
    blur.style.top =dets.y-125+"px"
})
gsap.to("#nav",{
    backgroundColor:"#0B6EA3",
    // fontColor:"#DE0D0D",
    duration:1,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
         scrub:3,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:3,
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:60,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        strat:"top 60%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.from(".card",{
    x:60,
    opacity:0,
    duration:0.6,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        strat:"left 60%",
        end:"left 55%",
        scrub:2,
    }
})
gsap.from(".play",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".play",
        scroller:"body",
        strat:"top 70%",
        end:"left 55%",
        scrub:2,
    }
})