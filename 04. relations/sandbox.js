db.createCollection("authors");
db.createCollection("books");

db.authors.insertOne({
  name: "Diego",
  email: "dcortes@example.com",
  age: 25
});

db.books.insertMany([
  {
    name: "Philosopher's Stone",
    author_id: ObjectId("id_of_author")
  },
  {
    name: "Secret of programming",
    author_id: ObjectId("id_of_author")
  }
]);