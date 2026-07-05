function axisShift(input){
    if(input.includes("AX")) return "AX";
    if(input.includes("XA")) return "XA";
    if(input.includes("AX_OUT")) return "AX-OUT";
    if(input.includes("XA_IN")) return "XA-IN";
    return "UNKNOWN_AXIS";
}

