import { throws } from "assert";
import { exit } from "process";
import { question } from "readline-sync";
var Email;
var  customerDetailsTuple =[];
var mincurrBalance;
var minBalance;
interface home{
homePage();
createAccount();
balanceEnquiry();
savingsAccount();
currentAccount();
savWithDraw();
withDrawCurr();
savDeposit();
savDeposit1();
currDeposit1();
currDeposit();
checkAccBalance();
savOptions();
currOptions();
}

// interface CustomerDetails{
//     Name : any;
//     age : any;
//     phonenumber : any;
//     location : any;
//     state : any;
//     country : any;
//     Email : any;
//}
class bankSystem implements home{
    
    homePage() {
        console.log("Welcome to EMI BANKING SYSTEM");
        console.log("1.Create New Account\n2.Balance Enquiry\n3.Exit");
        let opt : number = require('readline-sync').question("Select your option : ");
        if(opt ==1)
        {
            this.createAccount();
        }
        else if(opt ==2){
            this.balanceEnquiry();
        }
        else if(opt ==3)
        {
            exit();
        }
        
    }

     createAccount() {
         console.log("------------Please select account type to create----------");
        console.log("1.Savings Account\n2.Current Account");
        let option : number = require('readline-sync').question("Select your option : ");
        if(option == 1)
        {
           this.savingsAccount();
        }
        else{
            this.currentAccount();
        }
    }
    balanceEnquiry() {
        // console.log("-----Please select your account type-----");
        //  console.log("1.Savings Account\n2.Current Account\n3.Back");
        //  let selected : number = require('readline-sync').question("Enter your option : ");
        console.log(customerDetailsTuple);
        this.homePage();
    }
    
   
    savingsAccount() {
    
        
         let name1:string = require('readline-sync').question("Enter your Full Name : ");
        customerDetailsTuple.push(name1);
        let age:number = require('readline-sync').question("Enter your age : ");
        if(age >= 68)
        {
            console.log("You are not eligible to create the bank account in our EMI bank")
        }
        
        else{
            customerDetailsTuple.push(age);
            let phoneNumber : number = require('readline-sync').question("Enter your 10 digit Mobile Number : ");
            if(phoneNumber.toString().length != 10)
            {
                console.log("Incorrect number, Enter again correctly");
                this.savingsAccount();
            }
            else{
                customerDetailsTuple.push(phoneNumber);
            let location : any = require('readline-sync').question("Enter your Address : ");
            customerDetailsTuple.push(location);
            let state : string = require('readline-sync').question("Enter your State : ");
            customerDetailsTuple.push(state);
            let country : string = require('readline-sync').question("Enter your Country : ");
            customerDetailsTuple.push(country);
             Email = this.email()//require('readline-sync').question("Enter your Email Address : ");
            customerDetailsTuple.push(Email);
            let accNumber = "SAV"+(Math.floor(Math.random() *1000000000000) +100000000000);
            console.log(accNumber);
            customerDetailsTuple.push(accNumber);
            }
        }
        console.log("Your Savings Account has been created successfully.\n Your Balance in your account is INR0.00\nMinimum balance should be INR500.");
        this.savDeposit();
        //customerDetailsTuple.push(this.deposit());
        console.log(customerDetailsTuple);
    }
    currentAccount() {
        let name1 : string = require('readline-sync').question("Enter your Full Name : ");
        customerDetailsTuple.push(name1);
        let age : number = require('readline-sync').question("Enter your age : ");
        if(age >=68)
        {
            console.log("--You are not eligible to create the bank account in our EMI bank--\n Going back to Homepage");
            this.homePage();

        }
        else{
            customerDetailsTuple.push(age);
            let phoneNumber : number = require('readline-sync').question("Enter your 10 digit Mobile Number : ");
            if(phoneNumber.toString().length != 10)
            {
                console.log("Incorrect number, Enter again correctly");
                this.savingsAccount();
            }else{
                customerDetailsTuple.push(phoneNumber);
            let location : any = require('readline-sync').question("Enter your Address : ");
            customerDetailsTuple.push(location);
            let state : string = require('readline-sync').question("Enter your State : ");
            customerDetailsTuple.push(state);
            let country : string = require('readline-sync').question("Enter your Country : ");
            customerDetailsTuple.push(country);
            Email = this.email();//require('readline-sync').question("Enter your Email Address : ");
            customerDetailsTuple.push(Email);
            let accNumber = "CURR"+(Math.floor(Math.random() *1000000000000) +100000000000);
            console.log(accNumber);
            customerDetailsTuple.push(accNumber);
            //let currBalance : number =0;
            }
        }
        console.log("Your Current Account has been created successfully.\n Your Minimum balance should be INR1000.");
        this.currDeposit();
        
    }

    savWithDraw() {

        let amount : number = require('readline-sync').question("Enter amount to be withdrawn :");
        minBalance = minBalance - amount;
        if(minBalance <= 500)
        {
            console.log("Amount cannot be withdrawn due to restrictions\nPlease enter new amount");
            this.savWithDraw();
        }
        else{
            console.log("Amount successfully withdrawn.Balance in your account is : "+ minBalance);
            this.homePage();
        }


    }
    withDrawCurr() {
        let amount : number = require('readline-sync').question("Enter amount to be withdrawn :");
        mincurrBalance = mincurrBalance - amount;
        if(mincurrBalance <= 1000)
        {
            console.log("Amount cannot be withdrawn due to restrictions\nPlease enter new amount\n Minnimum balance should be INR1000.00");
            this.withDrawCurr();
        }
        else{
            console.log("Amount successfully withdrawn.Balance in your account is : "+ mincurrBalance);
            this.homePage();
        }
    }
    savDeposit() {
        
         
        minBalance =parseInt(require('readline-sync').question("Enter amount to be deposited :"));
        if(minBalance < 500)
        {
            console.log("Please enter amount greater than or equals to INR500.00");
            this.savDeposit();
        }
        else{console.log("Balance in your account is "+ minBalance);}
        customerDetailsTuple.push(minBalance);
        console.log("1.WithDraw\n2.Deposit\n3.Check Balance\n4.Back");
        this.savOptions();
        
        
    }
    currDeposit() {
        mincurrBalance = parseInt(require('readline-sync').question("Enter amount to be deposited :"));
        if(mincurrBalance < 1000)
        {
            console.log("Please enter amount greater than or equals to INR1000.00");
            this.currDeposit();
        }
        else{console.log("Balance in your account is "+ mincurrBalance);}
        customerDetailsTuple.push(mincurrBalance);
        
        console.log("1.WithDraw\n2.Deposit\n3.Check Balance\n4.Back");
        
        this.currOptions();
    }
    savDeposit1() {
        customerDetailsTuple.pop();
        let amount = parseInt(require('readline-sync').question("Enter amount to be deposited : "));
        //let am :number = amount;
        minBalance = minBalance+ amount;
        console.log("Total balance in your account after the deposit is : "+ minBalance);
        
        customerDetailsTuple.push(minBalance);
        //console.log("Press 0 to go back to Main Menu : ");
        let choice = require('readline-sync').question("Press 0 to go to Main Menu ");
        if(choice ==0)
        {
            this.homePage();
        }
    }
    currDeposit1() {
        customerDetailsTuple.pop();
        let amount : number = parseInt(require('readline-sync').question("Enter amount to be deposited : "));
        mincurrBalance = (mincurrBalance + amount);
        console.log("Total balance in your account after the deposit is : "+ mincurrBalance);
        customerDetailsTuple.push(mincurrBalance);

        let choice = require('readline-sync').question("Press 0 to go to Main Menu ");
        if(choice ==0)
        {
            this.homePage();
        }
    }
    checkAccBalance(){
        console.log(customerDetailsTuple.indexOf[-1]);
    }

    savOptions() {
        let chosen : number = require('readline-sync').question("Select the option : ");
        if(chosen ==1)
        {
            this.savWithDraw();
        }
        else if(chosen == 2)
        {
            this.savDeposit1();
        }
        else if(chosen == 3)
        {
            this.checkAccBalance();
        }
        else if(chosen == 4)
        {
            this.createAccount();
        }
    }
    currOptions() {
        let chosen : number = require('readline-sync').question("Select the option : ");
        if(chosen ==1)
        {
            this.withDrawCurr();
        }
        else if(chosen == 2)
        {
            this.currDeposit1();
        }
        else if(chosen == 3)
        {
            this.checkAccBalance();
        }
        else if(chosen == 4)
        {
            this.createAccount();
        }
    }
    email(): string{
        Email = require('readline-sync').question("Enter email address : ");
        var emailReg =new RegExp (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

    if(emailReg.test(Email))
    {
        return Email;
    }
    else{
        console.log("Enter Email address correctly again :- ");
        this.email();
    }
    
    }

}

var obj = new bankSystem();
obj.homePage();