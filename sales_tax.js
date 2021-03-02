"use strict";

const $ = selector => document.querySelector(selector);


const processEntries = (subtotal, tax_rate) => {
    let salesTax = subtotal;
    
    salesTax = salesTax * tax_rate / 100;
    
    return salesTax;
};

document.addEventListener("DOMContentLoaded", () => {
    
    $("#calculate").addEventListener("click", evt => {
        // clear any previous calculation
        $("#sales_tax").value = "";

        // get values user entered in textboxes
        const subtotal = parseFloat($("#subtotal").value);
        const tax_rate = parseFloat($("#tax_rate").value);

        let errorMsg = "";
        
        // check user entries 
        if (subtotal < 0 || subtotal > 10000) { 
            errorMsg += "Subtotal must be > 0 and < 10000\n";
            $("#subtotal").focus();
        } 

        if (tax_rate < 0 || tax_rate > 12) { 
            errorMsg += "Tax Rate must be > 0 and < 12\n";
            $("#tax_rate").focus();
        } 
    
    
        // if user entries are valid, calculate and display future value
        if (errorMsg == "") {
            const salesTax = processEntries(subtotal, tax_rate);
            $("#sales_tax").value = salesTax.toFixed(2);
            $("#total").value = (salesTax+subtotal).toFixed(2);
        } else {
            // display error message
            alert(errorMsg);
        }
    });
    
    // set focus on first text box on initial load
    $("#sales_tax").focus();
    
    $("#clear").addEventListener("click", () => {
        $("#subtotal").value = "";
        $("#tax_rate").value = "";
        $("#sales_tax").value = "";
        $("#total").value = "";
        
        $("#subtotal").focus();
    });
});
