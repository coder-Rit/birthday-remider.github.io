import React, { useState } from 'react'



const Tour = ( {stateValue , setStateValue}) => {

     const [value, setvalue] = useState(false)

    const hover = () => {
        setvalue(true)
    }
    const hoverleave = () => {
        setvalue(false)

    }
    const removeFunction =(id)=>{
         const newArryData = stateValue.filter((data)=>data.id !== id )
         setStateValue(newArryData)
         
    }
    
 
    return (
        <div className="tourSites">
            <h1>github tourism</h1>
            <div className="allTourisum">
                {
                    stateValue.map((data) => {
                        const { id, name, discription, image, pricing, quote } = data
                        return (
                            <div
                                key={id}
                                className="tourSite"
                                style={value ? { borderBottom: "3.5px solid rgb(0, 255, 0)" } : null}>

                                <div className="ImageDiv">
                                    <img
                                        src={image}
                                        style={value ? { transform: "rotateZ(15deg)", borderRadius: "10px" } : null}
                                        onMouseEnter={() => { hover() }}
                                        onMouseLeave={() => { hoverleave() }}
                                        alt= {name} />
                                    <h6>`" {quote} "`</h6>
                                </div>
                                <div className="nameAndPrice">
                                <h3>{name}</h3>
                                    <h5>{pricing}</h5>
                                </div> 
                                <p>{discription}</p>
                                <div className="aDiv">
                                <a 
                                onClick={()=>{removeFunction(id)}}>Not Intersted</a>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Tour
