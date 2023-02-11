const student = {
  name: "Yasin Arafat",
  id: 212040001,
  address: "Mirpur-12",
  isSingle: true,
  friends: ["Ratul", "Mesbah", "Jobaer", "Habibullah", "Hasib"],
  car: {
    brand: "BMW",
    price: 50000000000,
    made: 2010,
    manufacturer: {
      name: "tesla",
      ceo: "Arafat",
      country: "Bangladesh",
    },
  },
  act: function () {
    console.log("Beauty is truth, truth beauty");
  },
};
console.log(student);
student.act();
