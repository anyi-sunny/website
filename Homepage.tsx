import { useState, useEffect, useRef } from "react";
import "./Homepage.css";

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const RELEASE_PROGRESS = 0.76;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const sectionHeight = sectionRef.current?.offsetHeight ?? 1;

  const currentScroll = scrollY - sectionTop;
  const progress = currentScroll / sectionHeight;

  // Determine if we are in the pinned or released phase
  const isPinned = progress < RELEASE_PROGRESS;

  return (
    <div>
        <div className="gradient-bg gradient-bg-1" />
        <section ref={sectionRef} className="sticky-section">
            <div
            className={`background ${isPinned ? "pinned" : "released"}`}
            />
            <div
            className="content"
            >
                <div className="welcome-text">
                    <h1 style={{color:'rgb(114, 135, 255)'}}>Hello!</h1>
                    <p>Welcome to my portfolio. </p>
                </div>
            </div>
                    <div
            className="content"
            >
                <div className="welcome-text">
                    <p>This site doubles as an opportunity to practice my frontend skills... </p>
                </div>
            </div>
                    <div
            className="content"
            >
                <div className="welcome-text" style={{color:'rgb(114, 135, 255)'}}>
                    <p>But also show off my experience!</p>
                </div>
            </div>
                    <div
            className="content"
            >
                <div className="welcome-text">
                    <p>Scroll down to explore and learn more about me!</p>
                </div>
            </div>
        </section>

        <section className="section-2">
            <h2 style={{color:'rgb(114, 135, 255)'}}>About Me</h2>
            <p>If you couldn't tell already, I love ice hockey. 
                I play NCAA D3 hockey at Bowdoin College where I am a senior!
                I am pursuing a double major in Computer Science and Mathematics as well as a minor in visual arts!</p>
        </section>
    </div>
  );
}
