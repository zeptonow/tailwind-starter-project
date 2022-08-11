import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* body starts */}
			<div className="md:max-w-sm m-auto p-4 pb-0 ">
				<div>
					<nav>
						<div>
							<span className="uppercase font-bold tracking-wide text-sm">Home</span>
							<span className="block text-gray-300 text-xs">303, Gurunanak Rd, Bandra West, Mumbai, 3453453</span>
						</div>
						<div></div>
					</nav>
				</div>
				{/* category slider starts */}
				<div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-10 w-full">
					{new Array(5).fill(0).map((item) => {
						return (
							<div className="w-20 h-20 text-center">
								<div className="bg-red-50 rounded-lg w-full p-4 flex justify-center items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1}
									>
										<path d="M12 14l9-5-9-5-9 5 9 5z" />
										<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
										/>
									</svg>
								</div>
								<span className="block text-gray-400 text-xs">Whiskey</span>
							</div>
						);
					})}
				</div>
				{/* category slider ends */}

				{/* brand advertise slider starts */}
				<div className="relative w-full h-48 mt-8">
					<Image src={"https://picsum.photos/100/200"} objectFit="cover" layout="fill" className="rounded-lg" />
				</div>
				{/* brand advertise slider ends */}

				{/* trending now starts */}
				<div className="mt-8">
					<div className="flex justify-between">
						<div>
							<span className="font-semibold tracking-wide text-2xl">Curated for you!</span>
							<span className="block text-gray-400 text-sm">We matched your taste</span>
						</div>
						<div className="mt-2 text-red-600 font-semibold">View All</div>
					</div>
					<div>
						{/* card starts here */}
						<div></div>
					</div>
				</div>
				{/* trending now ends * 3*/}

				{/* the reserve slider starts */}
				<div></div>
				{/* the reserve slider ends */}

				{/* loved brand starts */}
				<div></div>
				{/* loved brand ends */}
			</div>
		</div>
	);
};

export default Home;
