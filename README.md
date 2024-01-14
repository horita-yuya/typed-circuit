To enhance the README with usage examples for each section, I'll add snippets from the test code that demonstrate various functionalities of the TypedCircuit library. Here's the updated README with added examples:

---

# TypedCircuit - TypeScript Library for Bitwise Operations

[![npm version](https://badge.fury.io/js/typed-circuit.svg)](https://badge.fury.io/js/typed-circuit)
[![TypeScript version](https://img.shields.io/badge/typescript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/npm/l/typed-circuit.svg)](LICENSE)

## Introduction

TypedCircuit is a TypeScript library designed for advanced bitwise operations, perfect for low-level programming, digital electronics simulations, or understanding bitwise arithmetic. It offers a comprehensive set of types and functions for handling bits, half-bytes, bytes, and more.

### You can do Type Level Addition
```typescript
const testAddOperation: Add<1900, 124> = 2024;
```

## Features & Usage Examples

### Bitwise Types
Includes `Bit`, `HalfByte`, `Byte`, `Byte2`, and more for effective bitwise operations.
```typescript
const testHalfByte: HalfByte = [1, 0, 1, 0];
const testByte: Byte = [[1, 0, 1, 0], [1, 1, 0, 0]];
```

### Logical Operations
Supports `And`, `Or`, `Xor` operations for bit manipulation.
```typescript
const testBitAndOperation: And<1, 0> = 0;
const testBitOrOperation: Or<0, 1> = 1;
const testBitXorOperation: Xor<1, 1> = 0;
```

### Adders
Provides `HA` (Half Adder), `FA` (Full Adder), `Adder8`, and `Adder16` for arithmetic operations.
```typescript
type BitRepr_6 = [HalfByte0, HalfByte0, HalfByte0, [0, 1, 1, 0]];
type BitRepr_11 = [HalfByte0, HalfByte0, HalfByte0, [1, 0, 1, 1]];

const testAdder16Basic: Adder16<BitRepr_6, BitRepr_11> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];
```

### Decimal Conversion
Features `ToDecimal8`, `ToDecimal16`, `FormatDecimal8`, `FormatDecimal16` for binary-to-decimal conversion and vice versa.
```typescript
const testDecimalConversion8: FormatDecimal8<BitRepr_6> = "0 + 0 + 0 + 0 + 0 + 4 + 2 + 0";
const testDecimalConversion16: FormatDecimal16<BitRepr_1900> =
  "0 + 0 + 0 + 0 + 0 + 1024 + 512 + 256 + 0 + 64 + 32 + 0 + 8 + 4 + 0 + 0";
```

### Advanced Operations
Offers advanced types and operations like `ToBinary16` and `Add` for 16-bit arithmetic.
```typescript
const testDecimalToBinary: ToBinary16<1901> = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 1],
];

const testAddOperation: Add<1900, 203> = 2103;
```

## Installation

```bash
yarn add -D typed-circuits
```

## Documentation

For a detailed guide on each type and function, refer to our [documentation](#).

## Contributing

Contributions are welcome! Fork the repository and submit pull requests for improvements.

## License

Licensed under the [MIT license](LICENSE).

---

This updated README now includes specific examples for each major feature of the TypedCircuit library, demonstrating how to use the types and operations provided.
