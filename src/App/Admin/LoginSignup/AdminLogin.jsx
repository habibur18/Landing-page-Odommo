import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email().min(12, "Email must be at least 12 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900" style={backgroundStyle}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Link to="/" className="text-xl font-bold flex items-center gap-2 w-full">
              <span>
                <FaArrowCircleLeft />
              </span>
              <span>Navigate To Home Page</span>
            </Link>
            <h1 className="text-3xl font-bold my-3">Admin Login</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 text-lg">
              <input {...register("email")} className="focus:placeholder:text-transparent rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="admin@odommo.xyz" />
              {errors.email && <span className="block text-red-500">{errors.email.message}</span>}
            </div>

            <div className="mb-4 text-lg">
              <input {...register("password")} className="focus:placeholder:text-transparent rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" />
              {errors.password && <span className="text-red-500 block max-w-[26ch]">{errors.password.message}</span>}
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
