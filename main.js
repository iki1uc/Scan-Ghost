import { ghostCheck } from "./ghostChecker.js";

document.getElementById("run").onclick = async () => {
    const check = await ghostCheck();
    document.getElementById("output").textContent = check;
};
