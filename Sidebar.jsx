import React from 'react';
//import NotesIcon from '@material-ui/icons/Notes';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BackspaceIcon from '@material-ui/icons/Backspace';
 
const Sidebar =( {notes,
     onAddNote,
     onDeleteNote ,
      activeNote ,
      setActiveNote,
     } )=>{
    return(<>
    <div className="app-sidebar">

        <div className="app-sidebar-header">

            <h1><EventNoteIcon></EventNoteIcon> Notes</h1>
            
            <button onClick={onAddNote}><AddBoxIcon></AddBoxIcon></button>

        </div>

        <div className="app-sidebar-notes">
                  
                  {notes.map((note)=> (
                     
                     <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                     onClick={() => setActiveNote(note.id)}>
                    

                     <div className="sidebar-note-title">
     
                        <strong>{note.title}</strong>
     
                        <button onClick={() => onDeleteNote(note.id)}><BackspaceIcon></BackspaceIcon></button>
     
                     </div>
     
                     <p>{note.body && note.body.substr(0,100)+"..."}</p>
     
                     <small className="note-meta"> Last Modified {new Date(note.LastModified).toLocaleDateString("en-GB",{
                         hour:"2-digit",
                         minute:"2-digit"
                     })}</small>
     
                 </div>

                  ))

                  }



        </div>

    </div>
    
    </>);

}
export default Sidebar;