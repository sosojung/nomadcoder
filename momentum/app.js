const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    const currenColor = h1.style.color;
    let newColor;
    if(currenColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
