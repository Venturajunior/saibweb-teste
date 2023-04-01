export const getParam = (param) => {
    const params = new URLSearchParams(document.location.search);
  
    return params.get(param);
};