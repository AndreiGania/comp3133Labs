class Customer {
    firstName: string;
    lastName: string;

    public greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();