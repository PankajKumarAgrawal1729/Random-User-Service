import { useNavigate, useLocation } from "react-router-dom";
function Button({ id, children, bgColor, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (ev) => {
    let id = ev.currentTarget.id;
    let isPrev = id.indexOf("prev") !== -1;
    let isNext = id.indexOf("next") !== -1;
    let totalPages = 0;
    if (isPrev || isNext) {
      let idx = id.indexOf("_");
      totalPages = Number(id.substring(id.lastIndexOf("_") + 1, id.length));
      id = Number(id.substring(0, idx));
    }
    if(isPrev){
      if(id > 1){
        id -= 1;
      }
    }
    if(isNext){
      if(id < totalPages){
        id = (Number(id) + 1);
      }
    }
    const newPath = `/${id}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    } else {
      navigate(newPath, { replace: true });
    }
  };
  return (
    <button
      id={id}
      type="button"
      className={`w-7 border-2 border-black rounded-md hover:bg-slate-400 ${bgColor}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
