import React from 'react'

const MapObjectExam = () => {

    let members=[
        {id:1, name:'김승혁', age:25, gender:'M'},
        {id:2, name:'김다원', age:25, gender:'M'},
        {id:3, name:'김희광', age:26, gender:'M'},
        {id:4, name:'홍준모', age:26, gender:'M'},
    ];

    let result = members.map(()=>{
        return(<div>1</div>)
    })

    return (
        <div>
            {members.map((member)=>(
                <div key={member.id}>{member.id}.{member.name}-{member.age}({member.gender==="M"?"남자":"여자"})</div>
            ))}
            <hr />
            {result}

        </div>
    )
}

export default MapObjectExam