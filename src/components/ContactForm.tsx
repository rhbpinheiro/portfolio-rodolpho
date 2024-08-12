import { Fa6BrandsInstagram } from "@/icons/Fa6BrandsInstagram";
import { Fa6BrandsWhatsapp } from "@/icons/Fa6BrandsWhatsapp";
import { SkillIconsGithubDark } from "@/icons/SkillIconsGithubDark";
import { SkillIconsLinkedinDark } from "@/icons/SkillIconsLinkedin";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.email === "") return toast.error('Por favor, insira seu e-mail');
    if(formData.name === "") return toast.error('Por favor, insira seu nome');
    if(formData.subject === "") return toast.error('Por favor, insira o assunto');
    if(formData.message === "") return toast.error('Por favor, insira sua mensagem');
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_8paw6d6",
        "template_7vevx5q",
        templateParams,
        "9qltOpMrB7qKg0cXd"
      )
      .then(
        (response) => {
          toast.success("E-mail enviado com sucesso!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Erro ao enviar e-mail!");
        }
      );
  };

  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl dark:bg-transparent bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md dark:text-slate-200 text-[#333] font-[sans-serif]">
        <div className="dark:text-slate-200 text-blue-500">
          <h1 className="text-3xl font-extrabold md:text-left text-center">
            Vamos conversar
          </h1>
          <p className="text-sm mt-3 md:text-left text-center dark:text-slate-200 text-blue-500">
            Tem alguma grande ideia para desenvolver e precisa de ajuda? Então
            entre em contato adoraríamos ouvir sobre seu projeto e fornecer
            ajuda.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold md:text-left text-center">
              Email
            </h2>
            <ul className="mt-3">
              <li className="flex justify-center md:justify-start">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
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
                  <small className="block md:text-left text-center">Mail</small>
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
                className="flex justify-center items-center font-semibold gap-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
