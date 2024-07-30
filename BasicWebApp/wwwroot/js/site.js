// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
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