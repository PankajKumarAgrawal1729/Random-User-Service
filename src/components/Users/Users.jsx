import { useParams } from "react-router-dom";
import { UsersInfo, Pagination } from "../index";
import { useEffect, useState } from "react";
function Users() {
  let { start } = useParams();
  start = start === undefined ? 1 : start;
  const limit = 10;
  const [userData, setUserData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const fetchUserData = async() => {
    await fetch(
      `https://api.freeapi.app/api/v1/public/randomusers?page=${start}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((userData) => {
        setUserData(userData);
        setPageInfo({
          page: userData.data.page,
          limit: userData.data.limit,
          totalPages: userData.data.totalPages,
          previousPage: userData.data.previousPage,
          nextPage: userData.data.nextPage,
          totalItems: userData.data.totalItems,
          currentPageItems: userData.data.currentPageItems,
        });
      });
  }
  
  useEffect(() => {
    fetchUserData();
  }, [start]);

  return userData.length !== 0 ? (
    <div className="flex-col justify-center mt-10 items-center w-9/12 h-9/12 border-4 border-double border-black m-auto p-0">
      {userData.data.data.map((user) => (
        <UsersInfo key={user.id} info={user} />
      ))}
      <div className="bg-cyan-300 h-14">
        <Pagination pageInfo={pageInfo} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Users;


