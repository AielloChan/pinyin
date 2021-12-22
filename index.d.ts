/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
/** 拼音风格 */
export const enum PINYIN_STYLE {
  /** 普通风格，不带声调 */
  Plain = 0,
  /** 带声调的风格 */
  WithTone = 1,
  /** 声调在各个拼音之后，使用数字1-4表示的风格 */
  WithToneNum = 2,
  /** 声调在拼音最后，使用数字1-4表示的风格 */
  WithToneNumEnd = 3,
  /** 首字母风格 */
  FirstLetter = 4,
}
export interface PinyinConvertOptions {
  style?: PINYIN_STYLE | undefined | null
  heteronym?: boolean | undefined | null
  segment?: boolean | undefined | null
}
export function pinyin(inputStr: string, opt?: PinyinConvertOptions | undefined | null): string[] | string[][]
export function asyncPinyin(
  input: string,
  opt?: PinyinConvertOptions | undefined | null,
  signal?: AbortSignal | undefined | null,
): Promise<string[] | string[][]>
export function compare(inputA: string, inputB: string): number
