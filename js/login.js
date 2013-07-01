"use strict";
// LOGIN FORM
var txtEmailPlaceholder = "Escribe tu email";
var txtEmailMode = "email";
var txtEmailText = ko.observable(0);
var txtPasswordPlaceholder = "Escribe tu contraseña";
var txtPasswordMode = "password";
var txtPasswordText = ko.observable(0);

var buttonLogin = function(){
    var email = jQuery('#email input').val();
    var password = jQuery('#password input').val();
    if(email == '' || password == ''){
        showToast('Ingrese su email y contraseña');
    } else {
        
    }
}
var showToast = function(message){
    $("#toastContainer").dxToast('instance').show();
    $("#toastContainer").dxToast('instance').option('message',message);
}


window.Login = {};

$(function() {

    Login.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Login,
        defaultLayout: "empty"
    });

    Login.app.router.register(":view", {
        view: "home"
    });
    Login.app.navigate();
});