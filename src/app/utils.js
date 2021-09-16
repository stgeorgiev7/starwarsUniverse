export {getData, checkIfNext, pushEntities};

const getData = async (point) => {
    const url = new URL(String(point));
    const promise = await fetch(url, {
      method: "GET",
    });
     return await promise.json();
};

const checkIfNext = (obj) => {
    if (obj.next !== null) {
        return false;
    } else {
        return true;
    }
};

const pushEntities = (data, container) => {
    data.forEach(element => {
        container.push(element);
    });
};
  
  
  /**
 * Here you can define helper functions to use across your app.
 */
