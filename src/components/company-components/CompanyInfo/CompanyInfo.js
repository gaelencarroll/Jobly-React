import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './CompanyInfo.css'

import JoblyApi from '../../../api/api'
import LoadingSpinner from '../../extra-components/LoadingSpinner'
import JobCardSection from '../../jobs/JobCardSection'

function CompanyInfo(){
    const {handle} = useParams()
    console.debug('CompanyInfo', 'handle=', handle)
    const [company, setCompany] = useState(null)
    useEffect(function getInfo(){
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany()
    }, [handle])
    if (!company) return <LoadingSpinner></LoadingSpinner>

    return(
        <section>
            <h3>{company.name}</h3>
            <p>{company.descrip}</p>
            <JobCardSection jobs={company.jobs}></JobCardSection>
        </section>
    )
}

export default CompanyInfo;