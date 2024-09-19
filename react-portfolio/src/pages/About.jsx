import myPortrait from "/assets/Leena250px.png";
export default function About() {
    return (
      <div className="main-content">
        <div>
        <h1>About Page</h1>
        <div style={{width: 600}}>
          <img src= {myPortrait} alt="Leena Cruz Portrait" style={{height: 150, margin: 10} } />
        <p className="about-content">
          Hi, I'm Leena!
          I'm a Full Stack Developer and Graphic Designer. I'm interested in creating functional and appealing apps that are easy to use.
        </p>
        </div>
        </div>
      </div>
    );
  }
  