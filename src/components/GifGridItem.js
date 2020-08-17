import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeInUpBig">
            <div className="card-body">
                <img className="img-fluid" src={ url } alt={ title } />
                <p>{ title }</p>
            </div> 
        </div>
    )
}
