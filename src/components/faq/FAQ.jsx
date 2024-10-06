import FaqBottomRightDots from "../../assets/svg/faq/FaqBottomRightDots";
import FaqTopLeftDots from "../../assets/svg/faq/FaqTopLeftDots";
import FaqCard from "./FaqCard";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How do I determine my budget for buying a home?",
      answer:
        "Your budget depends on various factors including your income, debts, and savings. We recommend speaking with a financial advisor or mortgage lender to get a clear picture of what you can afford.",
    },
    {
      id: 2,
      question:
        "What's the difference between a fixed-rate and adjustable-rate mortgage?",
      answer:
        "A fixed-rate mortgage maintains the same interest rate throughout the loan term, providing consistent monthly payments. An adjustable-rate mortgage (ARM) has an interest rate that can change periodically, potentially resulting in lower initial payments but with the risk of increases later.",
    },
    {
      id: 3,
      question: "How long does the home buying process typically take?",
      answer:
        "The home buying process can vary greatly depending on individual circumstances and local market conditions. On average, it takes about 30-60 days from offer acceptance to closing, but it can be shorter or longer based on factors like financing, inspections, and negotiations.",
    },
    {
      id: 4,
      question: "What's the importance of a home inspection?",
      answer:
        "A home inspection is crucial as it helps identify any potential issues with the property before you buy. It can reveal hidden problems that might be costly to repair, giving you the opportunity to negotiate repairs or pricing with the seller before finalizing the purchase.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FaqCard key={faqs[0].id} faq={faqs[0]} />
            <FaqCard key={faqs[1].id} faq={faqs[1]} />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FaqCard key={faqs[2].id} faq={faqs[2]} />
            <FaqCard key={faqs[3].id} faq={faqs[3]} />
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FaqTopLeftDots />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FaqBottomRightDots />
        </span>
      </div>
    </section>
  );
}
