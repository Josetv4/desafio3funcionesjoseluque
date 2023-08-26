//Variables:
const ele1 = document.querySelector("#blue");
const ele2 = document.querySelector("#red");
const ele3 = document.querySelector("#green")
const ele4 = document.querySelector("#yellow");
const element = document.querySelector("#key");
const newDiv = document.querySelector("section")
const aggDiv = document.createElement('div')
const aggDiv1 = document.createElement('div')
const aggDiv2 = document.createElement('div')

ele1.addEventListener("click", () => {
    if (ele1.style.backgroundColor != "black") {
        ele1.style.backgroundColor = "black";
    }
    else {
        ele1.style.backgroundColor = "blue"
    }
});

ele2.addEventListener("click", () => {
    if (ele2.style.backgroundColor != "black") {
        ele2.style.backgroundColor = "black";
    }
    else {
        ele2.style.backgroundColor = "red"
    }
});

ele3.addEventListener("click", () => {
    if (ele3.style.backgroundColor != "black") {
        ele3.style.backgroundColor = "black";
    }
    else {
        ele3.style.backgroundColor = "green"
    }
});

ele4.addEventListener("click", () => {
    if (ele4.style.backgroundColor != "black") {
        ele4.style.backgroundColor = "black";
    }
    else {
        ele4.style.backgroundColor = "yellow"
    }
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        element.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        element.style.backgroundColor = "orange";
    }
    else if (event.key === 'd') {
        element.style.backgroundColor = "skyblue";
    }
    })
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        newDiv.appendChild(aggDiv)
        aggDiv.style.backgroundColor = "purple";
        aggDiv.style.width = "200px";
        aggDiv.style.height = "200px"
    }
    if (event.key === 'w') {
        newDiv.appendChild(aggDiv1)
        aggDiv1.style.backgroundColor = "gray";
        aggDiv1.style.width = "200px";
        aggDiv1.style.height = "200px"
    }
    if (event.key === 'e') {
        newDiv.appendChild(aggDiv2)
        aggDiv2.style.backgroundColor = "brown";
        aggDiv2.style.width = "200px";
        aggDiv2.style.height = "200px";
    }
})