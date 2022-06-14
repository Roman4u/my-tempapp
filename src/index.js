import React from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
    <App />
)