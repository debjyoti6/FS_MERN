function register(name,email){
    return {name,email,id:Date.now()};
} 
console.log(register('Dip','a@b.com'));