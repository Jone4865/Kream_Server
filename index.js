const database = require("./database");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    cozyone: [CozyOne],
    formyself: [ForMyself],
    justdrop: [JustDrop],
    KBO: [KBO],
    mostpopular: [MostPopular],
    mostwish: [MostWish],
    newhighest: [NewHighest],
    newin: [NewIn],
    newlowest: [NewLowest],
    streetmood: [StreetMood],
    stylepicks: [StylePicks],
    todaypeople: [TodayPeople],
    uncoming: [UnComing],
    unique: [Unique],
    wintercrop: [WinterCrop]
  }
  type CozyOne {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type ForMyself {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type JustDrop {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type KBO {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type MostPopular {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type MostWish {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type NewHighest {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type NewIn {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type NewLowest {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type StreetMood {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type UnComing {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type Unique {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }
  type WinterCrop {
    id: ID!
    price: Int!
    maker: String!
    content: String!
    delivery: String
    now: Boolean!
    imgName: String!
  }

  type StylePicks {
    id: ID!
    nickname: String!
    imgName: String!
  }

  type TodayPeople {
    id: ID!
    nickname: String!
    imgName: String!
  }

`;
const resolvers = {
  Query: {
    cozyone: () => database.cozyone,
    formyself: () => database.formyself,
    justdrop: () => database.justdrop,
    KBO: () => database.KBO,
    mostpopular: () => database.mostpopular,
    mostwish: () => database.mostwish,
    newhighest: () => database.newhighest,
    newin: () => database.newin,
    newlowest: () => database.newlowest,
    streetmood: () => database.streetmood,
    stylepicks: () => database.stylepicks,
    todaypeople: () => database.todaypeople,
    uncoming: () => database.uncoming,
    unique: () => database.unique,
    wintercrop: () => database.wintercrop,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});