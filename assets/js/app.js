window.Application5 = $.extend(true, window.Application5, {
    "config": {
        "defaultLayout": "slideout",
        "navigation": [
            {
                title: "Diario mural",
                action: "#Index",
                icon: "event"
            },
            {
                title: "Acerca de",
                action: "#About",
                icon: "info"
            }
        ]
    }
});
jQuery(function() {
    
    Application5.app = new DevExpress.framework.html.HtmlApplication({
        ns: Application5,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: Application5.config.defaultLayout,
        navigation: Application5.config.navigation
    });

    Application5.app.router.register(":view/:id", {view: "Index", id: undefined});
    Application5.app.navigate();
});