import { Form } from "../components/Form";

const Contact = () => {
  

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact me
        </h2>
      </div>
      <Form />
    </div>
  );
};

export default Contact;