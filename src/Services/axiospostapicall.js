import axios from "axios";
import { BASE_URL } from "../CommonUrls";

export const personalPostData = async (userFilingId,navigation) => {
  try {
    const response = await axios.post(BASE_URL + `taxfillings/${userFilingId}/personals`, {
      personal: {
        name: '',
        cnic: '',
        email: '',
        phone: '',
        dob: '',
        citizen: '',
        residence: '',
        occupation_id:'' ,
      }
    });

    if (response.data.status === true) {
      console.log("response:", response.data.personal);
      navigation.navigate('income');
    }
  } catch (error) {
    console.log("Bug:", error);
  }
};