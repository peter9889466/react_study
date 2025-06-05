import React from 'react'

export const FilterExam = () => {

    let members=[
        {id:1, name:'김승혁', age:25, gender:'M'},
        {id:2, name:'김다원', age:25, gender:'M'},
        {id:3, name:'김희광', age:31, gender:'M'},
        {id:4, name:'홍준모', age:33, gender:'M'},
    ];
    let result = members.filter((member)=> member.age>=30);
    
    return (
        <div>
            {result.map((member) => (
                <div key={member.id}>{member.name}</div>
            ))}

        </div>
    )
}

export default FilterExam