import React from 'react'


import { useSelector } from 'react-redux'


function Result() {

    const result = useSelector(state => state.type.static)
    console.log(result);
    return (
        <div>
            {
                <div>
                    <h1>Sonuç</h1>
                    <h3>Doğru: {result.dogru}</h3>
                    <h3>Yanlış: {result.yanlis}</h3>
                </div>
            }
        </div>
    )
}

export default Result