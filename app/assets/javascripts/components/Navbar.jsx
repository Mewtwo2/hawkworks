class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: "not-active" }
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <header id="navbar">
        <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" className="logo" /></a>
        <nav className={(this.state.isActive) ? 'not-active' : 'active'}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a class="sub-menu" href="/mission">Projects &#11163;</a>
              <ul>
                <li><a href="#">Jet Kart</a></li>
                <li><a href="#">Tesla Coil</a></li>
                <li><a href="#">Sterling Engine</a></li>
                <li><a href="#">More ...</a></li>
              </ul>
            </li>
            <li><a class="sub-menu" href="/outreach">Outreach &#11163;</a>
              <ul>
                <li><a href="#">Ghost of Christmas Past</a></li>
                <li><a href="#">Ghost of Christmas Present</a></li>
                <li><a href="#">Ghost of Christmas Yet to Come</a></li>
                <li><a href="#">More ...</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={this.toggleClass}><img className="hamburger" src="https://i.ibb.co/MgN6qQZ/hamburger.png" /></div>
      </header>
    );
  }
}
