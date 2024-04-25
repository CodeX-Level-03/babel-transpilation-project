"use strict";

function useState(initialState) {
  let state = initialState;
  return [state, (value) => (state = value)];
}

const names = ["Bob", "Alex", "Ronaldo", "Messi", "Neymar"];
const [nameOne, nameTwo, nameThree, ...rest] = names;

const fullName = { firstName: "Umar", lastName: "Zafar" };
const { firstName, lastName } = fullName;

const people = {
  peopleList: [...names],
};
const { peopleList } = people;

const [count, setCount] = useState(3);
