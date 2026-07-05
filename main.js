import { respoCheck } from "./respoCheck.js";

document.getElementById("respo").onclick = async () => {
    const result = await respoCheck();
    const out = document.getElementById("output");

    out.style.color = "#00ccff";
    out.style.animation = "pulse 1.8s infinite";
    out.textContent = result;
};
