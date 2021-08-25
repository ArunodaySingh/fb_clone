import React, { useEffect } from "react"
import { IconButton, FormControl, InputLabel, Input } from "@material-ui/core"
import Message from "./Component/Message"
import "./App.css"
import { db } from "./firebase";
import firebase from "firebase"
import FlipMove from "react-flip-move";
import fb_img from '../src/Image/fb.png';
import SendIcon from '@material-ui/icons/Send';


// App component
const App = () => {

  // store message and  manage message state
  const [inputs, setinput] = React.useState([])
  // target the onchange event in text input
  const [value, setvalue] = React.useState("")
  // store the current username 
  const [name, setusername] = React.useState("")


  // handle onchange event
  const change = (e) => {
    setvalue(e.target.value);
  }

  // handle onclick event when its triggered 
  const btn = (event) => {
    event.preventDefault();
    db.collection("message").add(
      {
        username: name,
        message: value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    setvalue("")
  }

  useEffect(() => {
    db.collection("message").orderBy('timestamp', 'desc').onSnapshot(snapshots => {
      setinput(snapshots.docs.map(doc => ({ id: doc.id, message: doc.data() })))

    })
  }, [])

  //run when app loading (depends on conditon also)
  useEffect(() => {
    const name = prompt('Enter you Name')
    setusername(name)

  }, [])

  return (
    <>
      <div className="img_div">
        <img className="img" alt="fb_image" src={fb_img}></img>

        <h2>Welcome {name} 🚀 ! </h2>
      </div>
      <div className="cen">

        <form >
          <FormControl className="form_controller">
            <InputLabel >Enter Message</InputLabel>
            <Input className="form_input" value={value} onChange={change} />
            <IconButton className="form_icon" disabled={!value} variant="contained" color="primary" type="submit" onClick={btn}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>

      <FlipMove>
        {
          inputs.map(({ id, message }) => (
            <Message key={id} c_username={name} text={message} />
          ))
        }

      </FlipMove>




    </>
  )
}

export default App;
