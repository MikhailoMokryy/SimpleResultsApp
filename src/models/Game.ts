import { GameInfo } from './GameInfo';
import { GameTeamList } from './GameTeam';

export interface Game {
  game: GameInfo;
  teams: GameTeamList;
}
