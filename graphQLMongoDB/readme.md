# GRAPHQL WITH NODE

This is a little project using graphQL in nodejs.
A graphQL API (query language for API) and a runtime for fulfilling those queries with existing data in MongoDB. GraphQL provides a complete and understandable description of the data in the API, gives the power to ask for exactly what they need and nothing more.

## SOFTWARE USED
We use this libs:
- Nodejs v16: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Npm: Node package manager
- Git: Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
- MongoDB v6.0: MongoDB Community Server (mongod, mongo) & Compass ( https://www.mongodb.com/try/download/community )
- PostMan: an API platform for building and using APIs. ( https://www.postman.com/ )

## LIBS USED
We use this libs:
- mongoose: MongoDB object modeling for node.js ( https://mongoosejs.com/ )
- graphql: A query language for the API ( https://graphql.org/   - https://graphql.org/graphql-js/ )
- bcrypt:  A library to help you hash passwords.
- jsonwebtoken:  An implementation of JSON Web Tokens.
- express : minimalist web framework for node.
- express-graphql:  GraphQL HTTP server with any HTTP web framework that supports connect styled middleware, including Connect itself, Express and Restify.

*See package.json for more detail.

# 1.Start Mongo
- https://www.mongodb.com/docs/v5.0/administration/install-on-linux/
- https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-os-x/
- https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-windows/

e.g.
```bash
# cd 'C:\Program Files\MongoDB\Server\6.0\bin\'
# .\mongod.exe  --dbpath="c:\dev\mongodb-data"
```

# 2.Start Service GraphQL

```bash
# node .\index.js 

# http://localhost:3131/graphql for API requests with PostMan
# http://localhost:3131/graphiql for Check & review SCHEMA in browser (GRAPHIQL)
```

# 3.PostMan

You can import graphQL.postman_collection.json with all request type. 