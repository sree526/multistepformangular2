import {trigger,
  state,
  style,
  transition,
  animate,AnimationEntryMetadata} from '@angular/core';
  export const enterandleaveAnimation: AnimationEntryMetadata =
  trigger('routerAnimation',[
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ]) 