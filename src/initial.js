import icon from "./icon.jpg";

function pageLoad() {
    const body = document.querySelector("body");

    // Create Navbar with header
    const nav = document.createElement("nav");

    const navHeader = document.createElement("h1");
    navHeader.textContent = "McDonalds";
    nav.appendChild(navHeader);

    // Create Main with img, header, and subheader
    const main = document.createElement("main");

    const iconImg = document.createElement("img");
    iconImg.src = icon;
    main.appendChild(iconImg);

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "McDonald's: A Fast Food Revolution";
    main.appendChild(mainHeader);

    const subHeader = document.createElement("h3");
    subHeader.textContent = "Delighting taste buds around the globe with its iconic, irresistible flavors.";
    main.appendChild(subHeader);

    // Append Navbar and Main to Body
    body.appendChild(nav);
    body.appendChild(main);
}

export default pageLoad;
