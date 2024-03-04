"use client";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { brandsData } from "@/api/brandsData";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
	return (
		<>
			<div className="brands-sec section">
				<Container className="container">
					<Row>
						<Col lg={12}>
							<Swiper
								slidesPerView={4.5}
								spaceBetween={30}
								loop="true"
								speed={2000}
								autoplay="true"
								className="brands-slider"
								breakpoints={{
									"@0.00": {
										slidesPerView: 2
									},
									"@0.75": {
										slidesPerView: 3.5,
										spaceBetween: 20
									},
									"@1.50": {
										slidesPerView: 4
									}
								}}
							>
								{brandsData.map(({ image }, index) => (
									<SwiperSlide key={index}>
										<div className="brands-box">
											<Image
												src={image}
												alt="Brand Logo"
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
