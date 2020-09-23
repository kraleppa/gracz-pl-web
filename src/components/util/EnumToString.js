export const consoleToString = (consoleEnum) => {
    switch (consoleEnum) {
        case "XBOX_ONE": return "Xbox One";
        case "PLAYSTATION_4": return "Playstation 4";
        case "NINTENDO_SWITCH": return "Nintendo Switch";
        default: return null;
    }
}

export const genreToString = (genreEnum) => {
    switch (genreEnum) {
        case "ACTION": return "Akcja";
        case "RPG": return "RPG";
        case "ADVENTURE": return "Przygodowa";
        case "SHOOTING": return "Strzelanka";
        case "STRATEGY": return "Strategia"
        case "SIMULATOR": return "Symulator";
        case "CASUAL": return "Casualowa";
        case "SPORTS": return "Sport";
        case "ARCADE": return "Arkadowa";
        case "RACING": return "Wyścigowa";
        case "HORROR": return "Horror";
        case "MMO": return "MMO";
        case "FIGHTING": return "Bijatyka";
        default: return null;
    }
}

export const statusToString = (statusEnum) => {
    switch (statusEnum) {
        case "NEW": return "Nowe";
        case "PAYED": return "Zapłacone";
        case "SENT": return "Wysłane";
        default: return null;
    }
}

