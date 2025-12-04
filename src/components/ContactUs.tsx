/* eslint-disable react/jsx-no-bind */
import React, { useState, FormEvent } from "react";
import Modal from "./Modal";

interface IContactUsProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
}

export default function ContactUs({ open, onClose }: IContactUsProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "Please Select",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          type: "Please Select",
        });
        setTimeout(onClose, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setStatus("error");
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="">
      <div className="flex flex-col w-full px-6 mx-auto p-1 h-[80vh]">
        <div className="mb-2">
          <h1 className="text-4xl font-semibold text-gray-900! mb-1">
            Book a Demo
          </h1>
        </div>

        <form
          className="flex flex-col gap-3 overflow-y-auto pr-2 flex-1"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              First name*
            </label>
            <input
              type="text"
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="border border-gray-300 text-gray-900! rounded-md px-3 py-2 w-full focus:outline-none focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Last name*
            </label>
            <input
              type="text"
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900! rounded-md px-3 py-2 w-full focus:outline-none focus:border-black"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900! rounded-md px-3 py-2 w-full focus:outline-none focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Phone number*
            </label>
            <input
              type="text"
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900! rounded-md px-3 py-2 w-full focus:outline-none focus:border-black"
              required
            />
          </div>

          {/* Agent / Team / Brokerage */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Are you an agent or team?*
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900! rounded-md px-3 py-2 w-full bg-white focus:outline-none focus:border-black"
              required
            >
              <option value="Please Select" disabled>
                Please Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#c28a32] text-white font-semibold py-2 px-4 rounded-md w-fit hover:bg-yellow-500 transition-all"
            disabled={status === "loading"}
          >
            {status === "loading" ? "SENDING..." : "GET STARTED NOW"}
          </button>

         {status === "success" && (
            <div className="p-3 mt-2 rounded-lg bg-green-100 text-green-700 text-sm font-semibold flex items-center">
              <span className="mr-2">✅</span> Demo Scheduled! We will contact you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="p-3 mt-2 rounded-lg bg-red-100 text-red-700 text-sm font-semibold flex items-center">
              <span className="mr-2">❌</span> Error to sending. 
            </div>
          )}
        </form>
      </div>
    </Modal>
  );
}