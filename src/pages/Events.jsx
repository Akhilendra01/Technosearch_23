import React from 'react'
import './events.css'
import arrow from './arrow.svg'
function Events() {
    return (
        <div className='events'>
            <div className='grid-3'>
                <div className='row'>
                    {
                        [...Array(3)].map((x, i) => (
                            <img key={i} src={arrow} alt='arrow'></img>
                        ))
                    }
                </div>
                <div></div>
                <div className='row'>
                    {
                        [...Array(2)].map((x, i) => (
                            <img key={i} src={arrow} alt='arrow'></img>
                        ))
                    }
                </div>
            </div>
            <div className='space-50'></div>
            <div className='schedule'>
                <div></div>
                <div className='right'>
                    <p className='vertical'>
                        SCHEDULE
                    </p>
                </div>

                <div>
                    {["8 Oct", "9 Oct", "10 Oct","8 Oct", "9 Oct", "10 Oct"].map((x, i) => (
                        <div className='row dot-hr'>
                            <div className='row'>
                                <p className='style-1'>{"Sample Date - "}</p>
                                <p className='style-2'>{" Sample Venue"}</p>

                            </div>
                            <p className='ticket style-3'>Tickets</p>
                        </div>

                    ))}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Events