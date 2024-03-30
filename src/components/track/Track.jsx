const Track = () => {
  return (
    <section>
      <div className=" container mx-auto px-5 py-10 md:py-14">
        {/* main  */}
        <div className="flex flex-wrap -m-4 text-center">
          {/* Track 1 */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-blue-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-6v-6h-2v6zm2-2h2v-6h6v6h2V9.325l-5-3.8l-5 3.8zm3-7.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312M9 18v-6h6v6v-6H9z"
                />
              </svg>

              <h2 className="title-font font-medium text-lg text-gray-900">
                Enhance Your Home Sanctuary
              </h2>
              <p className="leading-relaxed">
                Transform your living space into a haven of comfort and style.
                From cozy blankets to elegant decor, create a home that reflects
                your personality.
              </p>
            </div>
          </div>

          {/* Track 2 */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-blue-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M4 6h5.426a1 1 0 0 1 .863.496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114A4 4 0 0 1 21 14.73V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m10 7l1-2" />
                  <path d="M8 18v-1a4 4 0 0 0-4-4H3m7-1l1.5-3" />
                </g>
              </svg>

              <h2 className="title-font font-medium text-lg text-gray-900">
                Step Up Your Shoe Game
              </h2>
              <p className="leading-relaxed">
                Elevate your footwear collection with iconic designs and premium
                quality. From classic sneakers to modern boots, find your
                perfect pair here.
              </p>
            </div>
          </div>

          {/* Track 3  */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-blue-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0"
                />
              </svg>

              <h2 className="title-font font-medium text-lg text-gray-900">
                Upgrade Your Shirt Collection
              </h2>
              <p className="leading-relaxed">
                Refresh your wardrobe with stylish shirts crafted for comfort
                and versatility. From casual classics to tailored perfection,
                redefine your look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
