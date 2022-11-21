const properties = {
    prop1: 'a',
    prop2: 2,
    prop3: true,
    prop4: function() {
        return `${this.prop1} ${this.prop2} ${this.prop3}`;
    }
}

console.log(properties.prop4());