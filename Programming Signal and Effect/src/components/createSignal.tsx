const context: any = []; // stack

export const CreateSignal = (value: any) => {
  const subscriptions = new Set();

  const read = () => {
    const observer = context[context.length - 1];
    if (observer) subscriptions.add(observer);
    return value;
  };

  const write = (newValue: any) => {
    value = newValue;
    for (let observer of subscriptions) {
      observer?.execute();
    }

    return 0;
  };
  return [read, write];
};

export const Effect = (fn: any) => {
  const effect = {
    execute() {
      context.push(effect);
      fn();
      context.pop();
    },
  };
};
