function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 44, slack: 31, drag: 24, confidence: 49 };
equal(domainReviewScore(item), 96);
equal(domainReviewLane(item), "hold");
