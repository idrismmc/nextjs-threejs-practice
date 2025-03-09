import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { team } from "@/lib/data";
import React from "react";
import Skater from "@/sections/team/skater";
import SlideIn from "@/components/slide-in";

const Team = () => {
  return (
    <Bounded className="bg-texture bg-brand-navy">
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          The Team
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {team.map((member, index) => (
          <React.Fragment key={index}>
            <SlideIn>
              <Skater
                imageForeground={member.imageForeground}
                imageBackground={member.imageBackground}
                firstName={member.firstName}
                lastName={member.lastName}
                index={index}
                href={member.href}
              />
            </SlideIn>
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default Team;
