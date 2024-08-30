class BankAccount{
        
    constructor(accountNumber , ownerName , Balance = 0){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.Balance = Balance;
        
        
    }
    
    deposit(amount){
        this.Balance+=amount;
        console.log(amount + " Has been added to your account");
    }

    withdraw(amount){
        if(amount <= this.Balance){
            this.Balance-=amount;
            console.log(amount + " has been duducted from your account");
        }else if(amount > this.Balance){
            console.log("Insufficient funds");
        }
        
    }
    getBalance(){
       console.log("Balance:" + this.Balance);
    }
    displayAccountInfo(){
        console.log(`account Number: ${this.accountNumber} \nownerName: ${this.ownerName} \nBalance: ${this.Balance}`);
    }
}

const account1 = new BankAccount(1001 , "Rubel Hosen", 500);
const account2 = new BankAccount(1002 , "Ahsan Alam", 400);
account1.displayAccountInfo();
account1.deposit(10000);
account1.withdraw(1000);
account1.getBalance();


//account 2
account2.displayAccountInfo();
account2.deposit(30000);
account2.withdraw(4000);
account2.getBalance();




