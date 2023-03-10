import React from "react"
import CenterCard from "./Components/CenterCard/CenterCard"
import SearchBar from "./Components/SearchBar/SearchBar"
import api from "./services/api"

function App() {
  const [data, setData] = React.useState()

  const getStatic = async () => {
    const response = await api.get(
      `current.json?key=503f18a5bfa24abb90f185022232702&q=london`
    )
    const newData = await response.data
    setData(newData)
    console.log(newData)
  }

  const getCity = async (item) => {
    const response = await api.get(
      `current.json?key=503f18a5bfa24abb90f185022232702&q=${item}`
    )
    const newData = await response.data
    setData(newData)
    console.log(newData)
  }

  React.useEffect(() => {
    getStatic()
  }, [])

  return (
    <div className="background">
      <SearchBar getCity={getCity} />

      {data && <CenterCard data={data} />}
    </div>
  )
}

export default App
