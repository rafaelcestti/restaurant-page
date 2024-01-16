import icon from "./static/icon.jpg";

function homeTab() {
    const body = document.querySelector("body");

    // Create Main with img, header, and subheader
    const content = document.createElement("content");
    content.className = "home";

    const iconImg = document.createElement("img");
    iconImg.src = icon;
    content.appendChild(iconImg);

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "McDonald's: A Fast Food Revolution";
    content.appendChild(mainHeader);

    const subHeader = document.createElement("h3");
    subHeader.textContent = "Delighting taste buds around the globe with its iconic, irresistible flavors.";
    content.appendChild(subHeader);

    // Append main to body
    body.appendChild(content);
}

export default homeTab;
