var app = new Vue({
  el: '#app',
  data: {
  	title: "",
  	description : "",
  	qty : 1,
  	price : 10,
    invoice: {
    	number : 123,
    	paid_at: null,
    	currency : "DZD",
    	paid : false,
    	data   : new Date(),
    	taxRate   : 0.19 ,
    	from : 
         { name : "Albert C. Morin", address : "3241 Coventry Court" , details : "Baton Rouge, LA 70814"}
    	 ,
    	to : 
         { name : "Martin A. Selby", address : "450 Cinnamon Lane" , details : "San Antonio, TX 78202"}
    	,
    	products : [
    		 { title : "test", description : "lorem" ,qty : 2, price : 20}
    	]
    }
  },
  methods :{
  	add : function () {
  		// body...
       this.invoice.products.push({
         title : this.title, description : this.description ,qty : this.qty, price : this.price
       });
  	},
  	getTotal : function () {
  		// body...
  		console.log('getTotal')
  	},
  	getSubTotal : function () {
  		// body...
  	    var SubTotal = 0;
  		for (var i = this.invoice.products.length - 1; i >= 0; i--) {
  			SubTotal += this.invoice.products[i].price * this.invoice.products[i].qty
  		}
  		return SubTotal
  	},
  }
})