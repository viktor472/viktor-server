const users = [
  { name: "billy", age: "20" },
  { name: "franky", age: "20" },
];

exports.getUser = (req, res) => {
  // req
  res.status(200).json({
    result: users,
    msg: "hello world",
    data: users,
  });
};

exports.getUserid = (req, res) => {
  // req
  res.status(200).json({ msg: "user by id" });
};

exports.createUser = (req, res) => {
  // req
  res.status(200).json({
    msg: "create",
  });
};

exports.uppdateUser = (req, res) => {
  // req
  res.status(200).json({
    msg: "uppdate",
  });
};

exports.removeUser = (req, res) => {
  // req
  res.status(200).json({
    msg: "remove",
  });
};
