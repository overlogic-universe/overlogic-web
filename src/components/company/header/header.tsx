import { NextPage } from "next";
import { AnimatedGradientText } from "../../ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuroraText } from "../../ui/aurora-text";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import AuroraHeaderTitle from "./aurora-header-title";
import Container from "@/components/common/container";
import SectionTitle from "@/components/common/text/section-title";
import SectionDesc from "@/components/common/text/section-desc";

const Header: NextPage<Lang> = async ({ lang }) => {
  const dict = (await getDictionary(lang)).company;
  return (
    <Container className="gap-10 pt-28">
      <div className="flex items-center justify-center">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            {dict.header.aboutOverlogicUniverse}
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>
      <div className="flex justify-center flex-col">
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl lg:text-7xl text-center">
          <AuroraHeaderTitle title={dict.header.title} />
        </h1>
      </div>
      <div className="flex-col gap-2 flex md:hidden">
        {dict.header.subTitle.map((text, index) => (
          <p
            key={index}
            className={cn("text-muted-foreground text-center")}
            dangerouslySetInnerHTML={{
              __html: text
                .split(" ")
                .map((text) =>
                  [
                    "Overlogic",
                    "digital",
                    "solutions.",
                    "solusi.",
                    "quality",
                    "kualitas",
                    "transformation",
                    "transformasi",
                    "revolusioner",
                    "connected",
                    "terhubung",
                  ].includes(text)
                    ? `<span class="text-black dark:text-white font-semibold">${text}</span>`
                    : text
                )
                .join(" "),
            }}
          />
        ))}
      </div>
      <div className="hidden md:block">
        <p
          className={cn("text-muted-foreground text-center")}
          dangerouslySetInnerHTML={{
            __html: dict.header.subTitle
              .join(" ")
              .split(" ")
              .map((text) =>
                [
                  "Overlogic",
                  "digital",
                  "solutions.",
                  "solusi.",
                  "mission",
                  "misi",
                  "agency",
                  "misi",
                  "inovatif,",
                  "innovative",
                  "modern",
                  "technology-based",
                  "berbasis",
                  "teknologi",
                  "modern"
                ].includes(text)
                  ? `<span class="text-black dark:text-white font-semibold">${text}</span>`
                  : text
              )
              .join(" "),
          }}
        />
      </div>
    </Container>
  );
};

export default Header;
