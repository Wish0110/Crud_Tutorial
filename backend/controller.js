const users = [
    {
        id: 1,
        name: 'wishmi',
    },
    {
        id: 2,
        name: 'hiranya',
    },
];

const getUsers = (cb) => {
    cb(users);
}

const getUserById = (id, cb) => {
   const user = users.find(user => user.id == id );
   cb(user);
} ;
exports.getUsers = getUsers;
exports.getUserById = getUserById;