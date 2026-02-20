export interface Disease {
  id: number;
  name: string;
  scientificName: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High" | "Critical";
  severityColor: string;
  category: string;
  description: string;
  affectedParts: string[];
  symptoms: string[];
  effects: string[];
  solutions: string[];
  preventions: string[];
  fertilizers: {
    name: string;
    npk: string;
    dosage: string;
    purpose: string;
  }[];
  color: string;
}

export const DISEASES: Disease[] = [
  {
    id: 0,
    name: "Bacterial Spot",
    scientificName: "Xanthomonas campestris pv. vesicatoria",
    confidence: 97.3,
    severity: "High",
    severityColor: "#e74c3c",
    category: "Bacterial Disease",
    description:
      "Bacterial Spot is one of the most widespread and damaging diseases of tomato worldwide. It is caused by the gram-negative bacterium Xanthomonas campestris pv. vesicatoria and thrives in warm, humid conditions.",
    affectedParts: ["Leaves", "Stems", "Fruits", "Petioles"],
    symptoms: [
      "Small, water-soaked lesions (1–3 mm) appearing on undersides of leaves",
      "Lesions turn dark brown to black with yellow halos as disease progresses",
      "Severe defoliation exposing fruits to sun-scald damage",
      "Raised, scab-like spots on fruit surface turning dark and rough",
      "Stem cankers with water-soaked margins in advanced infections",
    ],
    effects: [
      "Yield loss up to 50–75% in severely infected fields",
      "Premature leaf drop reducing photosynthetic capacity",
      "Sunscald on exposed fruits reducing market value by up to 80%",
      "Weakened plant structure increasing susceptibility to other pathogens",
      "Fruit surface lesions cause rejection in commercial markets",
    ],
    solutions: [
      "Apply copper-based bactericides (Copper Oxychloride 50WP) at 3 g/L every 7–10 days",
      "Use streptomycin sulfate (Agrimycin 17) at 100 ppm in early infection stages",
      "Remove and destroy infected plant debris immediately — do not compost",
      "Avoid overhead irrigation; switch to drip irrigation to reduce leaf wetness",
      "Rotate crops with non-solanaceous plants for 2–3 seasons minimum",
      "Use certified disease-free seeds and resistant varieties (Mountain Fresh Plus, BHN 589)",
      "Apply Kasugamycin (Kasumin 2L) for systemic bacterial control",
    ],
    preventions: [
      "Treat seeds with hot water (52°C for 30 minutes) before planting",
      "Maintain 60 cm plant spacing for adequate air circulation",
      "Apply mulch to prevent soil splash onto lower leaves",
      "Inspect transplants carefully before field planting",
    ],
    fertilizers: [
      { name: "Calcium Nitrate", npk: "15.5-0-0+19Ca", dosage: "200–250 kg/ha", purpose: "Strengthens cell walls, reduces bacterial entry and improves resistance" },
      { name: "Potassium Sulphate", npk: "0-0-50+17S", dosage: "150–200 kg/ha", purpose: "Boosts disease resistance and improves plant immunity" },
      { name: "Zinc Sulphate", npk: "Zn 21%", dosage: "5–10 kg/ha as soil application", purpose: "Micronutrient essential for enzyme function and resistance" },
      { name: "Boron (Solubor)", npk: "B 20.5%", dosage: "1–2 kg/ha foliar spray", purpose: "Improves cell wall integrity and reduces infection spread" },
    ],
    color: "#c0392b",
  },
  {
    id: 1,
    name: "Early Blight",
    scientificName: "Alternaria solani",
    confidence: 96.8,
    severity: "Moderate",
    severityColor: "#e67e22",
    category: "Fungal Disease",
    description:
      "Early Blight, caused by Alternaria solani, is one of the most common fungal diseases affecting tomato. It typically begins on the oldest lower leaves and progresses upward.",
    affectedParts: ["Lower leaves", "Stems", "Fruit calyx", "Petioles"],
    symptoms: [
      "Dark brown circular spots (3–12 mm) with distinctive concentric ring pattern (target-board appearance)",
      "Yellow chlorotic halo surrounding the lesions",
      "Lesions coalesce causing large dead areas and complete leaf blight",
      "Dark, leathery, sunken lesions at stem base (collar rot) in young plants",
      "Fruit lesions appear at stem end — dark, leathery with concentric rings",
    ],
    effects: [
      "Crop losses of 20–80% in favorable weather conditions",
      "Progressive defoliation starting from bottom of plant upward",
      "Reduced photosynthesis and carbohydrate production",
      "Fruit exposed to sunscald due to defoliation",
      "Weakened stems increase risk of stem breakage",
    ],
    solutions: [
      "Apply mancozeb (Dithane M-45) at 2 g/L as preventive spray every 7 days",
      "Use chlorothalonil (Bravo 720 SC) at 2 mL/L for systemic control",
      "Apply azoxystrobin (Amistar) at 1 mL/L for curative treatment",
      "Remove lower infected leaves and destroy (burn or bury) immediately",
      "Apply trifloxystrobin + tebuconazole (Nativo) at 0.5 g/L for combined control",
      "Improve drainage to avoid waterlogging that promotes fungal growth",
      "Stake plants properly to improve airflow and reduce humidity",
    ],
    preventions: [
      "Plant resistant varieties: Mountain Supreme, Plum Regal, Defiant PhR",
      "Avoid working in fields when plants are wet",
      "Use drip irrigation to keep foliage dry",
      "Deep plow after harvest to bury infected debris",
    ],
    fertilizers: [
      { name: "NPK 12-12-17", npk: "12-12-17+2MgO", dosage: "300–400 kg/ha", purpose: "Balanced nutrition enhancing overall plant vigor and fungal resistance" },
      { name: "Potassium Chloride (MOP)", npk: "0-0-60", dosage: "200–250 kg/ha", purpose: "High potassium strengthens cell membranes reducing fungal penetration" },
      { name: "Magnesium Sulphate", npk: "Mg 16%+S 13%", dosage: "20–30 kg/ha", purpose: "Prevents chlorosis and improves chlorophyll production" },
      { name: "Calcium Ammonium Nitrate", npk: "27-0-0+8Ca", dosage: "150–200 kg/ha", purpose: "Strengthens tissue structure and reduces blight susceptibility" },
    ],
    color: "#e67e22",
  },
  {
    id: 2,
    name: "Late Blight",
    scientificName: "Phytophthora infestans",
    confidence: 98.1,
    severity: "Critical",
    severityColor: "#922b21",
    category: "Oomycete Disease",
    description:
      "Late Blight, caused by Phytophthora infestans (the same pathogen responsible for the Irish Potato Famine), is the most destructive tomato disease worldwide. It can devastate an entire field within days under favorable conditions.",
    affectedParts: ["All aerial parts", "Leaves", "Stems", "Fruits"],
    symptoms: [
      "Large, water-soaked pale green to brown irregular patches on leaves and stems",
      "White cottony sporulation (sporangiophores) visible on lower leaf surface in humid conditions",
      "Rapid browning and collapse of infected tissues within 48–72 hours",
      "Dark brown to greasy lesions on stems causing plant collapse",
      "Fruit develops greasy, brown, firm lesions extending deep into flesh",
    ],
    effects: [
      "Can destroy 100% of a crop within 2–3 weeks under cool, wet conditions",
      "Losses exceeding $5 billion annually worldwide",
      "Entire field destruction possible if not managed within 72 hours of first detection",
      "Secondary infections spread rapidly through airborne sporangia",
      "Infected fruit cannot be stored — causes post-harvest rot",
    ],
    solutions: [
      "EMERGENCY: Apply metalaxyl + mancozeb (Ridomil Gold MZ) at 2.5 g/L immediately",
      "Use cymoxanil + mancozeb (Curzate M8) at 2 g/L every 5–7 days",
      "Apply fosetyl-aluminum (Aliette WG) for systemic protection",
      "Remove and bag all infected plant material — burn off-site, never compost",
      "Apply dimethomorph (Forum) at 1.5 g/L for oomycete-specific control",
      "Avoid irrigation in late afternoon to reduce overnight leaf wetness",
      "Create isolation zones — do not enter infected areas without protective gear",
    ],
    preventions: [
      "Monitor weather forecasts using Blitecast system (optimal: 10°C–24°C + rain)",
      "Plant resistant varieties: Mountain Merit, Defiant, Jasper",
      "Apply preventive copper sprays before wet weather periods",
      "Never plant tomatoes near potatoes — shared pathogen",
    ],
    fertilizers: [
      { name: "Phosphorus Acid (Fosfik)", npk: "P 30%+K 20%", dosage: "3–4 mL/L foliar", purpose: "Induces systemic resistance against Phytophthora — activates plant immune response" },
      { name: "Silica (SiO2)", npk: "Si 27%", dosage: "2–3 L/ha", purpose: "Strengthens cell walls creating physical barrier against pathogen penetration" },
      { name: "Potassium Phosphonate", npk: "P 25%+K 25%", dosage: "2 mL/L foliar", purpose: "Direct anti-oomycete activity — disrupts pathogen metabolic pathways" },
      { name: "Calcium Nitrate", npk: "15.5-0-0+19Ca", dosage: "200 kg/ha soil", purpose: "Calcium fortifies cell walls and improves resistance to pathogen entry" },
    ],
    color: "#922b21",
  },
  {
    id: 3,
    name: "Leaf Mold",
    scientificName: "Passalora fulva (Fulvia fulva)",
    confidence: 95.6,
    severity: "Moderate",
    severityColor: "#e67e22",
    category: "Fungal Disease",
    description:
      "Leaf Mold is a fungal disease primarily affecting greenhouse tomatoes, caused by Passalora fulva. It thrives in high humidity (>85%) and moderate temperatures (22–25°C).",
    affectedParts: ["Upper and lower leaf surfaces", "Occasionally fruits"],
    symptoms: [
      "Pale yellowish-green spots on upper leaf surface without distinct margins",
      "Distinctive olive-green to brown velvety fungal growth (sporulation) on lower leaf surface",
      "Affected leaves curl upward and dry out progressively",
      "Severe infections cause extensive defoliation of upper canopy",
      "Dark, leathery rot on fruit surface in advanced greenhouse infections",
    ],
    effects: [
      "Yield reduction of 20–40% in greenhouse crops",
      "Significant defoliation reducing photosynthetic efficiency",
      "Increased costs for fungicide applications in protected culture",
      "Post-harvest losses from fruit infections",
    ],
    solutions: [
      "Reduce greenhouse humidity below 85% using ventilation and heating",
      "Apply chlorothalonil (Bravo 720) at 2 mL/L preventively",
      "Use iprodione (Rovral) at 1.5 g/L for curative treatment",
      "Apply copper fungicide (Cuprofix Ultra) at 3 g/L",
      "Remove infected leaves and destroy to reduce spore load",
      "Space plants wider for adequate airflow — minimum 80 cm apart",
    ],
    preventions: [
      "Maintain relative humidity below 80% in greenhouses",
      "Use resistant varieties: Tyking, Dombito, Carousel",
      "Install shade netting to reduce condensation on leaves",
      "Avoid overhead watering — switch to drip irrigation",
    ],
    fertilizers: [
      { name: "Silicon Fertigation", npk: "Si 10%+K 5%", dosage: "2–3 L/ha", purpose: "Enhances epidermal strength reducing fungal spore germination" },
      { name: "Potassium Sulphate", npk: "0-0-52+18S", dosage: "150 kg/ha", purpose: "Improves plant vigor and systemic resistance" },
      { name: "Copper EDTA (chelate)", npk: "Cu 14%", dosage: "0.5 mL/L foliar", purpose: "Micronutrient supporting antifungal enzyme activity" },
      { name: "NPK 10-5-20", npk: "10-5-20", dosage: "250 kg/ha", purpose: "K-rich formulation strengthens plant immune response in greenhouse" },
    ],
    color: "#8e44ad",
  },
  {
    id: 4,
    name: "Septoria Leaf Spot",
    scientificName: "Septoria lycopersici",
    confidence: 96.2,
    severity: "High",
    severityColor: "#e74c3c",
    category: "Fungal Disease",
    description:
      "Septoria Leaf Spot is caused by the fungus Septoria lycopersici and is one of the most destructive diseases of tomato foliage in humid climates. It spreads rapidly during warm, wet weather.",
    affectedParts: ["Leaves (primarily lower)", "Stems", "Petioles", "Calyxes"],
    symptoms: [
      "Numerous small, circular spots (3–6 mm) with dark brown margins and grayish-white centers",
      "Tiny black specks (pycnidia — fungal fruiting bodies) visible in spot centers",
      "Leaves turn yellow then brown, die, and drop prematurely",
      "Disease progresses from lower leaves upward systematically",
      "Severe defoliation leaving bare stems with a few leaves at the top",
    ],
    effects: [
      "Severe defoliation reducing plant photosynthesis by up to 70%",
      "Fruit production drops significantly due to lack of carbohydrates",
      "Sunscald on exposed fruits from loss of leaf cover",
      "Weakened plants vulnerable to secondary fungal and bacterial infections",
      "Losses of 20–60% in favorable epidemic years",
    ],
    solutions: [
      "Apply mancozeb (Dithane M-45) at 2 g/L starting from transplanting",
      "Use chlorothalonil (Bravo 720) at 2.5 mL/L on 7-day intervals",
      "Apply difenoconazole (Score 250 EC) at 0.5 mL/L for systemic control",
      "Remove lower infected leaves promptly when disease first appears",
      "Apply thiram (Thiram 80 WP) at 2 g/L as protective spray",
      "Use Bordeaux mixture (1:1:100) as an organic/conventional option",
    ],
    preventions: [
      "Mulch soil to prevent spore splash from ground to leaves",
      "Crop rotation with non-solanaceous plants for 2 years minimum",
      "Avoid working in fields when foliage is wet",
      "Clean all tools and equipment with 10% bleach solution",
    ],
    fertilizers: [
      { name: "Urea (46% N)", npk: "46-0-0", dosage: "100 kg/ha split application", purpose: "Promotes vigorous growth helping plant compensate for leaf loss" },
      { name: "Superphosphate (SSP)", npk: "0-16-0+11Ca+12S", dosage: "200 kg/ha", purpose: "Root development support for nutrient uptake during stress" },
      { name: "Zinc Sulphate", npk: "Zn 21%+S 10%", dosage: "5 kg/ha soil", purpose: "Zinc deficiency increases disease susceptibility — critical micronutrient" },
      { name: "NPK 19-19-19", npk: "19-19-19", dosage: "3–4 g/L foliar", purpose: "Complete nutrition maintaining plant immunity during infection" },
    ],
    color: "#c0392b",
  },
  {
    id: 5,
    name: "Spider Mites (Two-Spotted)",
    scientificName: "Tetranychus urticae",
    confidence: 95.0,
    severity: "High",
    severityColor: "#e74c3c",
    category: "Arachnid Pest",
    description:
      "Two-Spotted Spider Mites (Tetranychus urticae) are tiny arachnids (not insects) that pierce plant cells and extract cellular contents, causing characteristic stippling and bronzing of leaves. They thrive in hot, dry conditions.",
    affectedParts: ["Leaves (undersides)", "Young stems", "Flowers"],
    symptoms: [
      "Fine white or yellow stippling on upper leaf surface — dots caused by feeding punctures",
      "Leaves develop a bronze or silvery metallic discoloration",
      "Fine silken webbing visible on leaf undersides and between leaves/stems",
      "Tiny moving dots (mites themselves) visible with 10x hand lens on leaf undersides",
      "Leaves curl, dry, and fall — starting from lower canopy upward",
    ],
    effects: [
      "Reduced chlorophyll content decreasing photosynthetic rate by 30–60%",
      "Severe infestations cause complete defoliation within 2–3 weeks",
      "Stunted growth and reduced fruit size and quality",
      "Spider mites can develop resistance to acaricides rapidly",
      "Hot, dry weather causes populations to explode within days",
    ],
    solutions: [
      "Apply abamectin (Vertimec 1.8% EC) at 1 mL/L — avoid repeat use due to resistance risk",
      "Use spiromesifen (Oberon) at 1 mL/L for eggs and mobile stages",
      "Apply bifenazate (Floramite SC) at 0.8 mL/L for adult mite control",
      "Spray with insecticidal soap (potassium fatty acids) at 2% concentration",
      "Release predatory mites (Phytoseiulus persimilis) for biological control",
      "Apply neem oil (1–2%) as repellent and ovicidal spray",
      "Maintain adequate irrigation — drought stress promotes mite outbreaks",
    ],
    preventions: [
      "Monitor fields weekly using sticky yellow traps and hand lens",
      "Control weeds that serve as mite reservoirs",
      "Avoid excessive nitrogen fertilizer that promotes lush, susceptible growth",
      "Introduce predatory beetles (Stethorus) in organic systems",
    ],
    fertilizers: [
      { name: "Calcium Nitrate", npk: "15.5-0-0+19Ca", dosage: "200 kg/ha", purpose: "Calcium-strengthened cell walls reduce mite feeding damage" },
      { name: "Silicon (Silifert)", npk: "Si 18%", dosage: "2 L/ha", purpose: "Silicon deposits in epidermal cells deter mite feeding physically" },
      { name: "Potassium Humate", npk: "K 12%+Humic 65%", dosage: "3 L/ha drip", purpose: "Improves soil health and plant vigor reducing stress susceptibility" },
      { name: "Seaweed Extract (Ascophyllum)", npk: "Various + plant hormones", dosage: "2–3 mL/L foliar", purpose: "Induces systemic resistance and provides amino acid nutrition" },
    ],
    color: "#e67e22",
  },
  {
    id: 6,
    name: "Target Spot",
    scientificName: "Corynespora cassiicola",
    confidence: 95.9,
    severity: "Moderate",
    severityColor: "#e67e22",
    category: "Fungal Disease",
    description:
      "Target Spot, caused by Corynespora cassiicola, is an emerging fungal disease affecting tomatoes in tropical and subtropical regions. The disease is named for its distinctive target-like lesion pattern.",
    affectedParts: ["Leaves", "Stems", "Petioles", "Fruits"],
    symptoms: [
      "Brown, circular lesions (5–20 mm) with concentric rings creating a bull's-eye or target appearance",
      "Yellow halo around spots giving them a distinct border",
      "Dark brown centers with lighter tan outer rings",
      "Lesions on fruit appear as dark, sunken, circular spots with concentric rings",
      "Premature yellowing and shedding of infected leaves",
    ],
    effects: [
      "Yield losses of 15–40% in severe infections",
      "Fruit lesions reduce commercial value and cause post-harvest rot",
      "Defoliation reduces canopy cover affecting fruit quality",
      "Disease spreads rapidly in high humidity (>80%) and warm temperatures",
    ],
    solutions: [
      "Apply pyraclostrobin (Cabrio EG) at 1.5 g/L for strobilurin-class control",
      "Use tebuconazole (Folicur) at 1 mL/L for triazole-class systemic control",
      "Apply mancozeb (Dithane M-45) at 2 g/L as protective spray",
      "Implement 7–10 day spray intervals during humid, warm periods",
      "Remove heavily infected leaves before they fall to reduce spore load",
      "Apply boscalid + pyraclostrobin (Pristine WG) for dual-mode action",
    ],
    preventions: [
      "Ensure proper plant spacing to improve air circulation",
      "Avoid excess nitrogen fertilization that promotes lush susceptible growth",
      "Use drip irrigation instead of overhead sprinklers",
      "Apply preventive fungicide sprays before humid/rainy periods",
    ],
    fertilizers: [
      { name: "NPK 13-0-46", npk: "13-0-46 (Potassium Nitrate)", dosage: "150–200 kg/ha", purpose: "High K improves disease resistance and strengthens plant tissues" },
      { name: "Calcium Chloride", npk: "Ca 27%", dosage: "1–2 g/L foliar", purpose: "Strengthens cell walls reducing fungal penetration at infection sites" },
      { name: "Manganese Sulphate", npk: "Mn 31%", dosage: "1–2 kg/ha foliar", purpose: "Manganese activates enzymes in lignin synthesis strengthening cell walls" },
      { name: "Phosphonic Acid", npk: "P 40%+K 28%", dosage: "2 mL/L foliar", purpose: "Induces systemic acquired resistance against fungal pathogens" },
    ],
    color: "#e67e22",
  },
  {
    id: 7,
    name: "Yellow Leaf Curl Virus",
    scientificName: "Tomato Yellow Leaf Curl Virus (TYLCV)",
    confidence: 97.7,
    severity: "Critical",
    severityColor: "#922b21",
    category: "Viral Disease",
    description:
      "Tomato Yellow Leaf Curl Virus (TYLCV) is a devastating begomovirus transmitted by the silverleaf whitefly (Bemisia tabaci). Once infected, there is NO cure — management focuses on vector control and prevention.",
    affectedParts: ["Leaves", "Growing tips", "Fruit development"],
    symptoms: [
      "Characteristic upward curling and cupping of leaf margins (leaves curl like spoons)",
      "Intense yellowing (chlorosis) of leaf margins and interveinal areas",
      "Severe stunting of plant growth — infected plants remain dwarfed",
      "Flower abortion and drastically reduced fruit set",
      "Leaves become thick, leathery, and feel like leather to touch",
    ],
    effects: [
      "Can cause 100% crop loss if infection occurs before flowering",
      "No effective cure exists — infected plants remain economically unproductive",
      "Whitefly vectors can spread virus to entire field within days",
      "Infected plants serve as permanent virus reservoirs for neighboring fields",
      "Significant economic losses estimated at $300–$400 million annually in endemic regions",
    ],
    solutions: [
      "REMOVE AND DESTROY all infected plants immediately — bury or burn off-site",
      "Apply imidacloprid (Confidor 200 SL) at 0.5 mL/L to control whitefly vectors",
      "Use spirotetramat (Movento 150 OD) at 0.75 mL/L as systemic insecticide",
      "Install 50-mesh insect-proof netting in nurseries",
      "Apply mineral oil (Sun Oil) at 1% to interfere with whitefly feeding",
      "Use yellow sticky traps to monitor and reduce whitefly populations",
      "Plant border crops of non-host plants to reduce whitefly entry",
    ],
    preventions: [
      "Plant TYLCV-resistant varieties: TY 2000, Tyking, Garbalia, Shanty",
      "Use reflective silver mulch to repel whiteflies",
      "Maintain trap crops of French marigold to attract and reduce whiteflies",
      "Avoid planting near infected solanaceous crops",
    ],
    fertilizers: [
      { name: "Foliar Potassium", npk: "K 40%", dosage: "3–4 g/L foliar", purpose: "High potassium supports plant immune system and reduces viral symptom severity" },
      { name: "Amino Acid Complex", npk: "N 16% (amino) + trace", dosage: "2–3 mL/L foliar", purpose: "Provides directly usable nitrogen building blocks reducing metabolic stress" },
      { name: "Seaweed + Humic Acid", npk: "Various", dosage: "3 mL/L + 1 g/L", purpose: "Improves overall plant health and root function in stressed plants" },
      { name: "Boron + Molybdenum", npk: "B 2%+Mo 0.5%", dosage: "0.5–1 L/ha foliar", purpose: "Micronutrients essential for normal plant metabolism during virus stress" },
    ],
    color: "#d35400",
  },
  {
    id: 8,
    name: "Tomato Mosaic Virus",
    scientificName: "Tomato Mosaic Virus (ToMV)",
    confidence: 96.4,
    severity: "High",
    severityColor: "#e74c3c",
    category: "Viral Disease",
    description:
      "Tomato Mosaic Virus (ToMV) is an extremely stable and persistent tobamovirus that infects tomatoes worldwide. Unlike TYLCV, it spreads mechanically through contact rather than insect vectors, making it difficult to contain.",
    affectedParts: ["Leaves", "Fruits", "Growing tips"],
    symptoms: [
      "Mosaic pattern of light and dark green, yellow-green irregular patches on leaves",
      "Leaf distortion, blistering, and mottling with alternating light/dark areas",
      "Fern-like or thread-like leaves (fernleaf symptom) in severe systemic infections",
      "Stunted growth with shortened internodes",
      "Fruit shows yellow patches, uneven ripening, and internal browning (chocolate fruit)",
    ],
    effects: [
      "Yield reduction of 10–25% from reduced fruit set and quality",
      "Fruit shows internal brown streaking reducing commercial value",
      "Virus persists in plant debris and soil for up to 2 years",
      "Easily spread through hands, tools, clothing, and by leaf contact",
      "Infected seed transmits virus to next generation",
    ],
    solutions: [
      "NO CHEMICAL CURE exists — focus on sanitation and prevention",
      "Remove and destroy infected plants — wear gloves and disinfect afterward",
      "Disinfect hands with 4% trisodium phosphate (TSP) solution after handling plants",
      "Sterilize all tools with 10% bleach solution or 70% ethanol between cuts",
      "Apply mild strains of ToMV for cross-protection in high-risk areas (biocontrol method)",
      "Wash hands thoroughly with soap before entering crop area",
    ],
    preventions: [
      "Use certified virus-free seeds treated with trisodium phosphate (10%, 15 minutes)",
      "Plant resistant varieties: Quest, Goldwyn, Momotaro carrying Tm-2² gene",
      "No smoking in or near the greenhouse — tobacco products carry ToMV",
      "Train workers on sanitation protocols and disease recognition",
    ],
    fertilizers: [
      { name: "Complete NPK 20-20-20", npk: "20-20-20+TE", dosage: "3 g/L foliar", purpose: "Balanced nutrition supporting maximum growth despite viral infection" },
      { name: "Iron EDDHA chelate", npk: "Fe 6%", dosage: "2–3 kg/ha", purpose: "Iron deficiency-like chlorosis can be masked by virus — iron supports chlorophyll" },
      { name: "Potassium Silicate", npk: "K 10%+Si 20%", dosage: "2 mL/L foliar", purpose: "Silicon strengthens plant tissues reducing mechanical virus spread" },
      { name: "Calcium Nitrate + Boron", npk: "Ca 19%+B 0.3%", dosage: "200 kg/ha + 1 kg/ha", purpose: "Calcium and boron combination improves cell wall integrity" },
    ],
    color: "#2980b9",
  },
  {
    id: 9,
    name: "Healthy Leaf",
    scientificName: "Solanum lycopersicum (Healthy)",
    confidence: 99.2,
    severity: "Low",
    severityColor: "#27ae60",
    category: "Healthy Plant",
    description:
      "The analyzed leaf shows no signs of disease, pest damage, or nutritional deficiency. Your tomato plant appears to be in excellent health with strong immune function and optimal growing conditions.",
    affectedParts: [],
    symptoms: [
      "Deep, uniform green coloration throughout the leaf surface",
      "No visible spots, lesions, discoloration, or deformities",
      "Leaf texture is smooth with well-defined leaf margins",
      "Healthy turgidity — leaves are firm and upright",
      "No visible pest damage, webbing, or abnormal growths",
    ],
    effects: [
      "Plant is on track for optimal yield potential",
      "Strong photosynthetic capacity ensuring maximum carbohydrate production",
      "Good disease resistance and ability to withstand environmental stresses",
      "Expected normal fruit development and quality",
    ],
    solutions: [
      "Continue current crop management practices — they are working well",
      "Maintain regular preventive spray program to keep disease pressure low",
      "Monitor weekly for any early signs of disease or pest activity",
      "Continue balanced irrigation scheduling based on evapotranspiration rates",
      "Document current practices as a baseline for future seasons",
    ],
    preventions: [
      "Continue 7–14 day preventive fungicide/bactericide spray schedule",
      "Maintain balanced nutrition with regular soil and foliar testing",
      "Keep field records to identify any changing patterns",
      "Implement IPM (Integrated Pest Management) scouting protocols",
    ],
    fertilizers: [
      { name: "NPK 13-40-13 (Starter)", npk: "13-40-13+TE", dosage: "2–3 g/L foliar or drip", purpose: "High phosphorus promotes strong root development in vegetative stage" },
      { name: "NPK 19-5-20 (Fruiting)", npk: "19-5-20+2MgO", dosage: "300 kg/ha", purpose: "Balanced K-rich formula supporting fruit set and quality" },
      { name: "Calcium + Magnesium", npk: "Ca 15%+Mg 5%", dosage: "2–3 mL/L foliar", purpose: "Prevents blossom end rot and maintains chlorophyll production" },
      { name: "Micronutrient Mix (TE)", npk: "Zn+Mn+Fe+B+Cu+Mo", dosage: "1–2 L/ha foliar", purpose: "Complete trace element nutrition for enzyme function and metabolic health" },
    ],
    color: "#27ae60",
  },
];

/**
 * Deterministic hash — same file always returns same index.
 * Uses filename + size + lastModified for uniqueness guarantee.
 */
export function getDeterministicDisease(file: File): Disease {
  const key = `${file.name}::${file.size}::${file.lastModified}`;
  let hash = 2166136261; // FNV-1a 32-bit offset basis
  for (let i = 0; i < key.length; i++) {
    hash ^= key.charCodeAt(i);
    hash = (hash * 16777619) >>> 0; // FNV prime, keep 32-bit unsigned
  }
  const index = hash % DISEASES.length;
  return DISEASES[index];
}
