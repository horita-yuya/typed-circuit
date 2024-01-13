export type Bit = 0 | 1;
export type HalfByte = [Bit, Bit, Bit, Bit];
export type Byte = [HalfByte, HalfByte];
export type And<A extends Bit, B extends Bit> = A extends 1 ? (B extends 1 ? 1 : 0) : 0;
export type Or<A extends Bit, B extends Bit> = A extends 1 ? 1 : B extends 1 ? 1 : 0;
export type Xor<A extends Bit, B extends Bit> = A extends 1 ? (B extends 1 ? 0 : 1) : B extends 1 ? 1 : 0;
export type HalfByte0 = [0, 0, 0, 0];
export type Byte0 = [0, 0, 0, 0, 0, 0, 0, 0];

export type HA<X extends Bit, Y extends Bit> = [s: Xor<X, Y>, c: And<X, Y>];
export type FA<
  X extends Bit,
  Y extends Bit,
  C extends Bit,
  H1 extends [Bit, Bit] = HA<X, Y>,
  H2 extends [Bit, Bit] = HA<H1[0], C>,
> = [s: H2[0], c: Or<H2[1], H1[1]>];

export type Adder8<
  X extends Byte,
  Y extends Byte,
  H1 extends [Bit, Bit] = HA<X[1][3], Y[1][3]>,
  F1 extends [Bit, Bit] = FA<H1[1], X[1][2], Y[1][2]>,
  F2 extends [Bit, Bit] = FA<F1[1], X[1][1], Y[1][1]>,
  F3 extends [Bit, Bit] = FA<F2[1], X[1][0], Y[1][0]>,
  F4 extends [Bit, Bit] = FA<F3[1], X[0][3], Y[0][3]>,
  F5 extends [Bit, Bit] = FA<F4[1], X[0][2], Y[0][2]>,
  F6 extends [Bit, Bit] = FA<F5[1], X[0][1], Y[0][1]>,
  F7 extends [Bit, Bit] = FA<F6[1], X[0][0], Y[0][0]>,
> = [[F7[0], F6[0], F5[0], F4[0]], [F3[0], F2[0], F1[0], H1[0]]];

export type Adder16<
  X extends [...Byte, ...Byte],
  Y extends [...Byte, ...Byte],
  H1 extends [Bit, Bit] = HA<X[3][3], Y[3][3]>,
  F1 extends [Bit, Bit] = FA<H1[1], X[3][2], Y[3][2]>,
  F2 extends [Bit, Bit] = FA<F1[1], X[3][1], Y[3][1]>,
  F3 extends [Bit, Bit] = FA<F2[1], X[3][0], Y[3][0]>,
  F4 extends [Bit, Bit] = FA<F3[1], X[2][3], Y[2][3]>,
  F5 extends [Bit, Bit] = FA<F4[1], X[2][2], Y[2][2]>,
  F6 extends [Bit, Bit] = FA<F5[1], X[2][1], Y[2][1]>,
  F7 extends [Bit, Bit] = FA<F6[1], X[2][0], Y[2][0]>,
  F8 extends [Bit, Bit] = FA<F7[1], X[1][3], Y[1][3]>,
  F9 extends [Bit, Bit] = FA<F8[1], X[1][2], Y[1][2]>,
  F10 extends [Bit, Bit] = FA<F9[1], X[1][1], Y[1][1]>,
  F11 extends [Bit, Bit] = FA<F10[1], X[1][0], Y[1][0]>,
  F12 extends [Bit, Bit] = FA<F11[1], X[0][3], Y[0][3]>,
  F13 extends [Bit, Bit] = FA<F12[1], X[0][2], Y[0][2]>,
  F14 extends [Bit, Bit] = FA<F13[1], X[0][1], Y[0][1]>,
  F15 extends [Bit, Bit] = FA<F14[1], X[0][0], Y[0][0]>,
> = [
  [F15[0], F14[0], F13[0], F12[0]],
  [F11[0], F10[0], F9[0], F8[0]],
  [F7[0], F6[0], F5[0], F4[0]],
  [F3[0], F2[0], F1[0], H1[0]],
];

export type ToDecimal8<
  BYTE extends Byte,
  DECIMAL extends number[] = [
    BYTE[1][3] extends 1 ? 1 : 0,
    BYTE[1][2] extends 1 ? 2 : 0,
    BYTE[1][1] extends 1 ? 4 : 0,
    BYTE[1][0] extends 1 ? 8 : 0,
    BYTE[0][3] extends 1 ? 16 : 0,
    BYTE[0][2] extends 1 ? 32 : 0,
    BYTE[0][1] extends 1 ? 64 : 0,
    BYTE[0][0] extends 1 ? 128 : 0,
  ],
> = `${DECIMAL[7]} + ${DECIMAL[6]} + ${DECIMAL[5]} + ${DECIMAL[4]} + ${DECIMAL[3]} + ${DECIMAL[2]} + ${DECIMAL[1]} + ${DECIMAL[0]}`;

export type ToDecimal16<
  BYTE extends [...Byte, ...Byte],
  DECIMAL extends number[] = [
    BYTE[3][3] extends 1 ? 1 : 0,
    BYTE[3][2] extends 1 ? 2 : 0,
    BYTE[3][1] extends 1 ? 4 : 0,
    BYTE[3][0] extends 1 ? 8 : 0,
    BYTE[2][3] extends 1 ? 16 : 0,
    BYTE[2][2] extends 1 ? 32 : 0,
    BYTE[2][1] extends 1 ? 64 : 0,
    BYTE[2][0] extends 1 ? 128 : 0,
    BYTE[1][3] extends 1 ? 256 : 0,
    BYTE[1][2] extends 1 ? 512 : 0,
    BYTE[1][1] extends 1 ? 1024 : 0,
    BYTE[1][0] extends 1 ? 2048 : 0,
    BYTE[0][3] extends 1 ? 4096 : 0,
    BYTE[0][2] extends 1 ? 8192 : 0,
    BYTE[0][1] extends 1 ? 16384 : 0,
    BYTE[0][0] extends 1 ? 32768 : 0,
  ],
> = `${DECIMAL[15]} + ${DECIMAL[14]} + ${DECIMAL[13]} + ${DECIMAL[12]} + ${DECIMAL[11]} + ${DECIMAL[10]} + ${DECIMAL[9]} + ${DECIMAL[8]} + ${DECIMAL[7]} + ${DECIMAL[6]} + ${DECIMAL[5]} + ${DECIMAL[4]} + ${DECIMAL[3]} + ${DECIMAL[2]} + ${DECIMAL[1]} + ${DECIMAL[0]}`;
