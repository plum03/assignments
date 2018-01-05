const validateIp = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
        return arr.every((num) => {
            if(num.length > 3) 
                return false;
            num = Number(num);
            if (!(num < 256 && num >= 0)) 
                return false;
            return true;
            });
    }

module.exports = validateIp;
// str must begin and end with a number str must contain pattern of 1-3 num
// (0-9) followed by single dot, repeat
