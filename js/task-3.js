const sortByDescendingFriendCount = users => {
  const descendingFriendCount = users.toSorted(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
  return descendingFriendCount;
};

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

const getTotalBalanceByGender = (users, gender) => {
  let totalBalance = 0;
  users
    .filter(user => user.gender === gender)
    .map(user => (totalBalance += user.balance));
  return totalBalance;
};

const allUsers = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allUsers, 'male')); // 12053

console.log(getTotalBalanceByGender(allUsers, 'female')); // 8863
