require('./env.js');
const R = require('ramda');
const got = require('got');
let {db} = require('./db.js');

const updateDB = () => {
    got('http://api.csgo.steamlytics.xyz/v2/pricelist?key=' + process.env.api_key, {json: true}).then(response => {
        if (response.body && response.body.items) {
            const items = R.map(R.props(['name', 'safe_price', 'safe_net_price']), R.values(response.body.items));
            R.map(convertPrise, items);
            db.query('TRUNCATE TABLE cs_go_pricelist', () => {
                var sql = "INSERT INTO cs_go_pricelist (name, safe_price, safe_net_price) VALUES ?";
                db.query(sql, [items]);
            });
        }
    }).catch(error => {
        console.log(error.response.body);
    });
};

setInterval(updateDB, 60 * 60 * 1000);

function convertPrise(item) {
    for (let i = 1; i < item.length; i++) {
        if (!R.isEmpty(item[i]) && !R.isNil(item[i]) && !isInt(item[i])) {
            item[i] = Math.round(100 * item[i]);
        }
    }
    return item
}

function isInt(n) {
    return n % 1 === 0 && !n.includes('.');
}

