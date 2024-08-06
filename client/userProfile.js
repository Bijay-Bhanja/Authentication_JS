function getIdURL(){
    let query=window.location.search
    // console.log(query) 
    let obj=new URLSearchParams(query)
    let idValue=obj.get("id")
    console.log(idValue)
    return idValue
}
let id=getIdURL()

function getProfile(){
    fetch(`http://localhost:5000/userProfile/${id}`)
    .then((data)=>{
        return data.json()    
    })
    .then((user)=>{
        let table=document.createElement("table")

        table.style.width="20%"
        table.style.height="50%"
        // table.style.backgroundColor="black"
        table.style.border="2px solid white"
        table.style.borderRadius="10px"
        table.style.boxShadow="0 0 10px white"
        table.style.padding="30px"

        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText="NAME"
        td1.style.color="white"

        let td2=document.createElement("td")
        td2.innerText=`${user.name}`
        td2.style.color="white"

        let tr2=document.createElement("tr")
        let td3=document.createElement("td")
        td3.innerText="EMAIL"
        td3.style.color="white"

        let td4=document.createElement("td")
        td4.innerText=`${user.email}`
        td4.style.color="white"

        let tr3=document.createElement("tr")
        let td5=document.createElement("td")
        td5.innerText="PHONE NO"
        td5.style.color="white"

        let td6=document.createElement("td")
        td6.innerText=`${user.phoneNo}`
        td6.style.color="white"

        let tr4=document.createElement("tr")
        let td7=document.createElement("td")
        let button1=document.createElement("button")
        button1.innerText="EDIT"
        button1.style.backgroundColor="black"
        button1.style.border="2px solid white"
        button1.style.color="white"
        button1.style.padding="5px 20px"
        button1.style.borderRadius="10px"

        button1.addEventListener("click",()=>{
            window.location.assign(`./editUser.html?id=${user._id}`)
        })
        let td8=document.createElement("td")
        let button2=document.createElement("button")
        button2.innerText="DELETE"
        button2.style.backgroundColor="black"
        button2.style.border="2px solid white"
        button2.style.color="white"
        button2.style.padding="5px 20px"
        button2.style.borderRadius="10px"

        button2.addEventListener("click",()=>{
            fetch(`http://localhost:5000/userProfile/${id}`,{
                method:"DELETE"
            })
            .then(()=>{
                window.location.assign("./users.html")
            })
            .catch(()=>{console.log("data not deleted")})
        })


        tr1.append(td1,td2)
        tr2.append(td3,td4)
        tr3.append(td5,td6)
        tr4.append(td7,td8)
        // tr5.append(td7,td8)
        td7.appendChild(button1)
        td8.appendChild(button2)
        table.append(tr1,tr2,tr3,tr4)
        document.body.appendChild(table)
    })
    .catch(()=>{console.log("err")})
}
getProfile()