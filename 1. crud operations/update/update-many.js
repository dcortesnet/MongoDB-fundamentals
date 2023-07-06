db.users.updateMany(
  {},
  { $set: { email: "all@update.com" } }
);