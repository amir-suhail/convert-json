'use strict';

function xlsxConverterController (ngXlsx) {
    var $ctrl = this;
    var response = {
        header: [
            {field: "colA", displayName: "Column A"},
            {field: "colB", displayName: "Column B"}
        ],
        data: [
            {colA: 1, colB: "2"},
            {colA: true, colB: "false"},
            {colA: 'x', colB:'y'}
        ]
    };
  	var xlsxBlob = ngXlsx.getBlob([{
  		sheetName: "testSheet",
  		columnDefs: response.header,
  		data: response.data
  	}]);

  	$ctrl.generateXlsx = function () {
        saveAs(xlsxBlob ,"xlsxFile.xlsx");
    };
}

app.component('xlsxConverter', {
  templateUrl: 'src/components/xlsxConverter/html/xlsxConverter.html',
  controller: xlsxConverterController
});
