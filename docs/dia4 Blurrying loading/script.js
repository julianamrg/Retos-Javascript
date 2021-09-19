const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 50);

function blurring() {
    if (load <= 100) {
        console.log(load);

        //0-100%
        loadText.innerText = load + "%";
        //   console.log(loadText.innerText = load + '%')
        load++;

        // 1-0
        loadText.style.opacity = (100 - load) / 100;

        //100-0px
        let x = 50 - load / 2 + "px)"; //40px)
        // 50px)

        bg.style.filter = "blur(" + x;
    }
}
