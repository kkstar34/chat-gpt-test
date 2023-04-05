import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");

  async function callChatGPTAPI(message) {

    try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": message}]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      }
    });
  
     setResponse(response.data.choices[0].message.content);
     console.log(response.data.choices[0])
  }catch (e) {


  }

  }

  

  const handleSubmit = (e) =>{
    e.preventDefault();
    callChatGPTAPI(question)
  }

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuestion(e.target.value)}/>
        <p>{question}</p>
        <br />
        <p>{response}</p>
        <br />
        <input type="submit"  onSubmit={handleSubmit}/>
     </form>
    </div>
  );
}

export default App;
