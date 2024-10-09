import './post.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const getPosts = (setMessages) => {
    axios.get('https://6ndzgf99a4.execute-api.eu-north-1.amazonaws.com/messages')
        .then(response => setMessages(response.data.data))
        .catch(error => console.error('Error fetching posts', error));
}

function PostComp() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const navigate = useNavigate();  // useNavigate hook for programmatic navigation
    
    useEffect(() => {
        getPosts(setMessages);
    }, []);
    
    const postMessage = (e) => {
        e.preventDefault();
        axios.post('https://6ndzgf99a4.execute-api.eu-north-1.amazonaws.com/messages', {
            username: newUsername,
            message: newMessage
        })
        .then(response => {
            if (response.data.data.success) {
                console.log('Post successful, navigating to home...');
                getPosts(setMessages);
                navigate('/');
                clear();
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    

    return (
        <>
            <section className="publish-box-section">
                <input 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    type="text" 
                    placeholder='Skriv här' 
                    className='publish-box' 
                />
            </section>

            <section className="input-section">
                <form className="input-form">
                    <label>
                        <input 
                            onChange={(e) => setNewUsername(e.target.value)} 
                            type="text" 
                            placeholder='Användarnamn' 
                            className="username-input" 
                        />
                    </label>
                    <label>
                        <button onClick={postMessage} className='publish-btn'>Publicera</button>
                    </label>
                </form>
            </section>
        </>
    );
}

export default PostComp;