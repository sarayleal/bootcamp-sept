const sentence = "Yo soy tu madre";
const searchWord = "madre";
console.log(`the word ${searchWord}, exist in sentence? ${sentence.indexOf(searchWord)}`);


const sentenceRepeatWord = "Yo soy tu madre, tu madre, tu madre";
console.log(`the word ${searchWord}, exist in sentence? ${sentenceRepeatWord.lastIndexOf(searchWord)}`);