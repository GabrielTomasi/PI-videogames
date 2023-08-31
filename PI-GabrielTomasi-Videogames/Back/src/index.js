//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./app.js');
const { conn } = require('./db.js');
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "http://api.rawg.io/api/genres";
const axios = require('axios')
const {Genres} = require("./db.js");


  server.listen(3001, () => {conn.sync({ force: true }).then(async () => {
    try {
      const response = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`))
      const allGen = response.data.results
      allGen.map(async (gen)=> await Genres.findOrCreate({where: {name: gen.name}}))
        console.log('%s listening at 3001'); // eslint-disable-line no-console
    } catch (error) {
      console.log(error);
    }
  });
});
