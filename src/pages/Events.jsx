import React from 'react'
import './events.css'
import arrow from './arrow.svg'
function Events() {
    return (
        <div className='events'>
        <div className='row'>
            {
                [...Array(5)].map((x,i)=>(
                    <img src={arrow} alt='arrow'></img>
                ))
            }
        </div>
            <div className='grid-2'>
                <div>
                    <p className='vertical'>
                        SCHEDULE
                    </p>
                </div>
                <div>
                {["8 Oct", "9 Oct"].map((x, i) => (
                    <div className='row' key={i}>
                        
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Events