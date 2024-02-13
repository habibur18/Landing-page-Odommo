import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
const SignUpSchema = z
  .object({
    fullname: z
      .string()
      .min(6, "Name must be at least 6 characters long")
      .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
        message: "Name must contain only letters and spaces",
      }),
    email: z.string().email().min(12, "Email must be at least 12 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });
const AdminSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data) => {
    console.log("data");
    console.log(data);
  };
  return (
    <div className="bg-grey-lighter min-h-[90vh] flex flex-col">
      <Link to="/" className="text-xl font-bold flex justify-center items-center gap-2 w-full mt-5">
        <span>
          <FaArrowCircleLeft />
        </span>
        <span>Navigate To Home Page</span>
      </Link>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Admin Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input {...register("fullname")} type="text" className="block border border-grey-light w-full p-3 rounded" name="fullname" placeholder="Full Name" />
              {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
            </div>

            <div>
              <input {...register("email")} type="email" className="block border border-grey-light w-full p-3 rounded" name="email" placeholder="Email" />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <input {...register("password")} type="password" className="block border border-grey-light w-full p-3 rounded" name="password" placeholder="Password" />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <div>
              <input {...register("confirmPassword")} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirmPassword" placeholder="Confirm Password" />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </div>
            <input type="submit" value="Create Account" className="cursor-pointer w-full text-center py-3 rounded text-white bg-green-600 my-1" />
          </form>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/admin/admin-login" className="no-underline border-b border-blue text-blue" href="../login/">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
