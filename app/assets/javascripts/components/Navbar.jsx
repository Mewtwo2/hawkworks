class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/mission">Projects</a>
        <a href="/outreach">Outreach</a>
        <a href="/contact">Contact</a>

        <a href="/"><img src="https://image.ibb.co/fStNeq/text.png" /></a>
      </nav>
    );
  }
}
