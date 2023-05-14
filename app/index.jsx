import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Create index.html
const div = document.createElement("div");
div.setAttribute("id", "root");
document.body.appendChild(div);

// Render the application
const root = createRoot(document.getElementById("root"));
root.render(<App />);
