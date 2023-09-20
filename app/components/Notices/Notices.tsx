import { Timestamp } from "firebase/firestore";
import type { Post } from "~/utils/types";

function Notices({ data }: { data: Post[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 border border-gray-300 p-12 py-12 shadow-2xl sm:rounded-3xl">
          <div className="max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Keep track of upcoming events and announcements.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-gray-200 dark:border-white/10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map(({ title, date, id, hide, dateto, text }) => (
              <article
                key={id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime="2020-03-16"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {new Timestamp(date.seconds, date.nanoseconds)
                      .toDate()
                      .toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </time>
                </div>
                <div className="relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                    <span className="absolute inset-0" />
                    {title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notices;
