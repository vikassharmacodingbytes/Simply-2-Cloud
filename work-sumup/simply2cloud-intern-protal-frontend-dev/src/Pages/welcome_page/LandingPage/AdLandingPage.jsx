import React from "react";
import BestPart from "./Sections/BestPart/BestPart";
import BusinessSolution from "./Sections/BusinessSolution/BusinessSolution";
import Category from "./Sections/Category/Category";
import Guide from "./Sections/Guide/Guide";
import Header, { CompanyGrid } from "./Sections/Header/Header";
import LastBanner from "./Sections/LastBanner/LastBanner";
import LogoMaker from "./Sections/LogoMaker/LogoMaker";
import PopularServices from "./Sections/PopularServices/PopularServices";
import ShowWork from "./Sections/ShowWork/ShowWork";
import Testimonial from "./Sections/Testimonial/Testimonial";

const AdLandingPage = () => {
  return (
    <div className="App">
      {/* HEADER-START */}
      <Header />
      {/* HEADER-END */}

      <CompanyGrid />

      {/* POPULAR-SERVICES-START */}
      <PopularServices />
      {/* POPULAR-SERVICES-END */}

      {/* BEST-PART-START */}
      <BestPart />
      {/* BEST-PART-END */}

      {/* CATEGORY-START */}
      <Category />
      {/* CTAEGORY-END */}

      {/* BUSINESS-SOLUTION-START */}
      <BusinessSolution />
      {/* BUSINESS-SOLUTION-END */}

      {/* TESTIMONIALS-START */}
      <Testimonial />
      {/* TESTIMONIALS-END */}

      {/* LOGO-MAKER-START */}
      {/* <LogoMaker /> */}
      {/* LOGO-MAKER-END */}

      {/* SHOW-WORK-START */}
      <ShowWork />
      {/* SHOW-WORK-ENDS */}

      {/* GUIDE-START */}
      <Guide />
      {/* GUIDE-END */}

      {/* LAST-BANNER-START */}
      <LastBanner />
      {/* LAST-BANNER-END */}
    </div>
  );
};

export default AdLandingPage;
