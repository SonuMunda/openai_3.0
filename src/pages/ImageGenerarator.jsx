import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./style/ImageGenerator.css";

const ImageGenerarator = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      const response = await openai.createImage({
        prompt: "man on the beach",
        n: 1,
        size: "256x256",
      });

      console.log(response.data.data[0].url);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="dalle-wrapper">
      <div className="dalle">
        <div className="dalle-container">
          <div className="dalle-heading">
            <h4 className="heading">Dalle</h4>
          </div>

          <div className="dalle-controls">
            <div className="input-control">
              <input type="text" name="input-field" className="user-input" />
            </div>

            <button onClick={generateImage}>generateImage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerarator;
