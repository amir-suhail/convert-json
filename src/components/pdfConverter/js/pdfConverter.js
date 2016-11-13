'use strict';

function pdfConverterController () {
    var $ctrl = this;
		var html = document.getElementById('toPdf');
    var pdf;

		html2canvas(html, {
					onrendered: function (canvas) {
							var data = canvas.toDataURL();
							var docDefinition = {
									content: [{
											image: data,
                      width: 500
									}]
							};
							pdf = pdfMake.createPdf(docDefinition);
					}
    });

    $ctrl.viewPdf = function () {
        pdf.open("pdfFile.pdf");
  	};

    $ctrl.downloadPdf = function () {
        pdf.download("pdfFile.pdf");
    };
}

app.component('pdfConverter', {
  templateUrl: 'src/components/pdfConverter/html/pdfConverter.html',
  controller: pdfConverterController
});
