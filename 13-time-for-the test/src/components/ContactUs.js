const ContactUs = () => {
  return (
    <div>
      <h1 className=" text-center font-bold text-3xl p-4 m-4">Contact us</h1>
      <form className="flex flex-col gap-6 px-8 w-6/12 mx-auto">
        <input
          type="text"
          className="border-2 border-black px-4 py-1"
          placeholder="name"
        />
        <input
          type="text"
          className="border-2 border-black px-4 py-1"
          placeholder="message"
        />
        <button className="bg-black text-white font-semibold px-4 py-1 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
