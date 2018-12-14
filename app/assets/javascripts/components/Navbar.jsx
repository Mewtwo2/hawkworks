class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isActive: "not-active"}
    this.toggleClass=this.toggleClass.bind(this);

  }

  toggleClass(e){
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    return (
      <header id="navbar">
        <a href="/"><img src="https://i.ibb.co/P1b6FV3/logo.png" className="logo" /></a>
        <nav className={(this.state.isActive) ? 'not-active' : 'active'}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mission">Projects</a></li>
            <li><a href="/outreach">Outreach</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
          <div className="hamburger" onClick={this.toggleClass}><img className="hamburger" src="https://i.ibb.co/MgN6qQZ/hamburger.png"/></div>
      </header>
    );
  }
}
