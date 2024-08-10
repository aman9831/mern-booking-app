import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppcontext } from "../contexts/AppContext";

const SignOutButton = () =>{

    const queryClient = useQueryClient();
    const { showToast } = useAppcontext();


    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
          await queryClient.invalidateQueries("validateToken");
          showToast({ message: "Signed Out!", type: "SUCCESS" });
        },
        onError: (error: Error) => {
          showToast({ message: error.message, type: "ERROR" });
        },
      });

      const handleClick = () => {
        mutation.mutate();
      };

    return(
        <button 
        onClick={handleClick}
        className="bg-white items-center border-2 border-black text-blue-600 px-3 py-1 rounded-lg font-bold hover:bg-gray-100" style={{ color: '#09203F' }}>
            Sign Out
        </button>
    )
}



export default SignOutButton;