"use strict";

var txtEmailPlaceholder = "Escribe tu email";
var txtEmailText = ko.observable("");
var txtPasswordPlaceholder = "Escribe tu contraseña";
var txtPasswordText = ko.observable("");

var buttonLogin = function(){
    var email = txtEmailText();
    var password = txtPasswordText();
    
    if(email == '' || password == ''){
        DevExpress.ui.notify('Ingrese su email y contraseña', 'error', 3000);
    } else {
        jQuery.getJSON(webservice_url,{
            a:'signup',
            e:email,
            p:password
        },function(callback){
            if(callback.error == 1){
                DevExpress.ui.notify(callback.error_message, 'error', 3000);
            } else {
                DevExpress.ui.notify('Bienvenido', 'success', 3000);
            }
        });
    }
}


window.Login = {};

jQuery(function() {

    Login.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Login,
        defaultLayout: "empty"
    });

    Login.app.router.register(":view", {
        view: "login"
    });
    Login.app.navigate();
});