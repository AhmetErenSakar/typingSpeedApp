import { useEffect, useState } from 'react'


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkİtem, idPlus, resultUpdate } from '../redux/typeSlice';


function Typing() {

    const [second, setSecond] = useState(10)
    const [inputValue, setInputValue] = useState("")
    const [subValue, setSubValue] = useState(false);


    const inputİd = useSelector(state => state.type.inputİd)
    const dispatch = useDispatch();

    useEffect(() => {
        const zamanla = setInterval(() => {
            if (inputİd > 0 && second > 0) {
                setSecond(second - 1);
            } else if (second == 0) {
                dispatch(resultUpdate())
            }
        }, 1000);

        return () => clearInterval(zamanla);
    }, [subValue, second]);


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(checkİtem(inputValue))
        dispatch(idPlus())
        setInputValue('')
        console.log(inputİd);
    }



    return (
        <div className='typing'>
            <form>
                <input onKeyDown={(e) => {
                    if (e.key === ' ') {
                        e.preventDefault();
                        setSubValue(true);
                        handleSubmit(e);
                    }
                }}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }} />
            </form>
            <div className='sayac'>{`0:${subValue ? second : 60}`}</div>
            <div className='btn' onClick={() => window.location.reload(false)}><button>R</button></div>
        </div>
    )
}

export default Typing