const person = {
  country: "Russia",
  city: "Moscow",
}

const student = Object.create(person);

student.ownCity = "Piter";
student.age = 18;

function getObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = `${key} : ${object[key]}`;
      console.log(element);
    }
  }
}
getObject(student);