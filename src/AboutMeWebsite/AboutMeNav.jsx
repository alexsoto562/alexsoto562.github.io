import { Link } from 'react-router-dom';

function AboutMeNav() {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/aboutme">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default AboutMeNav;

