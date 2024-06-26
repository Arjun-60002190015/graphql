import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"

import db from './db.js'
//types

import { typeDefs } from "./schema.js";

const resolvers = {
    Query:{
        games(){
            return db.games
        },

        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_, args){
            
            return db.reviews.find((review)=> review.id===args.id) 
        }, 
        game(_, args){
            return db.games.find((game)=> game.id===args.id)
        },
        author(_, args){
            return db.games.find((author)=> author.id===args.id)
        }
    }
}

//server setup

const server = new ApolloServer({
   typeDefs, 
  resolvers  
});

const {url} = await startStandaloneServer(server, {
    listen: {port : 4000}
});

console.log("server is ready at", 4000);