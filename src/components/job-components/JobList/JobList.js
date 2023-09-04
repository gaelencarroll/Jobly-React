import React, {useState, useEffect} from 'react'
import JoblyApi from '../../../api/api'
import JobCardSection from '../JobCardSection'
import LoadingSpinner from '../../extra-components/LoadingSpinner'
import SearchForm from '../../routes-components/SearchForm'
import './JobList.css'

function JobList(){
    console.debug('JobList')
    const [jobs, setJobs] = useState(null);
    async function searchJobs(keyword){
        let jobs = await JoblyApi.getJobs(keyword)
        setJobs(jobs)
    }
    useEffect(function getAllJobs(){
        searchJobs();
    })

    if(!jobs) return <LoadingSpinner></LoadingSpinner>

    return(
        <section>
            <SearchForm searchFor={searchJobs}>
                {jobs.length ?
                <JobCardSection jobs={jobs}></JobCardSection> : 
                <p>No results found.</p>}
            </SearchForm>
        </section>
    )
}

export default JobList;