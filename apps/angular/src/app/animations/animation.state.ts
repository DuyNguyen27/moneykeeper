import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
} from '@angular/animations';

export const expandAnimation = animation([
  style({
    width: '{{ width }}',
    left: '{{ left }}',
  }),
  animate('{{ time }}'),
]);
