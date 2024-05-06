---
sidebar_position: 8
---

# Transformers

Transformers, short for Response Transformers, are equivalent to Views but for JSON Responses. They take data and represent it in JSON, transforming Models into Arrays.

## Principles

- All API responses MUST be formatted via Transformers.
- Every Model (that gets returned by an API call) SHOULD have a corresponding Transformer.
- A single Container MAY have multiple Transformers.
- Usually, every Model would have a Transformer to ensure consistency in the API response format.
