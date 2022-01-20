declare module 'solid-js/macro' {
  import { SignalOptions } from 'solid-js/types/reactive/signal';

  export function $signal<T>(value: T, options?: SignalOptions<T> | undefined): T
}
