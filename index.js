const database = require("./database");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    justdrop: [Justdrop]
    mostpopular: [Mostpopular]
    newin: [Newin]
    buildawinter: [Buildawinter]
    mostshared: [Mostshared]
    museum: [Museum]
    suedeshoes: [Suedeshoes]
    lowest: [Lowest]
    highest: [Highest]
    upcoming: [Upcoming]
    scent: [Scent]
    giftideas: [Giftideas]
    end: [End]

    banner: [Banner]

    menu1: [Menu1]
    menu2: [Menu2]

    stylepicks: [Stylepicks]
    todaypeoples: [Todaypeoples]
  }
  type Justdrop {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Mostpopular {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Newin {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Buildawinter {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Mostshared {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Museum {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Suedeshoes {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Lowest {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Highest {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Upcoming {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Scent {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Giftideas {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type End {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }

  type Stylepicks {
    id: ID!
    nickname: String!
  }
  type Todaypeoples {
    id: ID!
    nickname: String!
  }

  type Banner {
    id: ID!
    imgName: String!
    bottomColor: String!
    backColor: String!
  }

  type Menu1 {
    id: ID!
    imgName: String!
    title : String!
  }
  type Menu2 {
    id: ID!
    imgName: String!
    title : String!
  }
`;

const resolvers = {
  Query: {
    menu1: () => database.menu1,
    menu2: () => database.menu2,

    justdrop: () => database.justdrop,
    mostpopular: () => database.mostpopular,
    newin: () => database.newin,
    buildawinter: () => database.buildawinter,
    mostshared: () => database.mostshared,
    museum: () => database.museum,
    suedeshoes: () => database.suedeshoes,
    lowest: () => database.lowest,
    highest: () => database.highest,
    upcoming: () => database.upcoming,
    scent: () => database.scent,
    giftideas: () => database.giftideas,
    end: () => database.end,

    stylepicks: () => database.stylepicks,
    todaypeoples: () => database.todaypeoples,

    banner: () => database.banner,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
