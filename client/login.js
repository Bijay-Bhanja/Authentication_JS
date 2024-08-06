let input=document.querySelectorAll("input")
function loginForm(){
    let loginData={
        email:input[0].value,
        password:input[1].value
    }
    // console.log(loginData)

    fetch("http://localhost:5000/loginData",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(loginData)
    })
    .then(()=>{
        // 
        window.location.assign("./users.html")
    })
    .catch(()=>{
        console.log("failed")
    })
    
}