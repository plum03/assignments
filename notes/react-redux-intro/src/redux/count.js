const count = (prevCount = 0, action) => {
    switch(action.type) {
        case "HANDLE_COUNT":
            return prevCount === 0 ? prevCount : prevCount + action.amount;
            return action.amount + prevCount;
        default:
            return prevCount;
    }
}


export const handleCount = (amount) => {
    return {
        type: "HANDLE_COUNT",
        amount
    }
}
export default count;