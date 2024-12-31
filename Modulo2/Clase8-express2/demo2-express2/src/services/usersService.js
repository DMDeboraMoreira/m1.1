const users=[
    {
        id:1,
        name: "jorge"
    },
    {
        id:2,
        name: "belu"
    },
    {
        id:3,
        name: "alejo"
    }
]

let id=4

module. exports ={
    getUsers: async()=>{
        return users
    },
    createUser: async (name)=>{
        const newUser ={
            id,
            name,
        }
        id++
        users.push(newUser)

    },
}