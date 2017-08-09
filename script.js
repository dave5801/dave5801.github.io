var elem = document.getElementById("element_display");

var elements = {
				//Alkaline metals
                 "H": ["Hydrogen", "1.008", "the most abundant element in universe."],
                 "Li": ["Lithium", "6.94", "is a silvery white alakali metal and may have been one the first elements synthesized by the Big Bang."],
                 "Na": ["Sodium", "22.99", "forms compounds that are vital to industry."],
                 "K": ["Potassium", "39.098", "one of the most common elements in the human body."],
                 "Rb": ["Rubidium", "85.468", "was discovered in 1861 through flame spetroscopy."],
                 "Cs": ["Caesium", "132.91", "is the the softest element."],
                 "Fr": ["Francium", "223", "is highly radioactive and the second rarest naturally occuring element."],

                 //alkaline earth methals
                 "Be": ["Beryllium", "9.0122", "used for lightweight structural components in aerospace"],
                 "Mg": ["Magnesium", "24.305", "produces a bright white light when burns and was used for illumination in early days of photography"],
                 "Ca": ["Calcium", "40.078", "has been used in building materials since early days of human civilization."],
                 "Sr": ["Strontium", "87.62", "forms compounds (Stronium Carbonate) which are used to give fireworks their color."],
                 "Ba": ["Barium", "137.33", "never found in nature due to its high reactivity."],
                 "Ra": ["Radium", "226", "the only radioactive alkaline earth metal. It was discovered by Marie and Pierre Curie in 1891."],

                 //group 3 Transition Metals - Lanthanide - Actinide
                 "Sc": ["Scandium", "44.956", "often classified as a 'rare earth' element."],
                 "Y": ["Yttrium", "88.906", "a rare earth mineral often found in some uranium ores"],
                 "La": ["Lanthanum", "138.91", "is the first element of the Lanthanide series."],
                 "Ac": ["Actinium", "227", "is the first in the Actinide series and used as a neutron source in radiation therapy."],

                 //group 4 Transition Metals
                 "Ti": ["Titanium", "47.867", "a lustrous alloying element is steel. It is highly resistant to corrosion in sea water."],
                 "Zr": ["Zirconium", "91.224", "used a diamond substitute"],
                 "Hf": ["Hafnium", "178.49", "used in alloys with other transition metals and its compounds are used in integrated circuits."],
                 "Rf": ["Rutherfordium", "267", "the most stable known isotope."],

                 //group 5 Transition metals
                 "V": ["Vanadium", "50.942", "used to bond titanium and steel."],
                 "Nb": ["Niobium", "92.906", "used to create superalloys vital to aerospace."],
                 "Ta": ["Tantalum", "180.95", "widely used in capicitors to make electronics."],
                 "Db": ["Dubnium", "268", "difficult to research to the short half life of even its most stable isotope."],

                 //group 6 Transition metals
                 "Cr": ["Chromium", "51.996", "highly lustrous and has a high melting point."],
                 "Mo": ["Molybdenum", "95.95", "not found as a naturally occuring free element, rather in oxidation states in various minerals."],
                 "W": ["Tungsten", "183.84", "has the highest melting point of pure of all pure metals and widely used in commerical products."],
                 "Sg": ["Seaborgium", "269", "a synthetic element whose most stable isotope possesses a half-life of nearly 3.1 minutes."],

                 //group 7 Transition metals
                 "Mn": ["Manganese", "54.938", "often found in compounds with iron."],
                 "Tc": ["Technetium", "98", "occurs in the Earth's crust in small quantities of which are the products of fission in uranium ore."],
                 "Re": ["Rhenium", "186.21", "one of the rarest in elements in Earth's crust."],
                 "Bh": ["Bohrium", "270", "named for renowned physicist Niels Bohr - who profound contributions to our understanding of the atom."],

                 //group 8 Transition metals
                 "Fe": ["Iron", "55.845", "most common element on Earth in terms of mass."],
                 "Ru": ["Ruthenium", "101.07", "inert to most chemicals."],
                 "Os": ["Osmium", "190.23", "densest naturally occuring element."],
                 "Hs": ["Hassium", "277", "not known to occur naturally on Earth, it is created artifically as a synthetic element."],

                 //group 9 Transition metals
                 "Co": ["Cobalt", "58.933", "widely used in human production for centuries. Cobalt has been detected in Egyptian sculpture and jewelry from the ruins of Pompeii."],
                 "Rh": ["Rhodium", "102.91", "used in automobiles catalytic converters."],
                 "Ir": ["Iridium", "192.22", "used as evidence to explain the extinction of the Dinosaurs. A layer of iridium was identified in a large meteor crater dating back to Cretaceous period."],
                 "Mt": ["Meitnerium", "278", "radioactive syntheitc element with no naturallyoccuring isotopes."],


                 //group 10 Transition metals
                 "Ni": ["Nickel", "58.693", "one of four elements magnetic at approximately room temperature. Nickel has widely used in human civilization since 3500 BCE."],
                 "Pd": ["Palladium", "106.42", "used to make proffesional grade flutes...and a great many other commercial products."],
                 "Pt": ["Platinum", "195.08", "an extremely rare element and highly resistant to corrosion."],
                 "Ds": ["Darmstadtium", "281", "not widely understood due to short half lives of its isotopes."],

                 //group 11 Transition metals
                 "Cu": ["Copper", "63.546", "soft, malleable, and possesses high thermal and electrical reactivity."],
                 "Ag": ["Silver", "107.87", "the element with highest electrical and thermal conductivity."],
                 "Au": ["Gold", "196.96", "precious metal used in jewelry and coinage."],
                 "Rg": ["Roentgenium", "282", "predicted to be a noble metal - metals which are resistant to corrosion and oxidation in moist air."],

                 //group 12 Transition metals
                 "Zn": ["Zinc", "65.38", "alloyed to copper to make 'Brass'."],
                 "Cd": ["Cadmium", "112.41", "commonly used to resist corrosion on steel."],
                 "Hg": ["Mercury", "200.59", "known as 'quicksilve' and has serious negative health effects"],
                 "Cn": ["Copernicium", "285", "an extremely radioactive, synthetic named after the astronomer Nicolaus Copernicus"],

                 //group 13 Metaloids
                 "B": ["Boron", "10.81", "produced by naturally occuring nuclear fission and supernovae."],
                 "Al": ["Aluminum", "26.982", "most widely used non-magnetic metal which makes of 8% of the Earth's Crust."],
                 "Ga": ["Gallium", "69.723", "used in semiconductors."],
                 "In": ["Indium", "114.82", "used in semiconductors applications but was once widely used in aircraft engines during WWII."],
                 "Tl": ["Thalium", "204.38", "currently the subject of research in the field of superconductivity."],
                 "Nh": ["Nihonium", "286", "of many elemental discoveries from the Joint Institute for Nuclear Research in Dubna, Russia."],

                 //group 14
                 "C": ["Carbon", "12.011", "the fourth the most abundant element in the universe by mass."],
				 "Si": ["Silicon", "28.085", "ideal for electronic circuits because it can sustain electrical activity at high tempreature."],
				 "Ge": ["Germanium", "72.630", "created by stellar nucleosynthesis and has been detected in the atmosphere of Jupiter."],
				 "Sn": ["Tin", "118.71", "been in common usage since the early Bronze Age."],
				 "Pb": ["Lead", "207.2", "highly toxic due to its ability to interfere with the proper functioning of enzymes."],
				 "Fl": ["Flerovium", "289", "currently the heaviest element to have to had its chemistry experimentally investigated."],

				 //group 15
				 "N": ["Nitrogen", "14.007", "used by many industrial compounds such as fertilizer"],
				 "P": ["Phosphorus", "30.974", "emits a faint glow when exposed to oxygen, it's name refers to the planet Venus."],
				 "As": ["Arsenic", "74.922", "used in pesticides."],
				 "Sb": ["Antimony", "121.76", "widely used as a flame retardant."],
				 "Bi": ["Bismuth", "208.98", "used in popular antidiarheal medicines"],
				 "Mc": ["Moscovium", "290", "super heavy element whose chemical characteristics remain difficult to detect."],

				 //group 16
				 "O": ["Oxygen", "15.999", "constitutes 20.8% of Earth's atmosphere."],
				 "S": ["Sulfur", "32.06", "referred to in the Bible as 'Brimstone.'"],
				 "Se": ["Selenium", "78.971", "toxic in large doses, however is in essential micronutrient in animals."],
				 "Te": ["Tellerium", "127.60", "more common in the univers than on Earth."],
				 "Po": ["Polonium", "209", "like Radium, also discovered by the Curies."],
				 "Lv": ["Livermorium", "293", "highly radioactive with an atomic number 16. It has never been observed in nature."],

				 //group 15
				 "F": ["Fluorine", "18.998", "the lightest halogen, highly reactive, and observed to form compounds with noble gases."],
				 "Cl": ["Chlorine", "35.45", "bonds with sodium to form common table salt - sodium chloride."],
				 "Br": ["Bromine", "79.904", "not known to have a vital role in human biology."],
				 "I": ["Iodine", "126.90", "used as a disinfectant."],
				 "At": ["Astatine", "210", "It is the rarest naturally occurring element on the Earth's crust."],
				 "Ts": ["Tennessine", "294", "second heaviest known element, discovered by Russian and American collaboration in April 2010."],

				 //group 17
                 "He": ["Helium", "4.0026", "the first the noble gases, and has the lowest boiling point among all elements."],   
                 "Ne": ["Neon", "20.18", "often used in signs as it produces a bright orange-red light."],
                 "Ar": ["Argon", "39.948", "the most abundant noble gas in Earth's Crust."],
                 "Kr": ["Kr", "83.798", "used in lighting and photography"],
                 "Xe": ["Xenon", "131.29", "the first noble gas discovered to form compounds with other elements in 1962."],
                 "Rn": ["Radon", "222", "a remnant of nuclear decay of the element Radium."],  
                 "Og": ["Oganesson", "294", "of the highest atomic number 118 and highest atomic mass."],

                 //Lanthanides
                 "Ce": ["Cerium", "140.12", "tarnished when exposed to air and is soft enough to be cut with a knife."],
                 "Pr": ["Praseodymium", "140.91", "a lanthanide considered to be a 'rare Earth' element."],
                 "Nd": ["Neodymium", "144.24", "used to make the strongest known magnets."],
                 "Pm": ["Promethium", "145", "the only lanthanide with no stable isotopes."],
                 "Sm": ["Samarium", "150.36", "is a component in anti-cancer medicine (Samarium (153Sm) lexidronam)."],
                 "Eu": ["Europium", "151.96", "is produced by nuclear fission."],
                 "Gd": ["Gadolinium", "157.25", "is used in MRI."],
                 "Tb": ["Terbium", "158.93", "used to target tumors in neutron therapy."],
                 "Dy": ["Dyprosium", "162.50", "not widely used in many applications."],
                 "Ho": ["Holmium", "164.93", "of the highest magnetic strength of all known elements."],
                 "Er": ["Erbium", "167.26", "is used in neutron-absorbing control rods in nuclear technology."],
                 "Tm": ["Thulium", "168.93", "is an active laser medium material with high efficiency."],
                 "Yb": ["Ytterbium", "173.05", "is used in the world's most stable atomic clock."],
                 "Lu": ["Lutetium", "174.97", "the final element in the lanthanide series, and has few uses due its rarity."],

                 //Actinides
                 "Th": ["Thorium", "232.04", "suggested to be a vital to nuclear power source possibly replacing uranium and plutonium."],
                 "Pa": ["Protactinium", "231.04", "not widely used outside scientific research due to its scarcity and high radioactivity."],
                 "U": ["Uranium", "238.03", "widely used in nuclear power plants and nuclear weapons."],
                 "Np": ["Neptunium", "237", "the first transuranic element - which may be used to synthesize super-heavy elements."],
                 "Pu": ["Plutonium", "244", "highly radioactive, its isotope Pu-239 is one of three used in nuclear fission"],
                 "Am": ["Amercurium", "243", "radioactive and used in household smoke detectors."],
                 "Cm": ["Curium", "247", "radioactive actinide named for Marie and Pierre Curie."],
                 "Bk": ["Berkelium", "247", "produced by bombarding Uranium and Plutonium isotopes with neutrons in a nuclear reactor."],
                 "Cf": ["Californium", "251", "is a strong neutron emitter useful in nuclear reactors."],
                 "Es": ["Einstenium", "252", "highly radioactive and potentially useful in radiation therapy."],
                 "Fm": ["Fermium", "257", "the heaviest element that can be formed by neutron bombardment of lighter elements."],
                 "Md": ["Mendelevium", "258", "the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements."],
                 "No": ["Nobelium", "259", "named in honor of Alfred Nobel - inventor of dynamite."],
                 "Lr": ["Lawrencium", "266", "named in honor of Ernest Lawrence, inventor of the cyclotron."]
               };



var likedElements = [];
console.log(likedElements);

function getElementInfo(element){
    
    if(!likedElements.includes(element)){
        likedElements.push(element);
    }
    
    for (var el in elements){
		tmp = elements[el];
		if(el == element){
			console.log(tmp[0] + " has an atomic weight of " + tmp[1] + " and is " +tmp[2]);
        	document.getElementById("element_display").innerHTML = tmp[0] + " has an atomic wieght of " + tmp[1] + " and is " +tmp[2];
      	}
    }

    console.log(likedElements);
    if(likedElements.length >= 5){
        likedElements = [];
    }
    localStorage.setItem("stored", likedElements);//local storage
}

if (localStorage.getItem("stored") === null) {
  console.log("local storage is null");
}else{
    console.log("local storage is NOT null");
    document.getElementById("liked").innerHTML = "You liked some of the following elements previously: " +localStorage.getItem("stored");
}

