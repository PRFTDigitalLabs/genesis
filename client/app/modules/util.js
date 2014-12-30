function Utils() {

    this.init();    
    return this;
}

_.extend(Utils.prototype, {
    init:function(){

        Handlebars.registerHelper("formatMoney", function(value) {                                  

             var parts = value.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                parts = parts.join(".");
            
            return "$" + parts;
        });       
    },
    formatMoney: function (value) {
        var parts = value.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            parts = parts.join(".");
        
        return "$" + parts;
    }

});
var utils = new Utils();
export default utils;