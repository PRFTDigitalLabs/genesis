function DemoData() {

    this.init();    
    return this;
}

_.extend(DemoData.prototype, {

    init: function() {
        this.getData();
    },

    getData: function() {

        var self = this,           
            chance = new Chance();

        
        //SAVINGS DRIVERS ---------------------------------------------------
        this.savingsDrivers = {};

        
          this.savingsDrivers.trendData = [
              { date: '2014-01-01', amount: 80000 },
              { date: '2014-02-01', amount: 70000 },
              { date: '2014-03-01', amount: 104000 },
              { date: '2014-04-01', amount: 120000 },
              { date: '2014-05-01', amount: 115000 },
              { date: '2014-06-01', amount: 130000 },
              { date: '2014-07-01', amount: 124000 },
              { date: '2014-08-01', amount: 140000 },
              { date: '2014-09-01', amount: 155000 },
              { date: '2014-10-01', amount: 0 },
              { date: '2014-11-01', amount: 0 },
              { date: '2014-12-01', amount: 0 }
            ];

            var SavingsDriver = Backbone.Model.extend({});
            this.savingsDrivers.drivers = new Backbone.Collection([
                    
                {
                    name:"New freight under mgmt", 
                    percentOfSavings: '',
                    savings: 6400,
                    percentChange: '8%',
                    changeDirection:"up",
                }        
                ,{
                    name:"Discontinued freight", 
                    percentOfSavings: '',
                    savings: 4000,
                    percentChange: '2%',
                    changeDirection:"down",             
                },{
                    name:"Volume shipped", 
                    percentOfSavings: '',
                    savings: -14923,
                    percentChange: '12%',
                    changeDirection:"down",             
                },{
                    name:"Shipping efficiency", 
                    percentOfSavings: '',
                    savings: 30178,
                    percentChange: '8%',
                    changeDirection:"up",             
                },{
                    name: "Freight allowance", 
                    percentOfSavings: '',
                    savings: 18201,
                    percentChange: '3%',
                    changeDirection:"up",             
                },
                {
                    name:"Carrier rate", 
                    percentOfSavings: '',
                    savings: -11800,
                    percentChange: '2%',
                    changeDirection:"down",             
                },
                {  
                    name:"Fuel Costs",
                    percentOfSavings: '',
                    savings: -1050,
                    percentChange: '1%',
                    changeDirection:"down",             
                }                
            ], {
                model: SavingsDriver
            });
        this.savingsDrivers.totalSavings = d3.sum(this.savingsDrivers.drivers.toJSON(), function(d){ return d.savings; });
                        


        //Program Detail Overview ---------------------------------------------------

         this.programDetailOverview = {};

        this.programDetailOverview.annualData = [
        
            {   
                'label': 'Target savings',
                'value': 875000,
            },
            {
                'label': 'Projected savings',
                'value': 733000
            },
            {
                'label': 'Actual savings',
                'value': 498000
            }
        ];

        this.programDetailOverview.trendData = [
              { date: '2014-01-01', amount: 45000, target: 55000 },
              { date: '2014-02-01', amount: 40000, target: 45000 },
              { date: '2014-03-01', amount: 44000, target: 35000 },
              { date: '2014-04-01', amount: 43000, target: 52000 },
              { date: '2014-05-01', amount: 36000, target: 36000 },
              { date: '2014-06-01', amount: 65000, target: 50000 },
              { date: '2014-07-01', amount: 70000, target: 60000 },
              { date: '2014-08-01', amount: 75000, target: 63000 },
              { date: '2014-09-01', amount: 80000, target: 85000 },
              { date: '2014-10-01', amount: 75000, target: 73000 },
              { date: '2014-11-01', amount: 80000, target: 80000 },
              { date: '2014-12-01', amount: 85000, target: 83000 },
            ];        
    }       
    
});
var demoData = new DemoData();

export default demoData;