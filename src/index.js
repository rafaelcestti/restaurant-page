import loadHomeTab from "./home.js";
import loadMenuTab from "./menu.js";
import loadContactTab from "./contact.js";
import "./static/reset.css";
import "./static/style.css";

function pageLoad() {
    const body = document.querySelector("body");

    // Create Navbar with header
    const nav = document.createElement("nav");

    const navHeader = document.createElement("h1");
    navHeader.textContent = "McDonalds";
    nav.appendChild(navHeader);

    // Add tabs to tabSection
    const tabSection = document.createElement("section");

    const homeTab = document.createElement("h3");
    homeTab.textContent = "Home";
    homeTab.addEventListener("click", () => {
        content.innerHTML = "";
        loadHomeTab();
    });
    tabSection.appendChild(homeTab);

    const menuTab = document.createElement("h3");
    menuTab.textContent = "Menu";
    menuTab.addEventListener("click", () => {
        content.innerHTML = "";
        loadMenuTab();
    });
    tabSection.appendChild(menuTab);

    const contactTab = document.createElement("h3");
    contactTab.textContent = "Contact";
    contactTab.addEventListener("click", () => {
        content.innerHTML = "";
        loadContactTab();
    });
    tabSection.appendChild(contactTab);

    // Append tabSection to navbar
    nav.appendChild(tabSection);

    // Create div container which will contain our content
    const content = document.createElement("div");
    content.className = "content";

    // Append Navbar & Content Div to Body
    body.appendChild(nav);
    body.appendChild(content);
}

// Load pageLoad and loadHomeTab to populate page on startup
pageLoad();
loadHomeTab();
