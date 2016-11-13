'use strict';

function csvConverterController () {
    var $ctrl = this;
    $ctrl.jsonArray = [{
    		name: 'testname1',
    		age: 'testage1'
    	  },{
    		name: 'testname2',
    		age: 'testage2'
    	  },{
    		name: 'testname3',
    		age: 'testage3'
    }];

    $ctrl.csvHeader = ['name', 'age'];
}

app.component('csvConverter', {
  templateUrl: 'src/components/csvConverter/html/csvConverter.html',
  controller: csvConverterController
});
