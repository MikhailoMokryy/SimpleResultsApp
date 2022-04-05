import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import TeamsList from '../TeamsList';
import ApiService from '../../services/ApiService';
import { Game } from '../../models/Game';

export default function GameResults() {
  const { id } = useParams<string>();

  const { data, isLoading, isError, error } = useQuery<Game, Error>(
    'GameResults',
    () => ApiService.fetchGameResults(id),
    { retry: false }
  );

  if (isError) return <span>Error occurred! {error}</span>;
  if (isLoading) return <span>Loading...</span>;

  return (
    <div className='mt-3'>
      <h5>
        Game title: <span>{data?.game.title}</span>
      </h5>
      <TeamsList items={data?.teams.items} />
    </div>
  );
}
