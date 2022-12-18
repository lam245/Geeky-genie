import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Notes(props) {
  //states
  
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = async (e) => {
    axios.post(`http://127.0.0.1:5000/my_bookmark?state=${localStorage.getItem('state')}`, {
      
        "book_id": props.book_id,
        "bm_name": "ssssassaaas",
        "line_pos": null,
        "content": inputText
    
      }, {
     
  })
    .then(function (response) {
      console.log(response);
      
     
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //delete note function


  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = props.content;
    console.log(data)
    if (data) {
      setInputText(data);
    }
  }, []);

  //saving data to local storage
 

  return (
    <div className="notes">
      
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
