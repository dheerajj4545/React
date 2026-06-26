import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>Hii Dheeraj</h1>
    </div>
  );
}

// const reactElement={
//     type:'a',
//     props:{
//         href:'https//google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherUser='Hii Dheeraj'

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  anotherUser
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(reactElement);
