// Day 11 Challenge: Start Coding! 🚀
// Question 31: 
var username = [];
if (username.length === 0) {
    console.log("Hello Dear User ");
}
else {
    console.log("Try Again");
}
;
// Question 32: 
var orignalName = ["user1", "user2", "user3", "user4"];
var currentName = ["name1", "name2", "name3", "name4", "name5"];
orignalName.forEach(function (orignalName) {
    if (currentName.some(function (curren_user) {
        return curren_user.toLowerCase() === orignalName.toLowerCase();
    })) {
        console.log("".concat(orignalName, " New user name"));
    }
    else {
        console.log("".concat(orignalName, " is available"));
    }
});
// Question 33:
var suffixMethods = [1, 2, 3, 4, 5, 5, 6, 6];
suffixMethods.forEach(function (suffixMethod) {
    var suffix = "th";
    if (suffixMethod === 1) {
        suffix = "st";
    }
    else if (suffixMethod === 2) {
        suffix = "nd";
    }
    else if (suffixMethod === 3) {
        suffix = "rd";
    }
    console.log("".concat(suffixMethod, " ").concat(suffix));
});
