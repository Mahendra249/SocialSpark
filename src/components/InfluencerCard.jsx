import React from "react";

const influencers = [
  {
    name: "Sophia",
    niche: "Fashion & Lifestyle",
    followers: "500K",
    engagement: "7.5%",
    avatar: "SG",
    verified: true,
  },
  {
    name: "David",
    niche: "Tech & Gaming",
    followers: "350K",
    engagement: "6.2%",
    avatar: "DM",
    verified: true,
  },
  {
    name: "Aisha",
    niche: "Travel & Food",
    followers: "420K",
    engagement: "8.1%",
    avatar: "AK",
    verified: false,
  },
];

const InfluencerCard = () => (
  <section className="influencer-section">
    <div className="container">
      <div className="header">
        <h2 className="title">Top Influencers</h2>
        <p className="subtitle">
          Discover the most engaging creators in their respective niches
        </p>
      </div>

      <div className="card-grid">
        {influencers.map((inf, i) => (
          <div key={i} className="card">
            <div className="avatar">
              <span>{inf.avatar}</span>
              {inf.verified && <span className="verified">✔</span>}
            </div>

            <h3 className="name">{inf.name}</h3>
            <p className="niche">{inf.niche}</p>

            <div className="stats">
              <div className="stat-box">
                <span className="label">Followers</span>
                <span className="value">{inf.followers}</span>
              </div>
              <div className="stat-box">
                <span className="label">Engagement</span>
                <span className="value">{inf.engagement}</span>
              </div>
            </div>

            <button className="profile-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfluencerCard;
