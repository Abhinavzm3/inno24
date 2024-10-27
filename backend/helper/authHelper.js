import bcrypt from 'bcrypt'

export const hasPass=async (pass)=>{
    try {
       const hashed=await bcrypt.hash(pass,10)
return hashed

        
    } catch (error) {
        console.log(error)
    }
}

export const comparePass=async(password,userpass)=>{


        try {

            const passNew=bcrypt.compare(password,userpass)
            return passNew
        } catch (error) {
            console.log(error)
        }
    }
    
