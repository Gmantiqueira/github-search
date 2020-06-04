export default function (num) {
    let result = Math.sign(num) * Math.abs(num);

    if (Math.abs(num) > 999) {
        result = Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k';
    }

    if (Math.abs(num) > 999999) {
        result = Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'm';
    }

    return result;
}
