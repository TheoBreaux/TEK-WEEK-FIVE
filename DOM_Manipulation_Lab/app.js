// PART ONE

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:

for (let i = 0; i < menuLinks.length; i++) {
  // Create an <a> element.
  const link = document.createElement("a");
  //   On the new element, add an href attribute with its value set to the href property of the "link" object.
  link.href = menuLinks[i].href;
  // Set the new element's content to the value of the text property of the "link" object.
  link.innerText = menuLinks[i].text;
  //   Append the new element to the topMenuEl element.
  topMenuEl.append(link);
}

// PART TWO

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// // Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";
// // Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// // Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

// // Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.tagName !== "A") {
    return;
  }

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  clickedElement.classList.add("active");

  const linkObject = menuLinks.find((link) => {
    return link.text === clickedElement.textContent;
  });

  showingSubMenu = linkObject && linkObject.subLinks;

  if (showingSubMenu) {
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  console.log(clickedElement.textContent);
});

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach((link) => {
    const subMenuItem = document.createElement("a");
    subMenuItem.href = link.href;
    subMenuItem.textContent = link.text;

    subMenuEl.appendChild(subMenuItem);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.tagName !== "A") {
    return;
  }

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  mainEl.innerHTML = "";

  if (clickedElement.textContent === "about") {
    const h1Element = document.createElement("h1");
    h1Element.textContent = "About";
    mainEl.appendChild(h1Element);
  }

  console.log(clickedElement.textContent);
});
