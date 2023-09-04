/**
 * Function to verify if ID of a apartment is correct
 * @param {string} id 
 * @param {object} data 
 * @returns {boolean}
 */
function isValidApartmentId(id, data) {

    if (!data.isLoading && !data.error) {
      const datas = Object.values(data);
      const objectFind = datas.find(objet => objet.id === id);
      if(objectFind){
        return true;
      }
    }
    return false;
  }
  
  export default isValidApartmentId;