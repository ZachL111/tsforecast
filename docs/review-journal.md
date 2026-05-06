# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its ml utilities focus without claiming live deployment or external usage.

## Cases

- `baseline`: `feature drift`, score 96, lane `hold`
- `stress`: `window width`, score 155, lane `ship`
- `edge`: `metric stability`, score 169, lane `ship`
- `recovery`: `explainability`, score 201, lane `ship`
- `stale`: `feature drift`, score 223, lane `ship`

## Note

The repository should be understandable without pretending it is larger than it is.
