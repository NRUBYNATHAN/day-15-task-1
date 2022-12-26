var get_forms=document.querySelector(".form");
get_forms.addEventListener("submit",fun);
function fun (eve){ 
    
    var get_firstname=document.querySelector('[placeholder="firstname"]')
    var get_lastname=document.querySelector('[for="laststname"]')
    var get_address=document.querySelector('[for="address"]')
    var get_pincode=document.querySelector('[for="pincode"]')
    var get_genter=document.querySelector('[for="genter"]')
    var get_food=document.querySelector('[for="food"]')
    var get_state=document.querySelector('[for="state"]')
    var get_country=document.querySelector('[for="country"]')
    eve.preventDefault();
    var arr=[get_firstname,get_lastname,get_address,get_pincode,get_genter,get_food,get_state,get_country]
    var create_tr=document.createElement("tr");
    
    for(var i=0;i<8;i++){
        var create=document.createElement("td");
        create.innerText=arr[i].value;
        create_tr.append(create);

    }
    document.querySelector("tbody").append(create_tr);
    for(var i of arr){
        i.value=""
    }
     console.log("u have successfully submitted");
    
}