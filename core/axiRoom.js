function axiRoom(input){
    if(input.includes("1tel")) return "1TEL";
    if(input.includes("2tel")) return "2TEL";
    if(input.includes("3tel")) return "3TEL";
    if(input.includes("4tel")) return "4TEL";
    return "UNKNOWN_ROOM";
}

