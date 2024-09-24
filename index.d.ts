declare module 'timers' {
  global {
    function setTimeout<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): number;
    function setInterval<TArgs extends any[]>(callback: (args: void) => void, ms?: number, ...args: TArgs): number;
  }
}
