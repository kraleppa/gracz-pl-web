export const nextOrderState = (orderStateEnum) => {
    switch (orderStateEnum) {
        case "NEW": return "PAYED";
        case "PAYED": return "SENT";
        case "SENT": return "NEW";
        default: return null;
    }
}