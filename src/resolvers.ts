const resolvers = {
    Query: {
      hello: () => 'Hello, World!',
      getUser: () => {
        const user = {
          id: 1,
          name: 'Thashreef',
          email: 'Thashreef@example.com',
          address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001'
          }
        };
        return user;
      }
    }
  };
  
  export default resolvers;
  