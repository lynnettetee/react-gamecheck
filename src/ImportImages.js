/*
Referenced from: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
Authored by user Felix Kling 
*/

function importAll(r) {
    let img = {};
    r.keys().map(item => { return img[item.replace('./', '')] = r(item); });
    return img;
  }
  
  export default importAll;