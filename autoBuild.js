
export async function autoBuild(missingList) {

    for (const entry of missingList) {

        const file = entry.split(": ")[1];

        const emptyContent = "{}";

        await fetch(file, {
            method: "PUT",
            body: emptyContent
        });
    }

    return "Auto‑Build abgeschlossen.";
}
