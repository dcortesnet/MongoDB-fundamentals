// ------------- Creación de colección ------------------
db.createCollection("users");

// ------------- Inserción de documentos ----------------
db.users.insertMany([
  {
    name: "Diego",
    email: "diego@example.com",
    age: 27
  },
  {
    name: "Franco",
    email: "franco@example.com",
    age: 20
  },
  {
    name: "Juan",
    email: "juan@example.com",
    age: 40
  }
]);