const countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua And Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Asia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Baker Island', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bonaire, Saint Eustatius And Saba', 'Bosnia And Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Colombia', 'Comoros', 'Congo', 'Congo (Democratic Republic Of The)', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czech Republic', "Côte D'Ivoire", 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Islas Malvinas)', 'Faroe Islands', 'Federated States Of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern And Antarctic Lands', 'Gabon', 'Gambia', 'Gaza Strip', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Heard Island And Mcdonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle Of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kingman Reef', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'North America', 'North Korea', 'Northern Mariana Islands', 'Norway', 'Oceania', 'Oman', 'Pakistan', 'Palau', 'Palestina', 'Palmyra Atoll', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Kitts And Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre And Miquelon', 'Saint Vincent And The Grenadines', 'Samoa', 'San Marino', 'Sao Tome And Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia And The South Sandwich Isla', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard And Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Tonga', 'Trinidad And Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks And Caicas Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe', 'Åland'];

const mean_temp = [14.045007194244604, 12.610645925457991, 22.98511176905996, 26.611965009208106, 11.201553063802905, 21.824549189814814, 26.61049185043145, 26.437924256951106, 14.621194210526316, 8.55164792663477, 27.920390220517735, 7.347892223161453, 21.62469689119171, 6.210731838281744, 11.175936074918566, 25.12822004008016, 25.9308093346574, 25.37235023279876, 24.820242783708977, 26.458547938638542, 5.819288060644347, 9.483378395451673, 25.052099776286354, 27.17199943181818, 11.811878969957082, 20.87723052631579, 27.17329482262704, 10.421283954516742, 21.87929669156884, 24.69925554528651, 26.336523239099186, 10.482968414403032, 28.083506760411034, 23.70619723953696, 20.070990127758417, 26.65685403576607, 24.35258559077809, -5.216658945686901, 24.185563568376068, 26.72250415028397, 25.280406916426514, 27.120466282420747, 9.383473684210525, 6.612731031349386, 25.78465407131453, 24.716870967741936, 25.702209302325578, 24.462931988472622, 23.77366493955095, 25.61578443420379, 11.342399873657612, 25.40742638706859, 27.353414669223394, 18.78774568642161, 7.62601926721415, 25.948536060279874, 7.832859444093494, 28.8166025331725, 26.110151486097795, 25.54751121076233, 21.869970347003154, 22.620693031209917, 24.90670454545455, 24.921677809798272, 26.802653110047846, 4.819805748578648, 23.01235675997618, 6.076773492667029, 6.619001579279849, 26.944357771261004, 25.038671779141108, 1.244742261528743, 10.416045799115604, 25.718151106833492, 26.10709611829944, 4.9831111111111115, 24.25472564841499, 27.538551816239316, 19.192636960985624, 8.106881895881896, 8.152496209728364, 26.711013551665726, 14.773012002526848, -18.58745804195804, 26.741952061361456, 26.329560882070954, 26.996834337349398, 23.111650494159928, 10.928408717624764, 25.4523530982906, 26.761366648850878, 25.93092011549567, 26.295837740923353, 2.5621149425287357, 24.69554799459216, 22.65989491362764, 9.722423246999368, 1.4050650663297535, 23.873789473684212, 25.684483767961684, 17.607076451156203, 21.775628879310347, 9.419558433354391, 9.365805432722679, 19.62657730263158, 12.737121920404297, 26.09633956386293, 11.951907335907336, 10.928408717624764, 19.346512587701195, 5.202144758735441, 24.102428231089934, 27.133034438775514, 26.73686534779834, 25.098140232108317, 3.2204981651376143, 23.574696349065007, 5.3205451674036635, 17.63161773078487, 13.726681793913508, 25.37773793103448, 22.268253938484623, 4.642939039797853, 5.9079917877447885, 9.165196462413139, 22.418374760076777, 10.37555085281112, 22.74904594441293, 21.431086144578316, 25.80544200779727, 28.441976570820025, 18.494875319693094, 26.110151486097795, 27.620255504352276, 23.522653983353155, 26.34096142938174, 20.56755804195804, 8.9317166771952, 9.024701831964624, -0.8206709844559585, 10.214629500947568, 26.383128475551292, 17.627497409326427, 23.59619475878499, 20.484495197438637, 14.807390612244896, 9.112799115603286, 22.700108194965186, 10.371239107883817, 25.957508780036967, 27.458972540045767, 26.7447083091226, 25.094878453038675, 2.0283738920225622, 6.748336832061068, 26.996834337349398, 0.09580385344283003, 21.452989119170983, 26.916862665897284, 20.615513304305757, 27.216379332477533, 23.125663223140496, 27.16345599489796, 26.29162063808574, 24.450801898734177, 23.237967557251906, 19.935974230044, 26.44047248677249, 7.46020593809223, 14.688179987212276, 25.451961667465262, 26.784996015936255, 23.30140309155767, 8.76090176879343, -5.521881912681913, 19.244422183507552, 26.61049185043145, 25.852186001917545, 26.646838446788113, 26.61049185043145, 4.223059955113818, 26.78944870565676, 26.33186249232658, 13.83142229943146, 25.794386167146975, 25.546407835258666, 27.967375, 9.986563171193936, 26.738423142370962, 26.02257127715951, 26.52310282651072, 26.61049185043145, 7.527216993051168, 9.659700568540746, 26.62503698979592, 26.877085169743896, 17.27098291510945, 1.4010251017639077, 11.849048745173745, 13.612834175615918, 26.947687001594897, 27.09335942857143, 26.17166313763234, -7.448027925531916, 18.83980726107848, 2.3863319646241314, 6.992051484523057, 17.917548596990645, 21.93742753623188, 4.016035217794253, 22.34791097178684, 25.986800979519142, 25.966332718327187, 26.87178275666478, 23.236247852760734, 26.11875119846596, 19.97059047314578, 11.631567300916139, 14.781998181818182, 26.662733508082134, 23.03296871378911, 7.653507264687303, 27.693994700582934, 8.655788060644348, 8.60357252215955, 17.149306774809162, 12.278015938069217, 25.025685522531163, 23.688365504061156, 26.336523239099186, 22.31981782334385, 26.25359672528805, 21.282955621301774, 21.117547246376812, 5.291383449147189];

const data = [{
    type: 'choropleth',
    locations: countries,
    z: mean_temp,
    locationmode: 'country names',
    text: countries,
    marker: {
        line: {
            color: 'rgb(0,0,0)',
            width: 1
        }
    },
    colorbar: {
        autotick: true,
        tickprefix: '',
        title: '# Average\nTemperature,\n°C'
    }
}];

const layout = {
    title: 'Average land temperature in countries',
    geo: {
        showframe: false,
        showocean: true,
        oceancolor: 'rgb(0,255,255)',
        projection: {
            type: 'orthographic',
            rotation: {
                lon: 60,
                lat: 10
            }
        },
        lonaxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        },
        lataxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        }
    }
};

Plotly.newPlot('plot', data, layout);