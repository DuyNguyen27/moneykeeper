import {
  animation,
  style,
  state,
  animate,
  trigger,
  transition,
  useAnimation,
  group,
  animateChild,
  query,
  keyframes,
} from '@angular/animations';
import { expandAnimation } from './animation.state';

export const triggerExpandHeightAnimation = [
  trigger('query', [
    transition(':enter', [
      style({ height: 0 }),
      group([
        animate(500, style({ height: '*' })),
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate(400, style({ opacity: 1, transform: 'scale(1)' })),
          ],
          { optional: true }
        ),
        query('.item-opacity', [
          style({ opacity: 0 }),
          animate(500, style({ opacity: 1 })),
        ]),
      ]),
    ]),
    transition(':leave', [
      style({ height: '*' }),
      group([
        animate('500ms 500ms', style({ height: '0', padding: '0' })),
        query(':leave', [
          style({ opacity: 1, transform: 'scale(1)' }),
          animate(400, style({ opacity: 0, transform: 'scale(0)' })),
        ]),
        query('.item-opacity', [
          style({ opacity: 1 }),
          animate(500, style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ]),
];

export const Animations = {
  expandTrigger: trigger('shrinkWidth', [
    transition('expanded => collapsed', [
      useAnimation(expandAnimation, {
        params: {
          width: '100px',
          left: '30px',
          time: '0.5s',
        },
      }),
    ]),
    transition('collapsed => expanded', [
      useAnimation(expandAnimation, {
        params: {
          width: '200px',
          left: 0,
          time: '0.5s',
        },
      }),
    ]),
  ]),
};
