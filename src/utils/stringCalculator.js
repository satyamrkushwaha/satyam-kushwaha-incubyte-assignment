function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    numbers = numbers.trim();
    
    let delimiter = /[\n,]/;  // Default delimiters are newline and comma
    let result = cusDelimiter(delimiter, numbers);
    delimiter = result.delimiter;
    numbers = result.numbers;

    const numArray = numbers.split(delimiter);
    const negatives = numArray.filter(num => parseInt(num) < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

function cusDelimiter(delimiter, numbers) {
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    return { delimiter, numbers };
}

export default add;
