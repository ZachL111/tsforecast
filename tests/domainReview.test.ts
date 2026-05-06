import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 44, slack: 31, drag: 24, confidence: 49 };
assert.equal(domainReviewScore(item), 96);
assert.equal(domainReviewLane(item), "hold");
