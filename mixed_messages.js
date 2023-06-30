//# mixed_messages
const randomNum = (num)=>{
    return Math.floor(Math.random()*num)
}

const statementOne = ()=>{
    let x = randomNum(4)
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
    let x = randomNum(6)
    switch (x){
        case 0:
            return "banana"
            break;
        case 1:
            return "loser"
            break;
        case 2:
            return "armpit"
            break;
        case 3:
            return "princess"
            break;
        case 4:
            return "lemon"
            break;
        case 5:
            return "poo"
            break;    
        default:
            "error message"
            break;        
    }
}

const statementThree = ()=>{
    let x = randomNum(3)
    switch (x){
        case 0:
            return " on holiday."
            break;
        case 1:
            return " falling asleep."
            break;
        case 2:
            return " up a tree."
            break;
        default:
            return "error message"
            break;        
    }
}
console.log(statementOne()+statementTwo()+statementThree())