import ronaldMcdonald from "./static/ronald-mcdonald.jpg";
import grimace from "./static/grimace.jpg";

function contactTab() {
    const body = document.querySelector("body");

    // Create Main with img, header, and subheader
    const content = document.createElement("content");
    content.className = "content";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "Contact us!";
    content.appendChild(mainHeader);

    // Ronald Mcdonald Section
    const ronaldMcdonaldHeading = document.createElement("h2");
    ronaldMcdonaldHeading.textContent = "Ronald Mcdonald - 123-456-789";
    content.appendChild(ronaldMcdonaldHeading);

    const ronaldMcdonaldImage = document.createElement("img");
    ronaldMcdonaldImage.src = ronaldMcdonald;
    content.appendChild(ronaldMcdonaldImage);

    // Grimace Section
    const grimaceHeading = document.createElement("h2");
    grimaceHeading.textContent = "Grimace - 987-654-321";
    content.appendChild(grimaceHeading);

    const grimaceImage = document.createElement("img");
    grimaceImage.src = grimace;
    content.appendChild(grimaceImage);

    // Append main to body
    body.appendChild(content);
}

export default contactTab;
