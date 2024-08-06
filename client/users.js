fetch("http://localhost:5000/user")
.then((data)=>{return data.json()})
.then((datas)=>{
    let data=datas.data
    console.log(data)
    data.map((user)=>{
    let div=document.createElement("div")
    div.style.height="30%"
    div.style.width="18%"
    // div.style.borderWidth="2px solid black"
    div.style.backgroundColor="black"
    div.style.borderRadius="10px"

    let div2=document.createElement("div")
    div2.style.height="20%"
    // div2.style.border="2px solid white"

    let h2=document.createElement("h2")
    h2.innerText=`NAME: ${user.name}`
    h2.style.color="white"
    h2.style.paddingLeft="10px"

    let div3=document.createElement("div")
    div3.style.height="40%"
    // div3.style.border="2px solid white"
    div3.style.display="flex"
    div3.style.justifyContent="center"
    div3.style.alignItems="center"
    

    let article=document.createElement("article")
    article.style.width="100px"
    article.style.height="80%"
    article.style.border="2px solid white"
    article.style.borderRadius="40px"

    let div4=document.createElement("div")
    div4.style.height="30%"
    div4.style.display="flex"
    div4.style.justifyContent="center"
    div4.style.alignItems="center"

    let button=document.createElement("button")
    button.innerText="PROFILE"
    button.style.color="white"
    button.style.backgroundColor="black"
    button.style.border="2px solid white"
    button.style.width="40%"
    button.style.height="40%"
    button.style.borderRadius="10px"

    let userId=`${user._id}`
    // console.log(userId)

    // button.addEventListener("click",(userId)=>{
    //     console.log(userId)
    // })

    button.addEventListener("click", ()=>{
        window.location.assign(`./userProfile.html?id=${userId}`)
    })
    


    div2.appendChild(h2)
    div3.appendChild(article)
    div4.appendChild(button)
    div.append(div2,div3,div4)
    document.body.appendChild(div)
})

})
.catch(()=>{console.log("not fetch the data")})