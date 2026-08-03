import { motion } from "framer-motion";
import { FiHeart, FiShield, FiUsers, FiAward } from "react-icons/fi";

const values = [
  { icon: FiHeart, title: "Patient First", desc: "Every decision starts with what's best for the person in front of us." },
  { icon: FiShield, title: "Trusted Expertise", desc: "Fellowship-trained expertise built on years of focused orthopedic and sports medicine practice." },
  { icon: FiUsers, title: "Personalized Care", desc: "Every treatment plan is built around your goals, your body, and your recovery timeline." },
  { icon: FiAward, title: "Continuous Improvement", desc: "Modern technique and ongoing training to keep raising the bar." },
];

const milestones = [
  { year: "2021", text: "Medical Doctor at King George's Medical University." },
  { year: "2021", text: "Sports Injury Expert at King George's Medical University." },
  { year: "2021", text: "Assistant Professor at King George's Medical University." },
];

import media from "../asset/Media.jpg";
import media1 from "../asset/Media-1.jpg";
import media2 from "../asset/Media-2.jpg";
import media3 from "../asset/Media-3.jpg";
import media4 from "../asset/Media-4.jpg";
import media5 from "../asset/Media-5.jpg";


const gallery = [
  { id: 1, img: media },
  { id: 2, img: media1 },
  { id: 3, img: media2 },
  { id: 4, img: media3 },
  { id: 5, img: media4 },
  { id: 6, img: media5 },
];

const About = () => (
  <div>
    <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-sm font-bold uppercase tracking-wide text-primary">About Us</span>
        <h1 className="mt-2 text-4xl font-extrabold lg:text-5xl">
          Care that grows with <span className="text-gradient">you</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-dark/60 dark:text-ink-light/60">
          I am working as a Sports Medicine Specialist at King George's Medical University, Lucknow. I completed my MS (Orthopaedic Surgery) from the prestigious King George's Medical University, Lucknow. Thereafter, I did FNB (the only NMC/MCI recognised fellowship in India) in Sports Medicine from the Sports Injury Centre, Safdarjung Hospital, New Delhi, after securing All India Rank 2. Then I did my Shoulder Fellowship under Prof. J. C. Yoo at Samsung Medical Centre, Seoul, South Korea. My aim is to provide the most comprehensive and quality care to my patients in Uttar Pradesh through the efficient and effective administration of medical equipment with safety. With the help of modern teaching tools and training activities, I would like to make a difference in the lives of sportspersons by preventing injuries, prolonging their careers, and performing surgical intervention whenever required.
        </p>
      </motion.div>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card text-center"
          >
            <span className="glass-icon mx-auto mb-3 h-12 w-12 rounded-2xl">
              <v.icon size={22} />
            </span>
            <h3 className="font-display font-bold">{v.title}</h3>
            <p className="mt-1 text-sm text-ink-dark/60 dark:text-ink-light/60">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-primary">Our Journey</span>
          <h2 className="mt-2 text-3xl font-extrabold">Training built for sports medicine</h2>
        </div>
        <div className="space-y-6 border-l-2 border-primary/20 pl-6">
          {milestones.map((m, i) => (
            <motion.div
              key={`${m.year}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span className="glass-icon absolute -left-[39px] h-6 w-6 rounded-full !text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <p className="font-display text-lg font-bold text-gradient">{m.year}</p>
              <p className="text-sm text-ink-dark/70 dark:text-ink-light/70">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-primary">In Practice</span>
        <h2 className="mt-2 text-3xl font-extrabold">Gallery</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover overflow-hidden p-2"
          >
            <img
              src={v.img}
              alt={`Dr. Abhishek Saini in clinical practice, photo ${v.id}`}
              className="h-64 w-full rounded-xl object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
