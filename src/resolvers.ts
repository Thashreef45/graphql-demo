const resolvers = {
    Query: {
      hello: () => 'Hello, World!',
      getUser: () => {
        const user = {
          id: 1,
          name: 'Thashreef',
          email: 'Thashreef@example.com'
        };
        return user;
      }
    }
  };
  
  export default resolvers;
  