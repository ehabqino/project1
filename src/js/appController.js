require(['ojs/ojcore','knockout','ojs/ojbootstrap','jquery','ojs/ojmodule-element-utils','ojs/ojmodule-element','ojs/ojbutton'],
    function(oj,ko,bs,$,moduleUtils){
        class SPAModule {
            constructor(){
                this.currentModule = ko.observable("page2");
                
                this.moduleConfig = ko.pureComputed(()=>{
                    var page = this.currentModule();
                    var viewPath = 'views/'+page+'.html';
                    var viewModelPath = 'viewModels/'+page; //js files without .js extension
                    
                    return {
                        "view" : moduleUtils.createView({'viewPath' : viewPath}) ,
                        "viewModel" : moduleUtils.createViewModel({'viewModelPath' : viewModelPath})
                    }//end return

                });//end computed function

            }//end constructor

        }//end class
        bs.whenDocumentReady().then(function(){
            ko.applyBindings(new SPAModule(), document.getElementById("headerModule"));
        }); //end then function
    });
