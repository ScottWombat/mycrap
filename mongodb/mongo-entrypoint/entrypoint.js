var db = connect("mongodb://admin1:pass1@localhost:27017/admin");

db = db.getSiblingDB('new_db');

db.createUser(
    {
        user: "user2",
        pwd: "pass2",
        roles: [ { role: "readWrite", db: "new_db"} ],
        passwordDigestor: "server",
    }
)

db.createCollection("new_db");