import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto space-y-4 max-w-lg">
      <input className="w-full input" placeholder="Name" {...register('name', { required: true })} />
      {errors.name && <span className="text-red-500">Required</span>}
      <input className="w-full input" placeholder="Email" type="email" {...register('email', { required: true })} />
      {errors.email && <span className="text-red-500">Required</span>}
      <textarea className="w-full input" placeholder="Message" {...register('message', { required: true })} />
      {errors.message && <span className="text-red-500">Required</span>}
      <button type="submit" className="px-4 py-2 bg-neon text-black font-bold rounded shadow-neon">Send Message</button>
    </form>
  );
}
