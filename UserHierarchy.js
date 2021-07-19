class UserHierarchy {
    constructor() {
        this.users = [];
        this.roles = [] ;
    }
    // Function setRoles for setting the roles. Check if input is array or a stand alone variable. 
    setRoles(_inpRoles) {
        if(Array.isArray(_inpRoles)){
            for(let y=0; y< _inpRoles.length ; y++){
                    this.roles.push(_inpRoles[y]);
                }
        }
        else{
            this.roles.push(_inpRoles);
        }
        
    };

    // Function setUsers for setting the users. Check if input is array or a stand alone variable. 
    setUsers(_inpUsers){
        
        // Check whether roles have been defined yet or not.
        if(this.roles.length == 0)
            // try catch not used to terminate the execution. With try catch the execution continues after throwing exception. 
            throw new Error("No roles have been created in the system. Create roles before proceeding with user creation.");
        
        if(Array.isArray(_inpUsers)){   
            for(let y = 0; y < _inpUsers.length ; y++){

                // Check if we have defined roles and the role id passed is a valid role id. If not, then we throw an error. 
                try{
                    if(this.roles.find(obj => obj.Id == _inpUsers[y].Role))
                        this.users.push(_inpUsers[y]);
                    else
                        throw new Error("The role given for user " + _inpUsers[y].Name + " doesn't match any of the defined roles in system.");
                        
                }
                catch(e){
                    console.error(e);
                }
            }
        }
        else{
            // Check if the role provided for the user is a valid role. If not throw an error. 
            try{
                if(this.roles.find(obj => obj.Id == _inpUsers.Role))
                    this.users.push(_inpUsers);
                else
                    throw new Error("The role given for user " + _inpUsers.Name + " doesn't match any of the defined roles in system.");
                    
            }
            catch(e){
                console.error(e);
            }
        }
    }

    // Prints all the roles to console.
    getRoles() {
        return this.roles;
    };

    // Prints all the users to console
    getUsers(){
        return this.users;
    };

    // Prints all the subordinates of a role to console.
    getSubOrdinates(userId){
        let head = this.users.find(obj => obj.Id == userId);
        
        let result = [];
        let temp = [];
        if(head){
            for(let i = 0 ; i < this.roles.length; i++){
                if(this.roles[i].Parent >= head.Role)
                    temp.push(this.roles[i].Id);
            }
            for(let i = 0 ; i < temp.length ; i++){
                result.push(this.users.filter(obj => obj.Role == temp[i]));
            }
        }
        console.log(result);
    };
}

roles = [
    {
    "Id": 1,
    "Name": "System Administrator",
    "Parent": 0
    },
    {
    "Id": 2,
    "Name": "Location Manager",
    "Parent": 1,
    },
    {
    "Id": 3,
    "Name": "Supervisor",
    "Parent": 2,
    },
    {
    "Id": 4,
    "Name": "Employee",
    "Parent": 3,
    },
    {
    "Id": 5,
    "Name": "Trainer",
    "Parent": 3,
    }
];
users = [
{
"Id": 1,
"Name": "Adam Admin",
"Role": 1
},
{
"Id": 2,
"Name": "Emily Employee",
"Role": 4
},
{
"Id": 3,
"Name": "Sam Supervisor",
"Role": 3
},
{
"Id": 4,
"Name": "Mary Manager",
"Role": 2
},
{   
"Id": 5,
"Name": "Steve Trainer",
"Role": 5
}
];
module.exports = UserHierarchy

// const userHierarchy = new UserHierarchy();
// userHierarchy.setRoles(roles);
// userHierarchy.setUsers(users);


// console.log(userHierarchy.getUsers());
