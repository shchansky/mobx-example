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

  /** Вычисляемые значения (computed свойства)
   * Функция должна возвращать результат вычислений.
   * Если используется автоматическое слежение, то
   * любая ф-ия помеченная get , будет являться computed свойством
   * Эта ф-ия будет вызываться когда count изменит свое занчение
   * (пример см. в к-те Counter)
   */

  get total() {
    return `count:  ` + this.count;
  }
}

export const CounterStore = new Counter();
