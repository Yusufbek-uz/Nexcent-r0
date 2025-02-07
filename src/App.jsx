import './App.css'

function App() {

  return (
    <>
      <header className="container">
        <img src="https://nextcent-silk.vercel.app/nexcent-logo.png" alt="" />
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
              <li><button className='btn'>Register Now →</button></li>
            </ul>
          </nav>
      </header>
      <main className="main">
        <section className='s1'>
          <div className="container">
            <div className="s1-t">
              <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
              <button className='btn'>Register</button>
            </div>
            <img src="https://towsifmahmud-nexcent.netlify.app/assets/banner-a24db6d9.svg" width={210} alt="" />
          </div>
        </section>
        <section className='s2 container'>
          <h2>Our Clients</h2>
          <div className="imgs">
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo.png" alt="" />
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo1.png" alt="" />
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo2.png" alt="" />
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo3.png" alt="" />
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo4.png" alt="" />
            <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/logo5.png" alt="" />
          </div>
        </section>
        <section className="s3 container">
          <h1>Manage your entire community <br /> in a single system</h1>
          <div className="cards">
            <div className="card">
              <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/peoples.png" alt="" />
              <h4>Membership Organisations</h4>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/city.png" alt="" />
              <h4>National <br /> Associations</h4>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <img src="https://codex-sky.github.io/Nexcent-Portfolio/Images/hands.png" alt="" />
              <h4>Clubs And <br /> Groups</h4>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
        </section>
        <section className="s4 container">
          <img src="https://towsifmahmud-nexcent.netlify.app/assets/unseen-2489143b.svg" alt="" />
          <div className="s4-t">
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="btn">Learn More</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;