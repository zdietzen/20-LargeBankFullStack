function CustomerModel(){
    this.CustomerId = ko.observable();
    this.CreatedDate = ko.observabke();
    this.FirstName = ko.observable();
    this.LastName = ko.observable();
    this.Address1 = ko.observable();
    this.Address2 = ko.observable();
    this.City = ko.observable();
    this.State = ko.observable();
    this.Zip = ko.observable();
}

function AccountModel() {
    this.AccountId = ko.observable();
    this.CustomerId = ko.observable();
    this.CreatedDate = ko.observable();
    this.AccountNumber = ko.observable();
    this.Balance = ko.observabel();
}

function TransactionModel() {
    this.TransactionId = ko.observable();
    this.AccountId = ko.observable();
    this.TransactionDate = ko.observable();
    this.Amount = ko.observable();
}

function ViewModel() {
    var self = this;
    
    //page management
    self.page = ko.observable('customer.grd');
    
    //customer.detail
    self.selectedCustomer = new CustomerModel();
    self selectedCustomerAccounts = ko.observableArray();
    self.saveCustomer = function() {
        if(self.page() == 'customer.add') {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:53495/api/customers',
                contentType: 'application/json;charset=utf-8',
                data:'ko.mapping.toJSON(self.selectedCustomer)',
                success: function(data) {
                    alert('added');
                    
                    self.page('customer.grid');
                }
            });
        } else {
            $.ajax({
                type: 'PUT',
                url: 'http://localhost:53495/api/customers?id=',
                contentType: 'application/json;charset=utf-8',
                data:'ko.mapping.toJSON(self.selectedCustomer)',
                success: function(data) {
                    alert('save successful');
                    
                    self.page('customer.grid');
                }                
            });
        }
    };
    
//customer.grid
    self.customers = ko.observableArray();
    self.addCustomer = function() {
        self.page)'customer.add');
    };
    self.editCustomer = function(customer) {
        $.ajax({
                type: 'GET',
                url: 'http://localhost:53495/api/customers/' + customerId,
                success: function(data) {
                    ko.mapping.
                    alert('save successful');
                    
                    self.page('customer.grid');
            
        })
    }