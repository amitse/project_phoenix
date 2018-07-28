export interface ISequenceGenerator {
  generateSequence(): Array<number>;
  generateExpression(): string;
}
