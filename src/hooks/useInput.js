import {useState} from 'react';

//hook for controlling inputs. can have any initial state
//which is helpful when editing content within the app
const useInput = (init) => {
    const [state, setState] = useState(init);

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const resetState = () => {
        setState(init);
    }

    return [state, handleChange, resetState]
}

export default useInput;