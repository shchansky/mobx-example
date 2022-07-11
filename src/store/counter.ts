import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  /*#region Actions (функции) для изменения состояния count*/
  increment() {
    this.count = this.count + 1;
    console.log("increment", this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log("increment", this.count);
  }
  /* #endregion */
}

export const CounterStore = new Counter();
