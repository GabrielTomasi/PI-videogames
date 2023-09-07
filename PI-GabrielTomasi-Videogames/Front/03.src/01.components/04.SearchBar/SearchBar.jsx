import { useState } from "react";
import style from './SearchBar.module.css'
const SearchBar = ({onSearch})=>{
const [name, setName] = useState('')

const handleChange = (e)=>{
    setName(e.target.value)
}

    return (
        <div className={style.searchBar}>
            <input type="search" value={name} onChange={handleChange} placeholder="Buscar..."/>
            <button onClick={()=>onSearch(name)}>Buscar</button>
        </div>
    )
}
// 
export default SearchBar;