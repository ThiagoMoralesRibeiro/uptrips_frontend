import api from '../../Api';
import Cookies from 'js-cookie';
export default async function setDestination(form){
  try {

    await api.post('/api/destination', form, {
      headers: {
        "Content-Type": "application/json",
         "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true, 
    }); 
  } catch (error) { 
    console.log(error)
  }

}
