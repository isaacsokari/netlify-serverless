const { query } = require('./utils/hasura');

module.exports.handler = async (event) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);

  const result = await query({
    query: `mutation MyMutation($id: String!, $poster: String!, $tagline: String!, $title: String!) {
      insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
        id
        poster
        tagline
        title
      }
    }`,
    variables: { id, title, tagline, poster },
  });
  return {
    statusCode: 200,
    body: 'in progress',
  };
};
