const Home = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center text-white">
      <div className=" bg-orange-600 border border-white rounded-3xl p-10">
        <h3 className=" text-indigo-400 font-semibold">Enterprice</h3>
        <p className="mt-4 font-semibold text-white text-5xl flex gap-2 items-end">
          $99<span className="text-gray-400 text-base">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-300">
          Dedicated support and infrastructure for your company.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            Unlimited Products
          </li>
        </ul>
        <button className="bg-indigo-500 rounded-md mt-8 py-2.5 px-3.5 w-full">
          Get started Today
        </button>
      </div>
      <div className=" bg-gray-800 border border-white rounded-3xl p-10">
        <h3 className=" text-indigo-400 font-semibold">Enterprice</h3>
        <p className="mt-4 font-semibold text-white text-5xl flex gap-2 items-end">
          $99<span className="text-gray-400 text-base">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-300">
          Dedicated support and infrastructure for your company.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          {[
            "Unlimited products",
            "Unlimited subscribers",
            "Advanced analytics",
            "Dedicated support representative",
            "Marketing automations",
            "Custom integrations",
          ].map((el, index) => {
            return (
              <li key={index} className="flex gap-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                {el}
              </li>
            );
          })}
        </ul>
        <button className="bg-indigo-500 rounded-md mt-8 py-2.5 px-3.5 w-full">
          Get started Today
        </button>
      </div>
    </div>
  );
};

export default Home;
