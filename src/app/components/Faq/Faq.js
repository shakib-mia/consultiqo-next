import React from "react";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  const faqs = [
    {
      title: "What industries do you specialize in?",
      content:
        "We work across a wide range of industries including technology, healthcare, finance, education, and real estate. Our consultants have hands-on experience in each sector, which helps us design tailored strategies. Whether you are a startup or an established corporation, we ensure the solutions align with your industry standards. This cross-industry expertise allows us to bring innovative perspectives to your business.",
    },
    {
      title: "How do you tailor solutions for each client?",
      content:
        "We begin by conducting a deep analysis of your business model, challenges, and target audience. After identifying your unique goals, our team designs customized strategies that fit your organization’s needs. We avoid generic solutions and focus on creating approaches that actually drive measurable impact. This ensures every client receives a service plan that feels personal and effective.",
    },
    {
      title: "What is the typical duration of a consulting project?",
      content:
        "The duration of a project depends on the complexity and scope of your needs. Smaller consulting tasks may be completed within a few weeks, while larger organizational transformations can take several months. We always provide a clear timeline at the start of the project so you know what to expect. Our goal is to balance speed with thoroughness, ensuring long-term results.",
    },
    {
      title: "Do you provide ongoing support after the consultation?",
      content:
        "Yes, we strongly believe that consulting doesn’t end once a strategy is delivered. We offer ongoing support to help you implement recommendations and adjust them as your business grows. Our team is available for regular check-ins, performance reviews, and guidance on new challenges. This continuous partnership ensures that you stay on the right track for sustainable growth.",
    },
    {
      title: "How do you measure the success of your consulting services?",
      content:
        "We rely on data-driven metrics such as ROI, improved efficiency, and customer satisfaction to measure success. At the beginning of the project, we set clear performance indicators so progress can be tracked transparently. Our team monitors these metrics throughout the engagement and provides detailed reports. This helps you see tangible improvements and understand the real value of our services.",
    },
    {
      title: "Can you help startups as well as established businesses?",
      content:
        "Absolutely, our services are designed for businesses of all sizes. For startups, we focus on building strong foundations, market entry strategies, and scalable growth plans. For established companies, we provide advanced optimization, restructuring, and innovation strategies. This flexibility allows us to support clients at every stage of their journey.",
    },
  ];
  return (
    <>
      <h1 className="text-center pb-8" data-animate="fade-in-left">
        Frequently Asked Questions
      </h1>

      <Accordion items={faqs} />
    </>
  );
};

export default Faq;
