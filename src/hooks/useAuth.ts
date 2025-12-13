import { useSelector, useDispatch } from "react-redux"; 
import type { AppDispatch, RootState } from "../store/store"; 
import { loginStart, loginSuccess,loginFailure, logout } from "../store/slices/auth/authSlice";
import { authServices } from "../services/AuthService";


export const useAuth = () => {
    const {user, token, loading, error} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    
    const handlerLogin = async (username: string, password: string) => {
        dispatch(loginStart());
        try{
            const data = await authServices.login(username,password);
            dispatch(loginSuccess(data));
        }catch(error:any){
         dispatch(loginFailure(error.response?.data?.message ?? 'Error login'));

        }
    }


    const handlerLogout = () => {
        dispatch(logout());
    }
    

    return {
        user,
        token,
        loading,
        error,
        isAuthenticated: Boolean(token),
        login:handlerLogin,
        logout:handlerLogout
    };
}

