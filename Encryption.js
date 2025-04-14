function encryption(s) {
  let l = s.replace(/\s+/g, "").length; //lenght of String
  let r = Math.floor(Math.sqrt(l)); //row
  let c = Math.ceil(Math.sqrt(l)); //column

  r = r * c >= l ? r : r + 1;

  let encryption = [];

  for (let i = 0; i < c; i++) {
    let word = "";
    for (let j = 0; j < r; j++) {
      let idx = i + j * c;
      if (idx < l) {
        word += s[idx];
      }
    }
    encryption.push(word)
  }
 return (encryption.join(" "));
}

let s = "haveaniceday";
console.time("Execution Time");
console.log(encryption(s));

console.timeEnd("Execution Time");
