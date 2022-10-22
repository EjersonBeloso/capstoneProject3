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
        <div className="btn-container ms-auto">
          <Link to="/login" className="login-btn text-light">
            Login
          </Link>
        </div>
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
          <div className="section-img">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/c-developer-working-on-a-project-4487037-3738444.png"
              alt=""
            />
          </div>
          <div className="entry-text">
            <h1>Inspire</h1>
            <p>Developing and Blogging Is A Never Ending Story</p>
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
            <p>
              Start sharing your experience with us and to our fellow developers
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
            <p>
              Start sharing your experience with us and to our fellow developers
            </p>
          </div>
        </div>
      </section>

      <section id="post-4" className="entry-holder">
        <div className="entry-content">
          <div className="section-img"></div>
          <div className="entry-text">
            <h1>Our Goal</h1>
            <p>
              Devlog is a blogging website for developers to share thier journey
              and discoveries on how they solve problems. Our goal is also to
              build a community for those aspiring developers to help them and
              to inspire them.
            </p>
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
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>
            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">
                      GRIT
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
