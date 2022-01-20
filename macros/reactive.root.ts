import { SignalOptions } from 'solid-js/types/reactive/signal';
import { createSignal } from 'solid-js';

export const createRefSignal = <T>(value: T, options?: SignalOptions<T> | undefined): { value: T } => {
  const [signal, setSignal] = createSignal(value, options);

  return {
    get value() {
      return signal();
    },
    set value(newVal: any) {
      setSignal(newVal);
    },
  };
};
