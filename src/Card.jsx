import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import euroIcon from './icons/HE-IC-Money.svg';
import roomIcon from './icons/HE-IC-Rooms.svg';
import resizeIcon from './icons/HE-IC-Size.svg';
import { formatToCurrency } from "./utils";

const Card = (props) => {
	const {
		item,
		hovered,
		setHovered
	} = props;

	return (
		<Col key={item.id} xs={12} sm={6} lg={6} md={12} className="mb-4">
			<div
				onMouseEnter={() => setHovered(item.id)}
				onMouseLeave={() => setHovered(null)}
				style={{ border: 'none' }}
				className={`card h-100 ${
					item.id === hovered ? 'card-hover' : ''
				}`}
			>
				<Link
					to={`/details/${item.id}/${item.title.value}`}
					className="text-decoration-none d-flex flex-column h-100"
				>
					<div
						style={{
							backgroundImage: `url(${item.images[0].medium_url})`,
							borderTopLeftRadius: '0.375rem',
							borderTopRightRadius: '0.375rem',
						}}
						className="card-img-bg"
					/>
					<div className="card-body d-flex flex-column">
						<div className="container">
							<div className="row">
								<div className="col px-0">
									<div className="d-flex flex-row align-items-center">
										<div style={{ width: 44, height: 44, padding: '5px' }} className="d-flex align-items-center justify-content-center">
											<ReactSVG className="home-ease-svg" src={euroIcon} wrapper="svg"/>
										</div>
										<div className="py-2">
											<h3 className="mb-0" style={{ whiteSpace: 'nowrap' }}>{formatToCurrency(item?.price?.value ?? item?.base_rent?.value)}</h3>
											<h4 className="mb-0">{item?.price?.label}</h4>
										</div>
									</div>
								</div>
								<div className="col px-0">
								<div className="d-flex flex-row align-items-center">
										<div style={{ width: 44, height: 44, padding: '5px' }} className="d-flex align-items-center justify-content-center">
											<ReactSVG className="home-ease-svg" src={resizeIcon} wrapper="svg"/>
										</div>			
										<div className="d-flex flex-column flex-wrap">
											<h3 className="mb-0" style={{ whiteSpace: 'nowrap'}}>
												{item.living_space?.value} m
												<sup> 2</sup>
											</h3>
											<h4 className="mb-0">{item.living_space?.label}</h4>
										</div>
									</div>
								</div>
								<div className="w-100"></div>
								<div className="col px-0">
									<div className="d-flex flex-row align-items-center">
										<div style={{ width: 44, height: 44, padding: '5px' }} className="d-flex align-items-center justify-content-center">
											<ReactSVG className="home-ease-svg" src={roomIcon} wrapper="svg"/>
										</div>										
										<div className="d-flex flex-column">
											<h3 className="mb-0" style={{ whiteSpace: 'nowrap'}}>
												{item.number_of_rooms?.value}
											</h3>
											<h4 className="mb-0">{item.number_of_rooms?.label}</h4>
										</div>
									</div>
								</div>
								{item?.plot_area?.value && (
									<div className="col px-0">
									<div className="d-flex flex-row align-items-center">
										<div style={{ width: 44, height: 44, padding: '5px' }} className="d-flex align-items-center justify-content-center">
											<ReactSVG className="home-ease-svg" src={resizeIcon} wrapper="svg"/>
										</div>										
										<div className="d-flex flex-column">
											<h3 className="mb-0" style={{ whiteSpace: 'nowrap'}}>
												{item?.plot_area?.value}m
												<sup> 2</sup>
											</h3>
											<h4 className="mb-0">{item?.plot_area?.label}</h4>
										</div>
									</div>
								</div>
								)}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</Col>
	)
};

export default Card;