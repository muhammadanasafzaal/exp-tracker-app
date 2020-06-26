 import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext' 
/* import Wallpaper from './wp.jpg' */

function Child () {

    let {transactions ,  addTransaction, delTransaction }   = useContext(TransactionContext);
     let [newDesc, setDesc] = useState("");   
    let [newAmount, setAmount] = useState(0);
    
    const handleAddition = (event) =>{
        event.preventDefault()
        if(Number(newAmount) === 0){        /* agar amount zero ho to alert krde k value correct nahe aur return false se if k agy ka code nahe chalaega yahe ruk jaega */
            alert("Please enter correct value");
            return false;
        }
           addTransaction({
            amount: Number(newAmount),
            desc: newDesc,
            id:transactions.length
        });   

        setDesc('');    /* yeh ek he value ko 2 bar add krwane se rokega */
        setAmount(0);
    } 

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++){
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount   
        }
        
        return income;
    }


    console.log(getIncome())
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++){
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
             }
            return expense;
    }

    /* console.log(transactions); */


    return(
        <div className="container">
            {/* <img src={Wallpaper} alt="bgimg" /> */}
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br/> ${getIncome() + getExpense() } </h3> {/* //yaha + islye laga rahe hain k expense ki value already minus mein hogi and agar getIncome - getExpense krenge to woh minus minus se plus kr k values add krdega */}

            <div className="expensecontainer">
                <h3>INCOME <br/> ${getIncome()}</h3>
                <h3>EXPENSE <br/> ${getExpense()}</h3>        
            </div>
              <h3>History</h3>
            <hr/>

            <ul className="transaction-list">
                {transactions.map((transObj, idx)=>{
                    return(
                        <li key={idx}> 
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>  
                            <button className="delete-btn" type="button" onClick={()=>delTransaction({id:transObj.id})}>x</button>
                        </li>
                    )
                })}
            
            </ul>

            <h3>Add New Transaction</h3>
            <hr/>

            <form className="transaction-form" onSubmit={handleAddition} >
                <label>
                    Enter Description <br/>
                    <input type="text" 
                    value={newDesc} 
                    placeholder="Enter Description" 
                    onChange={(ev)=>setDesc(ev.target.value)}  required/>
                </label>

                <label>
                    Enter Amount <br/>
                    <input type="number"
                    value={newAmount} 
                    placeholder="Enter Amount"
                    onChange={(ev)=>setAmount(ev.target.value)}  required/>
                </label>
                <br/>
                <input type="submit" value="Add Transaction"/>

            </form>
        </div>
        
        
    );
}

export default Child; 

/* 
import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';


function Child() {
    let { transactions, addTransaction,delTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    console.log(transactions)

    const handleAddition = (event) => {
        event.preventDefault();
        /* if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        } 
        addTransaction({
            
            amount: newAmount,
            desc: newDesc,
             id:transactions.length, 
        });

        setDesc('');
        setAmount(0) 
    }
    
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br /> ${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj,idx) => {
                    return (<li key={idx}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                        <button className="delete-btn" type="button" onClick={() => delTransaction({id:transObj.id})}>
      x
    </button>
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Enter Transaction Detail"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Amount (+ve Income, -ve Expense)<br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount(+v Income, -ve Expense)"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child; */