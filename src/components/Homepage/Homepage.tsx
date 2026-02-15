import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
        <div className="gradient-bg gradient-bg-1" />
        <section className="sticky-section">
            <div className="background" />
            <div className="content-wrapper">
                <div className="content">
                    <div className="welcome-text">
                        <h1 style={{color:'rgb(114, 135, 255)'}}>Hello!</h1>
                        <p>Welcome to my portfolio. </p>
                    </div>
                </div>
                <div className="content">
                    <div className="welcome-text">
                        <p>This site doubles as an opportunity to practice my frontend skills... </p>
                    </div>
                </div>
                <div className="content">
                    <div className="welcome-text" style={{color:'rgb(114, 135, 255)'}}>
                        <p>But also show off my experience!</p>
                    </div>
                </div>
                <div className="content">
                    <div className="welcome-text">
                        <p>Feel free to check out my art in Portfolio, my experience, or scroll down to see my latest project. </p>
                    </div>
                </div>
                <div className="content">
                    <div className="welcome-text">
                        <p>Scroll down to explore and learn more about me!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-2">
            <h2 style={{color:'rgb(114, 135, 255)'}}>About Me</h2>
            <p>If you couldn't tell already, I love ice hockey. 
                I play NCAA D3 hockey at Bowdoin College where I am a senior!
                I am pursuing a double major in Computer Science and Mathematics as well as a minor in visual arts!</p>
        </section>
        <section className="section-2">
            <p>I've recently put together a personal project utilizing GenAI which stores the recipes I like to use and 
                I can easily improve upon them with the help of AI.
            </p>
            <a href="https://culinarycraft.sp-devs.com/" className="button">Culinary Craft</a>
        </section>
    </div>
  );
}
