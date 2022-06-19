const arr = []

for ( i = 0; i <= 100; i++) {
    arr.push(i)
}
const initialValue = 0;
const sumWithInitial = arr.reduce(
    (previousValue , currentValue) => previousValue + currentValue,
    initialValue
)
console.log(sumWithInitial);
