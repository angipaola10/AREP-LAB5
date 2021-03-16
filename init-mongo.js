db.createUser(
    {
        user  : "angi",
        pwd   : "angi123",
        roles : [
            {
                role : "readWrite",
                db   : "logservicedb"
            }
        ]
    }
)