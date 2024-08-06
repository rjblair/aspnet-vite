"use strict";
class showIt {
    static show() {
        console.log(this.message);
        $('#showIt').html(this.message);
    }
    static init() {
        this.show();
    }
}
showIt.message = 'Hello from TypeScript';
