// level {1/2/3}+
// level 3
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

var upper = JSON.parse(JSON.stringify(user,function(a,b){
    return typeof b === "string"?b.toUpperCase():b
}))


// 2nd

var params = "a:2,b:3,c:4,a:5,b:6";
var jsonString = '{';
var items = params.split(',')
for (var i = 0; i<items.length;i++){
    var current = items[i].split(":");
    jsonString += ''+current[0] + ':'+current[1]+',';
    jsonString +="}"
}
console.log(jsonString)

// 3rd
function chckBalanc(expr){
    
}
var expr ="([{}])"
function chckBalanc(expr){
    let stack = []
    for (let i =0;i<expr.length;i++){
        let x =expr[i];
        if(x=='('|| x == '['|| x=='{' ){
            stack.push(x);
            continue;
        }
        if(stack.length==0){
            return false;
        }
        let check;
        switch (x){
            case ')':
                check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
            case '}':
                check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
            case ']':
                check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;

        }
    }

    return (stack.length==0)
}
if(chckBalanc(expr)){
    alert("Balanced")

}else{
    alert("Not Balanced")

}


