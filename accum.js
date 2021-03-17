/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/
function accum(tekst){
    if (tekst.includes(1,2,3,4,5,6,7,8,9,0,null)) console.log("wpisz ciąg zawierający tylko litery");
    const wynik=[];
const a=tekst.length;
tekst=[];
let i=0;
let j=1;
do {

i++
}
while (i<=a);
console.log(wynik);
}

accum("Maciek");