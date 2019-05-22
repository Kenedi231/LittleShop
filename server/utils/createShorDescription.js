const length = 40;

const createShortDescription = function(str) {
    if (str.length < length) return str;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str[i];
    }
    result += '...';
    return result;
};

module.exports = createShortDescription;