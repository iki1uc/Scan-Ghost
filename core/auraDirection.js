function auraDirection(input){
    if(input.includes("AU_to_RA")) return "AU→RA";
    if(input.includes("RA_to_AU")) return "RA→AU";
    if(input.includes("indoor")) return "INDOOR";
    if(input.includes("outdoor")) return "OUTDOOR";
    if(input.includes("forward")) return "FORWARD";
    if(input.includes("back")) return "BACK";
    return "UNKNOWN_DIRECTION";
}

