import Cookies from "js-cookie"

export default {
    Auth(to, from, next){
        console.log(to, from, next)
        const Token = Cookies.get('_myapp_Token')
        if(!Token){
            return next('/')
        }else{
            return next('/')
        }
        
    }
}