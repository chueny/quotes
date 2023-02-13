import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react';
import Quotes from './Quotes';

// const url = "https://type.fit/api/quotes";
// let data; 

// const randomNo = () => Math.floor(Math.random() * data.length) + 1;
function App() {
  // const [quotes, setQuotes] = useState({});

  // useEffect(() => {
  //   getQuotes();
  // }, [])

  // async function getQuotes() {
  //   try {
  //     const res = await fetch(url);
  //     data = await res.json();
  //     setQuotes(data[randomNo()]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="App">
      {/* <p className="quotes">{quotes.text}</p>
      <p className="author">- {quotes.author ? quotes.author : "Anonymous"}</p>
      <button className="button" onClick={getQuotes}>New Quote</button> */}
      <Quotes />
    </div>
  );
}




export default App;
