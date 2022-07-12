import React from "react";
import { observer } from "mobx-react-lite";

import { CounterStore } from "../../store";
import * as Markup from "./counter.styles";

/**
 * observer- функция-обертка для наблюдения за компонентой Counter,
 * для ее перерендера при изменениии в store поля count
 */

export const Counter = observer(() => {
  return (
    <Markup.Container>
      <Markup.Button
        onClick={() => {
          CounterStore.increment();
        }}
      >
        +
      </Markup.Button>
      <div>
        {CounterStore.total}
        {/** Альтернативный вариант */}
        {/* {"count:  " + CounterStore.count} */}
      </div>
      <Markup.Button
        onClick={() => {
          CounterStore.decrement();
        }}
      >
        -
      </Markup.Button>
    </Markup.Container>
  );
});
