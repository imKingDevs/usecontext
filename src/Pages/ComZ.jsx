import React, { useContext } from 'react'
import { Name } from './App2'

function ComZ() {
    
    const name = useContext(Name);
    const info = name.stu;
    
    return (
        <>
            <h1>Marksheet</h1>
            <div className="container">
                {info.map((val, i) => {
                    
                    const marks = val.marks;
                    marks.total = marks.cs + marks.ic + marks.dma + marks.math + marks.cppm
                    marks.pr = marks.total / 5;
                    
                    return (
                        <div className="table" key={i}>
                            <p>Roll No : <span>{val.rollno}</span></p>
                            <p>Name : <span>{val.name}</span></p>
                            <br />
                            <p>CS : <span>{marks.cs}</span></p>
                            <p>IC : <span>{marks.ic}</span></p>
                            <p>DMA : <span>{marks.dma}</span></p>
                            <p>Math : <span>{marks.math}</span></p>
                            <p>CPPM : <span>{marks.cppm}</span></p>
                            <hr />
                            <p>Total : <span>{marks.total}</span></p>
                            <p>PR : <span>{marks.pr}</span></p>
                        </div>)
                })}
            </div>
        </>
    )
}

export default ComZ