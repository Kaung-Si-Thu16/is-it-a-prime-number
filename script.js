function isPrime(){
    let prime = true;

    let inputNum = Number(document.querySelector("#number").value);
    let result = document.querySelector("#result");

    if(inputNum < 2){
        prime = false;
    }

    for(let i = 2; i < inputNum; i++){
        if(inputNum % i === 0){
            prime = false;
        }
    }

    if(prime){
        result.innerHTML = `"${inputNum}" is a prime number`;
    }else{
        result.innerHTML = `"${inputNum}" is not a prime number`;
    }
}

