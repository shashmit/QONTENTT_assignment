## To call all the users in the GraphQl
`You should use postman or any alternative tool to hit the graphQl api. `

`Link: https://qontenttassignment-production.up.railway.app/`

#### To get all the users
```

query ExampleQuery {
    users{
        id
        name
        age
        email
    }
}
```

#### To get individual user
```
query User($id: ID!) {
  user(ID: $id) {
    name
  }
}
```
` In the variable field add :
{
    "id": "65cf5fdb3d26984715c78725"
}
`
#### To create a User
```
mutation CreateUser($userInput: UserInput){
  createUser(userInput: $userInput) {
    name
    age
    email
  }
}
```
` In the variable field for example `
```
{
   "userInput":{
       "name": "anything",
       "age": 10,
       "email": "dfbjdsk#@bsdfjds.com",
   }
}
```
#### To delete a User
```
mutation DeleteUser($deleteUserId2: ID!) {
  deleteUser(ID: $deleteUserId2)
}
```
`In the variable get any user id example `
```
{
 "deleteUserId2": "65cf5fdb3d26984715c78725"
}
```
I have already deleted it so it wont work, you can get it from the all user query and then delete it. It will return either true or false.


The backend is hosted on Railway

