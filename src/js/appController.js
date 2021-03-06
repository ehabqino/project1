require(['ojs/ojcore','knockout','ojs/ojbootstrap','jquery','ojs/ojcorerouter','ojs/ojurlparamadapter',
         'ojs/ojarraydataprovider','ojs/ojmodulerouter-adapter',
         'ojs/ojknockoutrouteradapter',
         'ojs/ojmodule-element-utils','ojs/ojnavigationlist','ojs/ojmodule-element','ojs/ojbutton'],
    function(oj,ko,bs,$,CoreRouter,UrlParamAdapter,ArrayDataprovider,
        ModuleRouterAdapter,KnockoutRouterAdapter,moduleUtils){
        class SPAModule {
            constructor(){
                //Define Routes
                this.routes = [{path:"", redirect:"page2"},
                               {path:'page1', detail:{label:'First Page'}},
                               {path:'page2', detail:{label:'Second Page'}},
                               {path:'page3', detail:{label:'Third Page'}},];
                this.router = new CoreRouter(this.routes,{
                    urlAdapter : new UrlParamAdapter()
                });
                this.dataProvider = new ArrayDataprovider(this.routes.slice(1),{
                    keyAttributes:"path"
                });

                this.module = new ModuleRouterAdapter(this.router,{
                    viewPath : 'views/',
                    viewModelPath : 'viewModels/'
                });

                //Router Observable
                this.selection = new KnockoutRouterAdapter(this.router);
                
                //Apply 
                this.router.sync();
            }//end constructor

        }//end class
        bs.whenDocumentReady().then(function(){
            ko.applyBindings(new SPAModule(), document.getElementById("mainModule"));
        }); //end then function
    });
