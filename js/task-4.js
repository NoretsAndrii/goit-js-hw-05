//В умові на LMS к ДЗ-5 не має бути файлу task-4.js!!!
//А без ньго повертає на доопрацювання!!!

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
