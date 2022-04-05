import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='container mt-3'>
      <h4>Home page</h4>
      <p>
        Click on <Link to='/game/FK5TS3QAB'>current game</Link> in navigation
        bar
      </p>
    </div>
  );
}
