import React, {useState} from 'react'
import './SearchForm.css'

function SearchForm({searchFor}){
    const [keyword, setKeyword] = useState('')
    function handleChange(e){
        setKeyword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        searchFor(keyword || undefined)
        setKeyword(keyword)
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter job keyword or company...' value={keyword} onChange={handleChange} name='keyword'></input>
                <button type='submit'>Search</button>
            </form>
        </section>
    )
}

export default SearchForm;