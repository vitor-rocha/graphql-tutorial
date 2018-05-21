const authors = [
  {
    id: 1,
    name: 'vitor',
    age: 24,
    books: [
      'book1',
      'book2'
    ]
  },
  {
    id: 2,
    name: 'pedro',
    age: 32,
    books: [
      'book3',
      'book4'
    ]
  }
];

const resolvers = {
  Query: {
    authors: () => {
      return authors
    },
    author: (root, { id }) => {
      return authors.find(author => author.id === id);
    }
  }
};

export default resolvers;