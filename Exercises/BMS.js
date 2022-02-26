"use strict";
exports.__esModule = true;
var process_1 = require("process");
var Email;
var customerDetailsTuple = [];
var mincurrBalance;
var minBalance;
// interface CustomerDetails{
//     Name : any;
//     age : any;
//     phonenumber : any;
//     location : any;
//     state : any;
//     country : any;
//     Email : any;
//}
var bankSystem = /** @class */ (function () {
    function bankSystem() {
    }
    bankSystem.prototype.homePage = function () {
        console.log("Welcome to EMI BANKING SYSTEM");
        console.log("1.Create New Account\n2.Balance Enquiry\n3.Exit");
        var opt = require('readline-sync').question("Select your option : ");
        if (opt == 1) {
            this.createAccount();
        }
        else if (opt == 2) {
            this.balanceEnquiry();
        }
        else if (opt == 3) {
            (0, process_1.exit)();
        }
    };
    bankSystem.prototype.createAccount = function () {
        console.log("------------Please select account type to create----------");
        console.log("1.Savings Account\n2.Current Account");
        var option = require('readline-sync').question("Select your option : ");
        if (option == 1) {
            this.savingsAccount();
        }
        else {
            this.currentAccount();
        }
    };
    bankSystem.prototype.balanceEnquiry = function () {
        // console.log("-----Please select your account type-----");
        //  console.log("1.Savings Account\n2.Current Account\n3.Back");
        //  let selected : number = require('readline-sync').question("Enter your option : ");
        console.log(customerDetailsTuple);
        this.homePage();
    };
    bankSystem.prototype.savingsAccount = function () {
        var name1 = require('readline-sync').question("Enter your Full Name : ");
        customerDetailsTuple.push(name1);
        var age = require('readline-sync').question("Enter your age : ");
        if (age >= 68) {
            console.log("You are not eligible to create the bank account in our EMI bank");
        }
        else {
            customerDetailsTuple.push(age);
            var phoneNumber = require('readline-sync').question("Enter your 10 digit Mobile Number : ");
            if (phoneNumber.toString().length != 10) {
                console.log("Incorrect number, Enter again correctly");
                this.savingsAccount();
            }
            else {
                customerDetailsTuple.push(phoneNumber);
                var location_1 = require('readline-sync').question("Enter your Address : ");
                customerDetailsTuple.push(location_1);
                var state = require('readline-sync').question("Enter your State : ");
                customerDetailsTuple.push(state);
                var country = require('readline-sync').question("Enter your Country : ");
                customerDetailsTuple.push(country);
                Email = this.email(); //require('readline-sync').question("Enter your Email Address : ");
                customerDetailsTuple.push(Email);
                var accNumber = "SAV" + (Math.floor(Math.random() * 1000000000000) + 100000000000);
                console.log(accNumber);
                customerDetailsTuple.push(accNumber);
            }
        }
        console.log("Your Savings Account has been created successfully.\n Your Balance in your account is INR0.00\nMinimum balance should be INR500.");
        this.savDeposit();
        //customerDetailsTuple.push(this.deposit());
        console.log(customerDetailsTuple);
    };
    bankSystem.prototype.currentAccount = function () {
        var name1 = require('readline-sync').question("Enter your Full Name : ");
        customerDetailsTuple.push(name1);
        var age = require('readline-sync').question("Enter your age : ");
        if (age >= 68) {
            console.log("--You are not eligible to create the bank account in our EMI bank--\n Going back to Homepage");
            this.homePage();
        }
        else {
            customerDetailsTuple.push(age);
            var phoneNumber = require('readline-sync').question("Enter your 10 digit Mobile Number : ");
            if (phoneNumber.toString().length != 10) {
                console.log("Incorrect number, Enter again correctly");
                this.savingsAccount();
            }
            else {
                customerDetailsTuple.push(phoneNumber);
                var location_2 = require('readline-sync').question("Enter your Address : ");
                customerDetailsTuple.push(location_2);
                var state = require('readline-sync').question("Enter your State : ");
                customerDetailsTuple.push(state);
                var country = require('readline-sync').question("Enter your Country : ");
                customerDetailsTuple.push(country);
                Email = this.email(); //require('readline-sync').question("Enter your Email Address : ");
                customerDetailsTuple.push(Email);
                var accNumber = "CURR" + (Math.floor(Math.random() * 1000000000000) + 100000000000);
                console.log(accNumber);
                customerDetailsTuple.push(accNumber);
                //let currBalance : number =0;
            }
        }
        console.log("Your Current Account has been created successfully.\n Your Minimum balance should be INR1000.");
        this.currDeposit();
    };
    bankSystem.prototype.savWithDraw = function () {
        var amount = require('readline-sync').question("Enter amount to be withdrawn :");
        minBalance = minBalance - amount;
        if (minBalance <= 500) {
            console.log("Amount cannot be withdrawn due to restrictions\nPlease enter new amount");
            this.savWithDraw();
        }
        else {
            console.log("Amount successfully withdrawn.Balance in your account is : " + minBalance);
            this.homePage();
        }
    };
    bankSystem.prototype.withDrawCurr = function () {
        var amount = require('readline-sync').question("Enter amount to be withdrawn :");
        mincurrBalance = mincurrBalance - amount;
        if (mincurrBalance <= 1000) {
            console.log("Amount cannot be withdrawn due to restrictions\nPlease enter new amount\n Minnimum balance should be INR1000.00");
            this.withDrawCurr();
        }
        else {
            console.log("Amount successfully withdrawn.Balance in your account is : " + mincurrBalance);
            this.homePage();
        }
    };
    bankSystem.prototype.savDeposit = function () {
        minBalance = parseInt(require('readline-sync').question("Enter amount to be deposited :"));
        if (minBalance < 500) {
            console.log("Please enter amount greater than or equals to INR500.00");
            this.savDeposit();
        }
        else {
            console.log("Balance in your account is " + minBalance);
        }
        customerDetailsTuple.push(minBalance);
        console.log("1.WithDraw\n2.Deposit\n3.Check Balance\n4.Back");
        this.savOptions();
    };
    bankSystem.prototype.currDeposit = function () {
        mincurrBalance = parseInt(require('readline-sync').question("Enter amount to be deposited :"));
        if (mincurrBalance < 1000) {
            console.log("Please enter amount greater than or equals to INR1000.00");
            this.currDeposit();
        }
        else {
            console.log("Balance in your account is " + mincurrBalance);
        }
        customerDetailsTuple.push(mincurrBalance);
        console.log("1.WithDraw\n2.Deposit\n3.Check Balance\n4.Back");
        this.currOptions();
    };
    bankSystem.prototype.savDeposit1 = function () {
        customerDetailsTuple.pop();
        var amount = parseInt(require('readline-sync').question("Enter amount to be deposited : "));
        //let am :number = amount;
        minBalance = minBalance + amount;
        console.log("Total balance in your account after the deposit is : " + minBalance);
        customerDetailsTuple.push(minBalance);
        //console.log("Press 0 to go back to Main Menu : ");
        var choice = require('readline-sync').question("Press 0 to go to Main Menu ");
        if (choice == 0) {
            this.homePage();
        }
    };
    bankSystem.prototype.currDeposit1 = function () {
        customerDetailsTuple.pop();
        var amount = parseInt(require('readline-sync').question("Enter amount to be deposited : "));
        mincurrBalance = (mincurrBalance + amount);
        console.log("Total balance in your account after the deposit is : " + mincurrBalance);
        customerDetailsTuple.push(mincurrBalance);
        var choice = require('readline-sync').question("Press 0 to go to Main Menu ");
        if (choice == 0) {
            this.homePage();
        }
    };
    bankSystem.prototype.checkAccBalance = function () {
        console.log(customerDetailsTuple.indexOf[-1]);
    };
    bankSystem.prototype.savOptions = function () {
        var chosen = require('readline-sync').question("Select the option : ");
        if (chosen == 1) {
            this.savWithDraw();
        }
        else if (chosen == 2) {
            this.savDeposit1();
        }
        else if (chosen == 3) {
            this.checkAccBalance();
        }
        else if (chosen == 4) {
            this.createAccount();
        }
    };
    bankSystem.prototype.currOptions = function () {
        var chosen = require('readline-sync').question("Select the option : ");
        if (chosen == 1) {
            this.withDrawCurr();
        }
        else if (chosen == 2) {
            this.currDeposit1();
        }
        else if (chosen == 3) {
            this.checkAccBalance();
        }
        else if (chosen == 4) {
            this.createAccount();
        }
    };
    bankSystem.prototype.email = function () {
        Email = require('readline-sync').question("Enter email address : ");
        var emailReg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        if (emailReg.test(Email)) {
            return Email;
        }
        else {
            console.log("Enter Email address correctly again :- ");
            this.email();
        }
    };
    return bankSystem;
}());
var obj = new bankSystem();
obj.homePage();
