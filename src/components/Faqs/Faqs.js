import React from "react";
import "./Faqs.css";
export default function faqs() {
  return (
    <>
      <div className="faqs container">
        <h1>FAQs</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {[
            {
              id: "One",
              title: "What services do you offer?",
              content:
                "We offer a variety of services including software development, web design, graphic design, and digital marketing. We cater to both startups and established businesses, helping them grow through tailored solutions.",
            },
            {
              id: "Two",
              title: "How can I get started with your services?",
              content:
                "Getting started is simple! Just reach out to us through our contact form or give us a call. We’ll schedule an initial consultation to understand your needs, goals, and how we can help you.",
            },
            {
              id: "Three",
              title: "Do you offer custom solutions for each client?",
              content:
                "Yes, we believe in personalized solutions. We work closely with each client to understand their unique requirements and deliver tailored services that align with their business objectives.",
            },
            {
              id: "Four",
              title: "How long does it take to complete a project?",
              content:
                "The timeline depends on the scope and complexity of the project. We provide an estimated timeline during our initial consultation and keep you updated throughout the process to ensure the project is completed on time.",
            },
            {
              id: "Five",
              title: "What is the cost of your services?",
              content:
                "Our pricing is competitive and varies based on the services you need. We offer custom quotes based on the scope of the project. Contact us to get a personalized estimate.",
            },
            {
              id: "Six",
              title:
                "Do you provide ongoing support after the project is completed?",
              content:
                "Yes, we offer ongoing support and maintenance services. Whether it’s updates, troubleshooting, or new features, we’re here to help you maintain and improve your project long after the launch.",
            },
            {
              id: "Seven",
              title: "Can I update my website or software after it’s built?",
              content:
                "Absolutely! We offer flexible options for updating and maintaining your website or software. You can either make updates yourself (if you’re comfortable) or contact us for assistance.",
            },
            {
              id: "Eight",
              title:
                "What is digital marketing, and how can it help my business?",
              content:
                "Digital marketing encompasses a range of online strategies to promote your business, including SEO, social media marketing, email marketing, and more. It helps you reach your target audience, build brand awareness, and drive more sales or leads.",
            },
            {
              id: "Nine",
              title: "Do you offer any guarantees on your work?",
              content:
                "We take pride in delivering high-quality work and client satisfaction is our top priority. While results can vary, we guarantee that we will work with you until you are happy with the final product.",
            },
            {
              id: "Ten",
              title: "How can I contact you for support or questions?",
              content:
                "You can reach us via email, phone, or our contact form on the website. We’re happy to assist you with any questions or concerns you may have.",
            },
          ].map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading${faq.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${faq.id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${faq.id}`}
                >
                  {faq.title}
                </button>
              </h2>
              <div
                id={`flush-collapse${faq.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${faq.id}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{faq.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
