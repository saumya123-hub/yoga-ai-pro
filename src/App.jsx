import React, { useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState("Monday");
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (task) => {
    if (completed.includes(task)) {
      setCompleted(completed.filter((t) => t !== task));
    } else {
      setCompleted([...completed, task]);
    }
  };

  const data = {
    Monday: {
      yoga: ["Tadasana", "Bhujangasana", "Balasana"],
      exercise: ["Push-ups", "Stretching", "Jumping Jacks"],
      video: "https://www.youtube.com/embed/v7AYKMP6rOE",
    },
    Tuesday: {
      yoga: ["Anulom Vilom", "Neck Rotation", "Eye Exercise"],
      exercise: ["Neck Stretch", "Shoulder Roll"],
      video: "https://www.youtube.com/embed/4pKly2JojMw",
    },
    Wednesday: {
      yoga: ["Surya Namaskar", "Naukasana"],
      exercise: ["Plank", "Squats", "Lunges"],
      video: "https://www.youtube.com/embed/inpok4MKVLM",
    },

    Thursday: {
      yoga: ["Meditation", "Deep Breathing"],
      exercise: ["Light Walking", "Relax Stretch"],
      video: "https://www.youtube.com/embed/inpok4MKVLM",
    },
    Friday: {
      yoga: ["Butterfly Pose", "Forward Bend", "Pavanmuktasana"],
      exercise: ["Stretching", "Leg Raises"],
      video: "https://www.youtube.com/embed/1vx8iUvfyCY",
    },
    Saturday: {
      yoga: ["Full Body Yoga Flow"],
      exercise: ["Running", "Skipping"],
      video: "https://www.youtube.com/embed/UEEsdXn8oG8",
    },
    Sunday: {
      yoga: ["Yoga Nidra", "Relaxation Pose"],
      exercise: ["Light Walk", "Breathing"],
      video: "https://www.youtube.com/embed/1vx8iUvfyCY",
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>🧘 AI Fitness Trainer</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#planner">Planner</a>
          <a href="#ai">AI</a>
        </div>
      </nav>

      {/* Home */}
      {/* Home Section */}
      <section id="home" className="hero">
        <div className="overlay">
          <h1>AI-Based Yoga & Fitness Trainer</h1>
          <p>Stay Healthy, Stay Focused with Smart AI Guidance</p>
          <button onClick={() => window.scrollTo(0, 600)}>
            Get Started 🚀
          </button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="home-features">
        <h2>Why Choose Our System?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🧘 <h3>Daily Yoga Plans</h3>
            <p>Customized weekly yoga routine</p>
          </div>

          <div className="feature-card">
            🤖 <h3>AI Guidance</h3>
            <p>Smart posture correction system</p>
          </div>

          <div className="feature-card">
            ✔️ <h3>Track Progress</h3>
            <p>Mark completed tasks easily</p>
          </div>

          <div className="feature-card">
            🎥 <h3>Video Learning</h3>
            <p>YouTube demo for each exercise</p>
          </div>
        </div>
      </section>

      {/* Planner */}
      <section id="planner" className="section">
        <h2>📅 Weekly Planner</h2>

        <div className="days">
          {Object.keys(data).map((d) => (
            <button key={d} onClick={() => setDay(d)}>
              {d}
            </button>
          ))}
        </div>

        <div className="planner-box">
          <h3>{day}</h3>

          <h4>🧘 Yoga</h4>
          {data[day].yoga.map((item, i) => (
            <div key={i} onClick={() => toggleComplete(item)}>
              {completed.includes(item) ? "✔️" : "⬜"} {item}
            </div>
          ))}

          <h4>🏋️ Exercise</h4>
          {data[day].exercise.map((item, i) => (
            <div key={i} onClick={() => toggleComplete(item)}>
              {completed.includes(item) ? "✔️" : "⬜"} {item}
            </div>
          ))}

          <iframe
            width="560"
            height="315"
            src={data[day].video}
            title="Yoga Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="section light">
        <h2>🤖 AI in Yoga</h2>

        <img
          src="https://images.unsplash.com/photo-1581091012184-5c5c5c5c5c5c"
          alt="ai"
          className="ai-img"
        />

        <p>
          AI helps detect posture, track progress and give real-time correction.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tbnzAVRZ9Xc"
          title="AI Video"
          allowFullScreen
        ></iframe>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <h2>🧘 AI Yoga Trainer</h2>

          <p className="footer-desc">
            A smart platform to improve posture, reduce stress, and maintain
            daily fitness using AI-powered yoga guidance.
          </p>

          <div className="footer-links">
            <span>📅 Planner</span>
            <span>🤖 AI Guide</span>
            <span>🎥 Videos</span>
          </div>

          <p className="copyright">
            © 2026 AI Yoga Project • Engineering Students
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
