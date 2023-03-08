import React, { useContext } from 'react'
import { FName, Name } from '../App'
import ComC from './ComC'

function ComB() {

    const fname = useContext(FName)
    const name = useContext(Name)
    
    return (
        <>
            <ComC />
            <p>{fname} {name}</p>
        </>
    )
}

export default ComB