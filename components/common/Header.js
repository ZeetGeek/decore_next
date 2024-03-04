"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { headerMenuData } from "@/api/headerMenuData";
import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
	// Mobile menu toggle switch state
	const [menu, setMenu] = useState(false);

	// Mobile menu dropdown
	const [dropDown, setDropDown] = useState(false);

	// Get the current page slug
	const pathName = usePathname();

	//Select Header Element
	const headerRef = useRef();

	// Init Sticky Header
	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", function () {
				var height = window.scrollY; //getting the scrolling height of window
				if (height > 20) {
					headerRef?.current?.classList?.add("sticky_head");
				} else {
					headerRef?.current?.classList?.remove("sticky_head");
				}
			});
		}
	}, []);

	return (
		<>
			<header
				className="site-header"
				id="header"
				ref={headerRef}
			>
				<Container>
					<div className="header-wrapper">
						<Row>
							<Col lg={2}>
								<div className="header-logo">
									<Link
										title="DeCore"
										href="/"
									>
										<Image
											src={logo}
											alt="Logo"
											priority
										/>
									</Link>
								</div>
							</Col>
							<Col lg={10}>
								<nav className={`main-navigation ${menu ? "toggled" : ""}`}>
									<button
										className="menu-toggle"
										onClick={() => setMenu((prev) => !prev)}
									>
										<span />
										<span />
										<span />
									</button>
									<div className="header-menu">
										<ul className="menu">
											{headerMenuData.map(({ title, link, submenu }, index) => {
												return (
													<li
														key={index}
														className={`${submenu ? "dropdown-items" : ""} ${dropDown === title ? "dropdown-open" : ""}`}
													>
														<Link
															title={title}
															href={link}
															className={pathName === link || submenu?.map((item) => item.link).includes(pathName) ? "active-menu" : ""}
														>
															{title}&nbsp;
															{submenu && <span className="for-des">+</span>}
														</Link>

														{submenu && (
															<>
																<span
																	className="for-mob dropdown-icon"
																	onClick={() => setDropDown((prev) => !prev && title)}
																>
																	<i className="fas fa-chevron-down"></i>
																</span>
																<ul className="sub-menu">
																	{submenu.map(({ title, link }, index) => (
																		<li key={`${index}_sub`}>
																			<Link
																				title={title}
																				href={link}
																				className={pathName === link ? "active-menu" : ""}
																			>
																				{title}
																			</Link>
																		</li>
																	))}
																</ul>
															</>
														)}
													</li>
												);
											})}
										</ul>
									</div>
								</nav>
							</Col>
						</Row>
					</div>
				</Container>
			</header>
		</>
	);
}
