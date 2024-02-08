db.users.aggregate([
  { $match: { age: 40 } }
]);