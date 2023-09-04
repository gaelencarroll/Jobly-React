import React from 'react'
import {Link} from 'react-router-dom';
import './CompanyCard.css'

function CompanyCard({name, descrip, logo, handle}){
    console.debug('CompanyCard', logo)
    return(
        <section>
            <Link to={`/companies/${handle}`}>
                <section>
                    <h4>
                        {name}
                        {logo && <img src={logo}/>}
                    </h4>
                    <p>{descrip}</p>
                </section>
            </Link>
        </section>
    )
}

export default CompanyCard;