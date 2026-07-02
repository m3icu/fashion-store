import { useForm } from "react-hook-form";
import { login } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const response = await login(data);
  
      const { token, admin } = response.data;
     
      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));
   
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Vyra Fashion Admin
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              {...register("email")}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2">
              Password
            </label>
      
            <input
              type="password"
              {...register("password")}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>


          <button
            className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700">
            Login
          </button>


        </form>


      </div>


    </div>
  );
}

         
