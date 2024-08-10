
import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
  try{
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const responseBody = await response.json();
  
    if (!response.ok) {
      console.error("Error response:", responseBody);
      throw new Error(responseBody.message);
    }
  }
  catch(error){
    console.error("Register error:", error); // Log the error
    throw error;
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });

    // Ensure the response is parsed as JSON
    if (!response.ok) {
      throw new Error("Invalid token");
    }
    return response.json();
  } catch (error) {
    console.error("Token validation error:", error); // Log the error
    throw error;
  }
};

export const signOut = async () =>{
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`,{
    method: "POST",
    credentials: "include",
  });

  if(!response.ok){
    throw new Error("ERROR during sign out");
  }
}