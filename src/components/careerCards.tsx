"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Container from "./container";
import { careerData } from "@/data/careerData";

const CareerCards = () => {
  return (
    <section className="flex justify-center mt-20">
      <Container>
        <motion.h2
          className="font-bold text-center text-3xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Career Timeline at Buzzvel
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {careerData.map((item, index) => (
            <motion.div
              key={index}
              className="max-w-sm w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">
                    {item.year}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-700 mb-4">
                    {item.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CareerCards;
