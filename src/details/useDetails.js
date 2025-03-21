import useSWRImmutable from "swr/immutable";
import { fetcher, formatToCurrency, translate } from "../utils";
import { useParams } from "react-router-dom";
import { Col } from "react-bootstrap";

export const useDetails = () => {
	const { id } = useParams();
	const { data, error, isLoading } = useSWRImmutable(
		`https://api.propstack.de/v1/units/${id}?new=1&locale="de`,
		fetcher
	);
	let dataToMap = [];
	const isFloorPlanImages = (bool) => (
		data?.images.filter((el) => bool ? el?.is_floorplan : !el?.is_floorplan)
		.filter((el) => !el?.is_private)
	);
	
	const classNames = ["1-1", "1-2", "2-1", "2-2"];
	const generateCol = (el, idx) => (
		<Col xs={12} md={6} className="p-0" key={el.label}>
			<div className={`d-flex justify-content-between mx-1 mb-md-1 mb-sm-2 px-4 py-2 mb-2 row-${classNames[idx % 4]}`}>
				<span className="par2">{el.label}</span>
				{typeof el.value === 'boolean' && <span className="par2">Ja</span>}
				{typeof el.value !== 'boolean' && (
					<span className="par2">
						{el.value}
						{el.addM2 ? 'm ' : null}
						{el.addM2 ? <sup>2</sup>  : null}
						{el.addKwh ? ' kWh/(m²*a)' : null}
					</span>
				)}
			</div>
		</Col>
	);
	
	const showLabelAndValue = (label, value) => {
		if (value) {
			return (
				<>
					<h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
						{label}
					</h2>
					<span className="par2 he-pre-line">{value}</span>
				</>
			);
		}
		return null;
	};
	if (data) {
		dataToMap = [
			{label: 'Adresse', value: data.hide_address ? data.zip_code  : data.short_address},
			{label: 'Kategorie', value: translate(data?.marketing_type)},
			{label: 'Unterkategorie', value: data.apartment_type?.value ?? data?.building_type?.value},
			{label: data.construction_year?.label, value: data.construction_year?.value},
			{label: data?.price?.label, value: data.price_on_inquiry.value
				? data.price_on_inquiry.label
				:  formatToCurrency(data?.price?.value, true)
			},
			{label: data?.base_rent?.label, value: formatToCurrency(data?.base_rent?.value, true)},
			{label: data.service_charge?.label, value: formatToCurrency(data.service_charge?.value, true)},
			{label: data.heating_costs?.label, value: formatToCurrency(data.heating_costs?.value, true)},
			{label: data.total_rent?.label, value: formatToCurrency(data.total_rent?.value, true)},
			{label: data.deposit?.label, value: formatToCurrency(data.deposit?.value, true)},
			{label: data.courtage?.label, value: data.courtage?.value},
			{label: data.free_from?.label, value: data.free_from?.value},
			{label: data.condition?.label, value: data.condition?.value},
			{label: data.rent_subsidy?.label, value: formatToCurrency(data.rent_subsidy?.value, true)},
			{label: data.plot_area?.label, value: data.plot_area?.value, addM2: true},
			{label: data.living_space?.label, value: data.living_space?.value, addM2: true},
			{label: data.number_of_rooms?.label, value: data.number_of_rooms?.value},
			{label: data.number_of_bed_rooms?.label, value: data.number_of_bed_rooms?.value},
			{label: data.number_of_bath_rooms?.label, value: data.number_of_bath_rooms?.value},
			{label: data.energy_certificate_availability?.label, value: data.energy_certificate_availability?.value},
			{label: data.energy_certificate_creation_date?.label, value: data.energy_certificate_creation_date?.value},
			{label: data.building_energy_rating_type?.label, value: data.building_energy_rating_type?.value},
			{label: data.energy_certificate_start_date?.label, value: data.energy_certificate_start_date?.value},
			{label: data.energy_certificate_end_date?.label, value: data.energy_certificate_end_date?.value},
			{label: data.thermal_characteristic?.label, value: data.thermal_characteristic?.value, addKwh: true},
			{label: data.energy_efficiency_class?.label, value: data.energy_efficiency_class?.value},
			{label: data.heating_type?.label, value: data.heating_type?.value},
			{label: data.firing_types?.label, value: data.firing_types?.value},
			{label: data.equipment_technology_construction_year?.label, value: data.equipment_technology_construction_year?.value},
			{label: data.distance_to_pt?.label, value: data.distance_to_pt?.value, addMin: true},
			{label: data.distance_to_mrs?.label, value: data.distance_to_mrs?.value, addMin: true},
			{label: data.distance_to_airport?.label, value: data.distance_to_airport?.value, addMin: true},
			{label: data.summer_residence_practical?.label, value: data.summer_residence_practical?.value},
			{label: data.cellar?.label, value: data.cellar?.value},
			{label: data.built_in_kitchen?.label, value: data.built_in_kitchen?.value},
			{label: data.guest_toilet?.label, value: data.guest_toilet?.value},
			{label: data.balcony?.label, value: data.balcony?.value},
			{label: data.garden?.label, value: data.garden?.value},
			{label: data.winter_garden?.label, value: data.winter_garden?.value},
			{label: data.storeroom?.label, value: data.storeroom?.value},
			{label: data.chimney?.label, value: data.chimney?.value},
			{label: data.swimming_pool?.label, value: data.swimming_pool?.value},
			{label: data.sauna?.label, value: data.sauna?.value},
			{label: data.alarm_system?.label, value: data.alarm_system?.value},
			{label: data.air_conditioning?.label, value: data.air_conditioning?.value},
		].filter((el) => el?.value)
	};
	return { data, isLoading, error, dataToMap, isFloorPlanImages, generateCol, showLabelAndValue };
}