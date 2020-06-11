
class MobNav {

    menuIcon() {

        $(document).ready(function () {
            $(".menu-icon").on("click", function () {
                $("nav ul").toggleClass("showing");
                $("main").toggleClass("noClick");
               
                
            });
        });
    }
}