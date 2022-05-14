console.clear()

// https://splitting.js.org/guide.html#data-splitting-attribute
Splitting();

// let cursor = document.querySelector('.cursor'),
// cursorText = cursor.querySelectorAll('.char');
let cursor = document.querySelector('.circlebtn_cursor'),
    cursorText = document.querySelectorAll('.char')

function rounded(radius) {

    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, { transformOrigin: "center center", rotation: 0, width: radius * 2, height: radius * 2 })

    }

    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, { rotation: 360, duration: 10, ease: "none", })
}

let radius = 100

function init() {
    rounded(radius);
}

window.addEventListener("load", function () {
    init();
})


