import bigMac from "./static/big-mac.jpeg";
import mcChicken from "./static/mc-chicken.jpeg";
import caramelSundae from "./static/caramel-sundae.jpeg";

function menuTab() {
    const body = document.querySelector("body");

    // Create Main with img, header, and subheader
    const content = document.createElement("content");
    content.className = "content";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "Lunch Menu";
    content.appendChild(mainHeader);

    // Big Mac Section
    const bigMacHeading = document.createElement("h2");
    bigMacHeading.textContent = "Big Mac - $15";
    content.appendChild(bigMacHeading);

    const bigMacImage = document.createElement("img");
    bigMacImage.src = bigMac;
    content.appendChild(bigMacImage);

    // McChicken Section
    const mcChickenHeading = document.createElement("h2");
    mcChickenHeading.textContent = "McChicken - $12";
    content.appendChild(mcChickenHeading);

    const mcChickenImage = document.createElement("img");
    mcChickenImage.src = mcChicken;
    content.appendChild(mcChickenImage);

    // Caramel Sundae Section
    const caramelSundaeHeading = document.createElement("h2");
    caramelSundaeHeading.textContent = "Caramel Sundae - $7";
    content.appendChild(caramelSundaeHeading);

    const caramelSundaeImage = document.createElement("img");
    caramelSundaeImage.src = caramelSundae;
    content.appendChild(caramelSundaeImage);

    // Append main to body
    body.appendChild(content);
}

export default menuTab;
