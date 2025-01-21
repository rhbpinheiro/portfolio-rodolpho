'use client';
import { Fa6BrandsInstagram } from "@/icons/Fa6BrandsInstagram";
import { Fa6BrandsWhatsapp } from "@/icons/Fa6BrandsWhatsapp";
import { SkillIconsGithubDark } from "@/icons/SkillIconsGithubDark";
import { SkillIconsLinkedinDark } from "@/icons/SkillIconsLinkedin";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("isSubmitting mudou para:", isSubmitting);
  }, [isSubmitting]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (formData.email === "") return toast.error("Por favor, insira seu e-mail");
    if (formData.name === "") return toast.error("Por favor, insira seu nome");
    if (formData.subject === "") return toast.error("Por favor, insira o assunto");
    if (formData.message === "") return toast.error("Por favor, insira sua mensagem");

    setIsSubmitting(true);
  

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_8paw6d6",
        "template_7vevx5q",
        templateParams,
        "9qltOpMrB7qKg0cXd"
      ).then((response) => {
        toast.success("E-mail enviado com sucesso!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
      })
    } catch (error) {
      toast.error("Erro ao enviar e-mail!");
    } finally {
      setIsSubmitting(false); 
    }
    console.log("enviou")
  };

  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-8 p-8 mx-auto max-w-4xl dark:bg-transparent bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md dark:text-slate-200 text-[#333] font-[sans-serif]">
        <div className="dark:text-slate-200 text-blue-500">
          <h1 className="text-3xl font-extrabold md:text-left text-center">
            Vamos conversar
          </h1>
          <p className="text-sm mt-3 md:text-left text-center dark:text-slate-200 text-blue-500">
            Tem alguma grande ideia para desenvolver e precisa de ajuda? Então
            entre em contato adoraria ouvir sobre seu projeto e fornecer
            ajuda.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold md:text-left text-center">
              Email
            </h2>
            <ul className="mt-3">
              <li className="flex justify-center md:justify-start">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full md:flex items-center justify-center shrink-0 hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="blue"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <p className="dark:text-slate-200 text-blue-500 text-sm ml-3">
                  <small className="md:block md:text-left text-center hidden">Mail</small>
                  <strong>rhbpinheiro30@gmail.com</strong>
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold md:text-left text-center">
              Redes Sociais
            </h2>
            <ul className="flex mt-3 justify-center md:justify-start space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rodolphopinheiro/"
                >
                  <SkillIconsLinkedinDark className="w-6 h-6" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a target="_blank" href="https://github.com/rhbpinheiro">
                  <SkillIconsGithubDark className="w-8 h-8" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  target="_blank"
                  href="https://www.instagram.com/rodolpho_pinheiro/"
                >
                  <Fa6BrandsInstagram className="w-6 h-6" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5585992467098"
                >
                  <Fa6BrandsWhatsapp className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form
            className="space-y-5 dark:text-gray-700 text-blue-500"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                className="form-input mt-2 rounded-md w-full bg-slate-100 p-2 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-input mt-2 rounded-md w-full bg-slate-100 p-2 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                className="form-input mt-2 rounded-md w-full bg-slate-100 p-2 outline-none"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                className="form-input mt-2 rounded-md w-full bg-slate-100 p-2 outline-none"
                placeholder="Escreva sua mensagem..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex justify-center items-center font-semibold gap-1 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""} bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300`}
              >
                {isSubmitting ? 
                <span>
                  <svg aria-hidden="false" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Enviando...
                </span>
                : "Enviar"}
              
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
