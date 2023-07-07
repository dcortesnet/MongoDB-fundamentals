db.users.aggregate([
  { $sort: { age: -1 } }
]);