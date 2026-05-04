// @flow strict
import { extraCurricularData } from "@/utils/data/extra-curricular";
import Image from "next/image";
import { MdEmojiEvents } from "react-icons/md";
import GlowCard from "../../helper/glow-card";

function ExtraCurricular() {
  return (
    <div id="extra-curricular" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Extra-Curricular & Awards
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col gap-6">
          {
            extraCurricularData.map(activity => (
              <GlowCard key={activity.id} identifier={`extra-curricular-${activity.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-yellow-400 transition-all duration-300 hover:scale-125">
                      <MdEmojiEvents size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium">
                        {activity.title}
                      </p>
                      <p className="text-sm sm:text-base text-[#16f2b3]">{activity.description}</p>
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

export default ExtraCurricular;
