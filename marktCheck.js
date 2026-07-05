export async function marktCheck() {

    const missing = [];
    let pipeline = "NC‑Pipeline: ";

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

    async function checkFiles(list, type) {
        for (const file of list) {
            try {
                await fetch(file);
            } catch {
                missing.push(type + " fehlt: " + file);
            }
        }
    }

    await checkFiles(markt3.CORE, "CORE");
    await checkFiles(markt3.RESPO, "RESPO");
    await checkFiles(markt3.LINK, "LINK");

    await checkFiles(markt6.ITEMS, "ITEMS");
    await checkFiles(markt6.TMP, "TMP");
    await checkFiles(markt6.EXT, "EXT");

    if (missing.length === 0) {
        pipeline += "MARKT‑6 vollständig.";
        return "✔ " + pipeline + "\nScanGhost ist bereit.";
    }

    if (missing.length <= 3) {
        pipeline += "MARKT‑3 teilweise.";
    } else {
        pipeline += "MARKT‑3 unvollständig.";
    }

    return "✘ " + pipeline + "\n\nFehlende Module:\n" + missing.join("\n");
}
