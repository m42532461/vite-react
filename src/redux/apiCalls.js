import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  verifyStart,
  verifySuccess,
  verifyFailure,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};

export const updateUser = async (id, updatedUser, dispatch) => {
  dispatch(updateUserStart());
  try {
    console.log("update");
    console.log(id);
    console.log(updatedUser);

    const res = await userRequest.put(`/users/${id}`, updatedUser);

    dispatch(updateUserSuccess(res.data));
  } catch (error) {
    dispatch(updateUserFailure());
  }
};

export const sendMail = async (uuid, username) => {
  try {
    console.log("send mail");
    console.log("uuid:" + uuid);

    const res = await publicRequest.post(`/mail/certification`, {
      uuid,
      username,
    });
    console.log("verify code:" + res.data);
  } catch (error) {
    console.log(error);
  }
};

export const verifyCode = async (dispatch, uuid, verifyCode) => {
  try {
    console.log("verify code");
    console.log("uuid:" + uuid);
    dispatch(verifyStart());

    const res = await publicRequest.post(`/auth/uuid`, {
      uuid,
      verifyCode,
    });
    dispatch(verifySuccess(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch(verifyFailure());
  }
};
