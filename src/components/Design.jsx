import { useForm } from "react-hook-form";

const Design = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-8 mt-16 md:mt-32 px-4">
      {/* Header Section */}
      <div className="space-y-5 text-center">
        <h1 className="font-poppins text-4xl dark:text-white md:text-5xl lg:text-6xl font-semibold">
          Let's Design Together
        </h1>
        <p className="font-poppins dark:text-white text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus <br className="max-lg:hidden" /> in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7 w-full"
      >
        {/* Email Input Field */}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <input
            name="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="input input-bordered w-full py-3 md:py-4 lg:py-5"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="text-base md:text-lg lg:text-xl font-semibold rounded-lg px-4 py-3 md:px-5 text-white bg-[#FD6F00]">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Design;
