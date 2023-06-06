"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

interface IFormInput {
  Name: string;
  Email: string;
  PhoneNumber?: number;
  Message: string;
}

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="max-w-7xl mx-auto mb-24">
      <h2 className="text-3xl font-semibold mb-20">Contact</h2>
      <div className="flex justify-center ">
        <div className="flex flex-[1.5] flex-col">Image Here</div>

        <div className="flex flex-[1.5] flex-col ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 text-black"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true, maxLength: 30 })}
              className="p-2 rounded-md outline-none"
            />
            {errors?.Name?.type === "required" && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}
            {errors?.Name?.type === "maxLength" && (
              <span className="text-sm text-red-400">
                Max Length is 30 characters
              </span>
            )}

            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className="p-2 rounded-md outline-none"
            />
            {errors?.Email?.type === "required" && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}
            {errors?.Email?.type === "pattern" && (
              <span className="text-sm text-red-400">
                Invalid email address
              </span>
            )}

            <input
              type="tel"
              placeholder="Phone Number"
              {...register("PhoneNumber", { maxLength: 12 })}
              className="p-2 rounded-md outline-none"
            />
            {errors?.PhoneNumber?.type === "maxLength" && (
              <span className="text-sm text-red-400">
                Max Length is 12 characters
              </span>
            )}

            <textarea
              placeholder="Message"
              rows={5}
              cols={50}
              {...register("Message", { required: true })}
              className="p-2 rounded-md outline-none"
            />
            {errors?.Message?.type === "required" && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}

            <button
              type="submit"
              className="bg-red-500 py-3 rounded-md text-white font-semibold text-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
