import axios from 'axios';
import { Game } from '../models/Game';
import { GameInfo } from '../models/GameInfo';
import { GameTeamList } from '../models/GameTeam';

const apiClient = axios.create({
  baseURL: 'https://api.loquiz.com/v3',
  headers: { Authorization: `${process.env?.REACT_APP_API_KEY}` },
});

const fetchGameInfo = async (id: string) => {
  const response = await apiClient.get<GameInfo>(`/games/${id}`);
  return response.data;
};

const fetchGameTeams = async (id: string) => {
  const response = await apiClient.get<GameTeamList>(`/results/${id}/teams`, {
    params: { sort: '-totalScore' },
  });
  return response.data;
};

const fetchGameResults = async (id?: string): Promise<Game> => {
  if (id)
    return Promise.all([
      ApiService.fetchGameInfo(id),
      ApiService.fetchGameTeams(id),
    ])
      .then((results) => {
        const [game, teams] = results;
        return { game, teams } as Game;
      })
      .catch((error) =>
        Promise.reject(error.response?.data?.message ?? 'Something went wrong.')
      );
  else return Promise.reject('Id is undefined.');
};

const ApiService = { fetchGameInfo, fetchGameTeams, fetchGameResults };

export default ApiService;
