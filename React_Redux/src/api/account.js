const accoutn =[
    {user:'kyle', pass: '123'},
    {user:'admin', pass: 'admin'}
]

export async function getAccount(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(accoutn), 1000);
    })
}
