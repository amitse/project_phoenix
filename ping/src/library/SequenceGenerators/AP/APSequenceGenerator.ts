import { ISequenceGenerator } from "./../ISequenceGenerator";

export class APSequenceGenerator implements ISequenceGenerator {
  constructor(
    private start: number,
    private period: number,
    private length: number
  ) {}

  public generateSequence() {
    let AP = [];
    for (let i = 0; i < this.length; i++) {
      AP.push(i * this.period + this.start);
    }
    return AP;
  }

  public generateExpression() {
    return `Arithmetic Progression : 
    The Sequence starts with ${this.start}
    Difference between consecutive terms is ${this.period}`;
  }
}
