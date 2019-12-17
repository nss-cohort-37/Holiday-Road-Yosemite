// DECLARE AN EMPTY ARRAY STORED IN A VARIABLE NAMED PARKS.
let parks = []

// DECLARE AND EXPORT A FUNCTION NAMED USEPARKS THAT RETURNS OUR NEW PARKS ARRAY
export const useParks= () => {
    return parks
}

// DECLARE AND EXPORT A FUNCTION CALLED GETPARKS THAT FETCHES OUR API DATA, MAKES IT ITERABLE.
// THEN POPULATES IT AS THE CONTENT OUR OUR ORIGINAL ARRAY CALLED PARKS
export const getParks = () => {
  return fetch('https://developer.nps.gov/api/v1/parks?api_key=pa5r3mOGT93Qnoyobsb4n3iv6xiDH1hrOtXwFLOw&fields=images&fields=addresses')
  .then(response => response.json()
  )
  .then(
      parsedParks => {
          
          parks = parsedParks.data
      }
  )
}
