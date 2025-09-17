let users = [{ id: 1, name: "João" }];

export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};
