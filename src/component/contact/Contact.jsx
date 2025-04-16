import React, { useState } from "react";
import Container from "../container/Container";
import { Headphones, Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // اعتبارسنجی نام کامل (فقط حروف و اعداد، طول بین 3 تا 20 کاراکتر)
  const namePattern = /^[A-Za-z0-9\s\u0600-\u06FF]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    if (name.length < 3 || name.length > 20) {
      setError("Full name must be between 3 and 20 characters.");
      return;
    }

    if (!namePattern.test(name)) {
      setError("Full name can only contain letters and numbers.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://67ff038e58f18d7209efcc3c.mockapi.io/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: name,
            Email: email,
            Subject: subject,
            Message: message,
          }),
        }
      );

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError("There was an error sending your message.");
        setTimeout(() => setError(""), 5000);
      }
    } catch (err) {
      console.log(err);
      setError("There was an error sending your message.");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div id="contact" className="w-full h-auto py-[100px] bg-[#FAFAFB]">
      <Container>
        <div className="flex flex-col gap-[40px]">
          <div>
            <h3 className="w-full sm:w-[80%] lg:w-[95%] mx-auto text-[42px] md:text-[52px] font-semibold">
              Contact Me
            </h3>
          </div>
          <div className="w-full sm:w-[80%] lg:w-[95%] mx-auto grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8 bg-white px-[30px] py-[50px] rounded-[10px]">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-6">
                  <div className="grid col-span-12 md:col-span-6">
                    <label
                      className="w-[120px] mb-[15px] cursor-pointer"
                      htmlFor="name"
                    >
                      FULL NAME
                    </label>
                    <input
                      className="w-full h-[60px] border-[1px] outline-none rounded-[15px] py-[15px] px-[15px]"
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid col-span-12 md:col-span-6">
                    <label
                      className="w-[135px] mb-[15px] cursor-pointer"
                      htmlFor="email"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      className="w-full h-[60px] border-[1px] outline-none rounded-[15px] py-[15px] px-[15px]"
                      id="email"
                      type="text"
                      placeholder="@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    className="w-[120px] mb-[15px] cursor-pointer"
                    htmlFor="subject"
                  >
                    SUBJECT
                  </label>
                  <input
                    className="w-full h-[60px] border-[1px] outline-none rounded-[15px] py-[15px] px-[15px]"
                    id="subject"
                    type="text"
                    placeholder="Your Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="w-[140px] mb-[15px] cursor-pointer"
                    htmlFor="message"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full h-[130px] border-[1px] px-[20px] py-[15px] rounded-[15px]"
                    placeholder="Write Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && (
                  <div className="text-green-500 mt-2">{success}</div>
                )}
                <button
                  className="flex justify-center items-center gap-2 w-[250px] h-[60px] bg-[#000] text-[#fff] cursor-pointer mt-6"
                  type="submit"
                >
                  <div className="flex gap-3">
                    <span>Send Me Message</span>
                    <span>
                      <Mail className="w-[18px]" />
                    </span>
                  </div>
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-14 col-span-12 lg:col-span-4 bg-white px-[20px] py-[50px] rounded-[10px]">
              <div className="flex lg:flex-col items-center lg:items-start gap-5">
                <span>
                  <MapPin size={30} />
                </span>
                <div>
                  <h3 className="text-[25px]">Location</h3>
                  <p className="text-[16px] lg:text-[14px] xl:text-[16px] text-[#00000077]">
                    Iran, Tehran
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col items-center lg:items-start gap-5">
                <span>
                  <Headphones size={30} />
                </span>
                <div>
                  <h3 className="text-[25px]">Contact Number</h3>
                  <p className="text-[16px] lg:text-[14px] xl:text-[16px] text-[#00000077]">
                    09394661505
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col items-center lg:items-start gap-5">
                <span>
                  <Mail size={30} />
                </span>
                <div>
                  <h3 className="text-[25px]">Email Us</h3>
                  <p className="text-[16px] lg:text-[14px] xl:text-[16px] text-[#00000077]">
                    alirezahasanpour19921371@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-[60px]">
            <div className="">
              <p className="text-center text-[22px] md:text-[28px] lg:text-[34px] text-[#000000a9]">Have a project in mind?</p>
              <h3 className="text-center text-[55px] md:text-[80px] lg:text-[120px] font-bold">LETS WORK</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
