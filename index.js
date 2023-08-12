gsap.to(".imagecontainer",{
        ease: Expo.easeInOut,
        width: "100%",
        stagger: 2
})

gsap.to(".text h2",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
})

gsap.to(".text h2",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
})