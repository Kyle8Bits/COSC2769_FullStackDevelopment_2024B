const myInfo={
    fname: "Mai",
    lname: "Khoa",
    address: "702 Nguyen Van Linh, District 7, HCM"
}

export async function getAccount(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(myInfo), 1000);
    })
}

export async function updateMyAccount(newData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        myInfo.fname = newData.fname;
        myInfo.lname = newData.lname;
        myInfo.address = newData.address;
        resolve(myInfo);
      }, 10);
    });
  }
  