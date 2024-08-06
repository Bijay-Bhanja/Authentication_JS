let url=window.location.search
let obj=new URLSearchParams(url)
let id=obj.get("id")
let inputs=document.querySelectorAll("input")
function getData(){
    fetch(`http://localhost:5000/userProfile/${id}`)
    .then((data)=>{
        return data.json()
    })
    .then((user)=>{
        
        inputs[0].value=`${user.name}`
        inputs[1].value=`${user.email}`
        inputs[2].value=`${user.phoneNo}`
        inputs[3].value=`${user.confirmPassword}`
    })
}
getData()


function registerData(){
    let payload={
        name:inputs[0].value,
        email:inputs[1].value,
        phoneNo:inputs[2].value,
        confirmPassword:inputs[3].value
    }

    fetch(`http://localhost:5000/userProfile/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(payload)
    })
    .then(()=>{
        window.location.assign(`./userProfile.html?id=${id}`)
        console.log("data updated")})
    .catch(()=>{console.log("data not updated")})
}