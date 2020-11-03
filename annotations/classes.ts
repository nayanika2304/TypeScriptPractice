class Vehicle {
    /*drive(): void {
        console.log('drive!')
    }*/
    color : string;

    constructor(props) {
        this.color = props
    }

    protected honk() : void {
        console.log('honk!')
    }

}

const vehicle = new Vehicle('orange')

class Car extends Vehicle{
    constructor(wheels : number,color: string) {
        super(color); // to call constructor of parent
    }

    private drive() : void {
        console.log('vroom!!!')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4,'red');
car.startDrivingProcess()
