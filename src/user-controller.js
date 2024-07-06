const users = [
    {id: 1, name: 'Fymryn'},
    {id: 2, name: 'Hutaomainer'},
]

const getUsers = (req, res) => {
    console.log(req.params);

    if(req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users);
}

const createUsers = (req, res) => {
    users.push(req.body)
    res.send(req.body);
}

module.exports = {
    getUsers,
    createUsers,
}