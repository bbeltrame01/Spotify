import logoSpotify from '../assets/logo/spotify-logo.png';

export default function Header () {
  return (
    <div className="header">
      <img src={logoSpotify} alt="logoSpotify" />
      <a href="">
        <h1>Spotify</h1>
      </a>
    </div>
  )
}