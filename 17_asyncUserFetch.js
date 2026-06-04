async function getUser()
{
    return Promise.resolve({id:1,name:'Dip'});
} 
getUser().then(console.log);