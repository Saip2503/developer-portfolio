// @flow strict
import { achievementsData } from "@/utils/data/achievements";
import Image from "next/image";
import { BiCertification } from "react-icons/bi";
import GlowCard from "../../helper/glow-card";

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements & Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col gap-6">
          {
            achievementsData.map(achievement => (
              <GlowCard key={achievement.id} identifier={`achievement-${achievement.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-amber-300 transition-all duration-300 hover:scale-125">
                      <BiCertification size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium">
                        {achievement.title}
                      </p>
                      <p className="text-sm sm:text-base text-[#16f2b3]">{achievement.issuer}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Achievements;
