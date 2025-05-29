import React from 'react'

const MemberInfo = ({ team, memberName }) => {
    return (
        <div className='memberInfo'>
            <p className='team'>{team}</p>
            <p className='memberName'>{memberName}</p>
        </div>
    )
}

export default MemberInfo