import { SequenceType } from "../SequenceGenerators";

export interface IRandomSequenceFactory {
  getGenerator(sequenceType: SequenceType, length: number);
}
