let t1 = gsap.timeline({scrollTrigger:{
    trigger:".page-2",
    start:"10% 90%",
    end:"50% 50%",
    scrub:3
}});
t1.to("#fanta",{
    y:"100vh",
    x:"-25vw",
    rotation:"360deg",
    scale:0.9
},"animation1")

t1.to("#orange2",{
    y:"100vh",
    x:"-24vh",
    rotation:"360deg",
    scale:0.9
},"animation1")

t1.to("#orange",{
    y:"100vh",
    x:"70vh",
    rotation:"360deg",
    scale:0.9
},"animation1")

t1.to("#leaf",{
    y:"90vh",
    left:"180vh",
    rotation:"-60deg",
    scale:0.9
},"animation1")

t1.to("#leaf2",{
    y:"90vh",
    right:"183vh",
    rotation:"360deg",
    scale:0.9,
    zIndex:2
},"animation1")


let t2 = gsap.timeline({scrollTrigger:{
    trigger:".page-3",
    start:"10% 90%",
    end:"50% 50%",
    scrub:5
}});
t2.from(".lemon-1",{
    y:"100vh",
    right:"40vw",
    rotation:"360deg"
},"animation2")

t2.from("#cocacola",{
    y:"100vh",
    right:"40vw",
    rotation:"360deg"
},"animation2")

t2.from("#pepsi",{
    y:"100vh",
    right:"40vw",
    rotation:"360deg"
},"animation2")

t2.from(".lemon-2",{
    y:"100vh",
    left:"40vw",
    rotation:"360deg"
},"animation2")

t2.to("#fanta",{
    y:"189vh",
    x:"0",
    rotation:"-360deg",
    width:"37%",
    scale:0.8,
},"animation3")

t2.to("#orange2",{
    y:"189vh",
    x:"5vw",
    rotation:"-360deg",
    scale:0.7
},"animation3")