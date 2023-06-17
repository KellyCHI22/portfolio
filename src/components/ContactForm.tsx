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
    <form onSubmit={handleSubmit}>
      <div className="relative dark:text-jet-500">
        <div className="relative">
          <label htmlFor="name" className="opacity-0">
            Name
          </label>
          <Icon
            icon="bi:person-circle"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-1 pl-10 pr-3 leading-10 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="opacity-0">
            Email
          </label>
          <Icon
            icon="bi:envelope"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-1 pl-10 pr-3 leading-10 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="opacity-0">
            Message
          </label>
          <Icon
            icon="bi:chat-dots"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message"
            rows={4}
            onChange={handleChange}
            className="w-full py-3 pl-10 pr-3 leading-6 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        {showSuccessMsg && (
          <div className="absolute inset-0 left-0 top-5 grid place-items-center bg-jet-500 text-pearl-bush-500 dark:bg-pearl-bush-500 dark:text-jet-500">
            <div>
              <Icon icon="bi:check-circle" className="mx-auto mb-3 text-5xl" />
              <p className="my-3 text-lg">Your message has been sent!</p>
              <button
                type="button"
                onClick={() => setShowSuccessMsg(false)}
                className="mx-auto flex items-center gap-2 border border-pearl-bush-500 p-2 px-3 hover:bg-jet-400 dark:border-jet-500 dark:hover:bg-pearl-bush-600"
              >
                Send Another Message
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="h-10 pt-3 text-center text-vermilion-500 lg:text-right">
        {formError && formError}
      </p>
      <div className="mt-5 flex justify-center gap-2 md:gap-5 lg:justify-end">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 border border-jet-500 p-2 px-3 hover:bg-jet-100 dark:border-pearl-bush-500 dark:hover:bg-jet-400"
        >
          <Icon icon="bi:arrow-counterclockwise" />
          Reset
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 bg-jet-500 p-2 px-3 text-pearl-bush-500 hover:bg-jet-400 dark:bg-pearl-bush-500 dark:text-jet-500 dark:hover:bg-pearl-bush-600"
        >
          <Icon icon="bi:send" />
          Send Message
        </button>
      </div>
    </form>
  );
}
