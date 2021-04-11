import React, {useState} from 'react'

function Name({Hero}) {
   
    return (
        <div className="text-center">
            {
                Hero.map(data => (
                    <p key={data.id}>{data.name}</p>
                ))
            }
        </div>
    )
}

export default Name
