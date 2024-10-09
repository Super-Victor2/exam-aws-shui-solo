import './post.css'
import {useState, useEffect } from 'react';
import axios from 'axios';

const getPosts = () => {
    axios.get('https://amiq4l0y07.execute-api.eu-north-1.amazonaws.com').then(response => setMessages(response.data.data))
}

function postComp() {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [newUsername, setNewUsername] = useState('');
    
    useEffect(() => {
        getPosts(setMessages);
    }, []);

    const postMessage = (e) => {
        e.preventDefault();
        axios.post('https://amiq4l0y07.execute-api.eu-north-1.amazonaws.com', {
            username: setNewUsername,
            message: setNewMessage
        })
          .then.post(response => {
            if(response.data.data.success) {
                getPosts(setMessages);
            }
          })
    }

    return(
        <>
            <section className="publish-box-section">
                <input onChange={(e) => setNewMessage(e.target.value)} type="text" placeholder='Skriv här' className='publish-box' />
            </section>

            <section className="input-section">
                <form className="input-form">
                    <label>
                        Username:
                        <input onChange={(e) => setNewUsername(e.target.value)} type="text" placeholder='Användarnamn' className="username-input"/>
                    </label>
                    <label>
                        <button onClick={ postMessage} className='publish-btn'>Publicera</button>
                    </label>
                </form>
            </section>
        </>
    )
}

export default postComp