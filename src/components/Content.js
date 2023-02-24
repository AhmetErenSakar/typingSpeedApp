import { useState } from 'react'

import { useSelector } from 'react-redux'

function Content() {

    const [text, setText] = useState(null)
    const items = useSelector(state => state.type.item)
    console.log(text);


    return (
        <div className='content'>
            {items.map((item, i) => {
                return (
                    <span key={i} className={`${'text'} ${item.check}`}>{item.text}</span>
                )
            })}
        </div>
    )
}

export default Content