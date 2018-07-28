import { IRandomSequenceFactory } from "../RandomSequenceFactory/IRandomSequenceFactory";
import { ISequenceGenerator, SequenceType } from "../SequenceGenerators";
import { RandomFactory } from "../Utils/RandomFactory";

export class Problem {
  private sequence: Array<string>;
  private maskedNumber: string;
  private solution: string;
  constructor(
    private sequenceFactory: IRandomSequenceFactory,
    private sequenceType: SequenceType,
    private randomFactory: typeof RandomFactory = RandomFactory
  ) {}

  public getProblem(length: number, isMasked: boolean = false): Array<String> {
    const generator: ISequenceGenerator = this.sequenceFactory.getGenerator(
      this.sequenceType,
      length
    );
    const sequence = generator.generateSequence();
    this.sequence = sequence.map(number => number.toString());
    if (isMasked) {
      const maskedIndex = this.randomFactory(1, length - 1);
      this.maskedNumber = this.sequence[maskedIndex];
      this.sequence[maskedIndex] = "X";
      this.solution = generator.generateExpression();
    }
    return this.sequence;
  }

  public getSolution() {
    return `${this.maskedNumber} 
    ${this.solution}`;
  }
}
