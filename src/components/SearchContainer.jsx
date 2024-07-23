import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';

function SearchContainer(){
    const navigate = useNavigate();
    const location = useLocation();
    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            userId: "",
          }
    });
    const search = (formData) => {
        const userId = formData.userId;
        if(userId !== ""){
            const newPath = `/user/${userId}`;
            if (location.pathname !== newPath) {
                navigate(newPath);
            }else{
                navigate(newPath, {replace: true});
            }
        }
        reset();
    }
    return (
        <form onSubmit={handleSubmit(search)} className="ml-11 mt-2">
            <input {...register("userId")} className="mr-4 p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" autoComplete="off" />
            <button type="submit" className="border-black border-2 p-1 rounded-md">Search</button>
        </form>
    )
}

export default SearchContainer;