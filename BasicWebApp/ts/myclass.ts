class showIt {
    static message = 'Hello from TypeScript';

    static show() {
        console.log(this.message);
        $('#showIt').html(this.message);
    }
  
    static init() {
        this.show();
    }
}