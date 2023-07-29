//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
//Import constants
import { storeToken, storeUser, storeCurrency, getCurrency } from '../lib/common';

export const LoginService = async (data, router, setMessage, setOpenShowMessage) => {
    await axios.request({
        method: 'post',
        url: `${API_ROUTES.SIGN_IN}`,
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: data
    }).then(response => {
        const currency = getCurrency()
        //Save token in local storage
        storeToken(response.data.token)
        storeUser(response.data.user)
        storeCurrency(response.data.user.currency)
        //return last view    
        if(response.data.user.currency == currency){
            router.back()
        }else{
            router.push(APP_ROUTES.HOME)
        }       
    }).catch(error => {
        const messageError = error.response ? error.response.data.message : JSON.stringify(error)
        if (messageError) {
            setMessage(messageError)
            setOpenShowMessage(true)
        }
    })
}

export const validateTokenService = async (token) => {
    await axios
        .request({
            method: 'get',
            url: `${API_ROUTES.VALIDATE_TOKEN}/${token}`,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            //Save token in local storage
            storeToken(response.data.token)
            storeUser(response.data.user)
            //Return
        }).catch(() => {
            return false
        })
}
