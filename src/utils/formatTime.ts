import { GameTeam } from '../models/GameTeam';

export const formatTime = ({
  startTime,
  finishTime,
  isFinished,
}: GameTeam): string => {
  return isFinished ? `${finishTime - startTime} s` : '-';
};
