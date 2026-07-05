document.getElementById("run").onclick = async () => {
    const input = document.getElementById("input").value;
    const output = await interpretInput(input);
    document.getElementById("output").textContent = output;
};

