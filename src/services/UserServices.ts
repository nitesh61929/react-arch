import axios from "axios";
import { SYSTEM_ERROR } from "../config/GlobalConstants";
import { GET_ALL_USERS } from "./ApiConstants";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(GET_ALL_USERS())
        .then((res) => {
          console.log("getAllUsers > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getAllUsers > axios err=", err);
          reject("Error in getAllUsers axios!");
        });
    } catch (error) {
      console.error("in userServices > getAllUsers, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
