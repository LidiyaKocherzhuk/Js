function userCard(number) {
    // let cardOption = new getCardOptions(number);
    // console.log(cardOption);
    // putCredits(150, cardOption);
    // takeCredits(100, cardOption);
    // setTransactionLimit(5000, cardOption);
    // let card1 = new getCardOptions(1);



    function getCardOptions(key){
            this.balance = 100;
            this.transactionLimit = 100;
            this.historyLogs = [
                {operationType: '', credits: 474, operationTime: ""},
                {operationType: '', credits:47 , operationTime: ""},
                {operationType: '', credits:7, operationTime: ""},
            ];
            this.key = key;
    }
    let cardOption = new getCardOptions(number);

    function putCredits(putNum, user) {
        user.balance = user.balance + putNum;
    }

    let objMethods = {
        getCard: function () {
            console.log(new getCardOptions(number));
        },
        put: function (){
            return putCredits(150, cardOption);
        }
    }
    return objMethods;

// function takeCredits(takeNum, user) {
//     if (user.balance > takeNum && user.transactionLimit > takeNum) {
//     user.balance = user.balance - takeNum;
//     }
//     else {
//        console.error('Не вистачає коштів або або ліміт є меншим!')
//     }
// }
//
// function setTransactionLimit(transactionNum, user) {
//     user.transactionLimit = transactionNum;
// }
//
// function transferCredits(transferNum, user, recipient) {
//     if (user.balance > transferNum && user.transactionLimit > transferNum) {
//         user.balance = user.balance - transferNum;
//
//     }
//     recipient.balance = recipient.balance + transferNum;
// }

}

userCard(3).getCard();
userCard(3).put();
// let card1 = new userCard(1);
