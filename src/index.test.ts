import {
  Adder16,
  Adder8,
  HalfByte,
  HalfByte0,
  FormatDecimal16,
  FormatDecimal8,
  ToDecimal16,
  ToBinary16,
  Add,
} from "./index";

type BitVal06 = [HalfByte0, [0, 1, 1, 0]];
type BitVal11 = [HalfByte0, [1, 0, 1, 1]];

const testAdder_1: Adder8<BitVal06, BitVal11> = [
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];
const testAdder_2: Adder8<[HalfByte0, [1, 1, 0, 0]], [HalfByte0, [1, 0, 1, 0]]> = [
  [0, 0, 0, 1],
  [0, 1, 1, 0],
];

const testDeci1: FormatDecimal8<BitVal06> = "0 + 0 + 0 + 0 + 0 + 4 + 2 + 0";
const testDeci2: FormatDecimal8<BitVal11> = "0 + 0 + 0 + 0 + 8 + 0 + 2 + 1";
const testDeci3: FormatDecimal8<Adder8<BitVal06, BitVal11>> = "0 + 0 + 0 + 16 + 0 + 0 + 0 + 1";
const testDeci4: FormatDecimal8<[[1, 1, 1, 1], [1, 1, 1, 1]]> = "128 + 64 + 32 + 16 + 8 + 4 + 2 + 1";
// 1900
const testDeci5: FormatDecimal16<[HalfByte0, [0, 1, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0]]> =
  "0 + 0 + 0 + 0 + 0 + 1024 + 512 + 256 + 0 + 64 + 32 + 0 + 8 + 4 + 0 + 0";
const testDevi6: ToDecimal16<[HalfByte0, [0, 1, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0]]> = 1900;

const testAdder1: Adder8<[[1, 1, 1, 1], [1, 1, 1, 1]], [HalfByte0, [0, 0, 0, 1]]> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const testAdder2: Adder16<
  [HalfByte0, HalfByte0, [1, 1, 1, 1], [1, 1, 1, 1]],
  [HalfByte0, HalfByte0, HalfByte, [0, 0, 0, 1]]
> = [
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const test1: ToDecimal16<[[0, 0, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]> = 8191;
const testDeciToBin1: ToBinary16<10> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
];
const testDeciToBin2: ToBinary16<1900> = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 0],
];
const testDeciToBin3: ToBinary16<1901> = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 1],
];

const testToBin1: ToBinary16<10> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
];
const testToBin2: ToBinary16<20> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];
const testToBin3: Adder16<ToBinary16<10>, ToBinary16<20>> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 1, 1, 0],
];
const testAdd1: ToDecimal16<Adder16<ToBinary16<1900>, ToBinary16<100>>> = 2000;
const testAdd2: ToDecimal16<Adder16<ToBinary16<10>, ToBinary16<20>>> = 30;
const testAdd3: Add<1900, 100> = 2000;
const testAdd5: ToDecimal16<Adder16<ToBinary16<1900>, ToBinary16<10>>> = 1910;
