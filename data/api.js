// Stores
const local = require("./localMock");

// This API will work following the Strategy Pattern
const api = () => {
  let store;
  const dbSource = process.env.DB_SOURCE || "local";
  switch (dbSource) {
    case "local":
      store = local;
      break;
    //   case 'mongoDB'
    // case 'mysql'
  }

  const getData = (component, filter) => store.get(component, filter); //(options)
  const save = (component, data) => store.save(component, data);
  const remove = (component, data) => store.remove(component, data);
  // update

  //   saveUser

  // createChat

  //   Must return the methods to be used when calling to api
  return { getData, save, remove };
};

module.exports = api;
