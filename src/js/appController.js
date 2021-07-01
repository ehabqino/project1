require(['ojs/ojcore','knockout','ojs/ojbootstrap','jquery','ojs/ojmodule-element-utils','ojs/ojmodule-element','ojs/ojbutton'],
    function(oj,ko,bs,$,moduleUtils){
        class SPAModule {
            constructor(){
                
            }//end constructor

        }//end class
        bs.whenDocumentReady().then(function(){
            ko.applyBindings(new SPAModule(), document.getElementById("mainModule"));
        }); //end then function
    });
