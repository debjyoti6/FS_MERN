function login(username,password){
    return username==='admin'&&password==='1234'?'Login Success':'Invalid Credentials';
}
console.log(login('admin','1234'));