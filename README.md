# Circuits - TypeScript Library for Bitwise Operations

## Introduction

Welcome to Circuits, a TypeScript library crafted for intricate bitwise operations. This library is an ideal resource for those engaged in low-level programming, digital electronics simulations, or seeking an in-depth understanding of bitwise arithmetic in TypeScript. Circuits offer a robust set of types and functions for manipulating bits, half-bytes, bytes, and performing complex operations like addition and conversion to decimal.

## Features

- **Bitwise Types**: Fundamental types such as `Bit`, `HalfByte`, and `Byte` are defined for streamlined and efficient bitwise operations.
- **Logical Operations**: Implements logical operations like `And`, `Or`, `Xor` directly on bits.
- **Half and Full Adders**: Introduces `HA` and `FA` types to simulate half and full adders.
- **8-bit and 16-bit Adders**: `Adder8` and `Adder16` types for conducting addition on 8-bit and 16-bit numbers.
- **Decimal Conversion**: Utilizes `ToDecimal8` and `ToDecimal16` for converting binary to decimal string representations.

## Installation

Install Circuits using npm:

```bash
npm install circuits
```

## Usage

Here's a quick start guide:

```typescript
import { Adder8, ToDecimal8, Byte0, HalfByte0 } from 'circuits';

type BitVal06 = [HalfByte0, [0, 1, 1, 0]];
type BitVal11 = [HalfByte0, [1, 0, 1, 1]];

const result: Adder8<BitVal06, BitVal11> = [
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

console.log(ToDecimal8<result>); // Outputs the decimal representation
```

## Documentation

For a comprehensive guide on each type and function, please refer to the [documentation](#) in our GitHub repository.

## Contributing

We welcome contributions! If you're interested in contributing, please fork the repository and submit your pull requests.

## License

Circuits is licensed under the [MIT license](LICENSE).

---

This template is adaptable to suit the specifics of Circuits, and you can further customize it to include more examples, detailed installation guides, or a more exhaustive usage guide.
