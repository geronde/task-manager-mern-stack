# Tasks Manager App

Based on Trello, Tasks manager app is a mern stack (MongoDb - express - React - Node) aimed to manage tasks. You can:

- perform crud operations (Create - Read - Update - Delete)
- sort tasks
- move tasks between lists.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed. If you don't, install it from [here](https://nodejs.org/en/)

You also need to have MongoDb installed. For more, [read here](https://docs.mongodb.com/manual/administration/install-community/)


### Installing

Download the repository
 

```
  $git clone https://github.com/geronde/task-manager-mern-stack.git && cd task-manager-mern-stack 

```
Then

```
   $ npm install 

```
Set up a database in any name you like, and set it in server/apiServer.js 

```
mongoose.connect('mongodb://localhost/<databaseName>', 
                  //...config
                 )
```
Or if it's database with username/password/other options...

```
mongoose.connect('mongodb://username:password@host:port/database?options...');

```
[Read More](http://mongoosejs.com/docs/connections.html)

### How to use 

For Development, run:

```
   npm run start

```
   For Production, run:

```
   npm run build

```


## Demo
This is a [simple demo](https://mern-stack-project.herokuapp.com/)

**Note: In the demo, the database is locked in read mode only. So making any CUD(create-update-delete) operations isn't possible in this demo.** 