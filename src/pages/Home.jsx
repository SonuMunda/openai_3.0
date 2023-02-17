import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style/Home.css";
const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="home">
        <div className="home-container">
          <div className="home-row">
            <div className="home-cols">
              <div className="col-heading">
                <h4 className="heading">AI Chat Assisitant</h4>
              </div>
              <div className="col-content">
                <p>
                  A large language model trained by <span>Open AI</span> to understand and
                  respond to natural language inputs.
                </p>
              </div>
              <div className="col-btn">
                <Link to="/chatgpt">
                  <button className="navigate-btn">
                    <span>Try it</span>
                    <FiArrowUpRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-cols">
              <div className="col-heading">
                <h4 className="heading">Text to Image Generator</h4>
              </div>
              <div className="col-content">
                <p>
                  Convert any words to image or art with <span>DALL.E's</span> free AI image
                  generator
                </p>
              </div>
              <div className="col-btn">
                <Link to="/dalle">
                  <button className="navigate-btn">
                    <span>Try it</span>
                    <FiArrowUpRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
