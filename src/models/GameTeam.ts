export interface GameTeam {
  id: string;
  name: string;
  startTime: number;
  finishTime: number;
  isFinished: boolean;
  totalScore: number;
  odometer: number;
}

export interface GameTeamList {
  items?: [GameTeam];
}
