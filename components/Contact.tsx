"use client";
import Image from "next/image";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const schema: ZodType<FormData> = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
  message: z.string().min(10).max(1000),
});

const Contact = () => {
  const form = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    console.log(data);

    await emailjs
      .send("service_j8l2j6m", "template_c7xc759", data, "L1QeFVbnxqjKT-UR3")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto mt-20 h-[80vh]">
      <h2 className="text-3xl font-semibold mb-20">Contact</h2>
      <div className="flex justify-center items-center space-x-48">
        <div className="flex  flex-col">
          <Image
            src="/images/contact_image.png"
            alt="contact"
            width={350}
            height={350}
          />
        </div>

        <div className="flex flex-col ">
          <form
            ref={form}
            className="flex flex-col space-y-6 text-black"
            onSubmit={handleSubmit(submitData)}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-md outline-none"
              {...register("name")}
            />
            {errors.name?.message && (
              <span className="text-red-400">{errors.name.message}</span>
            )}

            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded-md outline-none"
              {...register("email")}
            />
            {errors.email?.message && (
              <span className="text-red-400">{errors.email.message}</span>
            )}

            <input
              placeholder="Phone Number"
              className="p-2 rounded-md outline-none"
              {...register("phone")}
            />
            {errors.phone?.message && (
              <span className="text-red-400">{errors.phone.message}</span>
            )}

            <textarea
              placeholder="Message"
              rows={5}
              cols={50}
              className="p-2 rounded-md outline-none"
              {...register("message")}
            />
            {errors.message?.message && (
              <span className="text-red-400">{errors.message.message}</span>
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
