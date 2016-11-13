'use strict';

function aboutController () {
    var $ctrl = this;
    $ctrl.x = 'hello world';
}

app.component('about', {
    templateUrl: 'components/about/html/about.html',
    controller: aboutController
});
