import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState([]);
  const [isUserPresent, setIsUserPresent] = useState(false);
  const getUserInfo = () => {
    fetch(`https://api.freeapi.app/api/v1/public/randomusers/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode !== 404) {
          setUserData(data);
          setIsUserPresent(true);
        }else{
          setIsUserPresent(false);
        }
      })
      .catch(() => setIsUserPresent(false));
  };
  useEffect(getUserInfo, [userId]);

  return isUserPresent ? (
    <div className="flex-col justify-center items-center w-9/12 h-9/12 border-4 border-double border-black m-auto p-0 mt-52">
      {userData.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <UserInfo info={userData.data} />
      )}
    </div>
  ) : (
    <h1>User Not Found!!Please Enter a valid id.</h1>
  );
}

export default User;
