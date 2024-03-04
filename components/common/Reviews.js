"use client";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { reviewsData } from "@/api/reviewsData";
import quoteIcon from "@/images/left-quote.svg";

export default function Reviews() {
	return (
		<>
			<section
				className="reviews-sec section"
				id="reviews"
			>
				<Container>
					<Row className="mb-5">
						<Col
							lg={6}
							className="m-auto"
						>
							<div
								className="sec-title-text wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<h2 className="h2-title title-ani">we our customer any saying</h2>
								<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
						</Col>
					</Row>

					<Swiper
						slidesPerView={2}
						spaceBetween={30}
						loop="true"
						speed={2000}
						autoplay="true"
						grabCursor="true"
						className="reviews-slider"
						modules={[Navigation]}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
							disabledClass: "swiper-button-disabled"
						}}
						breakpoints={{
							"@0.00": {
								slidesPerView: 1
							},
							"@01.00": {
								slidesPerView: 1,
								spaceBetween: 20
							},
							"@1.50": {
								slidesPerView: 1.9
							}
						}}
					>
						{reviewsData.map(({ name, content }, index) => (
							<SwiperSlide key={index}>
								<div className="reviews-box">
									<Image
										width="60"
										height="50"
										src={quoteIcon}
										alt="left-quote"
									/>
									<div className="reviews-text">
										<p>{content}</p>
										<h4>{name}</h4>
									</div>
								</div>
							</SwiperSlide>
						))}

						<div className="swiper-button-wp">
							<div className="swiper-button-prev swiper-button">
								<svg
									data-name="Layer 2"
									xmlns="http://www.w3.org/2000/svg"
									width="30.053"
									height="29.188"
									viewBox="0 0 30.053 29.188"
								>
									<path
										data-name="Path 86"
										d="M30.947,18.39A11.72,11.72,0,0,0,19.137,8H3.947l3.26-4.6a1,1,0,1,0-1.63-1.17L1.107,8.49a.9.9,0,0,0,0,1l4.47,6.26a1,1,0,1,0,1.63-1.17L3.947,10h15.19a9.73,9.73,0,0,1,9.81,8.85A9.51,9.51,0,0,1,19.477,29H1.947a1,1,0,0,0,0,2h17.53a11.51,11.51,0,0,0,11.47-12.61Z"
										transform="translate(-0.947 -1.812)"
										fill="var(--primary-color)"
									/>
								</svg>
							</div>
							<div className="swiper-button-next swiper-button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30.053"
									height="29.188"
									viewBox="0 0 30.053 29.188"
								>
									<path
										data-name="Path 86"
										d="M1,18.39A11.72,11.72,0,0,1,12.81,8H28L24.74,3.4a1,1,0,1,1,1.63-1.17l4.47,6.26a.9.9,0,0,1,0,1l-4.47,6.26a1,1,0,1,1-1.63-1.17L28,10H12.81A9.73,9.73,0,0,0,3,18.85,9.51,9.51,0,0,0,12.47,29H30a1,1,0,0,1,0,2H12.47A11.51,11.51,0,0,1,1,18.39Z"
										transform="translate(-0.947 -1.812)"
										fill="var(--primary-color)"
									/>
								</svg>
							</div>
						</div>
					</Swiper>
				</Container>
			</section>
		</>
	);
}
