import { GameTeamList, GameTeam } from '../../models/GameTeam';
import { formatTime } from '../../utils/formatTime';

export default function TeamsList({ items }: GameTeamList) {
  if (!items) return null;

  const teamList = items.map((elem: GameTeam, index: number) => {
    return (
      <tr key={elem.id}>
        <th scope='row'>{index + 1}</th>
        <td>{elem.name}</td>
        <td>{elem.odometer}</td>
        <td>{formatTime(elem)}</td>
        <td>{elem.totalScore}</td>
      </tr>
    );
  });

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Odometer</th>
          <th scope='col'>Playtime</th>
          <th scope='col'>TotalScore</th>
        </tr>
      </thead>
      <tbody>{teamList}</tbody>
    </table>
  );
}
