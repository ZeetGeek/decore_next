"use client";

import { counterData } from "@/api/counterData";
import counterBg from "@/images/counter-bg.jpg";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Counter() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			var a = 0;
			window.addEventListener("scroll", function () {
				var oTop = document?.getElementById("counter")?.offsetTop - window.innerHeight;
				if (a === 0 && window.scrollY > oTop) {
					var countingElements = document.querySelectorAll(".counting");
					countingElements.forEach(function (element) {
						var countTo = element.getAttribute("data-count");
						var countNum = parseInt(element.textContent, 10);

						var animation = setInterval(function () {
							countNum++;
							element.textContent = countNum;
							if (countNum == countTo) {
								clearInterval(animation);
							}
						}, 30);
					});
					a = 1;
				}
			});
		}
	}, []);

	return (
		<>
			<section
				className="count-sec section"
				style={{ backgroundImage: "url" + `('${counterBg.src}')` }}
			>
				<div className="bg-overlay" />
				<div className="sec-wp">
					<Container>
						<Row id="counter">
							{counterData.map(({ title, count }, index) => (
								<Col
									lg={3}
									sm={6}
									key={index}
								>
									<div
										className="count-text wow fadeup-animation"
										data-wow-duration="1s"
										data-wow-delay="0.1s"
									>
										<p
											className="counting"
											data-count={count}
										>
											0
										</p>
										<h3 className="h3-title">{title}</h3>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			</section>
		</>
	);
}
