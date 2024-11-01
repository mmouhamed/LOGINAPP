const users = [
  {
    email: "rohith@bb.com",
    password: "letmein",
  },

  {
    email: "mouhari@bb.com",
    password: "letmein",
  },
  {
    email: "nizam@bb.com",
    password: "letmein",
  },
  {
    email: "ibrahim@bb.com",
    password: "letmein",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
