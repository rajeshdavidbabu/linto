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

export function LintoView({ profile }: Profile) {
  const items = [
    {
      title: profile?.first_name || 'XXXX'+ " " + profile?.first_name || 'XXXX',
      description: (
        <span className="text-sm">
          {profile?.headline || 'XXXX'}
        </span>
      ),
      header: <SkeletonOne profile={profile}/>,
    },
    {
      title: "Current Location",
      description: <span className="text-sm">📍 {profile?.city || 'XXXX'}, {profile?.country_full_name || 'XXXX'}</span>,
      header: <SkeletonTwo profile={profile}/>,
      className: "md:col-span-1",
    },
    {
      title: profile.occupation || 'XXXX',
      description: (
        <span className="text-sm">
          {profile.first_name} is currently working at {profile.experience_one.company} since {profile.experience_one.starts_at.year}. {profile.experience_one.company} is located in {profile.experience_one.location}.
        </span>
      ),
      header: <SkeletonThree profile={profile}/>,
      className: "md:col-span-1",
    },
    {
      title: "Work Experience",
      description: (
        <span className="text-sm">
          {profile?.first_name || 'XXXX'} has an array of work experience.
        </span>
      ),
      header: <SkeletonFour profile={profile}/>,
      className: "md:col-span-2",
    },
  
    {
      title: "Contact Information",
      description: (
        <span className="text-sm">
          You can contact {profile.first_name} on <a className="text-purple-600" href={profile.linkedin_profile_url} target="_blank">Linked-In</a>.
        </span>
      ),
      header: <SkeletonFive profile={profile}/>,
      className: "md:col-span-1",
    },
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

interface Experience {
  starts_at?: string;
  ends_at?: string;
  company?: string;
  company_linkedin_profile_url?: string;
  title?: string;
  location?: string;
  logo_url?: string;
}

interface Profile {
  [key: string]: any; // Allows for any other properties without specific typing
  first_name?: string; // Optional, based on your JSON structure
  last_name?: string; // Optional, based on your JSON structure
  occupation?: string; // Optional, based on your JSON structure
  follower_count?: number; // Optional, based on your JSON structure
  linkedin_profile_url?: string; // Optional, based on your JSON structure
  country_full_name?: string; // Optional, based on your JSON structure
  city?: string; // Optional, based on your JSON structure
  experience_one? : Experience;
  experience_two? : Experience;
  experience_three? : Experience;
  headline?: string; // Optional, based on your JSON structure
  profile_pic_url?: string; // Optional, based on your JSON structure
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = ({profile}:Profile) => {
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
          src={profile.profile_pic_url}
          alt="avatar"
          height={150}
          width={150}
          className="rounded-full h-25 w-25"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = ({profile}:Profile) => {
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
  
  const pic = "https://source.unsplash.com/featured/300x201?+" + profile?.city;
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >  
    <img
        src={pic}
        alt="avatar"
        height={"100%"}
        width={"100%"}
        className="rounded-sm h-full w-auto"
      />    
    </motion.div>
  );
};
const SkeletonThree = ({profile}:Profile) => {
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
const SkeletonFour = ({profile}:Profile) => {
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
          src={profile.experience_two?.logo_url || 'https://internwise.s3.eu-west-2.amazonaws.com/uploads/default_company.png'}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="border border-pink-500 bg-pink-100 dark:bg-pink-900/20 text-pink-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {profile.experience_two?.company || 'XXXX'}
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src={profile.experience_one?.logo_url || 'https://internwise.s3.eu-west-2.amazonaws.com/uploads/default_company.png'}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />

        <p className="border border-emerald-500 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {profile.experience_one?.company || 'XXXX'}
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src={profile.experience_three?.logo_url || 'https://internwise.s3.eu-west-2.amazonaws.com/uploads/default_company.png'}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />

        <p className="border border-amber-500 bg-amber-100 dark:bg-amber-900/20 text-amber-600 text-xs rounded-full px-2 py-0.5 mt-4">
        {profile.experience_three?.company || 'XXXX'}
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = ({profile}:Profile) => {
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
          src={profile.profile_pic_url}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs">Hi, nice to meet you!</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs">People following: {profile?.follower_count || "999"}</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
