const accountId = 144526
let accountEmail = "sakshi11@gmail.com"
var accountPassword = "125768"
accountCity = "Jalgaon"
let accountState;  //undefined bcz not defined value

// accountId = 2   //not allow

accountEmail = "sakshi11@h.com"
accountPassword = "764378"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
bcz of issue in block and functional scope

*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])