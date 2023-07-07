db.users.aggregate([{
  $group: {
    _id: null,
    avgAge: { $avg: "$age" }
  }
}]);