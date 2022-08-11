import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TheCuratedCard } from "../components/theCuratedCard/TheCuratedCard";

const Home: NextPage = () => {
	return (
		<div className="w-full lg:max-w-sm m-auto bg-white rounded-b-lg overflow-hidden">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* body starts */}
			<div className="p-4 pb-0 ">
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
				<div className="mt-8 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-4 w-full">
					{new Array(4).fill(0).map((item) => {
						return (
							<div className="text-center">
								<div className="bg-red-50 rounded-lg w-full p-3 flex justify-center items-center mb-1">
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
								<span className="block text-gray-400 text-2xs">Whiskey</span>
							</div>
						);
					})}
				</div>
				{/* category slider ends */}

				{/* brand advertise slider starts */}
				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
					<div className="w-full h-48 rounded-lg overflow-hidden">
						<img src={"https://picsum.photos/100/200"} className="w-full h-full" />
					</div>
					<div className="w-full h-48 rounded-lg overflow-hidden hidden md:block lg:hidden">
						<img src={"https://picsum.photos/100/200"} className="w-full h-full" />
					</div>
				</div>
				{/* brand advertise slider ends */}

				{/* trending now starts */}
				<div className="mt-8">
					<div className="flex justify-between">
						<div>
							<span className="widget-title">Curated for you!</span>
							<span className="widget-subtitle">We matched your taste</span>
						</div>
						<div className="widget-action">View all</div>
					</div>
					<div>
						{/* card starts here */}
						<div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
							{new Array(4).fill(0).map((item) => {
								// return null;
								return <TheCuratedCard />;
							})}
						</div>
					</div>
				</div>
				{/* trending now ends * 3*/}

				{/* the reserve slider starts */}
				<div></div>
				{/* the reserve slider ends */}

				{/* brand advertise slider starts */}
				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
					<div className="w-full h-48 rounded-lg overflow-hidden">
						<img src={"https://picsum.photos/100/200"} className="w-full h-full" />
					</div>
					<div className="w-full h-48 rounded-lg overflow-hidden hidden md:block lg:hidden">
						<img src={"https://picsum.photos/100/200"} className="w-full h-full" />
					</div>
				</div>
				{/* brand advertise slider ends */}

				<div className="mt-8">
					<div className="flex justify-between">
						<div>
							<span className="widget-title">The Reserve</span>
							<span className="widget-subtitle">Coz you deserve it</span>
						</div>
						<div className="widget-action">View all</div>
					</div>
					<div>
						{/* card starts here */}
						<div className="mt-4 grid grid-cols-1 gap-4">
							{new Array(2).fill(0).map((item) => {
								return (
									<div className="the-reserve-card">
										<img src={"https://picsum.photos/20/26"} className="w-20 h-full rounded-md" />
										<div className=" ml-2 text-xs">
											<div className="text-gray-700 mb-2 font-semibold tracking-wide">
												Jack Daniel's Old No 7 Tennessee Whiskey
											</div>
											<div className="rating-container mb-2">
												<span className="rating-star">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-3 w-3"
														fill="currentColor"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={1}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
														/>
													</svg>
													<span className="rating-text">4.6</span>
												</span>
												<span className="uppercase tracking-wider text-gray-400 ml-2">88 Ratings</span>
											</div>
											<span className="text-gray-500 tracking-wide mb-2 block">Rs. 3,250</span>
											<div className="flex justify-between items-center">
												<span className="text-gray-600 text-2xs bg-gray-100 rounded-lg p-0.5">750 ml</span>
												<button className="the-button">Request</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{/* loved brand starts */}
				<div></div>
				{/* loved brand ends */}
			</div>
			{/* footer starts here */}
			<footer>
				<ul className="mt-8 grid grid-cols-4 border-t border-gray-200 h-12">
					<li className="flex justify-center items-center bg-primary text-white">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</a>
					</li>
					<li className="flex justify-center items-center">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</a>
					</li>
					<li className="flex justify-center items-center">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</a>
					</li>
					<li className="flex justify-center items-center">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</a>
					</li>
				</ul>
				<div className="h-2 bg-primary"></div>
			</footer>
			{/* footer ends here */}
		</div>
	);
};

export default Home;
