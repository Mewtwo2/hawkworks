class Navbar extends React.Component {
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
          <div class="menu-toggle"><a href="/"><img src="https://image.ibb.co/fStNeq/text.png" /></a></div>
      </div>
    );
  }
}
