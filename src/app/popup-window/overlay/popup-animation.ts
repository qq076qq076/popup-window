import { trigger, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

export const popupFadeDown =
  trigger('popupFadeDown', [
    transition('false => true', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({
          opacity: 0.7,
          transform: 'translateY(-50%)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translateY(-50%)',
          offset: 1
        })
      ]))
    ]),
    transition('true => false', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, transform: 'translate(-50%, -50%)', offset: 0 }),
        style({ opacity: 0.2, transform: 'translate(-50%, -51%)', offset: 1 })
      ]))
    ])
  ]);

export const fadeInDown =
  trigger('fadeInDown', [
    transition(':enter', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition(':leave', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateY(10px)', offset: 1 })
      ]))
    ])
  ]);

export const fadeIn =
  trigger('fadeIn', [
    transition('void => *', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 1 })
      ]))
    ])
  ]);
