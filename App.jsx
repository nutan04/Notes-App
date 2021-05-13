import React, { useState } from 'react';
//import uuid from "react-uuid";
import Main from './Main';
import Sidebar from './Sidebar';
 
const App =()=>{

    const [notes, setNotes] = useState([]);

    const [activeNote,setActiveNote] = useState(false);

    const onAddNote = (index) => {
       
        const newNote = {

            id:{index},
            title:"Untitled list",
            body:"",
            LastModified:Date.now()
        };

        setNotes([newNote,...notes]);

    };

    const onUpdateNote =(updatedNote)=> {

        const updatedNotesArray = notes.map((note)=> {
            if(note.id===activeNote){
                return updatedNote;
            }

            return note;
        });

            setNotes(updatedNotesArray);

    }

    const onDeleteNote =(idToDelete)=>{
        setNotes(notes.filter((note)=> note.id !== idToDelete))
    };

    const getActiveNote =()=>{
        return notes.find((note) => note.id === activeNote);
    };

    return(<>
    <div className="App"> 
    <Sidebar notes={notes} 
    onAddNote={onAddNote} 
    onDeleteNote={onDeleteNote}
    activeNote={activeNote}
    setActiveNote={setActiveNote}
    />
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
    </>);

}
export default App;