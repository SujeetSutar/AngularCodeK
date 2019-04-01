{
    // Variale types in typeScript
    let nm:string = 'android'

    let age:number = 26

    let bl:boolean = true

    // fnv stores function
    let fnv:() => void = function(){console.log('function type valiable')}
    fnv()

    let fnv1:(num:number) => string = (num = 40)=>{return ''}

    let obj:{} = {key:'value'}

    let obj1:{[key:number]:string} = {45:'value'}

    let mixed: number | boolean | string = 'you can assign number or boolen or string value'

    let uni:any = 'you can assign any type of value'

}

{
    //Functions in typeScript
    function fn(){

    }

    function fn1(num:number): string | number | boolean {
        return ''
    }
}