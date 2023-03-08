import React from 'react'
import { FName, Name } from '../App'

function ComC() {
    return (
        <>
            <FName.Consumer>
                {(fname) => {
                    return (
                        <Name.Consumer>
                            {(name) => {
                                return <p>{fname} {name}</p>
                            }}
                        </Name.Consumer>
                    )
                }}
            </FName.Consumer>
            
        </>
    )
}

export default ComC