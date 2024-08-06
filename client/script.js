let input=document.querySelectorAll("input")
function registerData(){
let input1=input[0].value
let input2=input[1].value
let input3=input[2].value
let input4=input[3].value
let input5=input[4].value

let register={
    name:input1,
    email:input2,
    phoneNo:input3,
    // password:input4,
    confirmPassword:input5
}
fetch("http://localhost:5000/submitForm",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(register)
})
.then((data)=>{
    return data.json()
})
.then((user)=>{
    alert(user.message)
})
.catch(()=>{
    console.log("failed")
})


}