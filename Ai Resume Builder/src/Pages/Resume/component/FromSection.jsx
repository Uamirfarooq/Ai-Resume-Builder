import { ResumeInfoContext } from '@/contectApi/ResumeContext'
import React, { useContext } from 'react'

const FromSection = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const handleOnChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setResumeInfo((prevState) => ({ ...prevState, [name]: value }))
    }
    const onsave = (e) => {

    }

    return (
        <form onSubmit={onsave}>
            <input type="text" onChange={handleOnChange} name='name' />
            <button type="submit">Save</button>
        </form>
    )
}

export default FromSection