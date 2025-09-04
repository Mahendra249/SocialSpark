import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Influencer",
    company: "@sarahstyles",
    followers: "850K",
    avatar: "SJ",
    rating: 5,
    feedback:
      "SocialSpark completely transformed my career. I went from struggling to find brand partnerships to having a waiting list of collaborations.",
    campaign: "Collaborated with 25+ premium fashion brands",
    earnings: "$180K in 6 months",
    type: "influencer",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "CMO",
    company: "TechFlow Solutions",
    avatar: "MC",
    rating: 5,
    feedback:
      "As a B2B tech company, finding the right creators was always challenging. SocialSpark's platform helped us connect with the right tech reviewers.",
    campaign: "15 tech influencers campaign",
    results: "300% ROI, 5K+ leads",
    type: "brand",
  },
  {
    id: 3,
    name: "Isabella Rodriguez",
    role: "Food Content Creator",
    company: "@bellacooks",
    followers: "420K",
    avatar: "IR",
    rating: 5,
    feedback:
      "The quality of brands on SocialSpark is unmatched. I've worked with Michelin-starred restaurants, and kitchen appliance companies.",
    campaign: "Featured in 40+ food campaigns",
    earnings: "$95K revenue growth",
    type: "influencer",
  },
];

const TestimonialCard = ({ testimonial, index, isVisible }) => {
  return (
    <div
      className={`testimonial-card ${isVisible ? "visible" : ""}`}
      data-index={index}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="testimonial-inner">
        <div className="badge">
          {testimonial.type === "influencer" ? "✨ Creator" : "🏢 Brand"}
        </div>

        <div className="header-testimonial">
          <div className="avatar">{testimonial.avatar}</div>
          <div>
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="company">{testimonial.company}</p>
            {testimonial.followers && (
              <p className="followers">{testimonial.followers} followers</p>
            )}
          </div>
        </div>

       

        <blockquote>"{testimonial.feedback}"</blockquote>

        <div className="results">
          <p>📈 {testimonial.campaign}</p>
          <p>💰 {testimonial.earnings || testimonial.results}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="feedback-section" ref={sectionRef}>
      <div className="feedback-header">
        <h2>
          What Our <span className="highlight">Clients</span> Say
        </h2>
        <p>
          Discover how SocialSpark transformed digital marketing success stories
          across industries.
        </p>
      </div>

      <div className="feedback-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            isVisible={visibleCards.includes(index.toString())}
          />
        ))}
      </div>

      <div className="feedback-cta">
        <p>Ready to join thousands of successful creators and brands?</p>
        <button>Start Your Success Story</button>
      </div>
    </section>
  );
};

export default Testimonial;
