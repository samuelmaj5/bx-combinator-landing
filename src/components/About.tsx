"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedBulletPoint from "./AnimatedBulletPoint";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const features = ["Meet like-minded students every two weeks", "Events with founders, VCs, and mentors", "Build projects from ideas to startups", "Get feedback and share your goals", "Network with ambitious peers", "Change the French mindset toward innovation"];
  return <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div ref={ref} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a small cohort of motivated students to create our first batch.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => <AnimatedBulletPoint key={index} delay={index * 0.1}>
                {feature}
              </AnimatedBulletPoint>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-center bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">We expose students to startup ambitions, helping them maximize their impact and shift mindsets toward building startups and driving innovation.</p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;