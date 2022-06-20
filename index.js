/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let letter = String(prompt("Enter a letter"))
console.log(letter)

 let userfinder = users.filter(user=>{
    if(user.name.includes(letter)){
        console.log("This user name contains the prompted letter :",user.name)

        
       
    }
    
    else{
        console.log( user.name , "User name do not   contains this letter or it contains it in uppercase!!")
    }
    
})


function greeting(){

    let count = 1000;

    for(let user of userfinder){
        setTimeout(function (){console.log(`Hi, ${user.name}`)}, count);
        count += 1000;
    }
}
greeting();


// function greetusers(){
   
//     console.log(`hello , ${user.name}`)
// }
// greetusers()

// let greet = setTimeout(greetusers,2000);