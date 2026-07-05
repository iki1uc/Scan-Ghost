async function runScanGhost(input){
    const axiRoom = (await loadModule('./core/axiRoom.js')).default;
    const auraDirection = (await loadModule('./core/auraDirection.js')).default;
    const on3Depth = (await loadModule('./core/on3Depth.js')).default;
    const axisShift = (await loadModule('./core/axisShift.js')).default;
    const mnmmNorm = (await loadModule('./core/mnmmNorm.js')).default;

    const interpret = (await loadModule('./core/interpret.js')).default;

    return interpret(input, {
        axiRoom,
        auraDirection,
        on3Depth,
        axisShift,
        mnmmNorm
    });
}

