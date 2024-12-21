//practical
type AAA = {
  name: string;
  age: number;
};
type dd = Partial<AAA>;
type DD<U, K extends keyof U> = {
  [P in K]?: U[P];
};
type FF<U, K extends keyof U> = {
  [P in K]-?: U[P];
};
type CustomExclude<K, U> = K extends U ? never : K;
type CustomPick<U, K extends keyof U> = {
  [P in K]-?: U[P];
};
type CustomOmit<U, K> = CustomPick<U, CustomExclude<keyof U, K>>;
interface BBB {
  name: string;
  age: number;
}
// type ff = CustomOmit<BBB, "name">;
// type ee = "string" | never | number;
var e = () => ["1", 1, false];
type CustomResultType<T extends Function> = T extends (
  ...args: any[]
) => infer Res
  ? Res
  : never;
type dfda = CustomResultType<typeof e>;
