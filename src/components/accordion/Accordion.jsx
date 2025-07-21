import React, { useState } from 'react'
import './accordionstyle.css'
import data from './data'
function accordion() {
    const [select, setselect] = useState(null);
    return (
        <div className='accordion'>Accordion
            {data && data.length > 0
                ? data.map((dataItem) => (
                    <div className="item">
                        <div className="title">
                            <h3>{dataItem.question}</h3>
                            <button onClick={() => setselect(select===dataItem.id 
                                ? null 
                                : dataItem.id
                            )}>{select == dataItem.id ? '-' : '+'}</button>
                        </div>
                        <div className="content">
                            {select===dataItem.id
                            ? <p>{dataItem.answer}</p>
                            : null
                            }
                        </div>
                    </div>
                ))
                : <p>No content</p>
            }   
        </div>
    )
}

export default accordion