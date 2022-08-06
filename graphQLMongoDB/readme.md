# GRAPHQL WITH NODE


MONGOOSE 
We use this mongodb object modeling for node.js.
https://mongoosejs.com/

MONGODB

MongoDB Community Server (mongod, mongo)
https://www.mongodb.com/try/download/community

Instructions to install
https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-windows/

cd 'C:\Program Files\MongoDB\Server\6.0\bin\'

.\mongod.exe  --dbpath="c:\dev\mongodb-data"
.\mongod.exe  --dbpath="c:\data\db"


MongoDB Shell (mongosh)
https://www.mongodb.com/try/download/shell
https://docs.mongodb.com/mongodb-shell/

.\mongosh.exe "mongodb://localhost:27017"


MongoDB Compass GUI
https://www.mongodb.com/products/compass




GRAPHIQL
GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.

 Type queries into this side of the screen, and you will see intelligent typeaheads aware of the current GraphQL type schema and live syntax and validation errors highlighted within the text.

 GraphQL queries typically start with a "{" character. Lines that starts with a # are ignored.

 An example GraphQL query might look like:

   {
      field(arg: "value") {
        subField
      }
   }

e.g:
{
    course(id:1){
        name
        language
    }
}