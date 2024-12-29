const text =
  "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";
console.log(`1. Количество символов в тексте ${text.length}`);
const result =
  "у лукоморья клён зелёный;\n златая цепь на клён том;\n и днём и ночью кот учёный;\n всё ходит по цепи кругом;\n идёт направо — песнь заводит;\n налево — сказку говорит;\n там чудеса: там леший бродит;\n русалка на ветвях сидит;\n там на неведомых дорожках;\n следы невиданных зверей;\n избушка там на курьих ножках;\n стоит без окон, без дверей;\n там лес и дол видений полны;\n там о заре прихлынут волны;\n на брег песчаный и пустой;\n и тридцать витязей прекрасных;\n чредой из вод выходят ясных;\n и с ними дядька их морской;\n там королевич мимоходом;\n пленяет грозного царя;\n там в облаках перед народом;\n через леса, через моря;\n колдун несёт богатыря;\n в темнице там царевна тужит;\n а бурый волк ей верно служит;\n там ступа с бабою ягой;\n идёт, бредёт сама собой;\n там царь кащей над златом чахнет;\n там русский дух… там русью пахнет!;\n и там я был, и мёд я пил;\n у моря видел клён зелёный;\n под ним сидел, и кот учёный;\n свои мне сказки говорил.";
console.log(`2. Текст с переносами строк: \n ${result}`);
//я не совсем поняла, удалять ли все пробельные символы или только пробелы
//const substring = result.replace(/ /g, "");
const substring = result.replaceAll(" ", "");
console.log(`3. Текст с удалёнными пробелами: \n${substring}`);
const newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);
const replacedText = newText.replace("клён", "дубе");
console.log(`5. Замена клён на дубе: ${replacedText}`);
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре:\n ${replacedText2}`);
//const replacedText3 = result.replace((/клён/g, "дуб");
const replacedText3 = result.replaceAll("клён", "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result:\n ${replacedText3}`
);
const index = result.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);
const modifiedText = replacedText[0].toUpperCase() + replacedText.substring(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

// Task 3
// Программа, которая генерирует случайное слово из четырёх букв.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const index1 = Math.floor(Math.random() * alphabet.length);
const index2 = Math.floor(Math.random() * alphabet.length);
const index3 = Math.floor(Math.random() * alphabet.length);
const index4 = Math.floor(Math.random() * alphabet.length);

const letter1 = alphabet[index1];
const letter2 = alphabet[index2];
const letter3 = alphabet[index3];
const letter4 = alphabet[index4];

const randomWord = letter1 + letter2 + letter3 + letter4;

console.log(randomWord);

//Данное решение не мое, но я честно разобрала его
const randomWord1 = Array.from(
  { length: 4 },
  () => alphabet[Math.floor(Math.random() * alphabet.length)]
).join("");

console.log(randomWord1);
