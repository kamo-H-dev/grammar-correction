export const incorrectWordsResponseFormat = {
  'type': 'json_schema',
  'json_schema': {
    'name': 'incorrect_words',
    'strict': true,
    'schema': {
      'type': 'object',
      'properties': {
        'incorrect_words': {
          'type': 'array',
          'items': {
            'type': 'string'
          }
        }
      },
      'required': ['incorrect_words'],
      'additionalProperties': false
    }
  }
};

// TODO I have not connected db because in the description only about the login and in that case not need it, without sign up it will be the same as this
export const testUser = {
  id: '1',
  email: 'grammar-correction@test.com',
  password: '12345678',
};
