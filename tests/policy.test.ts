function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 76,
    "capacity": 74,
    "latency": 25,
    "risk": 22,
    "weight": 13,
    "score": 11,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 83,
    "capacity": 87,
    "latency": 21,
    "risk": 19,
    "weight": 13,
    "score": 75,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 68,
    "capacity": 71,
    "latency": 25,
    "risk": 25,
    "weight": 11,
    "score": -35,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
