import { useView } from 'aurelia-framework';

@useView('/Home/App')
export class App {

    constructor() {
        this.datasource = {
            type: 'odata',
            transport: {
                read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
            },
            pageSize: 5
        };
        this.pageable = {
            refresh: true,
            pageSizes: true,
            buttonCount: 10
        };
    }
}