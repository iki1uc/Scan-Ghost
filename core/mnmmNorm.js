function mnmmNorm(input){
    if(input.includes("MNMM-MOVE")) return "MOVE";
    if(input.includes("MNMM-ENGINE")) return "ENGINE";
    if(input.includes("MNMM-ORDER")) return "ORDER";
    if(input.includes("MNMM-MANEUVER")) return "MANEUVER";
    if(input.includes("MNMM-ARG")) return "ARGUMENT";
    return "UNKNOWN_MNMM";
}

