import {Hero} from './hero';
import {Villian} from './villian';

export interface Alliance {
  side?: string;
  npc?: Hero | Villian;
}
