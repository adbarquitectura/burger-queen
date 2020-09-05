import React from 'react';

const CurrentTime = () => {

    let date = new Date();

    let day = date.getDate();
    let month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    let year = date.getFullYear();

    let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    return (
        <div>
            <p>{day}/{month}/{year}, {hours}:{minutes}hrs</p>
        </div>

    )
}

export default CurrentTime;