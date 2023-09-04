import React from 'react';
import './Alert.css'

function Alert({type = 'danger', msgs = []}){
    return(
        <section className={`${type}`}>
            {msgs.map(err => (
                <p key={err}>{err}</p>
            ))}
        </section>
    )

}

export default Alert;