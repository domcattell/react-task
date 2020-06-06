import {useState} from 'react';

//simple hook for switching state between true and false
const useToggle = init => {
    const [state, setState] = useState(init);
    const toggle = () => {
        setState(!state);
    }

    return [state, toggle];
}

export default useToggle