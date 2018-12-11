class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="hamburger">&#9776;</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mission">Projects &#11163;</a></li>
            <li><a href="/outreach">Outreach &#11163;</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

        </nav>
          <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" /></a>
      </div>
    );
  }
}
