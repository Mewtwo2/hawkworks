class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "not-active",
      subMenuOne: "hidden",
      subMenuTwo: "hidden"
    }

    this.toggleClass = this.toggleClass.bind(this);

    this.triggerMenuOne = this.triggerMenuOne.bind(this);
    this.triggerMenuTwo = this.triggerMenuTwo.bind(this);

    this.blockRender = this.blockRender.bind(this);
  }

  toggleClass(e) {
    this.setState({ isActive: !this.state.isActive });
  }

  triggerMenuOne(e) {

    if (this.state.subMenuTwo === "shown") {
      this.setState({ subMenuTwo: !this.state.subMenuTwo });
    }

    this.setState({ subMenuOne: !this.state.subMenuOne });
  }

  triggerMenuTwo(e) {

    if (this.state.subMenuOne === "shown") {
      this.setState({ subMenuOne: !this.state.subMenuOne });
    }

    this.setState({ subMenuTwo: !this.state.subMenuTwo });
  }

  blockRender(e) {
    e.preventDefault();
  }

  render() {
    return (
      <header id="navbar">
        <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" className="logo" /></a>
        <nav className={(this.state.isActive) ? 'not-active' : 'active'}>
          <ul>
            <li className="dropdown"><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li onClick={this.triggerMenuOne} className={(this.state.subMenuOne) ? "hidden" : "shown"}><a onClick={this.blockRender} href="">Projects
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">

                <g>
                  <title>background</title>
                  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                </g>
                <g>
                  <title>Layer 1</title>
                  <path id="svg_1" fill="#7f7f7f" d="m14.77,23.795l-9.585001,-9.585c-0.879,-0.879 -0.879,-2.317 0,-3.195l0.8,-0.801001c0.877,-0.877999 2.316,-0.877999 3.194,0l7.315,7.315l7.316,-7.315c0.878,-0.877999 2.317001,-0.877999 3.194,0l0.800001,0.801001c0.879,0.877999 0.879,2.316 0,3.195l-9.587002,9.585c-0.470999,0.472 -1.103998,0.681999 -1.723,0.646999c-0.618999,0.035 -1.250999,-0.174999 -1.723999,-0.646999z" />
                </g>
              </svg>
            </a>
              <ul>
                <li><a href="#">Jet Kart</a></li>
                <li><a href="#">Tesla Coil</a></li>
                <li><a href="#">Sterling Engine</a></li>
                <li><a href="/mission">More ...</a></li>
              </ul>
            </li>
            <li onClick={this.triggerMenuTwo} className={(this.state.subMenuTwo) ? "hidden" : "shown"}><a onClick={this.blockRender} href="">Outreach
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">

                <g>
                  <title>background</title>
                  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                </g>
                <g>
                  <title>Layer 1</title>
                  <path id="svg_1" fill="#7f7f7f" d="m14.77,23.795l-9.585001,-9.585c-0.879,-0.879 -0.879,-2.317 0,-3.195l0.8,-0.801001c0.877,-0.877999 2.316,-0.877999 3.194,0l7.315,7.315l7.316,-7.315c0.878,-0.877999 2.317001,-0.877999 3.194,0l0.800001,0.801001c0.879,0.877999 0.879,2.316 0,3.195l-9.587002,9.585c-0.470999,0.472 -1.103998,0.681999 -1.723,0.646999c-0.618999,0.035 -1.250999,-0.174999 -1.723999,-0.646999z" />
                </g>
              </svg>
            </a>
              <ul>
                <li><a href="https://en.wikipedia.org/wiki/Saint_Valentine">Saint Valentine</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Via_Flaminia">Via Flaminia</a></li>
                <li><a href="https://upload.wikimedia.org/wikipedia/commons/0/01/Rom%2C_Santa_Maria_in_Cosmedin%2C_Reliquien_des_Hl._Valentin_von_Terni.jpg">Basilica of Santa Maria</a></li>
                <li><a href="/outreach">More ...</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/sponsorship">Sponsorship</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={this.toggleClass}><img className="hamburger" onClick={changeBodyScroll} src="https://i.ibb.co/MgN6qQZ/hamburger.png" /></div>
      </header>
    );
  }
}
