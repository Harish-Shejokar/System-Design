const { use } = require("react");

//general class for splitting expenses
class SplitExpense{
   splitExpense(typeOfSplit, usersData) {
       if (typeOfSplit === "Equal") {
           
       }

       if (typeOfSplit === "Exact") {
           
       }

       if (typeOfSplit === "Percent") {
           
       }

   }
}



class User{  
    constructor(userName) {
        this.userName = userName;
        this.userId = userName + Math.random(6);
    }
}

class Equal{
    getEqualAmount(numberOfUsers, amount){
        return amount / numberOfUsers;
    }
}

class Exact{

    /*
        totalAmount = 140 

        userWithAmount = [
            {
                user: {userName, userId}
                amount : 50,
            },
            {
                user: {userName, userId}
                amount : 30,
            },
            {
                user: {userName, userId}
                amount : 60,
            },
        ];
        }
    */
    getExactAmount(usersWithAmount, totalAmount) {
        let addAllUserAmount = 0;
        //split-amount not less & greater than totalAmount exception we can handle that in input or frontend
        for (let i = 0; i < usersWithAmount.length; i++){
            let user = usersWithAmount[i];
            addAllUserAmount += user?.amount;
        }

        if (addAllUserAmount > totalAmount || addAllUserAmount < totalAmount) {
            throw new Error("Enter Valid Exact Amount");
        }

        return usersWithAmount;

    }




}


class Percentage{
     /*
        totalAmount = 140 

        userWithAmount = [
            {
                user: {userName, userId}
                percent : 50%,
            },
            {
                user: {userName, userId}
                amount : 25%,
            },
            {
                user: {userName, userId}
                amount : 25%,
            },
        ];
        }
    */
    getPercentAmount(usersWithAmount, totalAmount) {
        //throw exception error , which we can handle in frontend also
    
        for (let i = 0; i < usersWithAmount.length; i++){
            let user = usersWithAmount[i];
            addAllUserAmount += user?.percent;
        }

        if (addAllUserAmount > 100 || addAllUserAmount < 100) {
            throw new Error("Enter Valid Percent");
        }
    }
}