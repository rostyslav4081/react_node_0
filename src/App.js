import './App.css';
import {useState} from "react";
import Axios from 'axios'

function App() {
    const [movieName,setMovieName] = useState('')
    const [review,setReview] = useState('')
    const submitReview = () => {
        Axios.post("http://localhost:3001/api/insert",{movieName: movieName, movieReview: review}).then(
            () => {console.log('OK INSERT')})

    };
    return (
        <div className="App">
            <h1>CRUD APP</h1>
            <div className="form">
                <label>Movie Name</label>
                <input type="text" name="movieName" onChange={(event) =>{setMovieName(event.target.value)}}/>
                <label>Review</label>
                <input type="text" name="review" onChange={(event) =>{setReview(event.target.value)}}/>
                <button onClick={submitReview}>Submit</button>
            </div>
        </div>
    );
}

export default App;
