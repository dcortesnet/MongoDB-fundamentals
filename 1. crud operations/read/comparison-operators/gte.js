// Obtener usuarios cuya edad es mayor o igual a 40
db.users.find({ edad: { $gte: 40 } });

// Resultado 1
[
  {
    "_id": { "$oid": "62c0957402d55365f6a8b73a" },
    "edad": 40,
    "email": "juan@example.com",
    "nombre": "Juan"
  }
]