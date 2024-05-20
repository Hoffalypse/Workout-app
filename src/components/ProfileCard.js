import React from 'react'
import { capitalize } from '../utils/helper';

const ProfileCard = ({exPart, exerciseData}) => {
  return (
    <div>
          <h1>{exPart}</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {exerciseData.map((ex) => (
              <div
                style={{
                  // maxWidth: "340px",
                  textAlign: "center",
                  border: "4px solid black",
                  margin: "5px",
                  borderRadius: "10px",
                }}
              >
                <img src={ex.gifUrl} alt='Hoff Rules' />
                <div
                  style={{
                    backgroundImage: "linear-gradient(yellow, red)",
                    height: "24vh",
                  }}
                >
                  <p style={{ fontWeight: "bold", maxWidth: "350px" }}>
                    {capitalize(ex.name)}
                  </p>
                  <p>Target: {capitalize(ex.target)}</p>
                  <p style={{ marginTop: "-20px" }}>
                    Equipment: {capitalize(ex.equipment)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default ProfileCard
