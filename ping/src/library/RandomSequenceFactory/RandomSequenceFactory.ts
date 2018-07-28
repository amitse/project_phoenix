import {
  APSequenceGenerator,
  GPSequenceGenerator,
  SequenceType,
  DAPSequenceGenerator
} from "../SequenceGenerators";
import { RandomFactory } from "./../Utils/RandomFactory";
import { IRandomSequenceFactory } from "./IRandomSequenceFactory";

export class RandomSequenceFactory implements IRandomSequenceFactory {
  private static _randomSequenceFactory: RandomSequenceFactory;

  private constructor(private randomFactory = RandomFactory) {}
  static getInstance() {
    if (this._randomSequenceFactory) return this._randomSequenceFactory;
    return new RandomSequenceFactory();
  }
  getGenerator(sequenceType: SequenceType, length: number) {
    const start = this.randomFactory(-20, 100);
    const period = this.randomFactory(-10, 20);
    switch (sequenceType) {
      case SequenceType.AP:
        return new APSequenceGenerator(start, period, length);
      case SequenceType.GP:
        return new GPSequenceGenerator(start, period, length);
      case SequenceType.DAP:
        return new DAPSequenceGenerator(start, period, length);
    }
    return new APSequenceGenerator(start, period, length);
  }
}
