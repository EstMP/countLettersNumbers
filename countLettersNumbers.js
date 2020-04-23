var text = 'hola 12 34';
console.log(text);
var countL = 0;
var countN = 0;
var countS = 0;
for (var position = 0; position < text.length; position++) {

    if (text.charAt(position).match(/[A-Za-z]+/g)) {
        countL += 1;
    }
    if (text.charAt(position).match(/\d+/g)) {
        countN += 1;
    }
    if (text.charAt(position).match(" ")) {
        countS += 1;
    }
}
console.log('letras:', countL);
console.log('numeros:', countN);
console.log('espacios:', countS);