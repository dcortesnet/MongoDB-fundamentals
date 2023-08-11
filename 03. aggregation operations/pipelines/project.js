db.users.aggregate([
  { $project: { age: 0, name: 0 } }
]);