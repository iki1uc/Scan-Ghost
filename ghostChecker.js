export async function ghostCheck() {

    const missing = [];

    // CORE CHECK
    const coreFiles = [
        "./core/interpret.js",
        "./core/axiRoom.js",
        "./core/auraDirection.js",
        "./core/on3Depth.js",
        "./core/axisShift.js",
        "./core/mnmmNorm.js"
    ];

    for (const file of coreFiles) {
        try {
            await import(file);
        } catch {
            missing.push("CORE fehlt: " + file);
        }
    }

    // RESPO CHECK
    const respoFiles = [
        "./respo/OK.json",
        "./respo/DEFECT.json",
        "./respo/MIXED.json",
        "./respo/NEUTRALIZE.json",
        "./respo/SEPARATE.json"
    ];

    for (const file of respoFiles) {
        try {
            await fetch(file);
        } catch {
            missing.push("RESPO fehlt: " + file);
        }
    }

    // RESULT
    if (missing.length === 0) {
        return "✔ Ghost Scan ist vollständig und funktionsbereit.";
    }

    return "✘ Ghost Scan fehlt:\n\n" + missing.join("\n");
}
