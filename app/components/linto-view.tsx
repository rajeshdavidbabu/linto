import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

export function LintoView() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://media.licdn.com/dms/image/D4E03AQH7YWRzqGl-mQ/profile-displayphoto-shrink_800_800/0/1702722574537?e=1712793600&v=beta&t=st6wksj_3qKajVaiOL51-mMD7F-2lzJjybsTtrKXzZ8"
          alt="avatar"
          height={150}
          width={150}
          className="rounded-full h-25 w-25"
        />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full overflow-hidden h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <img
        src="https://gisgeography.com/wp-content/uploads/2023/02/Hamburg-Things-To-Do.jpg"
        alt="avatar"
        height={"100%"}
        width={"100%"}
        className="rounded-sm h-auto w-auto"
      />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_400_400/0/1631438990121?e=1713398400&v=beta&t=0UzneUNfua0KMV2C9i9rlfEpeYnmV1lf74wapL4HY_Y"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Stealth Startup
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://media.licdn.com/dms/image/D4E0BAQEImmp4GLeS5g/company-logo_400_400/0/1688467533747/pino_gmbh_logo?e=1713398400&v=beta&t=8TZTVSA21m7TXoqzstORniTECZXM2Q4IJYRmEhYwZW4"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />

        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          PINO GmbH
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQGtQW3kf4NWoQ/company-logo_400_400/0/1630557282181/voltaroenergy_logo?e=1713398400&v=beta&t=N5jNYFoVPsbo6hWbtgx86WrPBLhlhDD2knthReer-Kk"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />

        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Voltaro
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://media.licdn.com/dms/image/D4E03AQH7YWRzqGl-mQ/profile-displayphoto-shrink_800_800/0/1702722574537?e=1712793600&v=beta&t=st6wksj_3qKajVaiOL51-mMD7F-2lzJjybsTtrKXzZ8"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs">noah.rassi@hotmail.com</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs">+49 176 123 456 78</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Noah Rassi",
    description: (
      <span className="text-sm">
        Founder & CEO @Leapwize - Employee First Job-Matching for GenZ 🔋 ESADE
        | TUM | | Tech Creative 🪩 | UI Expert 📱 | Videographer 🎥
      </span>
    ),
    header: <SkeletonOne />,
  },
  {
    title: "Location",
    description: <span className="text-sm">Hamburg, Germany</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Founder at Stealth Startup",
    description: (
      <span className="text-sm">
        He is currently in the process of founding a new startup on how young
        people would find jobs in Germany.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Work Experience",
    description: (
      <span className="text-sm">
        Noah has an array of work experience in different companies.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Contact Information",
    description: (
      <span className="text-sm">
        You can contact Noah via his email or phone number.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
