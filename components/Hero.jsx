"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
      p1: `এই চলচ্চিত্র শুধু ছাত্র রাজনীতি নিয়ে নয়; এটি তৃতীয় বিশ্বের সমাজে উচ্চাকাঙ্ক্ষার বাজার সম্পর্কে। এমন এক পৃথিবীতে যেখানে তরুণদের স্বপ্ন দেখতে বলা হয়, সেখানে সেই স্বপ্নগুলোই প্রভাব ও ক্ষমতার বিনিময়ে বাজি রাখতে বাধ্য করা হয়। আমাদের চরিত্রগুলোর কোনো নাম নেই, কারণ এখানে পরিচয় শর্তসাপেক্ষ—মানুষকে চেনা হয় তার অবস্থান দিয়ে। ঘোড়াটি হয়ে ওঠে মর্যাদার এক ব্যঙ্গচিত্র। এটি এক ধরনের শর্টকাটের প্রতীক—একটি অদ্ভুত বস্তু, যা হঠাৎ করেই সামাজিক বৈধতা এনে দেয়। ছাত্ররা প্রথমে এটিকে কৌতুক হিসেবে দেখে, তারপর ক্ষমতার প্রতীক হিসেবে পূজা করতে শুরু করে।`,
      p2: `এই জগতের কাঁচা স্পন্দন অক্ষুণ্ণ রাখতে চলচ্চিত্রটি বাস্তব লোকেশনে গেরিলা ডকুমেন্টারি শৈলীতে ধারণ করা হয়েছে। ক্যামেরা এখানে নীরব সাক্ষীর মতো আচরণ করে—মঞ্চায়ন নয়, পর্যবেক্ষণ করে। কোনো কৃত্রিম আলো নেই, নেই সৌন্দর্যায়নের আয়োজন, নেই চরিত্রদের সত্য থেকে আড়াল করার জন্য মেকআপ। তাদের ক্লান্ত চোখ, ধুলোমাখা শার্ট, অস্থির চলাফেরা—এসব অভিনয়ের নয়; বরং সেই বাস্তবতার প্রতিচ্ছবি, যেখানে প্রতিদিন লক্ষ লক্ষ ছাত্র বেঁচে থাকে।`,
      p3: `এই পদ্ধতি দর্শককে ছাত্রাবাসের আর্দ্রতা, ক্যাম্পাস মিছিলে বিশৃঙ্খলা, আর চায়ের দোকানের আড়ালে লুকিয়ে থাকা রাজনীতি অনুভব করতে দেয়। চলচ্চিত্রটি তার চরিত্রদের বিচার করে না। এটি জিজ্ঞেস করে না কে নির্দোষ, কে দোষী; বরং প্রশ্ন তোলে—উচ্চাকাঙ্ক্ষা প্রথমেই নিষ্পাপতাকে কীভাবে রূপান্তরিত করে। এটি অনুসন্ধান করে তরুণরা স্বীকৃতির জন্য কতটা গভীর আকাঙ্ক্ষা পোষণ করে, কত সহজে সেই আকাঙ্ক্ষা বিনিময় হয়ে যায়, এবং কীভাবে ট্র্যাজেডি কেবল ক্ষমতার পথে আরেকটি সোপান হয়ে ওঠে।`,
      endingLine: "চলচ্চিত্রটি সমাপ্তি নয়, বরং একটি প্রশ্ন দিয়ে শেষ হয়:",
      finalQuestion:
        "গুরুত্বপূর্ণ অনুভব করতে আমরা নিজেদের কতটুকু ত্যাগ করতে প্রস্তুত?",
    },
  };

  const t = translations[language];

  useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden font-sans mb-24"
    >
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Beeteam Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-7xl w-full mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            {t.title1}{" "}
            <span className="text-[#FFD700]">
              {t.title2}
            </span>
          </h1>

          <p className="text-base text-white/80 max-w-4xl mx-auto leading-normal">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-[#FFD700] text-black text-xs font-bold tracking-wide rounded-lg flex items-center gap-2"
            >
              {t.contact}
              <ArrowDown size={14} strokeWidth={2} />
            </motion.button>

            <a href="/works" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ opacity: 0.7 }}
                className="flex items-center gap-2 text-white text-xs font-semibold tracking-wide"
              >
                {t.viewWork}
                <ExternalLink size={14} />
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-7xl w-full"
        >
          <p className="text-xl font-semibold uppercase tracking-[0.25em] text-[#FFD700] mb-3">
            {t.presents}
          </p>

          <h2 className="text-4xl font-semibold md:text-5xl mb-6 leading-tight">
            {t.directorTitle}
          </h2>

          <div className="space-y-4 text-xl leading-normal text-white/90 mb-24">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>

            <p className="text-[#FFD700] pt-3">
              {t.endingLine}
            </p>

            <p className="text-[#FFD700] text-lg">
              {t.finalQuestion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}