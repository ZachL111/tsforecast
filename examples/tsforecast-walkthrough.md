# Tsforecast Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | feature drift | 96 | hold |
| stress | window width | 155 | ship |
| edge | metric stability | 169 | ship |
| recovery | explainability | 201 | ship |
| stale | feature drift | 223 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `baseline` becomes less cautious without a clear reason, I would inspect the drag input first.
