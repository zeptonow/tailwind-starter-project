import React from "react";
import styles from "./TheCuratedCard.module.scss";

export const TheCuratedCard = () => {
	console.log(styles["the-curated-for-card"]);
	return (
		<div className={styles["the-curated-for-card"]}>
			<img src={"https://picsum.photos/100/200"} className="w-full h-32" />
			<div className="p-2 text-xs">
				<div className="rating-container">
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
				<div className="text-gray-700 mb-2">Jack Daniel's Old No 7 Tennessee Whiskey</div>
				<div className="flex justify-between items-center">
					<span className="text-primary text-2xs tracking-wide font-bold">Rs. 3,250</span>
					<button className="the-button">Add</button>
				</div>
			</div>
		</div>
	);
};
