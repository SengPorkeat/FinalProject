import React from "react";
import { useLocation } from "react-router-dom";
import SportClubDetailCard from "../../components/cards/SportClubDeatailCard";

const SportClubDetail = () => {
  const location = useLocation();
  const sportClub = location.state;

  if (!sportClub) {
    return <div>No details available.</div>;
  }

  return (
    <section className="flex justify-center items-center my-24">
      <SportClubDetailCard
        image={sportClub.image}
        sport_name={sportClub.sport_name}
        description={sportClub.description}
        price={sportClub.price}
        location={sportClub.location}
        first_phone={sportClub.contact_info?.first_phone}
        second_phone={sportClub.contact_info?.second_phone}
        facebook={sportClub.contact_info?.facebook}
        telegram={sportClub.contact_info?.telegram}
        website={sportClub.contact_info?.website}
      />
    </section>
  );
};

export default SportClubDetail;
