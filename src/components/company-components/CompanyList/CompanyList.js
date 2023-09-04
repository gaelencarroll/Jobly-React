import React, {useState, useEffect} from 'react'
import JoblyApi from '../../../api/api'
import LoadingSpinner from '../../extra-components/LoadingSpinner'
import SearchForm from '../../routes-components/SearchForm'
import CompanyCard from '../CompanyCard'
import './CompanyInfo.css'

function CompanyList(){
    console.debug('CompanyList')
    const [companies, setCompanies] = useState(null)

    async function searchCompanies(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies)
    }
    useEffect(function getCompaniesEffect(){
        searchCompanies()
    },[])
    if(!companies) return <LoadingSpinner></LoadingSpinner>

    return(
        <section>
            <SearchForm searchFor={searchCompanies}></SearchForm>
            {companies.length ? (
                <section>
                    {companies.map(card => (
                        <CompanyCard name={card.name} description={card.descrip} logo={card.logo} key={card.handle} handle={card.handle}></CompanyCard>
                    ))}
                </section>
            ) : <p>No results found.</p>} 
        </section>
    )
}

export default CompanyList;