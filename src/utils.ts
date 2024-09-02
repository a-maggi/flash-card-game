export const getRandomNumbers = (n: number, min: number, max: number): number[] => {
    const numbers: number[] = [];
    while (numbers.length < n) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
};

export const shuffleArray = (array: number[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
