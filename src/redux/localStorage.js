export const loadLocal = (keyword) => {
  try {
    const userLists = localStorage.getItem('userlists' + keyword);
    if(userLists === null) {
      return undefined;
    } 
    return  JSON.parse(userLists);
  } catch(error) {
    return undefined;
  }
}
export const saveLocal = (keyword, data) => {
  try {
    const dataString = JSON.stringify(data)
    localStorage.setItem('userlists' + keyword, dataString)
  } catch(error) {
    console.log(error);
  }
}