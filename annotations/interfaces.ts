interface Report {
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary() : string {
        return `Name is ${this.name}
                Year : ${this.year}
                broken : ${this.broken}
        `
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar : 40,
    summary() : string {
        return `Color is ${this.color}
                Carbonated : ${this.carbonated}
                sugar : ${this.sugar}
        `
    }
}

const printSummary = (item: Report): void =>{
    console.log(`Summary: ${item.summary()} `)
}

printSummary(oldCivic)
printSummary(drink)
