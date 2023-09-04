import React, {useState, useContext} from 'react'
import './JobCard.css'
import UserContext from '../../user-components/UserContext'

function salaryFormat(salary){
    let finalSalary = []
    const salString = salary.toString()
    for(let i = salString.length - 1; i >= 0; i--){
        finalSalary.push(salString[i])
        if(i > 0 && i % 3 === 0){
            finalSalary.push(',')
        }
    }
    return finalSalary.reverse().join('')
}

function JobCard({id, title, salary, equity, companyName}){
    console.debug('JobCard')
    const {applied, setApplied} = useState()
    const {hasApplied, apply} = useContext(UserContext);
    React.useEffect(function appStatus(){
        console.debug('JobCard useEffect appStatus', 'id=', id)
        setApplied(hasApplied(id))
    }, [id, hasApplied])
    async function handleSubmit(e){
        if(hasApplied(id)) return;
        apply(id)
        setApplied(true)
    }
    
    return(
        <section>{applied}
            <h4>{title}</h4>
            <p>{companyName}</p>
            {salary && <p>Salary: {salaryFormat(salary)}</p>}
            {equity !== undefined && <p>Equity: {equity}</p>}
            <button onClick={handleSubmit} disabled={applied}>
                {applied ? 'Applied' : 'Apply'}
            </button>
        </section>
    )
}

export default JobCard;