import { useForm } from "react-hook-form";

export default function Footer() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
    },
  });

  return (
    <div className="mt-8 py-10 bg-gray-800 flex flex-col items-center justify-center">
      <h2 className="text-gray-300 text-xl font-bold">
        Sign up to download free PDF
      </h2>
      <div className="px-6 py-4 md:w-5/6 lg:w-4/6 w-full">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4  md:gap-x-4 md:gap-y-3 items-center justify-center  ">
          <input
            className="w-full h-10 px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 text-gray-200"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "Field Required" })}
          />
          <input
            className="w-full h-10 px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 text-gray-200"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Field Required" })}
          />
          <input
            className="w-full h-10 px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 text-gray-200"
            type="text"
            placeholder="john@email.com"
            {...register("email", { required: "Field Required" })}
          />
          <input
            className="w-full h-10 px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 text-gray-200"
            type="text"
            placeholder="Your Title"
            {...register("jobTitle", { required: "Field Required" })}
          />
          </div>
          <button className="mt-4 w-full h-10 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg">Create Account</button>
        </form>
      </div>
      <p className="text-gray-400 mt-12 text-xs">Copyright © 2019 Scrimba</p>
    </div>
  );
}
