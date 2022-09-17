import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
import { updateUser } from "../redux/apiCalls";
import FileBase64 from "react-file-base64";
const Account = () => {
  const UseFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };
  const user = useSelector((state) => state.user.currentUser);
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(user.img);

  const [birthRef, setBirthFocus] = UseFocus();
  const [usernameRef, setUsernameFocus] = UseFocus();
  const [addressRef, setAddressFocus] = UseFocus();
  const [phoneRef, setPhoneFocus] = UseFocus();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      setImg(reader.result);
    };
    reader?.readAsDataURL(e?.target?.files[0]);
    setFile(e.target.files[0]);
    e.target.value = "";
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let updatedUserInfo = input;

    if (!file) {
      console.log("!file");
      console.log(updatedUserInfo);
      updateUser(user._id, updatedUserInfo, dispatch);
    } else {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updatedUserInfo = { ...updatedUserInfo, img: downloadURL };

            console.log("file");
            console.log(updatedUserInfo);
            updateUser(user._id, updatedUserInfo, dispatch);
          });
        }
      );
    }
    navigate("/");
  };
  return (
    <div className="user flex-col flex-[4] p-5 ">
      <div className="userTitleContainer flex items-center justify-between">
        <h1 className="userTitle text-4xl font-bold">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton w-20 p-[10px] bg-teal-600 cursor-pointer text-white text-[16px] rounded-[10px]">
            Create
          </button>
        </Link>
      </div>
      <div className="userContainer flex mt-5">
        <div className="userShow flex flex-col flex-1 p-5 shadow-lg">
          <div className="userShowTop flex items-center ">
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="userShowImg w-10 h-10 rounded-full object-cover"
            />
            <div className="userShowTopTitle flex flex-col ml-5">
              <span className="userShowUsername font-semibold">
                {user.email}
              </span>
              <span className="userShowUserTitle font-light">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="userShowButtom mt-5">
            <span className="userShowTitle  text-[14px] font-semibold text-[rgb(175,170,170)]">
              Account Details
            </span>
            <div
              className={`userShowInfo flex items-center my-5 text-[#444] ${
                user.username ? "" : "cursor-pointer"
              }`}
              onClick={() => {
                setUsernameFocus();
              }}
            >
              <PermIdentity className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                {user.username}
              </span>
            </div>
            <div
              className={`userShowInfo flex items-center my-5 text-[#444] ${
                user.birth ? "" : "cursor-pointer"
              }`}
              onClick={() => {
                setBirthFocus();
              }}
            >
              <CalendarToday className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                {user.birth || "Add Birth Now"}
              </span>
            </div>
            <span className="userShowTitle  text-[14px] font-semibold text-[rgb(175,170,170)]">
              Contact Details
            </span>
            <div
              className={`userShowInfo flex items-center my-5 text-[#444] ${
                user.phone ? "" : "cursor-pointer"
              }`}
              onClick={() => {
                setPhoneFocus();
              }}
            >
              <PhoneAndroid className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                {user.phone || "Add phone now"}
              </span>
            </div>
            <div
              className={`userShowInfo flex items-center my-5 text-[#444] ${
                user.email ? "" : "cursor-pointer"
              }`}
            >
              <MailOutline className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">{user.email}</span>
            </div>
            <div
              className={`userShowInfo flex items-center my-5 text-[#444] ${
                user.address ? "" : "cursor-pointer"
              }`}
              onClick={() => {
                setAddressFocus();
              }}
            >
              <LocationSearching className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                {user.address || "Add address now"}
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex flex-col flex-[4] p-5 shadow-lg ml-5">
          <span className="userUpdateTitle text-[24px]  font-semibold">
            Edit
          </span>
          <form action="" className="userUpdateForm flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                  name="username"
                  onChange={handleInput}
                  ref={usernameRef}
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Birthday</label>
                <input
                  type="text"
                  placeholder={user.birth}
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                  name="birth"
                  onChange={handleInput}
                  ref={birthRef}
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Phone Number</label>
                <input
                  type="text"
                  placeholder={user.phone}
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                  name="phone"
                  onChange={handleInput}
                  ref={phoneRef}
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Address</label>
                <input
                  type="text"
                  placeholder={user.address}
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                  name="address"
                  onChange={handleInput}
                  ref={addressRef}
                />
              </div>
            </div>
            <div className="userUpdateRight flex flex-col justify-between ">
              <div className="userUpdateUpload flex items-center">
                <img
                  src={
                    img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="userUpdateImg w-[100px] h-[100px] rounded-[10px] object-cover mr-5"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  className=" hidden"
                  //   onChange={(e) => setFile(e.target.files[0])}
                  onChange={handleFileChange}
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFile(null);
                }}
              >
                X
              </button>
              <button
                className="userUpdateButton  rounded-[5px] p-[5px] bg-[darkblue] text-white font-semibold cursor-pointer"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
