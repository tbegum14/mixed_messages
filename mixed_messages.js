//# mixed_messages
const randomNum = (num)=>{
    return Math.floor(Math.random()*num)
}

const statementOne = ()=>{
    let x = randomNum(4)
    console.log(x)
    switch (x){
        case 0:
            return "You are a "
            break;
        case 1:
            return "You look like a "
            break;
        case 2:
            return "You smell like a "
            break;
        case 3:
            return "You remind me of a "
            break;
        default:
            "error message"
            break;        
    }
}
 
const statementTwo = ()=>{
    let x = randomNum(4)
    console.log(x)
    switch (x){
        case 0:
            return "You are a "
            break;
        case 1:
            return "You look like a "
            break;
        case 2:
            return "You smell like a "
            break;
        case 3:
            return "You remind me of a "
            break;
        default:
            "error message"
            break;        
    }
}
console.log(statementOne())