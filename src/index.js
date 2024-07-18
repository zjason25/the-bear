import './style.css';

const homeBtn = document.querySelector("button.home.name");

homeBtn.addEventListener("click", addHomeContent);

function addHomeContent() {
  const content = document.querySelector("#content")
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("container");

  let greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerText = "Welcome to";

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerText = "The Bear";
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