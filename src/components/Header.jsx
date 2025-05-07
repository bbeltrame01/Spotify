import { Link } from 'react-router-dom';
import logoSpotify from '../assets/logo/spotify-logo.png';

export default function Header () {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logoSpotify" />
      </Link>
      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  )
}