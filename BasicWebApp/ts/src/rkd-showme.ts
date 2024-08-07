//import * as jQuery from 'jquery';
//declare global {
//    interface Window {
//        jQuery: typeof jQuery;
//        $: typeof jQuery;
//    }
//}

//window.$ = window.jQuery
//window.jQuery = window.jQuery

class showMe {
    static message = 'Hello from JavaScript';

    static show() {
        console.log(this.message);
        $('#showMe').html(this.message);
        //return this.message;
    }

    static init() {
        this.show();
    }
}

jQuery(document).ready(function () {
    //console.log(showMe.show());
    //$('#showMe').html(showMe.show());
    showMe.init();
});