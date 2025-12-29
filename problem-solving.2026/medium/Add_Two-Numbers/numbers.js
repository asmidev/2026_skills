const addTwoNumbers = (l1, l2) => {
    let i = 0;
    let j = 0;
    let carry = 0;
    let result = [];

    while (i < l1.length || j < l2.length || carry) {
        const x = i < l1.length ? l1[i] : 0;
        const y = j < l2.length ? l2[j] : 0;

        const sum = x + y + carry;

        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        i++;
        j++;
    }

    return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
