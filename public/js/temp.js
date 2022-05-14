{

    let add_food_type = []
    let add_price = []
    let add_resName =[]
    let  add_img = []
    let item_i = ['']
    let count = 0
    let localStore = []




    function AddItemsToCart(arg){
            // helper function
    function addItem(){
        $('.users-info a span').text(`${count += 1}`)
        // add items to virtual cart
        add_food_type.push(`${ $(`.${arg} .info h5`).text() }`);
        add_price.push( `${ ($(`.${arg} .info .write-up span`).text())
        .slice($(`.${arg} .info .write-up span`).text()
        .search(" ") + 1, $(`.${arg} .info .write-up span`)
        .text().length ) }` );
        add_resName.push(`${ $(`.${arg} .info .write-up b`).text() }`)
        let get_img = window.getComputedStyle(document.querySelector(`.${arg} .img`)).getPropertyValue('background');
        console.log(get_img)
        add_img.push(get_img)

        item_i = [add_food_type,add_resName,add_price,add_img]
        console.log("Item i: " + item_i)

    // window.localStorage.setItem('cart-list',item_i)

        let storage = JSON.parse(localStorage.getItem('cart-list'))
        storage.push(item_i)
        localStorage.setItem('cart-list', JSON.stringify(storage))
    }
    // end

        if (localStorage.getItem('cart-list') == null){
            localStorage.setItem('cart-list', '[]')
        }
        
        let cart_items = JSON.parse(window.localStorage.getItem('cart-list'))
        console.log(cart_items)


        if (cart_items.length == 0 || cart_items[cart_items.length - 1] == [[null],[null],[null],[null]]){
            addItem(arg)
        }
        else{
            for ( let items in cart_items[cart_items.length - 1]){
                let item = 0
                console.log(items)
                console.log("The cart ist are: " + (cart_items[cart_items.length - 1]))
                if (cart_items[cart_items.length - 1][item].includes($(`.${arg} .info h5`).text()) && cart_items[cart_items.length - 1][item + 1].includes($(`.${arg} .info .write-up b`).text() ))
                {
                    alert("Item has already been added to Cart")
                    break;
                }
                else{
                    // increase the cart count
                    addItem()
                    break;
                    // window.localStorage.setItem('cart-list','[item_i]')
                    // object = {'name': 'mark'}
                    // localStorage.setObj('obj',object)
                }
            }
        }


    }

}

{

    

}



    //localStorage.clear()
        //== already defined functions...

        function cartCalc(arg) {
            function adder() {
                // updating the total and subtotal
                // collecting the prices of all items
                var adder = 0;
                var summer;
                document.querySelectorAll('.item .total span').forEach(function (element) {
                    if (formater(element.innerHTML) == null) {
                        summer = 0;
                    }
                    else {
                        summer = formater(element.innerHTML);
                    }
                    ;
                    adder += summer;
                });
                if (adder >= 100000)
                    return alert("The max amount is 100,000");
                // displaying the output in the subtotal
                $("#subtotal").text(Intl.NumberFormat('en-Us', { style: 'currency', currency: 'NGN' }).format(adder));
            }
            if (arg == "") {
                adder();
            }
            else {
                var value = $("." + arg + " .quantity input").val();
                ;
                var price = $("." + arg + " .price span").text();
                // function for converting to suitable format
                var formater = function (inp) {
                    return parseInt(inp.replace('₦', '').replace(',', ''));
                };
                var format_price = formater(price);
                if (value == 0)
                    value = 1;
                $("." + arg + " .total span").text("₦" + Intl.NumberFormat('en-Us').format(format_price * value));
                _store_price_updater(arg, format_price * value);
                adder();
            }
        }
        

        function removeItem(arg,foodName,resName){
            // call the cartCalc function to update the price in the subtotal
           // cartCalc();
           // relaod page
           location.reload()
            //console.log(foodName,resName);
            //console.log("first: " + window.localStorage.getItem('cart-list'))
            let cart_items = JSON.parse(window.localStorage.getItem('cart-list'))
            //console.log("second: " + cart_items[cart_items.length - 1])
            //let cart_items = window.localStorage.getItem('cart-list')
    
            $(`.${arg}`).css('display','none');
            let itemNumber = document.querySelector('.page-1 header .header #items');
            
            itemNumber.innerHTML = `${parseInt(itemNumber.innerHTML.replace(" ITEMS", "")) - 1} ITEMS`
            console.log(itemNumber)
            //console.log(JSON.parse(cart_items[cart_items.length - 1][0].toString()))
            let counter = 0
            for ( let items in cart_items[cart_items.length - 1][0]){
                let item = 0
                console.log("Inside: " + cart_items[cart_items.length - 1][item][counter] )
     
                if (cart_items[cart_items.length - 1][item][counter] == foodName && cart_items[cart_items.length - 1][item + 1][counter] == resName){
                    delete cart_items[cart_items.length - 1][item][counter]
                    delete cart_items[cart_items.length - 1][item + 1][counter]
                    delete cart_items[cart_items.length - 1][item + 2][counter]
                    delete cart_items[cart_items.length - 1][item + 3][counter]
                }
                else{
                    counter++;
                    continue
                }
                
            }
            //   getStore = JSON.parse(window.localStorage.getItem('cart-list'))
            //   getStore = []
              
              window.localStorage.setItem('cart-list',JSON.stringify(cart_items))
              console.log(cart_items)
        }
        // function Delete(arg) {
        //     $("." + arg).css('display', 'none');
        //     // create a func that bring back the item if it want to be retrieved
        // }

        // == End

        {
            let update_price = [];
            function copy_price() {
                var cart_items = JSON.parse(window.localStorage.getItem('cart-list'));
                var cart = cart_items[cart_items.length - 1];
                cart[2].forEach(function (e) {
                    update_price.push(e);
                });
            }
        
            copy_price() // copy the price of all the items
        
            function _store_price_updater(arg, price) { // update the new price if the no_ of plates increase
                // formating input
                console.log(arg)
                if(arg != undefined){
                    var index = arg.slice(arg.search('-') + 1);
                    var cart_items = JSON.parse(window.localStorage.getItem('cart-list'));
                    var cart = cart_items[cart_items.length - 1];
                    // set price
                    update_price[index] = "N" + Intl.NumberFormat('en-Us').format(price);
                }
                //window.localStorage.setItem('cart-list',JSON.stringify(cart_items))
            }
        }


{ // namespace 1


    
}

{ // namespace 3 (Creating the html element to be rendered)

    console.log((window.localStorage.getItem('cart-list')))

    // creating an item list

    let item_listings = []; var div_details_h5; var div_details_p;

    function empty_checker(checker){
        let mirror_arr = []
        for (let i in checker){
            console.log("My name")
            mirror_arr.push(null)
        }
        console.log(JSON.stringify(checker))
        console.log(JSON.stringify(mirror_arr))
        if(JSON.stringify(checker) == JSON.stringify(mirror_arr)){
            return true
        }
        return false
    }

    function getCartItems(arg){
        let cart_items = JSON.parse(window.localStorage.getItem('cart-list'))
        //console.log(cart_items[cart_items.length - 1])


        // update the number of items
        let itemNumber = document.querySelector('.page-1 header .header #items');
        itemNumber.innerHTML = `${cart_items[cart_items.length - 1][0].length} ITEMS`

        let cart_table = document.querySelector('.ShoppingCart-Page .page-1 .item');
        let counter = 0;
        // let div_dynamicRendered = document.querySelector('.ShoppingCart-Page .page-1 .items .data .dynamicRendered')
        for (const keys in cart_items[cart_items.length - 1][0]) {
            console.log(keys)
            let key = 0
            let div_item_i = document.createElement('div');
            div_item_i.className = `item item-${counter}`
            let div_data = document.createElement('div')
            div_data.className =  `data data-${counter}`
            let div_details = document.createElement('div')
            div_details.className = "details"
            div_details_h5 = document.createElement('h5')
            div_details_h5.innerHTML = cart_items[cart_items.length - 1][key][counter]
            console.log(cart_items[cart_items.length - 1][key][counter])
            div_details_p = document.createElement('p')
            div_details_p.innerHTML = cart_items[cart_items.length - 1][key + 1][counter]
            // appending to data
           // div_data.appendChild(div_details.appendChild(div_details_h5,div_details_p));

            // price div
            let div_price = document.createElement('div')
            div_price.className = "price"
            let div_price_span = document.createElement('span')
            div_price_span.innerHTML = cart_items[cart_items.length - 1][key + 2][counter]
            console.log(div_price_span)
            div_price.appendChild(div_price_span)

            // create img tag
            let img_el = document.createElement('img')
            img_el.src = "/img/img/img4.png"

            
            // creating staticContent

            let div_quantity = document.createElement('div')
            div_quantity.className = "quantity"
            // $(`.items .item .quantity`).attr('onkeyup',cartCalc(`item-${key}`))
            // let createAtt = document.createAttribute("onkeyup")

            // createAtt.value = "cartCalc('item-1')"
            // console.log(createAtt)
            // div_quantity.setAttributeNode(createAtt)
            // console.log(div_quantity)

            // input
            let input = document.createElement('input') // create an input field
            input.value = 1; // set the input field to 1 by default
            input.type = "number"
            let createAtt = document.createAttribute("onkeyup")

            createAtt.value = "cartCalc('" + `item-${counter}` + "')"
            input.setAttributeNode(createAtt)

            div_quantity.appendChild(input)

            // total div
            let div_total = document.createElement('div')
            div_total.className = "total";
            let span_total = document.createElement('span')
            span_total.innerHTML = cart_items[cart_items.length - 1][key + 2][counter]

            div_total.appendChild(span_total)

            // del div
            let div_del = document.createElement('div')
            div_del.className = "del"
            let i_icon = document.createElement('i')
            i_icon.className = "bi bi-x-lg"
            let i_iconAttr = document.createAttribute('onclick')

            // getting foodName and resName
            i_iconAttr.value = "removeItem("+ "'" + `item-${counter}` +"'," +"'" + `${cart_items[cart_items.length - 1][key][counter]}` +"'," + "`" + `${cart_items[cart_items.length - 1][key + 1][counter]}` +"`"  + ")"
            //i_iconAttr.value = "removeItem('" + `item-${key}` + "')"
            i_icon.setAttributeNode(i_iconAttr)

            div_del.appendChild(i_icon)

            // end of static Class
            
            //appending to details div
            div_details.appendChild(div_details_h5)
            div_details.appendChild(div_details_p)

            // appending to data div
            div_data.appendChild(img_el)
            div_data.appendChild(div_details)
            
            // appending to item div
            div_item_i.appendChild(div_data)
            div_item_i.appendChild(div_price)
            div_item_i.appendChild(div_quantity)
            div_item_i.appendChild(div_total)
            div_item_i.appendChild(div_del)
            console.log(div_item_i)


            // appeding to the parent element
            // appending only if there is an item

            if(empty_checker(cart_items[cart_items.length - 1][0])){
                cart_table.innerHTML = "<h4 style='opacity: .4'>Sorry you cart is Empty, Add something to it 😊</h4>"
            }
            else{
                if(cart_items[cart_items.length - 1][key][counter] != null)
                {cart_table.appendChild(div_item_i)}
            }

            // if (cart_items[cart_items.length - 1][key][counter] != null){
            //     cart_table.appendChild(div_item_i) 
            // }
            // else{
            //     cart_table.innerHTML = "<h2 style='opacity: .4'>Sorry you cart is Empty, Add something to it 😊</h2>"
            // }

            counter++;
            
        }

    }

}

{

    function addOrderListToForm(){
        let cart_items = JSON.parse(window.localStorage.getItem('cart-list'))
        let cart = cart_items[cart_items.length - 1]
        // update the price list
        for (i in cart[2]){
            if (cart[2][i] == null){
                update_price[i] = null
            }
        }
        // insert the updated price
        cart[2] = update_price

        document.querySelector('.CheckOutPage #form input[name="orderList"]').value = cart;
    }

}







