import React, { useState } from 'react';

const UserName = () => {
    const [userName, setUsername] = useState('');

    const name = (e) => {
        setUsername(e.target.value)
    }
    console.log(userName)

    return (
        <div>
            <input type="text"
                onChange={name}
                value={userName}
            >
            </input>
        </div>
    )
}

export default UserName;