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
    tabSection.appendChild(homeTab);

    const menuTab = document.createElement("h3");
    menuTab.textContent = "Menu";
    tabSection.appendChild(menuTab);

    const contactTab = document.createElement("h3");
    contactTab.textContent = "Contact";
    tabSection.appendChild(contactTab);

    // Append tabSection to navbar
    nav.appendChild(tabSection);

    // Append Navbar to Body
    body.appendChild(nav);
}

export default pageLoad;
