class monthlyNeeds {
    constructor(vegetables, snacks, groceries) {
        this.vegetables = vegetables;
        this.snacks = snacks;
        this.groceries = groceries;

    }
    view() {
        return this.vegetables + "," + this.groceries + "," + this.snacks;

    }
}
var obj = new monthlyNeeds("Tomatoes", "Biscuts", "toothpaste")
console.log(obj.view())

class budget extends monthlyNeeds {
    constructor(vegetables, snacks, groceries, total) {
        super(vegetables, snacks, groceries)
        this.total = total
    }

    amount() {
        return this.vegetables + "," + this.groceries + "," + this.snacks + "," + this.total

    }
}
var obj1 = new budget("Tomatoes", "Biscuts", "toothpaste", "4000")
console.log(obj1.amount())

//output for first console.log Tomatoes,toothpaste,Biscuts
// output for second console.log Tomatoes,toothpaste,Biscuts,4000