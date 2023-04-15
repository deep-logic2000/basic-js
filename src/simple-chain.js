const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
 chain: [],
 getLength() {
  return this.chain.length;
 },
 addLink(value) {
  this.chain.push(value !== undefined ? `( ${String(value)} )` : "( )");
  return this;
 },
 removeLink(position) {
  if (
   isNaN(position) ||
   !Number.isInteger(position) ||
   position <= 0 ||
   position > this.chain.length
  ) {
   this.chain = [];
   throw new Error("You can't remove incorrect link!");
  }
  this.chain = this.chain.filter((_, index) => index !== position - 1);
  return this;
 },
 reverseChain() {
  this.chain = this.chain.reverse();
  return this;
 },
 finishChain() {
  let chain = this.chain;
  this.chain = [];
  return chain.join("~~");
 },
};

module.exports = {
 chainMaker,
};

