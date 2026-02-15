"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BeeTeamYellowStackedHero() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const translations = {
    en: {
      title1: "BEETEAM",
      title2: "STUDIOS",
      subtitle:
        "Engineering cinematic authority for high-performance global brands.",
      contact: "Contact",
      viewWork: "View Work",
      presents: "Bee Team Presents",
      directorTitle: "Director’s Vision",
      p1: `This film is not about student politics alone; it is about the marketplace of ambition in a third-world society. In a world where young people are asked to dream, they are also forced to gamble those dreams in exchange for influence and power. Our characters have no names because identity here is conditional, one is known by his position only. The horse becomes a satire of status. It symbolizes a shortcut, an absurd object that suddenly grants social legitimacy. Students laugh at it as a joke, then worship it as power.`,
      p2: `To preserve the raw pulse of this world, the film is shot in real locations using a guerrilla documentary style. The camera behaves like a silent witness: observing, not staging. There is no artificial lighting, no beautification, no makeup to shield the characters from truth. Their tired eyes, dusty shirts, and restless movements belong not to actors but to the reality that millions of students live every day.`,
      p3: `This approach allows the viewer to feel the humidity of student hostels, the chaos of campus rallies, the politics hidden in tea stalls. The film observes its characters without judgment. It doesn’t ask who is innocent or guilty, it asks what ambition does to innocence in the first place. It explores how deeply young people crave recognition, how cheaply it can be traded, and how tragedy becomes just another stepping stone to power.`,
      endingLine: "The film ends not with closure, but with a question:",
      finalQuestion:
        "How much of ourselves are we willing to sacrifice to feel important?",
    },
    bn: {
      title1: "বিটিম",
      title2: "স্টুডিওস",
      subtitle:
        "উচ্চ-ক্ষমতাসম্পন্ন বৈশ্বিক ব্র্যান্ডের জন্য সিনেমাটিক কর্তৃত্ব নির্মাণ।",
      contact: "যোগাযোগ",
      viewWork: "কাজ দেখুন",
      presents: "বি টিম উপস্থাপন করছে",
      directorTitle: "পরিচালকের দৃষ্টিভঙ্গি",
      p1: `এই চলচ্চিত্র শুধু ছাত্র রাজনীতি নিয়ে নয়; এটি তৃতীয় বিশ্বের সমাজে উচ্চাকাঙ্ক্ষার বাজার সম্পর্কে। যেখানে তরুণদের স্বপ্ন দেখতে বলা হয়, সেখানে সেই স্বপ্নই প্রভাব ও ক্ষমতার বিনিময়ে বাজি রাখতে বাধ্য করা হয়। আমাদের চরিত্রদের কোনো নাম নেই, কারণ এখানে পরিচয় শর্তসাপেক্ষ; একজনকে তার অবস্থান দিয়েই চেনা হয়। ঘোড়াটি হয়ে ওঠে মর্যাদার ব্যঙ্গচিত্র। এটি একটি শর্টকাটের প্রতীক — এক অদ্ভুত বস্তু যা হঠাৎ সামাজিক বৈধতা এনে দেয়। প্রথমে ছাত্ররা এটিকে নিয়ে হাসে, পরে সেটিকেই ক্ষমতা হিসেবে পূজা করে।`,
      p2: `এই জগতের কাঁচা স্পন্দন ধরে রাখতে চলচ্চিত্রটি বাস্তব লোকেশনে গেরিলা ডকুমেন্টারি শৈলীতে ধারণ করা হয়েছে। ক্যামেরা একজন নীরব সাক্ষীর মতো আচরণ করে — মঞ্চস্থ করে না, শুধু পর্যবেক্ষণ করে। এখানে কোনো কৃত্রিম আলো নেই, নেই সৌন্দর্য বাড়ানোর প্রচেষ্টা বা মেকআপের আড়াল। ক্লান্ত চোখ, ধুলো মাখা জামা, অস্থির চলাফেরা — এগুলো অভিনয় নয়, প্রতিদিন লক্ষ লক্ষ শিক্ষার্থীর বাস্তবতা।`,
      p3: `এই পদ্ধতি দর্শককে ছাত্রাবাসের আর্দ্রতা, ক্যাম্পাস মিছিলের বিশৃঙ্খলা, চায়ের দোকানে লুকিয়ে থাকা রাজনীতির অনুভূতি দেয়। চলচ্চিত্রটি তার চরিত্রদের বিচার করে না। এটি জিজ্ঞাসা করে না কে নির্দোষ বা দোষী; বরং প্রশ্ন তোলে উচ্চাকাঙ্ক্ষা কিভাবে নিষ্পাপতাকে পরিবর্তন করে। এটি অনুসন্ধান করে তরুণরা স্বীকৃতি কত গভীরভাবে চায়, কত সহজে তা বিনিময় করা যায়, এবং কিভাবে ট্র্যাজেডি ক্ষমতার পথে আরেকটি সিঁড়ি হয়ে ওঠে।`,
      endingLine: "চলচ্চিত্রটি সমাপ্তি নয়, বরং একটি প্রশ্ন দিয়ে শেষ হয়:",
      finalQuestion:
        "গুরুত্বপূর্ণ অনুভব করতে আমরা নিজেদের কতটুকু ত্যাগ করতে প্রস্তুত?",
    },
  };

  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-[#fafafa] overflow-hidden font-sans"
    >
      <div className="relative z-10 flex flex-col items-center pt-20 px-6">

        {/* HEADER */}
        <motion.div className="text-center max-w-3xl mb-14">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.05] mb-4">
            {t.title1}{" "}
            <span className="text-[#FFD700] relative">
              {t.title2}
            </span>
          </h1>

          <p className="text-sm md:text-base text-black/60 font-medium max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <motion.button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-6 py-3 bg-[#FFD700] text-black text-xs font-bold tracking-widest rounded-lg shadow-md hover:shadow-[0_8px_30px_-8px_rgba(255,215,0,0.6)] transition-all duration-300 flex items-center gap-2"
            >
              {t.contact}
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <ArrowDown size={14} strokeWidth={3} />
              </motion.span>
            </motion.button>

            <a href="/works" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ opacity: 0.7 }}
                className="flex items-center gap-2 text-black text-xs font-semibold tracking-wide transition-all duration-300"
              >
                {t.viewWork}
                <ExternalLink size={14} />
              </motion.button>
            </a>

          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <div className="relative w-full max-w-6xl mx-auto scale-[0.8] origin-top">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/hero.jpg"
              alt="Beeteam Featured Visual"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 px-8 md:px-20 py-16 md:py-24 text-white w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 mb-5">
                {t.presents}
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
                {t.directorTitle}
              </h2>

              <div className="space-y-6 text-sm md:text-base leading-relaxed">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>

                <p className="text-yellow-400 font-semibold pt-4">
                  {t.endingLine}
                </p>

                <p className="text-yellow-400 font-semibold text-lg">
                  {t.finalQuestion}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
