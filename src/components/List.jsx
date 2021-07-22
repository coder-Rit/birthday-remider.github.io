import React from 'react'

const List = ({ state }) => {
    return (
        <>
            {state.map((state) => {
                const { id, name, age, image } = state
                return (
                    <div className="List"  key={id}>
                        <img src={image} alt="" />
                        <div>
                            <h5>{name}</h5>
                            <h6>Age {age} years</h6>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default List
