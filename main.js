import { respoBewertung } from "./bewertung.js";

document.getElementById("bewertung").onclick = () => {
    const out = document.getElementById("output");
    out.style.color = "#00ccff";
    out.style.animation = "pulse 1.8s infinite";
    out.textContent = respoBewertung();
};
