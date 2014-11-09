'use strict';

angular.module('nashvestnServerApp')
  .directive('ngPrinter', [function(){

    function printDirective(){
        var printSection = document.getElementById('printSection');

        // if there is no printing section, create one
        if (!printSection){
            printSection = document.createElement('div');
            printSection.id = 'printSection';
            document.body.appendChild(printSection);
        }

    window.onafterprint = function () {
                // clean the print section before adding new content
                printSection.innerHTML = '';
            };

        function printElement(elem){
            // clones the element you want to print
            var domClone = elem.cloneNode(true);
            printSection.appendChild(domClone);
        }
        function link(scope, element, attrs){
                           element.on('click', function (){
                             var elemToPrint = document.getElementById(attrs.printElementId);
                             if (elemToPrint){
                               printElement(elemToPrint);
                               window.print();
                             }
                           });
      }

    var o = {};

    o.templateUrl = 'components/printer/printer.html';
    o.restrict    = 'EA';
    o.link        =  link();


        return o;
  }


  }]);//last
