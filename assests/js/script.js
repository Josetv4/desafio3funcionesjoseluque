//script para document pintar.html
const container = document.getElementById("ele");
function paintContainer(color = "green") {
    container.style.backgroundColor = color;
}
paintContainer();

container.addEventListener("click", () => {
    paintContainer("yellow");
    });



