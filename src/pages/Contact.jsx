import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiMapPin, FiPhoneCall, FiMail, FiClock } from "react-icons/fi";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // No backend endpoint wired up for this yet: this is a front-end-only
  // placeholder so the form is ready to connect to /api/contact later.
  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Message received! Our team will get back to you shortly.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Contact Us</span>
        <h1 className="display-h1 mt-2">We're here to <span className="text-gradient">help</span></h1>
        <p className="display-lead mt-4 text-ink-dark/60 dark:text-ink-light/60">
          Questions about appointments, billing, or a specific department? Reach out and our care coordination
          team will point you in the right direction.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 lg:col-span-2"
        >
          <div className="card flex items-start gap-3">
            <span className="glass-icon h-10 w-10 shrink-0 rounded-xl">
              <FiMapPin size={16} />
            </span>
            <div>
              <p className="font-semibold">Main Branch</p>
              <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">
                Department Of Sports Medicine, King George's Medical College, Shah Mina Road, Chowk, Lucknow-226003, Uttar Pradesh
              </p>
            </div>
          </div>
          <div className="card flex items-start gap-3">
            <span className="glass-icon h-10 w-10 shrink-0 rounded-xl">
              <FiPhoneCall size={16} />
            </span>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">+91 8175081034</p>
            </div>
          </div>
          <div className="card flex items-start gap-3">
            <span className="glass-icon h-10 w-10 shrink-0 rounded-xl">
              <FiMail size={16} />
            </span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">care@drabhisheksaini.example</p>
            </div>
          </div>
          <div className="card flex items-start gap-3">
            <span className="glass-icon h-10 w-10 shrink-0 rounded-xl">
              <FiClock size={16} />
            </span>
            <div>
              <p className="font-semibold">OPD Hours</p>
              <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">Mon–Sat, 9:00 AM – 8:00 PM</p>
              <p className="text-sm font-semibold text-danger">Emergency: Open 24/7</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="card space-y-4 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">Full Name</label>
              <input className="input-field" placeholder="Your name" {...register("name", { required: true })} />
              {errors.name && <p className="mt-1 text-xs text-danger">Name is required</p>}
            </div>
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                className="input-field"
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="mt-1 text-xs text-danger">Email is required</p>}
            </div>
          </div>

          <div>
            <label className="label">Subject</label>
            <input className="input-field" placeholder="How can we help?" {...register("subject", { required: true })} />
            {errors.subject && <p className="mt-1 text-xs text-danger">Subject is required</p>}
          </div>

          <div>
            <label className="label">Message</label>
            <textarea
              rows={5}
              className="input-field resize-none"
              placeholder="Tell us a bit more…"
              {...register("message", { required: true })}
            />
            {errors.message && <p className="mt-1 text-xs text-danger">Message is required</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
