db.getCollection("authors").aggregate([{
  $lookup: {
    from: "books",
    localField: "_id",
    foreignField: "author_id",
    as: "books"
  }
}]);