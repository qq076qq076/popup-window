import { trigger, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

export const fadeInOut =
  trigger('fadeInOut', [
    transition('void => *', [
      style({ opacity: 0.7 }),
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', style({
        opacity: 1,
      }))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', style({
        opacity: 0.2
      }))
    ])
  ]);

export const slideDown =
  trigger('slideDown', [
    transition('void => *', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ transform: 'translateY(-10%)', offset: 0 }),
        style({ transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(-10%)', offset: 1 })
      ]))
    ])
  ]);

export const slideLeft =
  trigger('slideLeft', [
    transition('void => *', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ transform: 'translateX(10%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0)', opacity: 1, offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ transform: 'translateX(0)', opacity: 1, offset: 0 }),
        style({ transform: 'translateX(10%)', opacity: 0, offset: 1 })
      ]))
    ])
  ]);

export const fadeDown =
  trigger('fadeDown', [
    transition('void => *', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0.7, transform: 'translateY(-10%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0.7, transform: 'translateY(-10%)', offset: 1 })
      ]))
    ])
  ]);

export const fadeRight =
  trigger('fadeRight', [
    transition('void => *', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0.7, transform: 'translateX(-10%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 0.2, transform: 'translateX(-10%)', offset: 1 })
      ]))
    ])
  ]);

export const popupFadeDown =
  trigger('popupFadeDown', [
    transition('void => *', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0.7, transform: 'translate(-50%, -51%)', offset: 0 }),
        style({ opacity: 1, transform: 'translate(-50%, -50%)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.3s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 1, transform: 'translate(-50%, -50%)', offset: 0 }),
        style({ opacity: 0.2, transform: 'translate(-50%, -51%)', offset: 1 })
      ]))
    ])
  ]);

export const fadeInDown =
  trigger('fadeInDown', [
    transition('void => *', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)', keyframes([
        style({ opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
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

export const fadeOut =
  trigger('fadeOut', [
    transition('void => *', [
      animate('0s ease-out', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.5s ease-out', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 1 })
      ]))
    ])
  ]);

export const previewAnima =
  trigger('previewAnima', [
    transition('void => *',
      animate('.3s ease', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1 })
      ]))
    ),
    transition('* => void', [
      animate('.3s ease', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 1 })
      ]))
    ])
  ]);

export const listAnimation =
  trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(-100, [
          animate('0.15s', style({ opacity: 0, transform: 'translateX(-50%)' }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(-50%)' }),
        stagger(100, [
          animate('0.15s', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

export const fadeInUpFadeOutDown =
  trigger('fadeInUpFadeOutDown', [
    transition('void => *', [
      animate('.2s ease-in-out', keyframes([
        style({ opacity: 0, transform: 'translateY(5px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.2s ease-in-out', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateY(5px)', offset: 1 })
      ]))
    ])
  ]);

export const fadeInDownFadeOutUp =
  trigger('fadeInDownFadeOutUp', [
    transition('void => *', [
      animate('.2s ease-in-out', keyframes([
        style({ opacity: 0, transform: 'translateY(-5px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.2s ease-in-out', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateY(-5px)', offset: 1 })
      ]))
    ])
  ]);

export const layoutFolder =
  trigger('layoutFolder', [
    transition('void => *', [
      animate('.4s ease-in-out', keyframes([
        style({ opacity: 0, height: '0', offset: 0 }),
        style({ opacity: 1, height: '*', offset: 1 })
      ]))
    ]),
    transition('* => void', [
      animate('.4s ease-in-out', keyframes([
        style({ opacity: 1, height: '*', offset: 0 }),
        style({ opacity: 0, height: '0', offset: 1 })
      ]))
    ])
  ]);
