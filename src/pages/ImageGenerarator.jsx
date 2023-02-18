import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import { RotateSpinner } from "react-spinners-kit";
import { FaTimes } from "react-icons/fa";
import "./style/ImageGenerator.css";

const ImageGenerarator = () => {
  // states
  const [userPrompt, setuserPrompt] = useState(""); // for the user prompt
  const [imageUrl, setImageUrl] = useState(""); // for the generated image url
  const [loading, setLoading] = useState(false); // for the loading animation
  const [error, setError] = useState(false);

  // Config
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const inputRef = useRef(null);

  // clear textfield Function
  function handleClear() {
    setuserPrompt("");
    inputRef.current.focus();
  }

  // Function to generate Image

  const generateImage = async () => {
    setLoading(true);

    try {
      const response = await openai.createImage({
        prompt: userPrompt,
        n: 1,
        size: "256x256",
      });

      setImageUrl(response.data.data[0].url);
      setError(null); // reset error
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dalle-wrapper">
      <div className="dalle">
        <div className="dalle-container">
          <div className="dalle-heading">
            <h4 className="heading">Dalle</h4>
          </div>

          {/* Controls And Buttons */}

          <div className="dalle-controls">
            <div className="input-control">
              <input
                type="text"
                name="input-field"
                className="control ps-3"
                id="user-input"
                ref={inputRef}
                onChange={(e) => setuserPrompt(e.target.value)}
                value={userPrompt}
                placeholder="Describe what you want to see with phrases"
              />
            </div>
            <div className="dalle-btns">
              <div className="clear-control">
                {userPrompt !== "" ? (
                  <button
                    onClick={handleClear}
                    className="clearButton control px-3 bg-danger"
                  >
                    <span className="text-light">
                      <FaTimes />
                    </span>
                  </button>
                ) : null}
              </div>
              <div className="generate-control">
                <button
                  onClick={generateImage}
                  className="control px-3"
                  id="generate-btn"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>

          {loading && (
            <div className="spinner-container">
              <RotateSpinner size={30} color="#007bff" />
            </div>
          )}

          <div className="dalle-response pt-4 loading">
            <img src={imageUrl} className="p-4 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerarator;
