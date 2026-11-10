export async function register(user){
    const response = await fetch("http://localhost:3000/user/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.error)//throw new Error("Este e-mail já está cadastrado")
    }

    return data
}

export async function login(email, senha){
    console.log("EMAIL:", email)
    console.log("SENHA:", senha)
    const response = await fetch("http://localhost:3000/user/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email.toLowerCase().trim() , senha})
    },)

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.error)
    }

    return data
}