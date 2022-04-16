export const operations={
    sum:(operator1:string, operator2:string):string=>           (Number(operator1) + Number(operator2)).toString(),

    subtraction:(operator1:string, operator2:string):string=>   (Number(operator1) - Number(operator2)).toString(),

    multiply:(operator1:string, operator2:string):string=>      (Number(operator1) * Number(operator2)).toString(),

    division:(operator1:string, operator2:string):string=>{

        if(operator2 === '0') return 'Error division by Zero'

        return (Number(operator1) / Number(operator2)).toString()
    }

}