import { marktCheck } from "./marktCheck.js";

document.getElementById("run").onclick = async () => {
    const input = document.getElementById("input").value;
    const output = scanGhostText(input);
    document.getElementById("output").textContent = output;
};

document.getElementById("markt").onclick = async () => {
    const result = await marktCheck();
    document.getElementById("output").textContent = result;
};
