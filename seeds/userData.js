const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'dude',
        email: 'dude@dude.dude',
        password: 'dudedude'
    },
    {
        id: 2,
        username: 'man',
        email: 'man@man.man',
        password: 'manman'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;