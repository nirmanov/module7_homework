let user = {
  name: "John",
  age: 30,
  city: "Moscow"
};

let prop = "city";

function findProp(object, property) {
      console.log(Object.hasOwnProperty.call(object, property)) 
}
findProp(user, prop);