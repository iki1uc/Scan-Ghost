import { moveKalkuel } from "./move.js";

document.getElementById("move").onclick = () => {
    const out = document.getElementById("output");
    out.style.color = "#ffaa00";
    out.style.animation = "pulse 1.8s infinite";
    out.textContent = moveKalkuel();
};
