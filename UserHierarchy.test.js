const { test } = require("@jest/globals");
const UserHierarchy = require("./UserHierarchy.js")

test("Successful I/O of a role.", () => {
   let use = new UserHierarchy();
   use.setRoles({"Id" : 1, "Name":"System Administrator", "Parent": 0});
   console.log(use.getRoles());
});

test("Successful I/O of a user.", () => {
   let use = new UserHierarchy();
   use.setRoles({"Id" : 1, "Name":"System Administrator", "Parent": 0});
   use.setUsers({"Id" : 1, "Name":"Dewan Arun Singh", "Role": 1});
   console.log(use.getUsers());
});

test("Stopping addition of a user having invalid role.", () => {
   let use = new UserHierarchy();
   use.setRoles({"Id" : 1, "Name":"System Administrator", "Parent": 0});
   use.setUsers({"Id" : 1, "Name":"Dewan Arun Singh", "Role": 15});
   console.log(use.getUsers());
});

test("Successful input of multiple roles and users.", () => {
   let use = new UserHierarchy();
   use.setRoles(roles);
   use.setUsers(users);
   console.log(use.getRoles());
   console.log(use.getUsers());
});

test("Success fetch of all subordinates of userId = 1.", ()=> {
   let use = new UserHierarchy();
   use.setRoles(roles);
   use.setUsers(users);
   use.getSubOrdinates(1);
});