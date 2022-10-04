import axios from "axios";
import { useEffect, useState } from "react";
import Dog from "./Dog";


const App = () => {

  const [breeds, setBreeds] = useState([])
  const ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all'

  const allBreeds = () => {
    axios.get(ALL_BREEDS).then(res => setBreeds(Object.keys(res.data.message)))
  }

  useEffect(() => {
    allBreeds()
  },[])
  

  return (
    <>
      {breeds.map((breed, i) => 
        i < 10 && (
          <Dog key={i} dogBreed={breed} />
        )
      )}
    </>
  );
}

export default App;
