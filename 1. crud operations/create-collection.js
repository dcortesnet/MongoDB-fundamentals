db.createCollection("users");

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of user"
        },
        email: {
          bsonType: "string",
          description: "Email of user"
        },
        age: {
          bsonType: "int",
          minimum: 1,
          maximum: 100,
          description: "Age of user"
        }
      }
    }
  }
});