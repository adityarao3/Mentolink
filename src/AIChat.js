
import React, { useState } from 'react';
import axios from 'axios';
import './AIChat.css';

const AIChat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...");
    try {
      const response = await axios({
        url: "",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Error fetching response");
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="aiChat-title">MentoAI</h1>
      <textarea
        className="aiChat-textarea"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="50"
        rows="10"
        placeholder="Ask me anything"
      ></textarea>
      <button className="aiChat-button" onClick={generateAnswer}>
        Generate answer
      </button>
      <pre className="aiChat-answer">{answer}</pre>
    </>
  );
};

export default AIChat;
