import React, { useState } from 'react'
import axios from 'axios'

const Dog = ({dogBreed}) => {
  const [images, setImages] = useState([])

  const getImages = () => {
    axios.get(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then(res => {
      setImages((prevState) => [...prevState, res.data.message])
    })
  }
        
  return (
    <div>
        <p onClick={getImages}>{dogBreed}</p>
          {images && images.map((image, i) => (
            <img alt={i} key={i} src={image} width="100" height="100" />
          ))
        }
    </div>
  )
}

export default Dog
