/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/
function accum(tekst) {
  if (tekst.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null))
    console.log("wpisz ciąg zawierający tylko litery");

  tekst = tekst.toLowerCase();
  const res = [];
  let i = 0;
  //console.log(res);
  while (i <= tekst.length - 1) {
    let wypelniana = new Array(i + 1);

    wypelniana.fill(tekst[i]);
    wypelniana[0] = wypelniana[0].toUpperCase();
    wypelniana = wypelniana.join("");
    res.push(wypelniana);
    i++;
    // console.log(res);
  }
  const result = res.join("-");
  console.log(result);
  return result;
}

accum("cwAt");
