const movies = require('../data/movies.json');

module.exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return {
      statusCode: 404,
      body: 'Not Found',
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
};
