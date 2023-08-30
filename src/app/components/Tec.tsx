import Link from "next/link";

import {motion} from 'framer-motion'
export default function Tec() {

  return (
    <>
      <div className=" w-full h-screen bg-[#141614] grid grid-rows-2">
        <motion.div className="flex flex-col justify-center items-center text-center inset-0 md:mx-30 lg:mx-64 font-bold z-20 "
        initial={{x:-300}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.8}}}>
          <h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-[4.27rem] font-serif  text-gray-200 ">
            Skills & Experience
          </h1>
          <h2 className="text-gray-200 pt-10">
            The main area of expertise in front end development (Client Side Of
            The Web)
          </h2>
          <h2 className="text-gray-200 lg:text-base text-sm px-4 py-2">
            HTML,CSS,JS building small and medium web application with React &
            Next.js with SSR,SSG,ISR,SSG features custom animation and
            Responsive Layouts.I have also full-Stack developer experience with
            one of the most popular open source CMS on web (Contentful CMS )
          </h2>
          <h1 className="text-gray-200">
            Visit my{" "}
            <Link href="/">
              <span className="text-orange-600  underline  hover:text-purple-600">
                Linkedin
              </span>
            </Link>{" "}
            for more details
          </h1>
        </motion.div>
        <motion.div className="grid grid-cols-6 xs:gap-2 md:gap-0 md:grid-cols-9 grid-col items-center justify-center mx-8  md:mx-24  "
        initial={{x:300}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.9}}}>
          <img
            src="/icons/icons8-html-5-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-css3-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-javascript-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-typescript-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-node-js-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-chakra-ui-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-tailwind-css-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>

          <img
            src="/icons/icons8-figma-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-next.js-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-postgresql-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-prisma-orm-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-graphql-124.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/trpc-logo (1).png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/favicon-512x512 (1).png "
            width={80}
            height={80}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/git.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/Metamask-icon (1).png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/icons8-react-240.png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
          <img
            src="/icons/pngegg (1).png "
            width={90}
            height={90}
            className="mix-blend-luminosity hover:mix-blend-normal"
          ></img>
        </motion.div>
      </div>
    </>
  );
}
