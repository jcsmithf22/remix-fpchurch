import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/firebase";

import type { Post } from "~/utils/types";

import fence from "~/assets/fence.avif";
import { collection, getDocs, query, limit } from "firebase/firestore";
import Notices from "~/components/Notices";

export const meta: MetaFunction = () => {
  return [
    { title: "Free Presybterian Church of Scotland - Santa Fe, TX" },
    {
      name: "description",
      content:
        "Homepage of the Free Presybterian Church of Scotland in Santa Fe, Texas, outside of Houston. Reformed in doctrine, worship, and practice.",
    },
  ];
};

export const loader = async () => {
  const postCollection = collection(db, "posts");
  const q = query(postCollection, limit(3));
  const postSnapshot = await getDocs(q);
  const postList = postSnapshot.docs.map((doc) => doc.data() as Post);
  return postList;
};

export default function Index() {
  const data = useLoaderData<typeof loader>() as Post[];

  return (
    <>
      <div id="header" className="bg-white dark:bg-gray-900 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-blue-800 dark:text-blue-400">
              Introduction
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Welcome to the Houston area Free Presbyterian Church
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are a reformed church in the Houston area, seeking to proclaim
              the Gospel through Christ-centered worship. Our congregation is
              part of the Free Presbyterian Church of Scotland, a Presbyterian
              denomination that is reformed in doctrine, worship, and practice.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="flex-none h-5 w-5 text-blue-700 dark:text-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    ></path>
                  </svg>
                  Worship Services
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We meet for worship twice on the Lord's Day at 10:30 AM and
                    5:00 PM, with a weekly prayer meeting at 7:30 PM on
                    Wednesday. All are welcome!
                  </p>
                  <p className="mt-6">
                    <a
                      href="/visit/details"
                      className="text-sm font-semibold leading-6 text-blue-700 dark:text-blue-400"
                    >
                      Visit us <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="flex-none h-5 w-5 text-blue-700 dark:text-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    ></path>
                  </svg>
                  Confessional Church
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are a confessional church in the reformed tradition,
                    believing that the Westminister Confession of Faith is a
                    faithful summary of the teaching of God's Word. We believe
                    that the Bible is the infallible, inspired Word of God.
                  </p>
                  <p className="mt-6">
                    <a
                      href="/about/beliefs"
                      className="text-sm font-semibold leading-6 text-blue-700 dark:text-blue-400"
                    >
                      What we believe <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="flex-none h-5 w-5 text-blue-700 dark:text-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    ></path>
                  </svg>
                  Speak with us
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Have questions before coming? We are happy to speak by
                    phone, email, or in person.
                  </p>
                  <p className="mt-6">
                    <a
                      href="/contact"
                      className="text-sm font-semibold leading-6 text-blue-700 dark:text-blue-400"
                    >
                      Contact us <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <section className="relative isolate overflow-hidden bg-blue-950 px-6 py-24 sm:py-32 mt-32 lg:px-8">
        <img
          className="absolute inset-0 h-full w-full object-cover saturate-0 brightness-75"
          src={fence}
          alt="fence behind bible verse"
        />
        <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
        <div
          className="absolute -left-80 -top-56 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-blue-500 to-[#776fff] opacity-[0.35]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-blue-500 to-[#776fff] opacity-25"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl relative">
          <figure>
            <blockquote className="text-center text-xl leading-8 text-white sm:text-2xl sm:leading-9 font-serif">
              <p>
                “Come unto me, all ye that labor and are heavy laden, and I will
                give you rest. Take my yoke upon you, and learn of me; for I am
                meek and lowly in heart: and ye shall find rest unto your souls.
                For my yoke is easy, and my burden is light.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Matthew 11:28-30</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="text-gray-300">Authorized Version</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <Notices data={data} />
    </>
  );
}
