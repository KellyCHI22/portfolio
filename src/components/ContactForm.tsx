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
  const pathname = window.location.pathname;
  const translation = {
    '/': {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      successMessage: 'Your message has been sent!',
      anotherMessage: 'Send Another Message',
      reset: 'Reset',
      submit: 'Send Message',
      errorName: '⚠️ Name is required',
      errorEmail: '⚠️ Email is required',
      errorMessage: '⚠️ Message is required',
    },
    '/zh/': {
      name: '名稱',
      email: '電子郵件地址',
      message: '內容',
      successMessage: '您的訊息已成功寄出!',
      anotherMessage: '發送其他訊息',
      reset: '重設',
      submit: '確認送出',
      errorName: '⚠️ 名稱不可空白',
      errorEmail: '⚠️ 電子郵件地址不可空白',
      errorMessage: '⚠️ 內容不可空白',
    },
    '/fr/': {
      name: 'Nom et prénom',
      email: 'Adresse email',
      message: 'Votre message',
      successMessage: 'Votre message a été envoyé !',
      anotherMessage: 'Envoyer un autre message',
      reset: 'Annuler',
      submit: 'Envoyer',
      errorName: '⚠️ Nom est obligatoire',
      errorEmail: '⚠️ Email est obligatoire',
      errorMessage: '⚠️ Message est obligatoire',
    },
  };

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
      return setFormError(translation[pathname].errorName);
    }
    if (formData.email.trim().length === 0) {
      return setFormError(translation[pathname].errorEmail);
    }
    if (formData.message.trim().length === 0) {
      return setFormError(translation[pathname].errorMessage);
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
            {translation[pathname].name}
          </label>
          <Icon
            aria-label="person icon"
            icon="bi:person-circle"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder={translation[pathname].name}
            onChange={handleChange}
            className="w-full p-1 pl-10 pr-3 leading-10 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="opacity-0">
            {translation[pathname].email}
          </label>
          <Icon
            aria-label="email icon"
            icon="bi:envelope"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder={translation[pathname].email}
            onChange={handleChange}
            className="w-full p-1 pl-10 pr-3 leading-10 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="opacity-0">
            {translation[pathname].message}
          </label>
          <Icon
            aria-label="message icon"
            icon="bi:chat-dots"
            className="absolute left-3 top-[2.35rem] text-xl text-vermilion-400 dark:text-jet-400"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder={translation[pathname].message}
            rows={4}
            onChange={handleChange}
            className="w-full py-3 pl-10 pr-3 leading-6 placeholder:text-vermilion-500 focus:outline-none focus:ring-2 focus:ring-vermilion-400 dark:placeholder:text-jet-400
              dark:focus:ring-asparagus-400"
          />
        </div>
        {showSuccessMsg && (
          <div className="absolute inset-0 left-0 top-5 grid place-items-center bg-jet-500 text-pearl-bush-500 dark:bg-pearl-bush-500 dark:text-jet-500">
            <div>
              <Icon
                aria-label="success check icon"
                icon="bi:check-circle"
                className="mx-auto mb-3 text-5xl"
              />
              <p className="my-3 text-lg">
                {translation[pathname].successMessage}
              </p>
              <button
                type="button"
                aria-label="send another message"
                onClick={() => setShowSuccessMsg(false)}
                className="mx-auto flex items-center gap-2 border border-pearl-bush-500 p-2 px-3 hover:bg-jet-400 dark:border-jet-500 dark:hover:bg-pearl-bush-600"
              >
                {translation[pathname].anotherMessage}
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
          aria-label="reset form"
          onClick={handleReset}
          className="flex items-center gap-2 border border-jet-500 p-2 px-3 hover:bg-jet-100 dark:border-pearl-bush-500 dark:hover:bg-jet-400"
        >
          <Icon aria-label="reset icon" icon="bi:arrow-counterclockwise" />
          {translation[pathname].reset}
        </button>
        <button
          type="submit"
          aria-label="submit form"
          className="flex items-center gap-2 bg-jet-500 p-2 px-3 text-pearl-bush-500 hover:bg-jet-400 dark:bg-pearl-bush-500 dark:text-jet-500 dark:hover:bg-pearl-bush-600"
        >
          <Icon aria-label="send message icon" icon="bi:send" />
          {translation[pathname].submit}
        </button>
      </div>
    </form>
  );
}
