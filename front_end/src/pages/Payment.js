import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/payment.css';

function Payment() {

    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [date, setDate] = React.useState("");
    const [cvv, setCvv] = React.useState("");

    const [nameError, setnameErrorMessage] = React.useState("");
    const [numberError, setnumberErrorMessage] = React.useState("");
    const [dateError, setdateErrorMessage] = React.useState("");
    const [cvvError, setcvvErrorMessage] = React.useState("");

    const handleClick = () => {

        let validation = true;
        
        if(name.length == 0){
            setnameErrorMessage('Name on card is required');
            validation = false;
        }
        else{
            setnameErrorMessage('');
        }

        if(number.length == 0){
            setnumberErrorMessage('Credit card number is required');
            validation = false;
        }
        else if(number.length <= 15 || number.length >= 20){
            setnumberErrorMessage('Credit card number is invalid');
            validation = false;
        }
        else{
            setnumberErrorMessage('');
        }


        if(date.length == 0){
            setdateErrorMessage('Expiration date is required');
            validation = false;
        }
        else if(date.length != 4 && date.length != 5){
            setdateErrorMessage('Expiration date is invalid');
            validation = false;
        }
        // else if (expired){
        //    setdateErrorMessage('Card expired');
        // }
        else{
            setdateErrorMessage('');
        }

        if(cvv.length == 0){
            setcvvErrorMessage('cvv is required');
            validation = false;
        }
        else if(cvv.length != 3){
            setcvvErrorMessage('cvv is invalid');
            validation = false;
        }
        else{
            setcvvErrorMessage('');
        }
    
        if(validation == true){

            window.location.href = '/';
        }
    
    }
    return (
        <div>
            {/* <h2 class="paymenttitle">Payment</h2>  */}
            <div class="paymentpage">
                <div class="row justify-content-center">
                    <div class="col-md-6 mb-3">
                        <label for="cardname">Name on card</label>
                        <input type="text" class="form-control" id="cardname" placeholder="" onChange={(e) => setName(e.target.value)} required/>
                        <small class="text-muted">Full name as displayed on card</small>
                        {nameError && <div className="error text-danger"> {nameError} </div>}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 mb-3">
                        <label for="cardnumber">Credit card number</label>
                        <input type="text" class="form-control" id="cardnumber" placeholder="0000 0000 0000 0000" maxLength="19" onChange={(e) => setNumber(e.target.value)} required/>
                        {numberError && <div className="error text-danger"> {numberError} </div>}
                    </div>
                    {/* {cardType && <small className="type"> {cardType} </small>} */}
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-3 mb-3">
                        <label for="cardexp">Expiration</label>
                        <input type="text" class="form-control" id="cardexp" placeholder="MM/YY" maxLength="5" onChange={(e) => setDate(e.target.value)} required/>
                        {dateError && <div className="error text-danger"> {dateError} </div>}
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cardcvv">CVV</label>
                        <input type="text" class="form-control" id="cardcvv" placeholder="000" maxLength="3" onChange={(e) => setCvv(e.target.value)} required/>
                        {cvvError && <div className="error text-danger"> {cvvError} </div>}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 mb-3">
                        <button type="button" class="btn btn-danger btn-sm" onClick={handleClick}>Pay</button>     
                    </div>                   
                </div>
            </div>
            </div>
    );
}

export default Payment;