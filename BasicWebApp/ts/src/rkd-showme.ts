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

$(document).ready(function () {
    //console.log(showMe.show());
    //$('#showMe').html(showMe.show());
    showMe.init();
});