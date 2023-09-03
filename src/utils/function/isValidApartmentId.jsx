function isValidApartmentId(id, data) {

    if (!data.isLoading) {
      const datas = Object.values(data);
      const objectFind = datas.find(objet => objet.id === id);
      if(objectFind){
        return true;
      }
    }
    return false;
  }
  
  export default isValidApartmentId;