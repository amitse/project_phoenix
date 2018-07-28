import { ISequenceGenerator } from "./../ISequenceGenerator";

export class GPSequenceGenerator implements ISequenceGenerator {
  constructor(
    private start: number,
    private period: number,
    private length: number
  ) {}

  public generateSequence() {
    let GP = [];
    for (let i = 0; i < this.length; i++) {
      GP.push(this.period ** i * this.start);
    }
    return GP;
  }
  public generateExpression() {
    return `Geometric Progression : 
    The Sequence starts with ${this.start}
    Each terms is ${this.period} times the last`;
  }
}
