import axios from "axios";

export const sendEmail = async (emailData) => {
    try{
        const endpoint = 'http://localhost:3001/send';
        const response = await axios.post(endpoint, emailData);
        return response;
    }catch{
        console.error('Hiba az email elküldésekor:',error);
        throw error;
    }
}