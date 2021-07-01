require(['ojs/ojcore','knockout','ojs/ojbootstrap','jquery','ojs/ojmodule-element-utils','ojs/ojmodule-element','ojs/ojbutton'],
    function(oj,ko,bs,$,moduleUtils){
        class SPAModule {
            constructor(){
                //Define Routes
                this.routes = [{path:'page1', detail:{label:'First Page'}},
                               {path:'page2', detail:{label:'Second Page'}},
                               {path:'page3', detail:{label:'Third Page'}},]
                
            }//end constructor

        }//end class
        bs.whenDocumentReady().then(function(){
            ko.applyBindings(new SPAModule(), document.getElementById("mainModule"));
        }); //end then function
    });
