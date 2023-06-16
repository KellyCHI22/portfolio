import { useState } from 'react';
import { Icon } from '@iconify/react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormError('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formData.name.trim().length === 0) {
      return setFormError('⚠️ Name is required');
    }
    if (formData.email.trim().length === 0) {
      return setFormError('⚠️ Email is required');
    }
    if (formData.message.trim().length === 0) {
      return setFormError('⚠️ Message is required');
    } else {
      setFormError('');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-form', ...formData }),
      })
        .then(() => setShowSuccessMsg(true))
        .then(() => setFormData({ name: '', email: '', message: '' }))
        .catch((error) => alert(error));
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative dark:text-jet-500">
          <div className="relative">
            <label htmlFor="name" className="opacity-0">
              Name
            </label>
            <Icon
              icon="bi:person-circle"
              className="text-xl absolute top-[2.35rem] text-vermilion-400 left-3 dark:text-jet-400"
            />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full leading-10 p-1 pr-3 pl-10 focus:ring-vermilion-400 focus:ring-2 focus:outline-none placeholder:text-vermilion-500 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="opacity-0">
              Email
            </label>
            <Icon
              icon="bi:envelope"
              className="text-xl absolute top-[2.35rem] text-vermilion-400 left-3 dark:text-jet-400"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full leading-10 p-1 pr-3 pl-10 focus:ring-vermilion-400 focus:ring-2 focus:outline-none placeholder:text-vermilion-500 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="opacity-0">
              Message
            </label>
            <Icon
              icon="bi:chat-dots"
              className="text-xl absolute top-[2.35rem] text-vermilion-400 left-3 dark:text-jet-400"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              placeholder="Message"
              rows={4}
              onChange={handleChange}
              className="w-full leading-6 py-3 pr-3 pl-10 focus:ring-vermilion-400 focus:ring-2 focus:outline-none placeholder:text-vermilion-500 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
            />
          </div>
          {showSuccessMsg && (
            <div className="absolute inset-0 top-5 left-0 bg-jet-500 text-pearl-bush-500 grid place-items-center dark:bg-pearl-bush-500 dark:text-jet-500">
              <div>
                <Icon
                  icon="bi:check-circle"
                  className="text-5xl mx-auto mb-3"
                />
                <p className="text-lg my-3">Your message has been sent!</p>
                <button
                  type="button"
                  onClick={() => setShowSuccessMsg(false)}
                  className="mx-auto border-pearl-bush-500 border flex items-center p-2 px-3 gap-2 dark:border-jet-500 dark:hover:bg-pearl-bush-600 hover:bg-jet-400"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="h-10 text-center pt-3 text-vermilion-500 ">
          {formError && formError}
        </p>
        <div className="flex gap-2 mt-5 justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="border-jet-500 border flex items-center p-2 px-3 gap-2 dark:border-pearl-bush-500 dark:hover:bg-jet-400 hover:bg-jet-100"
          >
            <Icon icon="bi:arrow-counterclockwise" />
            Reset
          </button>
          <button
            type="submit"
            className="bg-jet-500 text-pearl-bush-500 flex items-center p-2 px-3 gap-2 hover:bg-jet-400 dark:bg-pearl-bush-500 dark:text-jet-500 dark:hover:bg-pearl-bush-600"
          >
            <Icon icon="bi:send" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
