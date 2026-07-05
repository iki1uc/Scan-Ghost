import { respoCheck } from "./respoCheck.js";

document.getElementById("respo").onclick = async () => {
    const result = await respoCheck();
    document.getElementById("output").textContent = result;
};
