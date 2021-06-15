// standard function
// const square = function(x){

//     return x * x
    
// }
// console.log();

//Arrow functions
// const square = (x)=>{
//     return x * x

// }
// console.log(square(3));

// short-hand functions
// const square = (x)=> x * x
// console.log(square(8));

//this binding
//.. this is standard function use can use keyword this in this function
// const events = {
//     name:"Birthday party",
//     printgueslist:function (){
//         console.log("Gues list for "+ this.name);
//     }                                   
// }  
// events.printgueslist()

//.. this arrow function that you can't use keyword this in this 
// const events = {
//     name:"Birthday party",
//     printgueslist: ()=>{
//         console.log("Gues list for "+ this.name);
//     }                                   
// }  
// events.printgueslist()

// this is property you can use keyword this like standard function
// const events = {
//     name:"Birthday party",
//     printgueslist(){
//         console.log("Gues list for "+ this.name);
//     }                                   
// }  
// events.printgueslist()


const events = {
    name:"Birthday party",
    guests:['juwerio','mohamed','omar'],
    
    printgueslist(){
        const that = this
        console.log("Gues list for "+ this.name);
        //this.guests.forEach(function(guest){
           // console.log(guest + " is attending the "+ that.name);// this line produces undefined to solve use that variable
 //})
        // or u can use  arrow function
        this.guests.forEach((guest) =>{
            console.log(guest + " is attending the "+ this.name);
        })
    } 

                                      
}  
events.printgueslist()
