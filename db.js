var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    database : process.env.db_name,
    password: process.env.db_password
});

const getConnection = () => {
    con.connect(function (err) {
        if (err) throw err;
    });
};

module.exports = {
    getConnection: () => getConnection(),
    get db() {
        return con || this.getConnection()
    },
    closeConnection: () => {
        try {
            con.destroy()
        } catch (e) {
        }
    }
};
