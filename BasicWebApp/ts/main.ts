import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "jquery";
//import "jquery-validation";
//import "jquery-validation-unobtrusive";

// style
import "./scss/site.scss";
import "./src/rkd-showme";

// VITE import all Lit components
import.meta.glob(
    './src/**/*',
    { eager: true }
)



//$(document).ready(function () {
//    //console.log(showMe.show());
//    //$('#showMe').html(showMe.show());
//    showMe.init();
//});