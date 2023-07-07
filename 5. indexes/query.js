db.getCollection("employees").find({
  age: 30
}).explain("executionStats").executionStats;
