// import { viewTwo, viewOne } from "./views"
const primaryColor = "#F2F2F2";
const primaryColor2s = "#FE724E";
const backgroundColor = "#FECCBF";
const backgroundColor2 = "#FDEDE9";
const secondaryColor = "#282B30";
const secondaryColor2 = "#FFC42B";
const secondaryColor3r = "#f9f9f9";
const secondaryColor4 = "#ffffff";
const extraColor1 = "#e8e8e8";
const extraColor2 = "#00000052";
const extraColor3 = "b3b3b3";
const extraColor4 = "#505050";
const primary_dark = "#BE391C";
const error_color = "#E90023";
function getHtmlElement(className) {
    return document.querySelector(`${className}`);
}
/* To use the activateDarkBackground you should copy this to the Html FILE first*/
// <div class="darkOverlay"></div>
// The style is in the general css file
function activateDarkBackground() {
    document.querySelector(`.darkOverlay`).style.display = "block";
    document.querySelector(`.darkOverlay`).style.width = "100%";
    document.querySelector(`.darkOverlay`).style.transition = "12s";
}
function deactivateDarkBackground() {
    document.querySelector(`.darkOverlay`).style.display = "none";
    document.querySelector(`.darkOverlay`).style.display = "0%";
}
function copyToClipboard(className) {
    let copyText = document.querySelector(className);
    //copyText.select // select the text
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("copied: " + copyText.innerHTML);
}
function popUpMessage(className) {
    getHtmlElement("." + className).style.display = "flex";
    activateDarkBackground();
}
function popDownMessage(className) {
    getHtmlElement("." + className).style.display = "none";
    deactivateDarkBackground();
}
// END OF GLOBAL SCOPE
{ // Menu Namespace
    function sideMenuStyling(arg) {
        let menus = ['menu-1', 'menu-2', 'menu-3'];
        // style to button clicked
        // ( document.querySelector(`.${arg}`) as HTMLStyleElement ).
        let menu_p = document.querySelector(`.${arg} p`);
        menu_p.style.color = primaryColor2s;
        // jquery would be best to write multiple style property
        $(`.${arg}`).css({ 'backgroundColor': backgroundColor2, 'borderLeft': `3px solid ${error_color}` });
        // changing icon color
        $(`.${arg} svg`).css('background', primaryColor2s);
        $(`.${arg} svg path`).attr('fill', secondaryColor4);
        // style for menu not clicked
        menus.filter(el => el != arg).forEach(el => {
            document.querySelector(`.${el} p`).style.color = secondaryColor;
            // jquery would be best to write multiple style property
            $(`.${el}`).css({ 'backgroundColor': secondaryColor4, 'borderLeft': `0px` });
            // changing icon color
            $(`.${el} svg`).css('background', extraColor1);
            $(`.${el} svg path`).attr('fill', "#282B30");
        });
        // alter screen view
        if (arg == "menu-2" || arg == "menu-3") {
            DesktopViews.viewTwo();
        }
        else {
            DesktopViews.viewOne();
        }
    }
}
{ // Date Namespace
    function displayDateTime() {
        let date = new Date();
        console.log(date.toDateString());
        let hour = (date.getHours() % 12) || 12;
        let min = date.getMinutes();
        // setting to AM or PM
        let time_median;
        if (date.getHours() > 12) {
            time_median = "PM";
        }
        else {
            time_median = "AM";
        }
        //console.log(date.toTimeString())
        return [date.toDateString(), hour, min, time_median];
    }
    displayDateTime();
    // -- NOTE --- //
    /** A setData function should be created at any instance where the displayDateTime is about to be used */
    // Example:
    // function setDate(): void{
    //     let date_pages = ['overview-date']
    //     let display_time = displayDateTime()
    //     for (let element of date_pages){
    //         document.querySelector(`.${element} h5`).innerHTML = `${display_time[0]} | ${display_time[1]} : ${display_time[2]} ${display_time[3]}`
    //     }
    // }
    // setDate()
    // // function to be executed every 1s
    // setInterval(setDate, 60000);
    // Example ends
}
{ // SideDisplay Namespace
    let flag = false;
    function collaspseSideOptions(className) {
        document.querySelector(`.${className}`).style.width = "0px";
        document.querySelector(`.${className}`).style.paddingRight = "33px";
        deactivateDarkBackground();
    }
    function ExpandSideOptions(className, width) {
        document.querySelector(`.${className}`).style.width = width;
        document.querySelector(`.${className}`).style.paddingRight = "83px";
        activateDarkBackground();
    }
    function collaspseExpandSideOptions(className, width) {
        if (!flag) {
            document.querySelector(`.${className}`).style.width = width;
            setDisplayToBlock(`.${className}`);
            flag = true;
        }
        else {
            document.querySelector(`.${className}`).style.width = "0px";
            flag = false;
        }
    }
}
