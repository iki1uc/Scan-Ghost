async function interpretInput(text){
    const result = await runScanGhost(text);
    return JSON.stringify(result, null, 4);
}

