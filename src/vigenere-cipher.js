const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
 constructor(type) {
  this.type = type === undefined || type ? "direct" : "reverse";
  this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
 }

 encrypt(message, key) {
  if (!message || !key) {
   throw new Error("Incorrect arguments!");
  }
  let newKey = "";
  let index = 0;

  for (let i = 0; i < message.trim().length; i++) {
   if (index >= key.length) {
    index = 0;
   }
   newKey += key[index];
   index++;
  }

  const messageArr = message.split("");
  let result = "";
  let indexKeyWord = 0;

  for (let i = 0; i < messageArr.length; i++) {
   const currLetter = messageArr[i].toUpperCase();
   const indexOfCurrLetter = this.alphabet.indexOf(currLetter);
   const indexOfCurrKeyWordLetter = this.alphabet.indexOf(
    newKey[indexKeyWord].toUpperCase()
   );

   const regEx = /[A-Z]/;

   if (regEx.test(currLetter)) {
    result += this.alphabet[indexOfCurrLetter + indexOfCurrKeyWordLetter];
    indexKeyWord++;
    continue;
   }

   result += currLetter;
  }

  return this.type === "direct" ? result : result.split("").reverse().join("");
 }

 decrypt(encryptedMessage, key) {
  if (!encryptedMessage || !key) {
   throw new Error("Incorrect arguments!");
  }
  let newKey = "";
  let index = 0;

  for (let i = 0; i < encryptedMessage.trim().length; i++) {
   if (index >= key.length) {
    index = 0;
   }
   newKey += key[index];
   index++;
  }

  const messageArr = encryptedMessage.split("");
  let result = "";
  let indexKeyWord = 0;

  for (let i = 0; i < messageArr.length; i++) {
   const currLetter = messageArr[i].toUpperCase();
   const indexOfCurrLetter = this.alphabet.indexOf(currLetter);
   const indexOfCurrKeyWordLetter = this.alphabet.indexOf(
    newKey[indexKeyWord].toUpperCase()
   );

   const regEx = /[A-Z]/;

   if (regEx.test(currLetter)) {
    result += this.alphabet[indexOfCurrLetter - indexOfCurrKeyWordLetter + 26];
    indexKeyWord++;
    continue;
   }

   result += currLetter;
  }

  return this.type === "direct" ? result : result.split("").reverse().join("");
 }
}

module.exports = {
 VigenereCipheringMachine,
};
