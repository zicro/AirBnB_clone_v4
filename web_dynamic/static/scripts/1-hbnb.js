$(document).ready(function () {
	const amenities = {}
	$('input.amenity-checkbox').change(function(){
		const amenity_id = $(this).data('id')
		const amenity_name = $(this).data('name')

		if ($(this).is(':checked')) amenities[amenity_id] = amenity_name
		else delete amenities[amenity_id]
		const amenities_list = Object.values(amenities).join(', ')
		$('.amenities h4').text(amenities_list)
	})
})
