export async function respoCheck() {

    const respo = [
        "OK",
        "DEFECT",
        "MIXED",
        "NEUTRALIZE",
        "SEPARATE"
    ];

    const missing = [];

    for (const r of respo) {
        try {
            await fetch("./respo/" + r + ".json");
        } catch {
            missing.push("RESPO fehlt: " + r);
        }
    }

    if (missing.length === 0) {
        return "✔ Alle RESPO‑Plätze sind vorhanden.";
    }

    return "✘ RESPO‑Fehler:\n\n" + missing.join("\n");
}
