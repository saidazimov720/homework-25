const a = {
    name: "fest",
    location: { city: "Jizzax" },
    lat: 1233.32,
    lon: 302.32,
    someone: "age",
  };
  
  const b = {
    name: "test",
    location: { city: "Samarqand" },
    lat: 1233.32,
    lon: 302.32,
    someone: "age",
  };
  
const mixedObj = Object.assign({}, a,b);
const changes = (obj1, obj2) => {
    return Object.keys(obj1).reduce((change, key) => {
      if (obj1[key] !== obj2[key]) {
        change[key] = obj2[key];
      }
      return change;
    }, {});
  };
const changed = changes(a, mixedObj);
console.log(changed);
