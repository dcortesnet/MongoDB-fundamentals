db.users.updateOne(
  { _id: ObjectId("62c0946602d55365f6a8b737") }, // Id of user
  { $set: { email: "dcortes@update.com" } }
);