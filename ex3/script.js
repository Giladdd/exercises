(() => {
    let boxes = document.getElementById("boxes");
    console.log(boxes);
    let opacityChanger = 0.1;
    for (let i = 0; i < 32; i++) {
        let box = document.createElement("div");
        opacityChanger = opacityChanger + 0.1;
        if (opacityChanger > 1)
            opacityChanger = 0.1;
        box.style.opacity = opacityChanger;
        box.className = "block";
        console.log(boxes);
        box.onmouseover = function(clicked) {
            clicked.target.style.backgroundColor = 'blueviolet';
        };
        box.onmouseout = function(clicked) {
            clicked.target.style.removeProperty("background-Color");
        };

        boxes.appendChild(box);

    }


})();

let plus = document.getElementById("btn");
let boxArray = document.getElementsByClassName("block")[2];

const colors = ['yellow', 'black', 'blue', 'purple'];
let index = 0;
plus.addEventListener('click', function boxChange() {
    boxArray.style.backgroundColor = colors[index];
    boxArray.style.opacity = index + 0.1;
    index = index + 1;
    if (index > 3) index = 0;

})


let reset = document.getElementById("reset");
reset.addEventListener('click', function boxChange() {
    boxArray.style.removeProperty("background-Color");
    boxArray.style.opacity = 0.4;
})