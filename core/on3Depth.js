function on3Depth(input){
    if(input.includes("3x3")) return "DEPTH-3";
    if(input.includes("3x6")) return "DEPTH-6";
    if(input.includes("3x9")) return "DEPTH-9";
    if(input.includes("PI-3x9")) return "DEPTH-PI9";
    return "UNKNOWN_DEPTH";
}

