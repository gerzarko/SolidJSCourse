import { createEffect, createMemo, createSignal } from "solid-js";
const ENTER_KEY = 13;
let counter = 0;
export const ListToDo = () => {
  const [toDos, setToDos] = createSignal([]);

  const addTodo = (event) => {
    const title = event.target.value.trim();
    if (event.keyCode === ENTER_KEY && title) {
      setToDos((todos) => [
        ...todos,
        { id: counter++, title, completed: false },
      ]);
      event.target.value = "";
    }
  };

  const memo = createMemo(() =>
    toDos().map((todo) => (
      <li>
        <div>
          <input type="checkbox" class="toggle" />
          {todo.title}
        </div>
        <button>X</button>
      </li>
    ))
  );

  return (
    <div>
      <h1 class="bg-red-400">Lista</h1>
      <input placeholder="new todo" onkeydown={addTodo}></input>
      <div>
        <ul>{memo}</ul>
      </div>
    </div>
  );
};
