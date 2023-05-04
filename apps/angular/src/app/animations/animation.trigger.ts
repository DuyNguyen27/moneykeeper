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
  menuExpandCollapse: trigger('expandCollapse', [
    state(
      'expanded',
      style({
        width: '180px',
        height: 'calc(100% - 80px)',
        left: '0px',
        top: '40px',
        'border-radius': '20px',
      })
    ),
    state(
      'collapsed',
      style({
        width: '80px',
        height: 'calc(100% - 60px)',
        left: '10px',
        top: '30px',
        'border-radius': '10px',
      })
    ),
    transition('expanded => collapsed', [animate('0.5s ease-out')]),
    transition('collapsed => expanded', [animate('0.5s ease-out')]),
  ]),
  bodyExpandCollapse: trigger('moveLeft', [
    state(
      'start',
      style({
        'margin-left': '90px',
        'padding-top': '35px',
      })
    ),
    state(
      'end',
      style({
        'margin-left': '0px',
        'padding-top': '25px',
      })
    ),
    transition('start => end', [animate('0.5s ease-out')]),
    transition('end => start', [animate('0.5s ease-out')]),
  ]),
};
