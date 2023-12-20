import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/sidebar/sidebar";

const section = document.createElement('section');
document.body.appendChild(section);
const shadow = section.attachShadow({ mode: "open" });
ReactDOM.createRoot(shadow).render(
    <React.StrictMode>
        <Sidebar></Sidebar>
    </React.StrictMode>
);
