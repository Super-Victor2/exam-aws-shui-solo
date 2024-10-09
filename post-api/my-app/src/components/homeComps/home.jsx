import './home.css';
import PostBoxImg from '../../assests/Group 6.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const getPosts = (setMessages) => {
    axios.get('https://6ndzgf99a4.execute-api.eu-north-1.amazonaws.com/messages')
        .then(response => setMessages(response.data.data))
        .catch(error => console.error('Error fetching posts', error));
}

function HomeComp() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getPosts(setMessages);
    }, []);

    const deleteMessage = (id) => {
        axios.delete('https://6ndzgf99a4.execute-api.eu-north-1.amazonaws.com/messages/{id}')
          .then(response => {
            if(response.data.data.success) {
                getPosts(setMessages)
            }
          })
    }

    return (
        <>
            <section className="post-boxes-section">
                {/* Map over messages to create a post box for each one */}
                {messages.length > 0 ? messages.map((message, index) => (
                    <aside className="post-box" key={index}>
                        <div onClick={() => deleteMessage(message.id)} className="post-box-container">
                            <p className="post-box-created-at">{message.createdAt}</p>
                            <p className="post-box-text">{message.message}</p>
                            <p className="post-box-username">{message.username}</p>
                        </div>
                    </aside>
                )) : (
                    <p className='post-box-no-messages'>Inga meddelanden</p>
                )}
            </section>

            <section className="post-img-section">
                <Link to='/postPage'>
                    <img src={PostBoxImg} alt="Create a new post" />
                </Link>
            </section>
        </>
    );
}

export default HomeComp;
