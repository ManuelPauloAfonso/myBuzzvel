"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./container";
import { dataFaQ } from "@/data/dataFaQ";

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id: any) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="flex justify-center mt-20">
      <Container>
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Buzzvel?
        </motion.h2>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-2xl text-[#A8A8A8]">
            Curious about what sets us apart? Discover the answers to our most
            frequently asked questions below.
          </p>
          {dataFaQ.accordionItems.map((item: any) => (
            <div
              key={item.id}
              className="border border-[#FF9142] my-2 rounded-lg overflow-hidden mt-5 bg-white"
            >
              <div
                className="flex items-center justify-between p-8 cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <motion.div
                  animate={{ rotate: expanded === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#FF9142]"
                >
                  ⌄
                </motion.div>
              </div>
              {expanded === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-white"
                >
                  <p>{item.content}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
