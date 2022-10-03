import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  group,
  animateChild,
  query, keyframes
} from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const slideDownAnimation = animation(
  [style({
    height: '{{ height }}',
    top: '{{ top }}'
  })]
)

export const triggerAnimation = trigger('openClose', [
  transition('open => closed', [
    useAnimation(transitionAnimation, {
      params: {
        height: 0,
        opacity: 1,
        backgroundColor: 'red',
        time: '1s'
      }
    })
  ])
]);

export const triggerExpandHeightAnimation = [
  trigger('query', [
    transition(':enter', [
      style({height: 0}),
      group([
        animate(500, style({height: '*'})),
        query(':enter', [
          style({opacity: 0, transform: 'scale(0)'}),
          animate(400, style({opacity: 1, transform: 'scale(1)'}))
        ], {optional: true}),
        query('.item-opacity', [
          style({opacity: 0}),
          animate(500, style({opacity: 1}))
        ]),
      ]),
    ]),
    transition(':leave', [
      style({height: '*'}),
      group([
        animate('500ms 500ms', style({height: '0', padding: '0'})),
        query(':leave', [
          style({opacity: 1, transform: 'scale(1)'}),
          animate(400, style({opacity: 0, transform: 'scale(0)'}))
        ]),
        query('.item-opacity', [
          style({opacity: 1}),
          animate(500, style({opacity: 0}))
        ]),
      ]),
    ])
  ]),
]
