require('../../../env.js');
let {db} = require('../../../db.js');

module.exports = {
    get: get,
    all: all
};


function get(req, res) {
    var name = req.swagger.params.name.value || 'AK-47 | Aquamarine Revenge (Battle-Scarred)';
    var sql = 'SELECT * FROM cs_go_pricelist WHERE name = ?';
    db.query(sql, [name],function (err, result) {
            if (err) throw err;
            if (result.length == 0) {
                res.status(204).send();
            } else {
                res.json(result);
            }
        });
}

function all(req, res) {
    db.query(
        `SELECT * FROM cs_go_pricelist`,function (err, result) {
            if (err) throw err;
            res.json(result);
        });
}