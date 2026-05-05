import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
