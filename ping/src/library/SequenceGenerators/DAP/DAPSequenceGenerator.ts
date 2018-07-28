import { ISequenceGenerator } from "./../ISequenceGenerator";

export class DAPSequenceGenerator implements ISequenceGenerator {
  constructor(
    private start: number,
    private period: number,
    private length: number
  ) {}

  public generateSequence() {
    let DAP = [];
    DAP[0] = this.start;
    for (let i = 1; i < this.length; i++) {
      DAP.push(DAP[i - 1] + i * this.period);
    }
    return DAP;
  }

  public generateExpression() {
    return `Geometric Progression : 
    The Sequence starts with ${this.start}
    Difference between consecutive terms is ${
      this.period
    } times the position of the number`;
  }
}
