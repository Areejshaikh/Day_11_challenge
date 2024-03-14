// Day 11 Challenge: Start Coding! 🚀

// Question 31: 
let username :string[] = [];
if (username.length ===  0) {
    console.log("Hello Dear User ");
} else{
    console.log("Try Again");
};


// Question 32: 

let orignalName: string[]= ["user1","user2" ,"user3","user4"];
let currentName :string[] = ["name1","name2","name3","name4","name5"];


    orignalName.forEach(orignalName => {
        if (currentName.some(curren_user =>
            curren_user.toLowerCase() === orignalName.toLowerCase())) {
                console.log(`${orignalName} New user name`);
        } else {
            console.log(`${orignalName} is available`);
            
        }
    });

// Question 33:


let suffixMethods : number [] = [1,2,3,4,5];

suffixMethods.forEach(suffixMethod => {
    let suffix = "th";
    if (suffixMethod === 1) {
        suffix = "st";

    } else if (suffixMethod === 2) { 
        suffix = "nd";
    } else if (suffixMethod === 3){
        suffix = "rd";
    }
    console.log(`${suffixMethod}${suffix}`);
});


