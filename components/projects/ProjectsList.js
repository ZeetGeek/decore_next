"use client";

import { projectListData } from "@/api/projectListData";
// import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

export default function ProjectsList() {
	const projectCategoryData = [...new Set(projectListData.map(({ category }) => category))];

	// const isotope = useRef();
	// // store the filter keyword in a state
	const [filterKey, setFilterKey] = useState("*");

	// // initialize an Isotope object with configs
	// useEffect(() => {
	// 	isotope.current = new Isotope(".filter-container", {
	// 		itemSelector: ".filter-item",
	// 		layoutMode: "fitRows"
	// 	});
	// 	// cleanup
	// 	return () => isotope.current.destroy();
	// }, []);

	// // handling filter key change
	// useEffect(() => {
	// 	filterKey === "*" ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
	// }, [filterKey]);

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	return (
		<>
			<div
				className="project-sec project-page-sec light-bg section overflow-hidden"
				id="projects"
			>
				<Container>
					<div
						className="project-tab-wp wow fadeup-animation"
						data-wow-duration="1s"
						data-wow-delay="0.2s"
					>
						<ul>
							<li
								className={`filter ${filterKey === "*" && "active"}`}
								onClick={handleFilterKeyChange("*")}
							>
								all
							</li>
							{projectCategoryData.map((data, index) => {
								const category = data.replaceAll("-", " ");
								return (
									<li
										key={index}
										className={`filter ${filterKey === `${data}` && "active"}`}
										onClick={handleFilterKeyChange(data)}
									>
										{category}
									</li>
								);
							})}
						</ul>
					</div>
					<div
						className="filter-container bydefault_show wow fadeup-animation"
						data-wow-duration="1s"
						data-wow-delay="0.3s"
					>
						{projectCategoryData.map((data, index) => {
							return (
								<div
									className={`project-row filter-item ${data}`}
									key={index}
								>
									{projectListData.map(({ image, title, category, link }, index) => {
										return (
											data === category && (
												<figure
													key={`${index}_box`}
													className="project-box"
												>
													<div className="project-box-left-part">
														<div className="hidden-box">
															<div className="ani-img-wrapper">
																<Link
																	title={title}
																	href={link}
																	className="project-img ani-image"
																	style={{ backgroundImage: "url" + `('${image}')` }}
																></Link>
															</div>
														</div>
													</div>
													<figcaption className="project-box-right-part">
														<Link
															title={title}
															href={link}
															className="project-title"
														>
															{title}
														</Link>
													</figcaption>
												</figure>
											)
										);
									})}
								</div>
							);
						})}
						{/* {projectListData.map(({ category }, index, data) => {
							return (
								<div
									className={category}
									data-cat={`.${category}`}
									key={index}
								>
									{data.map(({ image, title, category, link }, index) => (
										<figure
											key={`${index}_box`}
											className="project-box"
										>
											<div className="project-box-left-part">
												<div className="hidden-box">
													<div className="ani-img-wrapper">
														<Link
															title={title}
															href={link}
															className="project-img ani-image"
															style={{ backgroundImage: "url" + `('${image}')` }}
														></Link>
													</div>
												</div>
											</div>
											<figcaption className="project-box-right-part">
												<Link
													title={title}
													href={link}
													className="project-title"
												>
													{title}
												</Link>
											</figcaption>
										</figure>
									))}
								</div>
							);
						})} */}
					</div>
				</Container>
			</div>
		</>
	);
}
