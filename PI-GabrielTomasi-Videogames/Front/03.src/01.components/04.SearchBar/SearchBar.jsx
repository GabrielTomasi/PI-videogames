import { useState } from "react";

const SearchBar = ({onSearch})=>{
const [name, setName] = useState('')

const handleChange = (e)=>{
    setName(e.target.value)
}

    return (
        <div>
            <input type="search" value={name} onChange={handleChange}/>
            <button onClick={()=>onSearch(name)}>Buscar</button>
        </div>
    )
}
// 
export default SearchBar;