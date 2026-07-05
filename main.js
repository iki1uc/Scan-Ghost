import { marktCheck } from "./marktCheck.js";

document.getElementById("run").onclick = async () => {
    const result = await marktCheck();
    document.getElementById("output").textContent = result;
};
