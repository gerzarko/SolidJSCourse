import { createEffect, createSignal } from "solid-js";

export const SignalComponent = () => {
  const [getCount, setCount] = createSignal(0);
  const add = () => {
    setCount(getCount() + 1);
  };

  createEffect(() => console.log(`number= ${getCount()}`));

  return (
    <div>
      <h1>{getCount()}</h1>
      <button onclick={add}>+</button>
    </div>
  );
};
