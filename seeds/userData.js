const { User } = require('../models');

const userdata = [
    {
        user_id: 'dude',
        email: 'dude@dude.dude',
        password: 'dudedude'
    },
    {
        user_id: 'man',
        email: 'man@man.man',
        password: 'manman'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;