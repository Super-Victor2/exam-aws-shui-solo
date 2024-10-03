import './post.css'

function postComp() {
    return(
        <>
            <section className="publish-box-section">
                <input type="text" placeholder='Skriv här' className='publish-box' />
            </section>

            <section className="input-section">
                <aside className="username-input-container">
                    <input type="text" placeholder='Användarnamn' className="username-input" />
                </aside>
                <aside className="publish-btn-container">
                    <button className='publish-btn'>Publicera</button>
                </aside>
            </section>
        </>
    )
}

export default postComp