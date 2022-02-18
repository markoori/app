// primaryColor :'#F2F2F2';
var primaryColor2 = '#FE724E';
// backgroundColor: '#FECCBF';
// secondaryColor : '#282B30';
// secondaryColor2 : '#FFC42B';
var secondaryColor3 = '#f9f9f9';
var extraColors1 = '#e8e8e8';
var box_counter = 0;
// intializing addCart variables...
var add_food_type = [];
var add_price = [];
var add_served_with = [];
var add_img = [];
var item_i = [];
var init_counter = 0;
// end of intialization.
// A class for validating input text,email,message etc.
var validateInput = /** @class */ (function () {
    function validateInput() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.args = args;
    }
    validateInput.prototype.validateEmail = function (args) {
        return /\b[@.]\b/.test(this.args) ? true : false;
    };
    validateInput.prototype.validateText = function (args) {
        return /\b (insert|select)\b/.test(this.args) ? true : false;
    };
    validateInput.prototype.validateComment = function (args) {
        return /\b[fuck]\b/.test(this.args) ? true : false;
    };
    return validateInput;
}());
//Validating the Login and signup form
var validateInputClass = new validateInput();
$('.signupForm form').addEventListener('submit', function (e) {
    alert('hey');
    e.preventDefault();
    if (validateInputClass.validateText($('signupForm form input[name=fullname]').text()) &&
        validateInputClass.validateEmail($('signupForm form input[name=email]').text())) {
        alert('Success');
    }
    else {
        e.preventDefault();
    }
    //validating the email
}); // validating the sigupup Form
document.querySelector('.loginForm form input[type=submit]').addEventListener('click', function () {
    alert('hey');
    validateInputClass.validateText($('signupForm form input[name=password]').text()); //validating the fullname
    validateInputClass.validateEmail($('signupForm form input[name=email]').text()); //validating the email
});
//adding Event listeners
var toTop = document.querySelector(".toTop");
window.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function (e) {
        var actualHeight = document.body.scrollHeight - innerHeight;
        var currentHieght = (pageYOffset / actualHeight) * 100;
        console.log(actualHeight);
        if (Math.floor(currentHieght) >= 10)
            toTop.style.display = "block";
        else
            toTop.style.display = "none";
    });
    // document.addEventListener("mouseover",(e) => {
    //     let mousepost = e.screenX;
    // })
});
//single page application
function SPA(arg) {
    var pageList = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'];
    var initial_dstyle = window.getComputedStyle(document.querySelector("." + arg), null).getPropertyValue('display');
    console.log(initial_dstyle);
    $("." + arg).css('display', 'block');
    var parentElement = arg.slice(0, arg.search(' ') + 1);
    pageList.filter(function (page) { return page != arg.slice(arg.search(' ') + 2, arg.length); }).forEach(function (element) {
        $("." + parentElement + " ." + element).css('display', 'none');
    });
    //vanilla js
    // pageList.filter(page => page != arg).forEach(element => {
    //     document.querySelector(`${element}`).style.display = 'none';
    // });
    // document.querySelector(`${arg}`).style.display = 'block';
}
function SPA_single(arg) {
    var pageList = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'];
    $("." + arg).css('display', 'block');
    pageList.filter(function (page) { return page != arg; }).forEach(function (element) {
        $("." + element).css('display', 'none');
    });
}
;
// This function recieves the parent class as an input and checks the checkbox being the child
//CheckBox function accepts two arguments, the first been the selector of the 
function CheckBox(arg) {
    console.log(box_counter);
    var flag;
    // A switch statement that checks the caller of the CheckBox function and provide it neccessary styling
    box_counter % 2 == 0 ? flag = true : flag = false;
    $("." + arg + " input").attr('checked', "" + flag);
    switch (arg.slice(0, arg.search(" "))) {
        case 'form-3':
            (flag) ? $("." + arg + " span").css({ 'background': primaryColor2, 'color': secondaryColor3 }) :
                $("." + arg + " span").css({ 'background': 'transparent', 'color': 'rgba(0, 0, 0, 0.46)' });
            break;
        case 'form-2':
            if (flag) {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(120%,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': primaryColor2 });
                flag = false;
            }
            else {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(5px,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': extraColors1 });
                flag = true;
            }
            break;
    }
    box_counter++;
}
// /* START OF RESTAURANT.JS*/
// let designedButton_counter = 0;
//  function designedButtonChange(arg){
//     designedButton_counter % 2 == 0 ? $('.designedButton i').css('transform','translate(120%,2.5px)') : 
//     $('.designedButton i').css('transform','translate(5px,2.5px)');
//    CheckBox(arg);
//  designedButton_counter++;
//  }
//   // document.styleSheets[3].insertRule('.designedButton::after {transform: translate(5px,5px)}',0)
// // A function for the 
// /* END OF RESTAURANT.JS*/
//A function created to collpse and expand text
function collapseExpand(arg) {
    // if(collapseCounter % 2 == 0) {
    // console.log(collapseCounter);
    // $(`.${arg}`).css('height','300px');
    // $(`.${arg} p`).css('display','block');
    // }
    // else{
    //     console.log(collapseCounter);
    //     $(`.${arg}`).css('height','0px');
    //     $(`.${arg} p`).css('display','none');
    // }
    // collapseCounter++;
    var getStyle = window.getComputedStyle(document.querySelector("." + arg)).getPropertyValue('height');
    if (getStyle == "auto")
        $("." + arg).css('height', '50px');
    else
        $("." + arg).css('height', 'auto');
}
// alternative for the collapse
// A function for centralizing a text and making the background darken
function Cupoon(args) {
    $("." + args).css('display', 'block');
    document.append('div');
}
// A service rendering function
var formater = function (inp) {
    return parseInt(inp.replace('N', '').replace(',', ''));
};
function cartCalc(arg) {
    var value = $("." + arg + " .quantity input").val();
    var price = $("." + arg + " .price span").text();
    // function for converting to suitable format
    var formater = function (inp) {
        return parseInt(inp.replace('N', '').replace(',', ''));
    };
    var format_price = formater(price);
    if (value == 0)
        value = 1;
    $("." + arg + " .total span").text("N" + Intl.NumberFormat('en-Us').format(format_price * value));
    // updating the total and subtotal
    // collecting the prices of all items
    var adder = 0;
    document.querySelectorAll('.item .total span').forEach(function (element) {
        adder += formater(element.innerHTML);
    });
    if (adder >= 100000)
        return alert("The max amount is 100,000");
    // displaying the output in the subtotal
    $("#subtotal").text(Intl.NumberFormat('en-Us', { style: 'currency', currency: 'NGN' }).format(adder));
}
function Delete(arg) {
    $("." + arg).css('display', 'none');
    // create a func that bring back the item if it want to be retrieved
}
// a function that takes the items in a cart and preview them
function PreviewCart() {
    var items = document.getElementsByClassName('item');
    var class_purchase_detials = document.querySelector('purchase-details');
    console.log(items);
    var key;
    var counter = 1;
    for (key in (items)) {
        console.log(items[key]);
        console.log(key);
        console.log(items[key].firstChild.firstChild);
        // let div = document.createElement('div') as HTMLElement;
        // div.className = `item-detail-1-${counter}`; // create the div tag
        // document.createElement('div').className = "item-name";
        // let h3 = document.createElement('h3').innerHTML;
        // h3 = items[key].firstChild.lastChild.nodeValue;
        // console.log(h3)
        // document.querySelector('.purchase-details .item-name').append(h3);
        // class_purchase_detials.append(div);
        // counter++;
        if (key >= items.length - 1)
            break;
    }
}
function AddCart(arg) {
    console.log($("." + arg + " .header h5").text());
    add_food_type.push("" + $("." + arg + " .header h5").text());
    add_price.push("" + ($("." + arg + " .footer .price h4").text()).slice($("." + arg + " .footer .price h4").text().search(" ") + 1, $("." + arg + " .footer .price h4").text().length));
    add_served_with.push("" + $("." + arg + " header p").text());
    add_img.push("" + $("." + arg + " .img img").attr('src'));
    item_i = [add_food_type, add_price, add_served_with, add_img];
    console.log(item_i);
    $('.cart-icon #counter').text(++init_counter);
}
function RemoveCart(arg) {
    for (var i = 0; i < item_i.length; i++) {
        item_i[i].pop(arg);
    }
}
function Local_Store() { }
Local_Store.prototype.getItem = function (arg) {
    localStorage.getItem(arg);
};
Local_Store.prototype.setItem = function (kwarg, value) {
    localStorage.setItem(kwarg, value);
};
