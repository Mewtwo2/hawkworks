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
  }

  toggleClass() {
    this.setState({ isActive: !this.state.isActive });
  }

  triggerMenuOne(){
    if(this.state.subMenuTwo == "shown"){
      this.setState({subMenuTwo: !this.state.subMenuTwo});
    }

    this.setState({subMenuOne: !this.state.subMenuOne});
  }

  triggerMenuTwo(){
    if(this.state.subMenuOne == "shown"){
      this.setState({subMenuOne: !this.state.subMenuOne});
    }

    this.setState({subMenuOne: !this.state.subMenuTwo});
  }

  render() {
    return (
      <header id="navbar">
        <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" className="logo" /></a>
        <nav className={(this.state.isActive) ? 'not-active' : 'active'}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a onClick={this.triggerMenuOne} className={(this.state.subMenuOne) ? "hidden" : "shown"} href="/mission">Projects &#11163;</a>
              <ul>
                <li><a href="#">Jet Kart</a></li>
                <li><a href="#">Tesla Coil</a></li>
                <li><a href="#">Sterling Engine</a></li>
                <li><a href="#">More ...</a></li>
              </ul>
            </li>
            <li><a onClick={this.triggerMenuTwo} className={(this.state.subMenuTwo) ? "hidden" : "shown"} href="/outreach">Outreach &#11163;</a>
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
