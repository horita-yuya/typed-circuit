import {
  Add,
  Adder16,
  And,
  Byte,
  FormatDecimal16,
  HalfByte,
  HalfByte0,
  Or,
  ToBinary16,
  ToDecimal16,
  Xor,
} from "./index";

type BitRepr_6 = [HalfByte0, HalfByte0, HalfByte0, [0, 1, 1, 0]];
type BitRepr_11 = [HalfByte0, HalfByte0, HalfByte0, [1, 0, 1, 1]];
type BitRepr_1900 = [[0, 0, 0, 0], [0, 1, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0]];

// Type Definitions Testing

// Basic Bit and Byte Operations
const testBitAndOperation: And<1, 0> = 0;
const testBitOrOperation: Or<0, 1> = 1;
const testBitXorOperation: Xor<1, 1> = 0;

// HalfByte and Byte Definitions
const testHalfByte: HalfByte = [1, 0, 1, 0];
const testByte: Byte = [
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];

// Adder and Arithmetic Operations
const testAdder16Basic: Adder16<BitRepr_6, BitRepr_11> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

// Conversion Tests
const testDecimalConversion8: FormatDecimal16<BitRepr_6> = "0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 4 + 2 + 0";
const testDecimalConversion16: FormatDecimal16<BitRepr_1900> =
  "0 + 0 + 0 + 0 + 0 + 1024 + 512 + 256 + 0 + 64 + 32 + 0 + 8 + 4 + 0 + 0";

// Binary to Decimal and Vice Versa
const testBinaryToDecimal: ToDecimal16<BitRepr_1900> = 1900;
const testDecimalToBinary: ToBinary16<1901> = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 1],
];

// Combined Arithmetic Operations
const testAddOperation1: Add<8190, 1> = 8191;
const testAddOperation2: Add<1, 1> = 2;
const testAddOperation3: Add<12, 3> = 15;
const testAddOperation4: Add<100, 23> = 123;
const testAddOperation5: Add<1900, 203> = 2103;
const testAddOperation6: Add<1900, 124> = 2024;
const testAddOperation7: Add<4000, 4001> = 8001;
