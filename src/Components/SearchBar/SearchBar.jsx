import React from "react"
import { HiSearch } from "react-icons/hi"

const SearchBar = ({ getCity }) => {
  const [value, setValue] = React.useState("")
  return (
    <div className="searchMain">
      <input
        value={value}
        onChange={() => setValue(event.target.value)}
        type="text"
        placeholder="Search"
      ></input>
      <div className="searchButton" onClick={() => getCity(value)}>
        <HiSearch />
      </div>
    </div>
  )
}

export default SearchBar
