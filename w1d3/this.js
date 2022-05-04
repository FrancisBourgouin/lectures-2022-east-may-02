// THIS

const somePerson = {
  name: "Declan",
  birthday: "In a week",
  tellBirthday: function () {
    console.log(`My birthday is ${this.birthday.toLowerCase()}`);
  },
};

const otherPerson = {
  name: "Maddy",
  birthday: "In a month",
  tellBirthday: function () {
    console.log(`My birthday is ${this.birthday.toLowerCase()}`);
  },
};

const yetAnotherPerson = {
  name: "Bowen",
  birthday: "In a year",
  tellBirthday: function () {
    console.log(`My birthday is ${this.birthday.toLowerCase()}`);
  },
};

somePerson.tellBirthday();
otherPerson.tellBirthday();
yetAnotherPerson.tellBirthday();
