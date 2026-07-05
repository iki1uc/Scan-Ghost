document.getElementById("markt").onclick = async () => {
    const result = await marktCheck();
    const out = document.getElementById("output");

    out.style.animation = "pulse 1.8s infinite";

    if (result.startsWith("✔")) {
        out.style.color = "#00ff00"; // GRÜN
    } else {
        out.style.color = "#ff3333"; // ROT
    }

    out.textContent = result;
};
