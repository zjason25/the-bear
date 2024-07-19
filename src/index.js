import './style.css';

const homeBtn = document.querySelector("button.home.logo");
const aboutBtn = document.querySelector("button.navigation.about");
const menuBtn = document.querySelector("button.navigation.menus");


homeBtn.addEventListener("click", addHomeContent);
aboutBtn.addEventListener("click", addAboutContent);
menuBtn.addEventListener("click", addMenuContent);


function clearContent() {
  const content = document.querySelector("#content")
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function addHomeContent() {
  clearContent();
  // change background image
  const root = document.querySelector(':root');
  const image = getComputedStyle(root).getPropertyValue('--background-home');
  document.body.style.backgroundImage = image;

  // add content
  const content = document.querySelector("#content")
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  let greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerText = "Welcome to";

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerText = "THE BEAR";
  greeting.appendChild(name);

  let message = document.createElement("p");
  message.innerText = "where culinary artistry meets the heart of Chicago. "
    + "Our fine dining establishment invites you to experience a harmonious blend of sophistication, innovation, and tradition."
    + "We are committed to delivering an exceptional dining experience, crafted with passion and precision.";

  homeContainer.appendChild(greeting);
  homeContainer.appendChild(message);
  content.appendChild(homeContainer);

  console.log("created home div");
}

function addAboutContent() {
  clearContent();
  const root = document.querySelector(':root');
  const image = getComputedStyle(root).getPropertyValue('--background-about');
  document.body.style.backgroundImage = image;

  const content = document.querySelector("#content")
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("about-container");

  let left = document.createElement("div");
  let right = document.createElement("div");
  left.classList.add("left");
  right.classList.add("right");

  let header_logo = document.createElement("p");
  header_logo.innerText = "THE BEAR";
  header_logo.className = "header logo";

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const p9 = document.createElement('p');
  const p10 = document.createElement('p');
  p1.textContent = 'At The Bear, we have elevated our roots to offer an exquisite dining experience. Under the visionary leadership of Chef Carmen "Carmy" Berzatto, we transform seasonal ingredients into masterpieces that tell a story of dedication and creativity. Each dish is thoughtfully curated to provide an unforgettable culinary experience.';
  p2.textContent = "The Bear is more than just a restaurant; it's a narrative of evolution and excellence. Born from the legacy of The Original Beef of Chicagoland, we have reimagined our space and our cuisine to create a fine dining destination that honors our past while embracing the future.";
  p3.textContent = 'Located in the heart of Chicago, The Bear offers an elegant and inviting atmosphere, perfect for intimate dinners and special occasions. We look forward to providing you an exceptional dining experience.';
  p4.className = "header";
  p4.textContent = 'Hours';
  p5.textContent = "Sunday - Wednesday";
  p6.textContent = "Dinner 5:30PM - 11:30PM";
  p7.textContent = "Bar opens at 5PM";
  p8.textContent = "Thursday - Saturday";
  p9.textContent = "Dinner 5:30PM - 11:30PM";
  p10.textContent = "Bar opens at 5PM";
  left.appendChild(header_logo);
  left.appendChild(p1);
  left.appendChild(p2);
  left.appendChild(p3);
  left.appendChild(document.createElement("br"));
  left.appendChild(p4);
  left.appendChild(p5);
  left.appendChild(p6);
  left.appendChild(p7);
  left.appendChild(document.createElement("br"));
  left.appendChild(p8);
  left.appendChild(p9);
  left.appendChild(p10);

  const p11 = document.createElement('p');
  const p12 = document.createElement('p');
  const p13 = document.createElement('p');
  const p14 = document.createElement('p');
  const p15 = document.createElement('p');
  const p16 = document.createElement('p');
  const p17 = document.createElement('p');
  const p18 = document.createElement('p');
  const p19 = document.createElement('p');
  const p20 = document.createElement('p');
  p11.className = "header";
  p11.textContent = "Kitchen";
  p12.textContent = 'Carmen "Carmy" Berzatto, Executive Chef';
  p13.textContent = 'Sydney "Syd" Adamu, Chef de Cuisine';
  p14.textContent = "Tina Marrero, Sous Chef";
  p15.textContent = "Marcus Brooks, Pastry Chef";
  p16.textContent = "Ebraheim, Line Cook";
  p17.className = "header";
  p17.textContent = "Dining Room";
  p18.textContent = 'Richard "Richie" Jerimovich, Front of House Manager';
  p19.textContent = 'Gary "Sweeps" Woods, Sommelier';
  p20.textContent = "Neil Fak, Maintenance and Support";
  right.appendChild(p11);
  right.appendChild(document.createElement("br"));
  right.appendChild(p12);
  right.appendChild(p13);
  right.appendChild(p14);
  right.appendChild(p15);
  right.appendChild(p16);
  right.appendChild(document.createElement("br"));
  right.appendChild(p17);
  right.appendChild(document.createElement("br"));
  right.appendChild(p18);
  right.appendChild(p19);
  right.appendChild(p20);

  homeContainer.appendChild(left);
  homeContainer.appendChild(right);

  content.appendChild(homeContainer);
}

function addMenuContent() {
  clearContent();
  const root = document.querySelector(':root');
  const image = getComputedStyle(root).getPropertyValue('--background-menu');
  document.body.style.backgroundImage = image;
  const content = document.querySelector("#content")

  const menu_container = document.createElement("div");
  menu_container.className = "menu-container";

  const menu_header = document.createElement("p");
  menu_header.textContent = "Dinner Courses";
  menu_header.className = "menu-header";

  const menu_list = document.createElement("ul");

  let courses = ['MIREPOIX BROTH', 'CAULIFLOWER / SWISS CHARD',
    'HAMACHI / GRAPEFRUIT', 'RAVIOLO / PEA / PECORINO',
    'ASPARAGUS / QUAIL EGG / POTATO',
    'DUCK / APRICOT', 'BEEF TENDERLOIN / CHERRY JUS',
    'PRINCESS CAKE', 'CHOCOLATE VELOUTE'
  ]

  for (let i = 0; i < courses.length; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(courses[i]));
    menu_list.appendChild(li);
  }

  menu_container.appendChild(menu_header);
  menu_container.appendChild(menu_list);
  content.appendChild(menu_container);
}

function startUp() {
  addHomeContent();
}

startUp();