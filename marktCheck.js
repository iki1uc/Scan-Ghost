export async function marktCheck() {

    const missing = [];
    const wrong = [];

    // MARKT‑3 MODULE
    const markt3 = {
        CORE: [
            "./core/interpret.js",
            "./core/axiRoom.js",
            "./core/auraDirection.js",
            "./core/on3Depth.js",
            "./core/axisShift.js",
            "./core/mnmmNorm.js"
        ],
        RESPO: [
            "./respo/OK.json",
            "./respo/DEFECT.json",
            "./respo/MIXED.json",
            "./respo/NEUTRALIZE.json",
            "./respo/SEPARATE.json"
        ],
        LINK: [
            "./link/AX.json",
            "./link/XA.json",
            "./link/AU_RA.json",
            "./link/RA_AU.json"
        ]
    };

    // MARKT‑6 MODULE
    const markt6 = {
        ITEMS: [
            "./items/AX.json",
            "./items/XA.json",
            "./items/AX_OUT.json",
            "./items/XA_IN.json"
        ],
        TMP: [
            "./TMP/room.json",
            "./TMP/depth.json"
        ],
        EXT: [
            "./AXI/room.json",
            "./AURA/aura.json",
            "./ON3/depth.json",
            "./AXIS/axis.json",
            "./MNMM/mnmm.json"
        ]
    };

    // CHECKER
    async function checkFiles(list, type) {
        for (const file of list) {
            try {
                await fetch(file);
            } catch {
                missing.push(type + " fehlt: " + file);
            }
        }
    }

    // RUN CHECKS
    await checkFiles(markt3.CORE, "CORE");
    await checkFiles(markt3.RESPO, "RESPO");
    await checkFiles(markt3.LINK, "LINK");

    await checkFiles(markt6.ITEMS, "ITEMS");
    await checkFiles(markt6.TMP, "TMP");
    await checkFiles(markt6.EXT, "EXT");

    // RESULT
    if (missing.length === 0) {
        return "✔ MARKT‑6 vollständig — ScanGhost ist bereit.";
    }

    return "✘ MARKT‑System unvollständig:\n\n" + missing.join("\n");
}

