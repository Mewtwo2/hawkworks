class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="navbar">
        <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" /></a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mission">Projects</a></li>
            <li><a href="/outreach">Outreach</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div class="hamburger">&#9776;</div>
        </nav>
      </header>
    );
  }
}
