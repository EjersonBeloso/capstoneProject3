import "./index.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="menu container-fluid">
        <div className="logo">
          <span className="logo-dev">DEV</span>
          <span className="logo-log">LOG</span>
          <span className="logo-end">.</span>
        </div>
        <Link to="/login" className="login-btn text-light">
          Login
        </Link>
      </div>
      <section id="particles-js" class="hero">
        <div class="hero-content">
          <div class="hero-heading">
            <h2>DEVELOP AND BLOG AT</h2>
            <h1>DEVLOG</h1>
          </div>

          <div>
            <Link to="/login" class="hero-btn text-light">
              Start your blog
            </Link>
          </div>
          <div class="icon-scroll"></div>
        </div>
      </section>
      {/* <!-- section 2 --> */}
      <section id="post-1" className="entry-holder">
        <div className="entry-content ">
          <div className="section-img ">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/c-developer-working-on-a-project-4487037-3738444.png"
              alt=""
            />
          </div>
          <div className="entry-text">
            <h1>Inspire</h1>
            <p className="p">Be one of the inspiration for our aspiring developers. </p>
          </div>
        </div>
      </section>
      {/* <!-- end of section2 --> */}
      <section id="post-2" className="entry-holder">
        <div className="entry-content">
          <div className="section-img sec2-img">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/developers-working-on-app-development-4487028-3738435.png"
              alt=""
            />
          </div>
          <div className="entry-text sec3-text">
            <h1>Share</h1>
            <p className="p">
              Share your experience with your fellow developers around the world.
          
            </p>
          </div>
        </div>
      </section>
      <section id="post-3" className="entry-holder">
        <div className="entry-content">
          <div className="section-img">
            <img
              src="https://www.masernet.com/wp-content/uploads/2021/08/software-development-image.png"
              alt=""
            />
          </div>
          <div className="entry-text">
            <h1>Explore</h1>
            <p className="p">Explore the world of developers and learn to be one of them.</p>
          </div>
        </div>
      </section>
      <section id="post-4" className="entry-holder">
        <div className="entry-content">
          <div className="section-img"></div>
          <div className="entry-text">
            <h1>Our Goal</h1>
            <p className="p">
              Devlog is a blogging website for developers to share thier journey
              and discoveries on how they solve problems. Our goal is also to
              build a community for those aspiring developers to help them and
              to inspire them.
            </p>

            <Link to="/login" class="hero-btn cta text-light">
              Start your blog
            </Link>
          </div>
        </div>
      </section>
      <div className="">
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-center">
                    Contact
                  </h6>
                  <p className="p">
                    <i className="fas fa-home mr-3"></i> Pasay City, 1300, Philippines
                  </p>
                  <p className="p">
                    <i className="fas fa-envelope mr-3"></i> devlogsupport@gmail.com
                  </p>
                  <p className="p">
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
               
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <div>
              <p className="p">© 2022 Copyright</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
