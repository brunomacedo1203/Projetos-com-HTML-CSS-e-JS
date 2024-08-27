//Array com os elementos da tabela periódica
const periodicTable = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, molarMass: 1.008 },
  { symbol: "He", name: "Helium", atomicNumber: 2, molarMass: 4.0026 },
  { symbol: "Li", name: "Lithium", atomicNumber: 3, molarMass: 6.94 },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, molarMass: 9.0122 },
  { symbol: "B", name: "Boron", atomicNumber: 5, molarMass: 10.81 },
  { symbol: "C", name: "Carbon", atomicNumber: 6, molarMass: 12.011 },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, molarMass: 14.007 },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, molarMass: 15.999 },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, molarMass: 18.998 },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, molarMass: 20.18 },
  { symbol: "Na", name: "Sodium", atomicNumber: 11, molarMass: 22.99 },
  { symbol: "Mg", name: "Magnesium", atomicNumber: 12, molarMass: 24.305 },
  { symbol: "Al", name: "Aluminum", atomicNumber: 13, molarMass: 26.982 },
  { symbol: "Si", name: "Silicon", atomicNumber: 14, molarMass: 28.085 },
  { symbol: "P", name: "Phosphorus", atomicNumber: 15, molarMass: 30.974 },
  { symbol: "S", name: "Sulfur", atomicNumber: 16, molarMass: 32.06 },
  { symbol: "Cl", name: "Chlorine", atomicNumber: 17, molarMass: 35.45 },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, molarMass: 39.948 },
  { symbol: "K", name: "Potassium", atomicNumber: 19, molarMass: 39.098 },
  { symbol: "Ca", name: "Calcium", atomicNumber: 20, molarMass: 40.078 },
  { symbol: "Sc", name: "Scandium", atomicNumber: 21, molarMass: 44.956 },
  { symbol: "Ti", name: "Titanium", atomicNumber: 22, molarMass: 47.867 },
  { symbol: "V", name: "Vanadium", atomicNumber: 23, molarMass: 50.942 },
  { symbol: "Cr", name: "Chromium", atomicNumber: 24, molarMass: 51.996 },
  { symbol: "Mn", name: "Manganese", atomicNumber: 25, molarMass: 54.938 },
  { symbol: "Fe", name: "Iron", atomicNumber: 26, molarMass: 55.845 },
  { symbol: "Co", name: "Cobalt", atomicNumber: 27, molarMass: 58.933 },
  { symbol: "Ni", name: "Nickel", atomicNumber: 28, molarMass: 58.693 },
  { symbol: "Cu", name: "Copper", atomicNumber: 29, molarMass: 63.546 },
  { symbol: "Zn", name: "Zinc", atomicNumber: 30, molarMass: 65.38 },
  { symbol: "Ga", name: "Gallium", atomicNumber: 31, molarMass: 69.723 },
  { symbol: "Ge", name: "Germanium", atomicNumber: 32, molarMass: 72.63 },
  { symbol: "As", name: "Arsenic", atomicNumber: 33, molarMass: 74.922 },
  { symbol: "Se", name: "Selenium", atomicNumber: 34, molarMass: 78.96 },
  { symbol: "Br", name: "Bromine", atomicNumber: 35, molarMass: 79.904 },
  { symbol: "Kr", name: "Krypton", atomicNumber: 36, molarMass: 83.798 },
  { symbol: "Rb", name: "Rubidium", atomicNumber: 37, molarMass: 85.468 },
  { symbol: "Sr", name: "Strontium", atomicNumber: 38, molarMass: 87.62 },
  { symbol: "Y", name: "Yttrium", atomicNumber: 39, molarMass: 88.906 },
  { symbol: "Zr", name: "Zirconium", atomicNumber: 40, molarMass: 91.224 },
  { symbol: "Nb", name: "Niobium", atomicNumber: 41, molarMass: 92.906 },
  { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, molarMass: 95.95 },
  { symbol: "Tc", name: "Technetium", atomicNumber: 43, molarMass: 98 },
  { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, molarMass: 101.07 },
  { symbol: "Rh", name: "Rhodium", atomicNumber: 45, molarMass: 102.91 },
  { symbol: "Pd", name: "Palladium", atomicNumber: 46, molarMass: 106.42 },
  { symbol: "Ag", name: "Silver", atomicNumber: 47, molarMass: 107.87 },
  { symbol: "Cd", name: "Cadmium", atomicNumber: 48, molarMass: 112.41 },
  { symbol: "In", name: "Indium", atomicNumber: 49, molarMass: 114.82 },
  { symbol: "Sn", name: "Tin", atomicNumber: 50, molarMass: 118.71 },
  { symbol: "Sb", name: "Antimony", atomicNumber: 51, molarMass: 121.76 },
  { symbol: "Te", name: "Tellurium", atomicNumber: 52, molarMass: 127.6 },
  { symbol: "I", name: "Iodine", atomicNumber: 53, molarMass: 126.9 },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, molarMass: 131.29 },
  { symbol: "Cs", name: "Cesium", atomicNumber: 55, molarMass: 132.91 },
  { symbol: "Ba", name: "Barium", atomicNumber: 56, molarMass: 137.33 },
  { symbol: "La", name: "Lanthanum", atomicNumber: 57, molarMass: 138.91 },
  { symbol: "Ce", name: "Cerium", atomicNumber: 58, molarMass: 140.12 },
  { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, molarMass: 140.91 },
  { symbol: "Nd", name: "Neodymium", atomicNumber: 60, molarMass: 144.24 },
  { symbol: "Pm", name: "Promethium", atomicNumber: 61, molarMass: 145 },
  { symbol: "Sm", name: "Samarium", atomicNumber: 62, molarMass: 150.36 },
  { symbol: "Eu", name: "Europium", atomicNumber: 63, molarMass: 151.96 },
  { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, molarMass: 157.25 },
  { symbol: "Tb", name: "Terbium", atomicNumber: 65, molarMass: 158.93 },
  { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, molarMass: 162.5 },
  { symbol: "Ho", name: "Holmium", atomicNumber: 67, molarMass: 164.93 },
  { symbol: "Er", name: "Erbium", atomicNumber: 68, molarMass: 167.26 },
  { symbol: "Tm", name: "Thulium", atomicNumber: 69, molarMass: 168.93 },
  { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, molarMass: 173.04 },
  { symbol: "Lu", name: "Lutetium", atomicNumber: 71, molarMass: 174.97 },
  { symbol: "Hf", name: "Hafnium", atomicNumber: 72, molarMass: 178.49 },
  { symbol: "Ta", name: "Tantalum", atomicNumber: 73, molarMass: 180.95 },
  { symbol: "W", name: "Tungsten", atomicNumber: 74, molarMass: 183.84 },
  { symbol: "Re", name: "Rhenium", atomicNumber: 75, molarMass: 186.21 },
  { symbol: "Os", name: "Osmium", atomicNumber: 76, molarMass: 190.23 },
  { symbol: "Ir", name: "Iridium", atomicNumber: 77, molarMass: 192.22 },
  { symbol: "Pt", name: "Platinum", atomicNumber: 78, molarMass: 195.08 },
  { symbol: "Au", name: "Gold", atomicNumber: 79, molarMass: 196.97 },
  { symbol: "Hg", name: "Mercury", atomicNumber: 80, molarMass: 200.59 },
  { symbol: "Tl", name: "Thallium", atomicNumber: 81, molarMass: 204.38 },
  { symbol: "Pb", name: "Lead", atomicNumber: 82, molarMass: 207.2 },
  { symbol: "Bi", name: "Bismuth", atomicNumber: 83, molarMass: 208.98 },
  { symbol: "Po", name: "Polonium", atomicNumber: 84, molarMass: 209 },
  { symbol: "At", name: "Astatine", atomicNumber: 85, molarMass: 210 },
  { symbol: "Rn", name: "Radon", atomicNumber: 86, molarMass: 222 },
  { symbol: "Fr", name: "Francium", atomicNumber: 87, molarMass: 223 },
  { symbol: "Ra", name: "Radium", atomicNumber: 88, molarMass: 226 },
  { symbol: "Ac", name: "Actinium", atomicNumber: 89, molarMass: 227 },
  { symbol: "Th", name: "Thorium", atomicNumber: 90, molarMass: 232.04 },
  { symbol: "Pa", name: "Protactinium", atomicNumber: 91, molarMass: 231.04 },
  { symbol: "U", name: "Uranium", atomicNumber: 92, molarMass: 238.03 },
  { symbol: "Np", name: "Neptunium", atomicNumber: 93, molarMass: 237 },
  { symbol: "Pu", name: "Plutonium", atomicNumber: 94, molarMass: 244 },
  { symbol: "Am", name: "Americium", atomicNumber: 95, molarMass: 243 },
  { symbol: "Cm", name: "Curium", atomicNumber: 96, molarMass: 247 },
  { symbol: "Bk", name: "Berkelium", atomicNumber: 97, molarMass: 247 },
  { symbol: "Cf", name: "Californium", atomicNumber: 98, molarMass: 251 },
  { symbol: "Es", name: "Einsteinium", atomicNumber: 99, molarMass: 252 },
  { symbol: "Fm", name: "Fermium", atomicNumber: 100, molarMass: 257 },
  { symbol: "Md", name: "Mendelevium", atomicNumber: 101, molarMass: 258 },
  { symbol: "No", name: "Nobelium", atomicNumber: 102, molarMass: 259 },
  { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, molarMass: 262 },
  { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, molarMass: 267 },
  { symbol: "Db", name: "Dubnium", atomicNumber: 105, molarMass: 270 },
  { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, molarMass: 271 },
  { symbol: "Bh", name: "Bohrium", atomicNumber: 107, molarMass: 270 },
  { symbol: "Hs", name: "Hassium", atomicNumber: 108, molarMass: 277 },
  { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, molarMass: 278 },
  { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, molarMass: 281 },
  { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, molarMass: 282 },
  { symbol: "Cn", name: "Copernicium", atomicNumber: 112, molarMass: 285 },
  { symbol: "Nh", name: "Nihonium", atomicNumber: 113, molarMass: 286 },
  { symbol: "Fl", name: "Flerovium", atomicNumber: 114, molarMass: 289 },
  { symbol: "Mc", name: "Moscovium", atomicNumber: 115, molarMass: 290 },
  { symbol: "Lv", name: "Livermorium", atomicNumber: 116, molarMass: 293 },
  { symbol: "Ts", name: "Tennessine", atomicNumber: 117, molarMass: 294 },
  { symbol: "Og", name: "Oganesson", atomicNumber: 118, molarMass: 294 },
];

const formulaMolecular = document.querySelector("#formulaMolecular");
const calculatorBtn = document.querySelector("#calculatorBtn");
const MassaMolar = document.querySelector("#MassaMolar");

function calculeteMolarMass() {
  // Validar e guardar a fórmula molecular de entrada
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  let MolarMass = 0;

  // Iterar sobre a fórmula molecular e calcular a massa molar
  while ((match = regex.exec(formulaMolecular.value)) !== null) {
    const elementSymbol = match[1];
    const elementCount = parseInt(match[2] || "1", 10);

    // Encontrar o elemento identificado no Array const periodicTable
    const element = periodicTable.find((el) => el.symbol === elementSymbol);

    if (element) {
      // Calcular a massa molar total
      MolarMass += element.molarMass*elementCount;
    } else {
      console.error(
        `Elemento ${elementSymbol} não encontrado na tabela periódica.`
      );
    }
  }

  console.log(`Massa Molar: ${MolarMass} g/mol`);
  // Exibir a massa molar
  MassaMolar.textContent = `${MolarMass} g/mol`;
}

calculatorBtn.addEventListener("click", calculeteMolarMass);

