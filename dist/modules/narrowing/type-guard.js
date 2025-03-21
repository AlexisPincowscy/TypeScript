export const bootstrap = () => {
    const zipCodeMaks = (zipValue) => {
        //typeguard é fazer essa verificação
        if (typeof zipValue === 'number') {
            zipValue = zipValue.toString(); //método do JS que transforam em number em string
        }
        zipValue = zipValue.replace(/\D/g, ''); //replace serve para ver se na string existe algo que n seja numérico, tendo vira valor em branco
        zipValue = zipValue.replace(/(\d{5})(\d)/, '$1-$2'); //separa os 5 primerios digitos com - e pega o resto
        return zipValue;
    };
    const zipCode = zipCodeMaks('10000000'); // formato CEP: 70.000-000
    console.log(zipCode);
    const zipCode2 = zipCodeMaks(20000000); // formato CEP: 70.000-000
    console.log(zipCode2); // aqui, nesse moemnto da erro. O replace não aceita number
    // feito o type guard, a verificação se o type é válido, se não, transforma em string e manda bala!
};
