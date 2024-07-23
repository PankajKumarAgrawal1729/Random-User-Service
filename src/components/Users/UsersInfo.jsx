import { useNavigate, useLocation } from "react-router-dom";

function UsersInfo({ info }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (ev) => {
    const newPath = `/user/${ev.currentTarget.id}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    } else {
      navigate(newPath, { replace: true });
    }
  };
  return (
    <div
      id={info.id}
      className="flex gap-4 bg-red-300 border-2"
      onClick={handleClick}
    >
      <div>
        <img src={info.picture.thumbnail} alt="" />
      </div>
      <div>
        <h3>Id: {info.id}</h3>
        <h3>
          {info.name.title} {info.name.first} {info.name.last}
        </h3>
      </div>
    </div>
  );
}

export default UsersInfo;
