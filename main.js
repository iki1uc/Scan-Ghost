import { autoBuild } from "./autoBuild.js";

document.getElementById("autobuild").onclick = async () => {
    const result = await marktCheck();
    const missing = result.split("\n").filter(x => x.includes("fehlt"));

    const buildResult = await autoBuild(missing);

    document.getElementById("output").textContent = buildResult;
};
