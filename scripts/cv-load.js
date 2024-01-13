let preson1 = {
    profilePic: '../images/feature.png',
    firstName: "John",
    lastName: "Smith",
    cv: 'sdfsf',
}

const list = document.getElementById('cv-list');

function stuff() {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h1');
    name.textContent = "john smith";
    name.style.fontSize - "1.6rem"
    image.src = "./images/feature.png"
    image.style.height = "100px"
    image.style.width = "100px"
    div.style.padding = "20px";
    div.style.display = "flex";
    div.style.borderRadius = "20px";
    div.style.flexDirection = "row";
    div.style.margin = "10px"
    div.style.justifyContent = "space-between";
    div.appendChild(name);
    div.appendChild(image);
    list.appendChild(div);
    div.style.backgroundColor = "red";
    div.style.width = "fit-content";
    div.style.height = "fit-content";
}

function execute() {
    for (let x = 1; x < 10; x++) {
        stuff();
    }
}

window.onload = execute();