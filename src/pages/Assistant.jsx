import React from "react";
import { Configuration, OpenAIApi } from "openai";
import { FaTelegramPlane, FaTimes, FaMicrophone } from "react-icons/fa";
import userAvtar from "/icons/user-avtar.svg";
import BotAvtar from "/icons/chatgpt-icon.svg";
import "./style/Assistant.css";

const Assistant = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  return (
    <div className="assistant-wrapper">
      <div className="assistant">
        <div className="assistant-container">
          <div className="assist-response">
            <div className="response-row">
              <div className="response-cols">
                <img
                  src={BotAvtar}
                  alt="ChatBot"
                  style={{ height: "42px", borderRadius: "50%" }}
                />
              </div>
              <div className="response-cols">
                <div className="response-content">
                  <p className="text-light">Hello This is response</p>
                </div>
              </div>
            </div>
          </div>
          <div className="assist-controls">
            <div className="avtar">
              <img src={userAvtar} alt="user" style={{ height: "42px" }} />
            </div>
            <div className="assist-input">
              <textarea className="user-input assist-control" />
            </div>
            <div className="assist-btns">
              <button className="clear-btn assist-control control-btn">
                <FaTimes />
              </button>

              <button className="send-btn assist-control control-btn">
                <FaTelegramPlane />
              </button>

              <button className="mic-btn assist-control control-btn">
                <FaMicrophone />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
