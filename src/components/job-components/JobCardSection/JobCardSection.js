import React from 'react'
import './JobCardSection.css'
import JobCard from '../JobCard'

function JobCardSection({jobs, apply}){
    console.debug('JobCardSection', 'jobs=', jobs)

    return(
        <section>
            {jobs.map(job => (
                <JobCard id={job.id} title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName} key={job.id}></JobCard>
            ))}
        </section>
    )
}

export default JobCardSection;