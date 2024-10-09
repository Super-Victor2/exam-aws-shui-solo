import './home.css';
import PostBoxImg from '../../assests/Group 6.png'
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import axios from 'react';


const getPosts = () => {
    
}

function homeComp() {

    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState('');
    
    useEffect(() => {
        getPosts(setMessages);
    }, []);

    const postMessage = () => {

    }

    return (
        <>
            <section className="post-boxes-section">
                <aside className="post-box">
                    <div className="post-box-container">
                        <p className="post-box-created-at">Date</p>
                        <p className="post-box-text">Lorem ipsum dolor, Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        Lorem ipsum dolor
                        </p>
                        <p className="post-box-username">username</p>
                    </div>
                </aside>
                <aside className="post-box">

                </aside>
                <aside className="post-box">
                    
                </aside>
                <aside className="post-box">

                </aside>
            </section>

            <section className="post-img-section">
                <Link to='/postPage'><img src={PostBoxImg} alt="" /> </Link>
            </section>
        
        </>
    )
}

export default homeComp