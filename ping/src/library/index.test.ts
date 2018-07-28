import { Problem } from "./Client/Problem";
import { RandomSequenceFactory } from "./RandomSequenceFactory/RandomSequenceFactory";
import { SequenceType } from "./SequenceGenerators";

const randomSequenceFactory = RandomSequenceFactory.getInstance();
const p: Problem = new Problem(randomSequenceFactory, SequenceType.DAP);

console.log(p.getProblem(5, true));
console.log(p.getSolution());
