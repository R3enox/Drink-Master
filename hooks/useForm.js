import { useState } from 'react'

export const useForm = () => {
    const [search,setSearch] = useState('')
     
          const handleChange = (e) => {
        const {value} = e.target
     setSearch(value)
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch('')
    }
    return {handleChange, handleSubmit, search} 
}