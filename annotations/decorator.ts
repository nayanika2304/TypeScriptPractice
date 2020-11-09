const Component = (target: any) =>{
    console.log(target)

    return () =>{

    }
};

// @ts-ignore
@Component
class Cars {

}

//Component does not get called a second time
//new Car
