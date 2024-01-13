import { Adder16, Adder8, Byte0, HalfByte, HalfByte0, ToDecimal16, ToDecimal8 } from "./index";

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

const testDeci1: ToDecimal8<BitVal06> = "0 + 0 + 0 + 0 + 0 + 4 + 2 + 0";
const testDeci2: ToDecimal8<BitVal11> = "0 + 0 + 0 + 0 + 8 + 0 + 2 + 1";
const testDeci3: ToDecimal8<Adder8<BitVal06, BitVal11>> = "0 + 0 + 0 + 16 + 0 + 0 + 0 + 1";
const testDeci4: ToDecimal8<[[1, 1, 1, 1], [1, 1, 1, 1]]> = "128 + 64 + 32 + 16 + 8 + 4 + 2 + 1";
// 1900
const testDeci5: ToDecimal16<[HalfByte0, [0, 1, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0]]> =
  "0 + 0 + 0 + 0 + 0 + 1024 + 512 + 256 + 0 + 64 + 32 + 0 + 8 + 4 + 0 + 0";

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
