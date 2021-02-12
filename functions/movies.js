const movies = require('../data/movies.json');

module.exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(movies),
  };
};
