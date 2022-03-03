
var item1_price = 4995.23;// item number 1 price
var item2_price = 6295.15;// item number 2 price

var order1_total = 0.00;//order1 amount payable
var order2_total = 0.00;//order2 amount payable

var subtotal_payment = 0.00;//subtotal of amount payable


function Default(){

    f_checkout.style.display = 'none';
    f_radio_button.style.display = 'none';
    radio_button.checked = null;
    f_placeorder.style.display = 'none';

    summary_item1.innerHTML = null;
    summary_item2.innerHTML = null;

}

function CheckBox1(){

    if(checkbox1.checked == true){

        order1_total = item1_number.value * item1_price;
        Default();

    }else{//uncheck function

        order1_total = 0;
        Default();
        
    }

}

function CheckBox2(){

    if(checkbox2.checked == true){

        order2_total = item2_number.value * item2_price;
        Default();

    }else{

        order2_total = 0;
        Default();
        
    }

}

function CheckOut(){

    subtotal_payment = order1_total + order2_total;
    var shipping_fee = 160;
    total_payment = subtotal_payment + shipping_fee;

    if((checkbox1.checked || checkbox2.checked) == true){

        f_checkout.style.display = 'block';
        checkout_subtotal.innerHTML = "Sub Total: ₱" + ((Number(subtotal_payment.toFixed(2))).toLocaleString('en-US'));
        checkout_shipping_fee.innerHTML = "Shipping Fee: ₱" + ((Number((160.00).toFixed(2))).toLocaleString('en-US'));
        checkout_total.innerHTML = "Total Payment: ₱" + (Number(total_payment.toFixed(2)).toLocaleString('en-US'));
        f_radio_button.style.display = 'block';

    }else{
        Default();
        radio_button.checked = null;
        alert("Select your order(s) first.")
    }

}

function PlaceOrder(){

    if((f_checkout.style.display) == 'block'){

        if(radio_button.checked == true){
            f_placeorder.style.display = 'block';

            if(checkbox1.checked == true){
                summary_item1.innerHTML = "Nike - " + ("Air Zoom Winflo 7" + "..........................." + "₱4,995.23 x " + (item1_number.value).toString()).bold();
            }

            if(checkbox2.checked == true){
                summary_item2.innerHTML = "Nike - " + ("Air Zoom Pegasus 37" + "......................." + "₱6,295.15 x " + (item2_number.value).toString()).bold();
            }

        }else{
            f_placeorder.style.display = 'none';
            alert("Please select Cash on Delivery.");
        }

    }else{
        alert("Please check out your order(s) first.")
    }

}

function checkRadio(){
  
    if(radio_button.checked == true){
        radio_button.checked = null;
        f_placeorder.style.display = 'none';
    }else{
        radio_button.checked = "true";
    }
    
}

function item1(){

    if(checkbox1.checked == true){
        checkbox1.checked = null;
        checkbox1_color.style.backgroundColor = "white";

        order1_total = 0;
        checkbox1_color.style.backgroundColor = "white";
        Default();
    }

}

function item2(){

    if(checkbox2.checked == true){
        checkbox2.checked = null;
        checkbox2_color.style.backgroundColor = "white";

        order2_total = 0;
        checkbox2_color.style.backgroundColor = "white";
        Default();
    }

}
