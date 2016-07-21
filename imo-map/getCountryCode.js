function getCountryObject(country_name, data) {
	return data.filter(
		function(data) {return data.name == country_name}
	)
}

function getCountryCode(country_name, data) {
	console.log(getCountryObject(country_name, data).hc-key)
}

var countries = ['Afghanistan','Albania','Algeria','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahrain','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bosnia and Herzegovina','Belarus','Bolivia','Brazil','Brunei','Botswana','Canada','Chile','People\'s Republic of China','Commonwealth of Independent States','Ivory Coast','Colombia','Costa Rica','Cuba','Cyprus','Czech Republic','Czechoslovakia','Denmark','Ecuador','Egypt','Spain','Estonia','Finland','France','German Democratic Republic','Georgia','Germany','Ghana','Gambia','Guatemala','Greece','Hong Kong','Honduras','Croatia','Hungary','Indonesia','India','Ireland','Islamic Republic of Iran','Iraq','Iceland','Israel','Italy','Jamaica','Japan','Kazakhstan','Kenya','Kyrgyzstan','Cambodia','Republic of Korea','Kosovo','Kuwait','Laos','Liechtenstein','Sri Lanka','Lithuania','Luxembourg','Latvia','Macau','Morocco','Malaysia','Republic of Moldova','Madagascar','Mexico','The former Yugoslav Republic of Macedonia','Myanmar','Montenegro','Mongolia','Mozambique','Mauritania','Turkish Republic of Northern Cyprus','Nigeria','Nicaragua','Netherlands','Norway','Nepal','New Zealand','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Democratic People\'s Republic of Korea','Romania','Russian Federation','South Africa','Saudi Arabia','Serbia and Montenegro','Senegal','Singapore','El Salvador','Serbia','Switzerland','Slovakia','Slovenia','Sweden','Syria','Thailand','Tajikistan','Turkmenistan','Trinidad and Tobago','Tunisia','Turkey','Taiwan','Tanzania','United Arab Emirates','Uganda','Ukraine','United Kingdom','Uruguay','United States of America','Union of Soviet Socialist Republics','Uzbekistan','Venezuela','Vietnam','Yugoslavia','Zimbabwe']

// var data = json file

countries.forEach(getCountryCode)