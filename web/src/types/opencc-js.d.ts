declare module 'opencc-js' {
  interface ConverterOptions {
    from: 'tw' | 'hk' | 'cn' | 't' | 's' | 'jp';
    to: 'tw' | 'hk' | 'cn' | 't' | 's' | 'jp';
  }
  
  export function Converter(options: ConverterOptions): (text: string) => string;
}
