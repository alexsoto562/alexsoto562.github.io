import { Link } from 'react-router-dom';

function AboutMeNav() {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/aboutme">About</Link></li>
        <li><Link to="/nails">Nails</Link></li>
        <li><Link to="/contact">Schedule</Link></li>
      </ul>
    </nav>
  );
}

export default AboutMeNav;

