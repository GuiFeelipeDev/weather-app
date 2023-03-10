import React from "react"

const CenterCard = ({ data }) => {
  const aux = data.current.last_updated
  return (
    <div className="cardMain">
      <div className="flex">
        <h2>{data.location.name}</h2>
        <h3>{data.location.country}</h3>
      </div>
      <div className="flex">
        <div className="deg">
          <h1>{data.current.temp_c.toFixed()}</h1>
          <p>ºC</p>
        </div>
        <h3>{data.current.condition.text}</h3>
        <img src={data.current.condition.icon} alt="icon" />
      </div>
      <div className="flex">
        <h4>Last Update:</h4>
        <h3>{`${aux[5] + aux[6]}/${aux[8] + aux[9]}/${
          aux[0] + aux[1] + aux[2] + aux[3]
        } - ${aux[11] + aux[12] + aux[13] + aux[14] + aux[15]}`}</h3>
      </div>
    </div>
  )
}

export default CenterCard
