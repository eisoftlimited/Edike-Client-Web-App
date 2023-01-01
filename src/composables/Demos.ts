import { ref } from 'vue'
import {useFetch} from './FetchController'

const { makeFetchToAnotherUrl } = useFetch()


const classes = ref(['Nursery 1', 'Nursery 2', 'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6', 'JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3' ])
// const schools = ref(['El- Bethel Schools', 'Gem Stars Private School', 'St. Anthonio Junior School', 'Grace Group of Schools', 'Hope International Group of Schools'])
const schools = ref([
	{
		"id": 1,
		"school_name": "1ST AGES NUR\/PRY SCHOOL"
	   },
	   {
		"id": 2,
		"school_name": "ADEBAYO MOKUOLU COLLEGE"
	   },
	   {
		"id": 3,
		"school_name": "ADETOLU NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 4,
		"school_name": "AL-KITAB KIDDIES KOTTAGE"
	   },
	   {
		"id": 5,
		"school_name": "ARISE& SHINE DAYCARE\/PREPARATORY SCHOOL"
	   },
	   {
		"id": 6,
		"school_name": "AUNTIE D. INTERNATIONAL LIMITED"
	   },
	   {
		"id": 7,
		"school_name": "BETHEL GEMINI EDUCATIONAL SERVICES LIMITED"
	   },
	   {
		"id": 8,
		"school_name": "CAMBERWELL SCHOOL HOUSE"
	   },
	   {
		"id": 9,
		"school_name": "CAMP OF EXCELLENCE NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 10,
		"school_name": "CAROL SCHOOL"
	   },
	   {
		"id": 11,
		"school_name": "CHRIST THE FIRST SHEPHERD SCHOOL"
	   },
	   {
		"id": 12,
		"school_name": "DAILY LIGHT COLLEGE "
	   },
	   {
		"id": 13,
		"school_name": "DAILY LIGHT NURSERY & PRIMARY  SCHOOL"
	   },
	   {
		"id": 14,
		"school_name": "DALE CHILDREN SCHOOL"
	   },
	   {
		"id": 15,
		"school_name": "DALPARK INTERNATIONAL ACADEMY "
	   },
	   {
		"id": 16,
		"school_name": "DAVID AND ESTHER LEARNING LAND"
	   },
	   {
		"id": 17,
		"school_name": "DEE-VICTORY CHILDREN SCHOOL"
	   },
	   {
		"id": 18,
		"school_name": "D'LUMIERE COLLEGE"
	   },
	   {
		"id": 19,
		"school_name": "DORINDA SCHOOL LIMITED"
	   },
	   {
		"id": 20,
		"school_name": "DOUBLE GLORY MONTESSORI SCHOOL"
	   },
	   {
		"id": 21,
		"school_name": "ECOLE EST BELLE ACADEMY LIMITED"
	   },
	   {
		"id": 22,
		"school_name": "ENP SCHOOLS LIMITED"
	   },
	   {
		"id": 23,
		"school_name": "ESTEEMOS SCHOOLS"
	   },
	   {
		"id": 24,
		"school_name": "EVANS HAPPY HOME NUR & PRY SCHOOL"
	   },
	   {
		"id": 25,
		"school_name": "FIRST LEARNING HALL SCHOOL LTD"
	   },
	   {
		"id": 26,
		"school_name": "FLOREK SALVATION INTERNATIONAL NURSERY AND PRMARY SCHOOL"
	   },
	   {
		"id": 27,
		"school_name": "FUNMI VIRTUOUS EDUCATIONAL CONSULT LIMITED"
	   },
	   {
		"id": 28,
		"school_name": "HADASSAH'S GRACE ACADEMY"
	   },
	   {
		"id": 29,
		"school_name": "HEGALIS SCHOOL"
	   },
	   {
		"id": 30,
		"school_name": "JERARE SUMMIT SECONDARY SCHOOL"
	   },
	   {
		"id": 31,
		"school_name": "KINGDOM HERITAGE MODEL SCHOOL OGBA (KINGDOM HERITAGE MODEL SCHOOLS LTD\/GTE)"
	   },
	   {
		"id": 32,
		"school_name": "KINGDOM HERITAGE MODEL SCHOOL, OJODU"
	   },
	   {
		"id": 33,
		"school_name": "LAUREL EDGE NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 34,
		"school_name": "L'ENFANT ROI CRECHE LIMITED"
	   },
	   {
		"id": 35,
		"school_name": "MARVELOUS CHILDREN SCHOOL"
	   },
	   {
		"id": 36,
		"school_name": "MINISTERS` INTERNATIONAL COLLEGE"
	   },
	   {
		"id": 37,
		"school_name": "NIKWHALES NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 38,
		"school_name": "OLUWAKEMI NURSERY AND PRIMARY SCHOOL "
	   },
	   {
		"id": 39,
		"school_name": "PEARL MONTESORI SCHL"
	   },
	   {
		"id": 40,
		"school_name": "PETRONERG PRIVATE SCHOOL "
	   },
	   {
		"id": 41,
		"school_name": "PURPLEGATE HOME SCHOOL"
	   },
	   {
		"id": 42,
		"school_name": "RITA COLLEGE"
	   },
	   {
		"id": 43,
		"school_name": "RITMUNDS  SCHOOL LIMITED"
	   },
	   {
		"id": 44,
		"school_name": "RIVERSIDE MONTESSORI SCHOOL"
	   },
	   {
		"id": 45,
		"school_name": "ROCKET INTER-AMERICAN ACADEMY"
	   },
	   {
		"id": 46,
		"school_name": "RONNIE SCHOOLS NUR\/PRY SCHOOLS"
	   },
	   {
		"id": 47,
		"school_name": "ROYAL MASTERS SCHOOL"
	   },
	   {
		"id": 48,
		"school_name": "SCHOLARS CREST INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 49,
		"school_name": "SEAL FOUNDATION ACADEMY"
	   },
	   {
		"id": 50,
		"school_name": "SMALLVILLE MONTESORI SCHOOL"
	   },
	   {
		"id": 51,
		"school_name": "SOLID HERITAGE INTERNATIONAL SCHOOLS"
	   },
	   {
		"id": 52,
		"school_name": "SPRING FLOWERS INNTERNATIONAL  SCHOOL"
	   },
	   {
		"id": 53,
		"school_name": "SPRINGFORTE LEAD COLLEGE LTD"
	   },
	   {
		"id": 54,
		"school_name": "TAMAR PREPARATORY SCHOOL"
	   },
	   {
		"id": 55,
		"school_name": "TREND SETTERS SCHOOL"
	   },
	   {
		"id": 56,
		"school_name": "TRIPLE CROSS HIGH SCHOOL "
	   },
	   {
		"id": 57,
		"school_name": "TRIPLE CROSS SCHOOL "
	   },
	   {
		"id": 58,
		"school_name": "TRIUMPHANT MIND BUILDERS INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 59,
		"school_name": "TUNKEMTEES SCHOOL"
	   },
	   {
		"id": 60,
		"school_name": "ULTIMATE FOUNDATION NUR\/PRY SCHOOL"
	   },
	   {
		"id": 61,
		"school_name": "VICTORIOUS CHILDREN SCHOOL"
	   },
	   {
		"id": 62,
		"school_name": "WITS VILLE INTERNATIONAL SCHOOLS LIMITED"
	   },
	   {
		"id": 63,
		"school_name": "ADEX SCHOOLS"
	   },
	   {
		"id": 64,
		"school_name": "VIGRAM NUR & PRY SCHOOL"
	   },
	   {
		"id": 65,
		"school_name": "GLONEK PRIVATE SCHOOL"
	   },
	   {
		"id": 66,
		"school_name": "BLUELIGHT COLLEGE"
	   },
	   {
		"id": 67,
		"school_name": "MODUPE NUR\/PRI SCHOOL"
	   },
	   {
		"id": 68,
		"school_name": "JUVIC  SCHOOLS"
	   },
	   {
		"id": 69,
		"school_name": "LOLLY BRIGHT NUR & BASIC SHOOL"
	   },
	   {
		"id": 70,
		"school_name": "ELIMOST NUR\/PRY SCHOOL"
	   },
	   {
		"id": 71,
		"school_name": "GROWING IN GRACE PRIVATE SCHOOL"
	   },
	   {
		"id": 72,
		"school_name": "ORON NUR\/PRY SCHOOL"
	   },
	   {
		"id": 73,
		"school_name": "PHEBEAN ADEOLA MEMORIAL SCHOOL"
	   },
	   {
		"id": 74,
		"school_name": "LITTLE CHAMPS CRECHE"
	   },
	   {
		"id": 75,
		"school_name": "BRIMAC NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 76,
		"school_name": "CHIVA MONTESSORI NUR&PRY SCHOOL"
	   },
	   {
		"id": 77,
		"school_name": "DEE POSITIVE NUR & PRY SCHOOL"
	   },
	   {
		"id": 78,
		"school_name": "GREAT UNIQUE PRIVATE SCHOOLS"
	   },
	   {
		"id": 79,
		"school_name": "AMAZING FOUNDATION NUR\/PRI SCH"
	   },
	   {
		"id": 80,
		"school_name": "BEST STEP NUR\/PRI SCHOOL"
	   },
	   {
		"id": 81,
		"school_name": "LIVELY KIDDIES N\/P SCHOOL"
	   },
	   {
		"id": 82,
		"school_name": "LONNU NUR & PRY SCHOOL"
	   },
	   {
		"id": 83,
		"school_name": "BOSOM PRIVATE SCHOOL"
	   },
	   {
		"id": 84,
		"school_name": "SULAIMAN SHADO NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 85,
		"school_name": "CEPHAS MONTESSORI SCHOOL"
	   },
	   {
		"id": 86,
		"school_name": "GEORGE MICHEALS COLLEGE"
	   },
	   {
		"id": 87,
		"school_name": "GEORGE MICHEALS NUR\/PRY SCHOOL"
	   },
	   {
		"id": 88,
		"school_name": "FRUIT-TEES SCHOOL"
	   },
	   {
		"id": 89,
		"school_name": "GOWAF INT SCHOOL"
	   },
	   {
		"id": 90,
		"school_name": "FUNADEC NUR\/PRI SCHOOL"
	   },
	   {
		"id": 91,
		"school_name": "GODSEEDS PRIVATE SCHOOL"
	   },
	   {
		"id": 92,
		"school_name": "FEJUFA SCHOOLS"
	   },
	   {
		"id": 93,
		"school_name": "LEADERS GROUP OF SCHOOL"
	   },
	   {
		"id": 94,
		"school_name": "EUNICE COLLEGE"
	   },
	   {
		"id": 95,
		"school_name": "EUNICE PRIMARY SCHOOL"
	   },
	   {
		"id": 96,
		"school_name": "CHOICE STARS INT'L SCHOOL"
	   },
	   {
		"id": 97,
		"school_name": "AL-IZAH THE HONOUR INT'L SCHOOL "
	   },
	   {
		"id": 98,
		"school_name": "FELICIA MONTESSORI FOUNDATION"
	   },
	   {
		"id": 99,
		"school_name": "DAYONIX SCHOOL"
	   },
	   {
		"id": 100,
		"school_name": "ALBRIGHT GRACELAND SCHOOL"
	   },
	   {
		"id": 101,
		"school_name": "STARRITE NUR\/PRY SCHOOL"
	   },
	   {
		"id": 102,
		"school_name": "RONTOL COLLEGE"
	   },
	   {
		"id": 103,
		"school_name": "PRAISE VINE NUR\/PRY SCHOOL"
	   },
	   {
		"id": 104,
		"school_name": "DORIPAUL INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 105,
		"school_name": "MERCY COLLEGE"
	   },
	   {
		"id": 106,
		"school_name": "BERIT SCHOOL"
	   },
	   {
		"id": 107,
		"school_name": "ROYAL DECENCY PRIVATE SCHOOL"
	   },
	   {
		"id": 108,
		"school_name": "MENTOR COMP COLLEGE"
	   },
	   {
		"id": 109,
		"school_name": "INTELLECT STARS PRIVATE SCHOOL"
	   },
	   {
		"id": 110,
		"school_name": "NUJOFS PRIVATE SCHOOL N&P"
	   },
	   {
		"id": 111,
		"school_name": "NORECK SCHOOL"
	   },
	   {
		"id": 112,
		"school_name": "King Royal Generation School"
	   },
	   {
		"id": 113,
		"school_name": "ECWA SCHOOL"
	   },
	   {
		"id": 114,
		"school_name": "GOOD FOUNDATION NUR\/PRY SCHOOL"
	   },
	   {
		"id": 115,
		"school_name": "DANMARTINS"
	   },
	   {
		"id": 116,
		"school_name": "MODEL PEARL SCHOOL"
	   },
	   {
		"id": 117,
		"school_name": "DALIBEE EDUCATIONAL SERVICES"
	   },
	   {
		"id": 118,
		"school_name": "FAHOVE GROUPS OF SCHOOL"
	   },
	   {
		"id": 119,
		"school_name": "DIVINE CONFIDENCE PRIVATE SCHOOL"
	   },
	   {
		"id": 120,
		"school_name": "NODUS CHILDREN SCHOOL"
	   },
	   {
		"id": 121,
		"school_name": "GOOD FOUNDATION SCOOL"
	   },
	   {
		"id": 122,
		"school_name": "PETEAM SCHOOL"
	   },
	   {
		"id": 123,
		"school_name": "PEACE PROFFESSIONAL COLLEGE"
	   },
	   {
		"id": 124,
		"school_name": "EXCELLENCE \/ SHADADOM KIDDIES SCHOOLS"
	   },
	   {
		"id": 125,
		"school_name": "NIGHTINGALE ACADEMY"
	   },
	   {
		"id": 126,
		"school_name": "NEW ERRAL LIMITED"
	   },
	   {
		"id": 127,
		"school_name": "BETTER DESTINY ACADEMY"
	   },
	   {
		"id": 128,
		"school_name": "STEP UP COMPREHENSIVE"
	   },
	   {
		"id": 129,
		"school_name": "TGT SCHOOL"
	   },
	   {
		"id": 130,
		"school_name": "FAIR DEAL INTL SCHOOL"
	   },
	   {
		"id": 131,
		"school_name": "BOLTHINE SCHOOLS"
	   },
	   {
		"id": 132,
		"school_name": "LERATO"
	   },
	   {
		"id": 133,
		"school_name": "MOLABY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 134,
		"school_name": "FASOMA COMPREHENSIVE HIGH SCHOOL"
	   },
	   {
		"id": 135,
		"school_name": "FELITEM NUR\/PRY SCHOOL"
	   },
	   {
		"id": 136,
		"school_name": "PROLIFIC SCHOOLS"
	   },
	   {
		"id": 137,
		"school_name": "EBOA INTERNATIONAL SCHOOLS"
	   },
	   {
		"id": 138,
		"school_name": "WHOLEELAND PRVATE  SCHOOL"
	   },
	   {
		"id": 139,
		"school_name": "DE- PETERSON SCHOOL"
	   },
	   {
		"id": 140,
		"school_name": "PRECIOUS STARS CRECHE NUR AND PRY SCH"
	   },
	   {
		"id": 141,
		"school_name": "JOFLOBEULAH SCHOOL"
	   },
	   {
		"id": 142,
		"school_name": "ROYAL   KIDDIES MONTESSORIES SCHOOLnow  (DE-ROYAL SCHOOL)"
	   },
	   {
		"id": 143,
		"school_name": "LOLA-MARIL DAYCARE"
	   },
	   {
		"id": 144,
		"school_name": "GODS WILL SCHOOL"
	   },
	   {
		"id": 145,
		"school_name": " FAITHLAND NUR\/PRY SCH"
	   },
	   {
		"id": 146,
		"school_name": "ROYAL DYNASTY N\/P SCHOOL"
	   },
	   {
		"id": 147,
		"school_name": "CLASAM SCHOOL"
	   },
	   {
		"id": 148,
		"school_name": "GLAD TIDINGS SCHOOL"
	   },
	   {
		"id": 149,
		"school_name": "CAMP SAMUEL SCHOOL - "
	   },
	   {
		"id": 150,
		"school_name": "MIVICO NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 151,
		"school_name": "Good Shepherd School"
	   },
	   {
		"id": 152,
		"school_name": "UNIQUE TOP GLORY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 153,
		"school_name": "CROWN KIDS CLASS"
	   },
	   {
		"id": 154,
		"school_name": "QIBLAN MINDS FOUNDATION SCHOOL"
	   },
	   {
		"id": 155,
		"school_name": "BENDOS NUR & PRY SCHOOL"
	   },
	   {
		"id": 156,
		"school_name": "YEMLAD COMPREHENSIVE COLLEGE"
	   },
	   {
		"id": 157,
		"school_name": "EMMLYD NURSERY& PRIMARY "
	   },
	   {
		"id": 158,
		"school_name": "ST CHRISVAN PRIVATE SCHOOL"
	   },
	   {
		"id": 159,
		"school_name": "VOICE OF JOY NUR\/PRY SCH."
	   },
	   {
		"id": 160,
		"school_name": "PEARLS NUR AND PRIMARY SCHOOL PREPARATORY&BASIC"
	   },
	   {
		"id": 161,
		"school_name": "GADEM NUR &PRY SCH"
	   },
	   {
		"id": 162,
		"school_name": "NIKRAYO ACADEMY"
	   },
	   {
		"id": 163,
		"school_name": "WISDOM COLLEGE"
	   },
	   {
		"id": 164,
		"school_name": "D'DEL SCHOOLS"
	   },
	   {
		"id": 165,
		"school_name": "STANDARD BRAIN GEM SCHOOL"
	   },
	   {
		"id": 166,
		"school_name": "PENIEL KIDDIES SCHOOL"
	   },
	   {
		"id": 167,
		"school_name": "FIRST GOLD PRIVATE SCH"
	   },
	   {
		"id": 168,
		"school_name": "SEBIS NUR\/PRY SCHOOL"
	   },
	   {
		"id": 169,
		"school_name": " GODS FAVOURSCHOOL"
	   },
	   {
		"id": 170,
		"school_name": "EXOTIQUE SCHOOLS"
	   },
	   {
		"id": 171,
		"school_name": "TOYMON SCHOOLS NURS\/PRY\/SECONDARY"
	   },
	   {
		"id": 172,
		"school_name": "ANOINTING STARS SCHOOLS"
	   },
	   {
		"id": 173,
		"school_name": "GOSINO TRUE VINE \nNUR & PRY SCHOOL"
	   },
	   {
		"id": 174,
		"school_name": "THE GREAT CRESCENT SCH."
	   },
	   {
		"id": 175,
		"school_name": "EXECELLENT GATE INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 176,
		"school_name": "GRACEVILLE PRIVATE SCH"
	   },
	   {
		"id": 177,
		"school_name": "The Great Royalville School"
	   },
	   {
		"id": 178,
		"school_name": "GLOVINATH PRIVATE SCHOOL"
	   },
	   {
		"id": 179,
		"school_name": "BIBI STARS PRIVATE SCHOOL"
	   },
	   {
		"id": 180,
		"school_name": "GREAT EDUBEST PRIVATE SCHOOL "
	   },
	   {
		"id": 181,
		"school_name": "THE SENATORS SCHOOL"
	   },
	   {
		"id": 182,
		"school_name": "RITE HERITAGE MONTESSORI SCHOOL"
	   },
	   {
		"id": 183,
		"school_name": "TOP BOSS BRILLIANT ACADEMY"
	   },
	   {
		"id": 184,
		"school_name": "PEERLESS VINE SCH"
	   },
	   {
		"id": 185,
		"school_name": "Lakeside Trust Investment Ltd"
	   },
	   {
		"id": 186,
		"school_name": "TOKEM SCHOOLS"
	   },
	   {
		"id": 187,
		"school_name": "SAN MEN NUR & PRY SCH"
	   },
	   {
		"id": 188,
		"school_name": "Miczanria Group of School"
	   },
	   {
		"id": 189,
		"school_name": "LAWFIDEL SCHOOLS"
	   },
	   {
		"id": 190,
		"school_name": "LIGHTWORLD INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 191,
		"school_name": "ARENA DIVINE STAR SCHOOL"
	   },
	   {
		"id": 192,
		"school_name": "WINNING GATE SCHOOLS"
	   },
	   {
		"id": 193,
		"school_name": "ULTIMATE PRESTIGE ACADEMY"
	   },
	   {
		"id": 194,
		"school_name": "REMLEK  INTERENATIONAL SCHOOL"
	   },
	   {
		"id": 195,
		"school_name": "DABSEM MODEL SCHOOL"
	   },
	   {
		"id": 196,
		"school_name": "MOUNTAIN OF KNOWLEDGE SCHOOL"
	   },
	   {
		"id": 197,
		"school_name": "MARV GRACE SCHOOL"
	   },
	   {
		"id": 198,
		"school_name": "BETHDAVE PRIVATE SCHOOL"
	   },
	   {
		"id": 199,
		"school_name": "SIDMARC PRIVATE SCHOOL"
	   },
	   {
		"id": 200,
		"school_name": "COSMOS NUR\/PRY SCHOOL"
	   },
	   {
		"id": 201,
		"school_name": "LIVING CHRISTPRIVATE SCHOOL"
	   },
	   {
		"id": 202,
		"school_name": "KINGSVINE SCHOOLS"
	   },
	   {
		"id": 203,
		"school_name": "GLORIOUS CHILDREN SCHOOL"
	   },
	   {
		"id": 204,
		"school_name": "CITY OF DAVID BACIS SCHOOL"
	   },
	   {
		"id": 205,
		"school_name": "ANASTASIA INT'L SCHOOL"
	   },
	   {
		"id": 206,
		"school_name": "CANAAN COLLEGE"
	   },
	   {
		"id": 207,
		"school_name": "FIBO INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 208,
		"school_name": "EKO EMMACULATE SHCOOL"
	   },
	   {
		"id": 209,
		"school_name": "TOUCH GOLD SCHOOL"
	   },
	   {
		"id": 210,
		"school_name": "SUNSHINE COMPREHENSIVE COLLEGE"
	   },
	   {
		"id": 211,
		"school_name": "WISE-UP KINDERGATEN"
	   },
	   {
		"id": 212,
		"school_name": "ULTRA IMPERIAL SCHOOL"
	   },
	   {
		"id": 213,
		"school_name": "T&M NUR\/PRY SCHOOL"
	   },
	   {
		"id": 214,
		"school_name": "LIGHTHOUSE CHRISTIAN SCHOOL"
	   },
	   {
		"id": 215,
		"school_name": "Konfex International School"
	   },
	   {
		"id": 216,
		"school_name": "BRIGHTER STARS KIDDIES SCHOOL"
	   },
	   {
		"id": 217,
		"school_name": "BUDAYAH KIDDIES INTL NUR AND PRY SCHOOL"
	   },
	   {
		"id": 218,
		"school_name": "MODERN ACME COLLEGE"
	   },
	   {
		"id": 219,
		"school_name": "OMOBOLA SECONDARY SCHOOL"
	   },
	   {
		"id": 220,
		"school_name": "SUCCESS LADDER SCHOOL"
	   },
	   {
		"id": 221,
		"school_name": "CAREER BEST GRADE  SCHOOL"
	   },
	   {
		"id": 222,
		"school_name": "RELIABLE MODEL ACADEMY"
	   },
	   {
		"id": 223,
		"school_name": "KINGBRIDGE INT'L SCHOOL"
	   },
	   {
		"id": 224,
		"school_name": "DHIYAAUL-HAQ NUR & PRY SCHOOL"
	   },
	   {
		"id": 225,
		"school_name": "FANIS PILLARS ACADEMY"
	   },
	   {
		"id": 226,
		"school_name": "LEADPATH NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 227,
		"school_name": "TEMIVIC NUR\/PRY SCH"
	   },
	   {
		"id": 228,
		"school_name": "OMOBOLA CHILDREN N\/P SCHOOL"
	   },
	   {
		"id": 229,
		"school_name": "BAMBOS HOUSE OF KNOWLEDGE"
	   },
	   {
		"id": 230,
		"school_name": "ROCK HEIGHT SCHOOL"
	   },
	   {
		"id": 231,
		"school_name": "Michalson Group Of Schools"
	   },
	   {
		"id": 232,
		"school_name": "EUCHARISTIC HEART OF JESUS MODEL SCHOOL"
	   },
	   {
		"id": 233,
		"school_name": "AS-SA AADAH NUR & PRY SCHOOL"
	   },
	   {
		"id": 234,
		"school_name": "GOODING PRIVATE SCHOOL"
	   },
	   {
		"id": 235,
		"school_name": "SUPERNATURAL SMART KID SCH"
	   },
	   {
		"id": 236,
		"school_name": "NATIONS PRIDE INT SCHOOL"
	   },
	   {
		"id": 237,
		"school_name": "MOZAN SCHOOLS"
	   },
	   {
		"id": 238,
		"school_name": "GOODNESS ROYAL SCHOOL"
	   },
	   {
		"id": 239,
		"school_name": "BAOBAB SCHOOLS"
	   },
	   {
		"id": 240,
		"school_name": "EMMANUEL SCHOOLS"
	   },
	   {
		"id": 241,
		"school_name": "DE-GLORIOUS HERITAGE SCHOOL"
	   },
	   {
		"id": 242,
		"school_name": "PUNIEL NUR\/PRY SCH."
	   },
	   {
		"id": 243,
		"school_name": "AR-RASHEED NUR\/PRY SCHOOL"
	   },
	   {
		"id": 244,
		"school_name": "MIMAK COLLEGE"
	   },
	   {
		"id": 245,
		"school_name": "DATFORTE GROUP OF SCHOOLS"
	   },
	   {
		"id": 246,
		"school_name": "Home Science Association ( Secondary)"
	   },
	   {
		"id": 247,
		"school_name": "MASVEL DIVINE MONTESSORI SCHOOL"
	   },
	   {
		"id": 248,
		"school_name": "THE BLOSSOM PATH SCHOOL"
	   },
	   {
		"id": 249,
		"school_name": "MIHRAB EDUCATION OTHERS (MINBAR MIND)"
	   },
	   {
		"id": 250,
		"school_name": "ESMIDA GLORIOUS N\/P SCHOOL"
	   },
	   {
		"id": 251,
		"school_name": "LIVING SEED COLLEGE"
	   },
	   {
		"id": 252,
		"school_name": "HEAVENLY LOVE SCHOOL"
	   },
	   {
		"id": 253,
		"school_name": "DIVINE SEED OF KNOWLEDGE SCHOOL"
	   },
	   {
		"id": 254,
		"school_name": "FIRST TREASURE SCH"
	   },
	   {
		"id": 255,
		"school_name": "BISKEM NURSERY AND PRY SCHOOL"
	   },
	   {
		"id": 256,
		"school_name": "AUNTY WINNER PRIVATE SCHOOL"
	   },
	   {
		"id": 257,
		"school_name": "ETERNAL KING SCHOOL"
	   },
	   {
		"id": 258,
		"school_name": "HAVARDTH SCHOOL"
	   },
	   {
		"id": 259,
		"school_name": "POSITIVE MIND NUR & PRY SCHOOL"
	   },
	   {
		"id": 260,
		"school_name": "MARVELOUS HEIGHT"
	   },
	   {
		"id": 261,
		"school_name": "GOODHEAD SCHOOL"
	   },
	   {
		"id": 262,
		"school_name": "VEGA COLLEGE"
	   },
	   {
		"id": 263,
		"school_name": "ROSSI MODEL NURSERY  AND PRIMARY SCHOOL"
	   },
	   {
		"id": 264,
		"school_name": "MOTHERS JOY N\/P SCH"
	   },
	   {
		"id": 265,
		"school_name": "BRAINLAND MODEL COLLEGE"
	   },
	   {
		"id": 266,
		"school_name": "AL-WAARITH SCHOOLS "
	   },
	   {
		"id": 267,
		"school_name": "OBABEULAH INTEGRITY SCHOOL"
	   },
	   {
		"id": 268,
		"school_name": "MADASA PRIVATE SCHL"
	   },
	   {
		"id": 269,
		"school_name": "BORN GREAT SCHOOLS"
	   },
	   {
		"id": 270,
		"school_name": "FOUNTAIN OF VISION SCHOOLS"
	   },
	   {
		"id": 271,
		"school_name": "DUAL SUCCESS MUSLIM SCHOOL"
	   },
	   {
		"id": 272,
		"school_name": "DOSLAND NUR\/PRY SCHOOL"
	   },
	   {
		"id": 273,
		"school_name": "STANDARD COLLEGE"
	   },
	   {
		"id": 274,
		"school_name": "LANDROSE SCHOOL"
	   },
	   {
		"id": 275,
		"school_name": "SETIM CHILDREN SCHOOL"
	   },
	   {
		"id": 276,
		"school_name": "CYRIL N\/P SCHOOL"
	   },
	   {
		"id": 277,
		"school_name": "HAPPYDOM SCH "
	   },
	   {
		"id": 278,
		"school_name": "TRINITY INT SCH "
	   },
	   {
		"id": 279,
		"school_name": "DENSTAR PRIVATE SCH "
	   },
	   {
		"id": 280,
		"school_name": "PREMARVEL SCHOOL "
	   },
	   {
		"id": 281,
		"school_name": "BENBOLMARTS SCH"
	   },
	   {
		"id": 282,
		"school_name": "ST MAGNUM NUR &PRIMARY SCH  "
	   },
	   {
		"id": 283,
		"school_name": "VOICE OF GOD PRIVATE SCH"
	   },
	   {
		"id": 284,
		"school_name": "ABIBOSS NUR & PRY. SCHOOL"
	   },
	   {
		"id": 285,
		"school_name": "ABYBUS SCHOOL"
	   },
	   {
		"id": 286,
		"school_name": "ADENIK BRIGHT SCHOOL"
	   },
	   {
		"id": 287,
		"school_name": "ADETOUN SCHOOL "
	   },
	   {
		"id": 288,
		"school_name": "AN-NIWAAR KIDDIES"
	   },
	   {
		"id": 289,
		"school_name": "ASSUMPTA GLAD CHILDREN SCHOOL"
	   },
	   {
		"id": 290,
		"school_name": "BEST HOPE PRIVATE SCHOOL"
	   },
	   {
		"id": 291,
		"school_name": "BETTY KAY COMP SCHOOL"
	   },
	   {
		"id": 292,
		"school_name": "BIVID MONTESSORI SCHOOL"
	   },
	   {
		"id": 293,
		"school_name": "BOFID NUR & PRY SCHOOL"
	   },
	   {
		"id": 294,
		"school_name": "BS INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 295,
		"school_name": "CHILDREN'S HOME SCHOOL"
	   },
	   {
		"id": 296,
		"school_name": "CONVENANT PRIVATE SCHOOL"
	   },
	   {
		"id": 297,
		"school_name": "DARUL ATFA GROUP OF SCHOOL"
	   },
	   {
		"id": 298,
		"school_name": "DORBAL MONTESSORI SCHOOL"
	   },
	   {
		"id": 299,
		"school_name": "DUROCAS PRIVATE SCHOOL"
	   },
	   {
		"id": 300,
		"school_name": "E-GRACEFORT SCHOOL"
	   },
	   {
		"id": 301,
		"school_name": "JAMES MEG MONTESSORI NUR\/PRY SCHOOL"
	   },
	   {
		"id": 302,
		"school_name": "KINGDOM DIADEM SCHOOL"
	   },
	   {
		"id": 303,
		"school_name": "LA PAZ ACADEMY"
	   },
	   {
		"id": 304,
		"school_name": "MAIRE CLAIRE"
	   },
	   {
		"id": 305,
		"school_name": "MANDOLAND SCHOOL"
	   },
	   {
		"id": 306,
		"school_name": "MINNAH SCHOOL"
	   },
	   {
		"id": 307,
		"school_name": "MODJELL HEIGHT NUR AND PRY SCHOOL"
	   },
	   {
		"id": 308,
		"school_name": "NEW SUN SCHOOL"
	   },
	   {
		"id": 309,
		"school_name": "OMOKAFE N\/P SCHOOL"
	   },
	   {
		"id": 310,
		"school_name": "ONIBU-ORE NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 311,
		"school_name": "PALOFEX NUR & PRY SCHOOL"
	   },
	   {
		"id": 312,
		"school_name": "PANDORA COMP COLLEGE"
	   },
	   {
		"id": 313,
		"school_name": "PENIEL HOME SCHOOL"
	   },
	   {
		"id": 314,
		"school_name": "POMA INTERNATIONAL BUSINESS ACADEMY"
	   },
	   {
		"id": 315,
		"school_name": "PRIME SPRING INT. CITADEL SCHOOL"
	   },
	   {
		"id": 316,
		"school_name": "REDEEMERS ROYAL NUR & PRY SCHOOL"
	   },
	   {
		"id": 317,
		"school_name": "RHEMA FOUNDATION SCHOOL "
	   },
	   {
		"id": 318,
		"school_name": "SEDA PHILIPS MONTESSORI SCHOOL"
	   },
	   {
		"id": 319,
		"school_name": "UNITY T  MONTESSORI SCHOOL"
	   },
	   {
		"id": 320,
		"school_name": "SIDDY SYDNEY NUR\/PRY SCHOOL"
	   },
	   {
		"id": 321,
		"school_name": "SOLID FOUNDATION INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 322,
		"school_name": "SOUTH HALL SCH"
	   },
	   {
		"id": 323,
		"school_name": "STELVIS PRIVATE SCHOOL"
	   },
	   {
		"id": 324,
		"school_name": "TESKA N\/P SCHOOL"
	   },
	   {
		"id": 325,
		"school_name": "TEZABETH MONTESSORI SCHOOL"
	   },
	   {
		"id": 326,
		"school_name": "THE FLOURIDA STEP MONTESSORI SCHOOL"
	   },
	   {
		"id": 327,
		"school_name": "HAPPY HOME INTN ISLAMIC ACADEMY"
	   },
	   {
		"id": 328,
		"school_name": "FUNMEX NUR\/PRY SCHOOL"
	   },
	   {
		"id": 329,
		"school_name": "EUNIVIC NUR\/PRY SCHOOL"
	   },
	   {
		"id": 330,
		"school_name": "FAKOS ACADEMY "
	   },
	   {
		"id": 331,
		"school_name": "FIRST BAPTIST NUR\/PRY SCHOOL"
	   },
	   {
		"id": 332,
		"school_name": "GREAT ASPIRATIONS NUR\/PRY SCHOOL"
	   },
	   {
		"id": 333,
		"school_name": "HANNY KIDDIES NURSERY\/PRIMARY SCHOOL"
	   },
	   {
		"id": 334,
		"school_name": "HOLYMARY PRIVATE SCHOOL"
	   },
	   {
		"id": 335,
		"school_name": "HOPEFUL COURAGE N\/P SCHOOL"
	   },
	   {
		"id": 336,
		"school_name": "HUJATUL-ISLAM SCHOOL"
	   },
	   {
		"id": 337,
		"school_name": "ABBI RABBI GROUP OF SCHOOL"
	   },
	   {
		"id": 338,
		"school_name": "ADELOLA SALAKO INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 339,
		"school_name": "ADVINA NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 340,
		"school_name": "AFOD INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 341,
		"school_name": "AL-MARDIYYAH N\/P SCHOOL"
	   },
	   {
		"id": 342,
		"school_name": "ALPHA MARIES SCHOOL"
	   },
	   {
		"id": 343,
		"school_name": "AMIABLE PREPARATORY SCHOOL"
	   },
	   {
		"id": 344,
		"school_name": "ARUTH PRIVATE SCHOOL"
	   },
	   {
		"id": 345,
		"school_name": "ATRISLAND NUR \/PRY SCHOOL"
	   },
	   {
		"id": 346,
		"school_name": "AUNTY REMS INTL SCH"
	   },
	   {
		"id": 347,
		"school_name": "AVONALAND VENTURES"
	   },
	   {
		"id": 348,
		"school_name": "AYOPE INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 349,
		"school_name": "BELL FLOWER COLLEGE"
	   },
	   {
		"id": 350,
		"school_name": "BEMA INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 351,
		"school_name": "BESTON PEAK CHILDREN  SCHOOL"
	   },
	   {
		"id": 352,
		"school_name": "BILCOST NUR & PRY SCHOOL"
	   },
	   {
		"id": 353,
		"school_name": "BJK BEAUTY N\/P SCHOOL"
	   },
	   {
		"id": 354,
		"school_name": "BLOOMFIELD SCHOOL"
	   },
	   {
		"id": 355,
		"school_name": "BOLS INT'L SCHOOL"
	   },
	   {
		"id": 356,
		"school_name": "BOLYDIA MONTESSORI NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 357,
		"school_name": "BRAINBUILDER(BBIC)"
	   },
	   {
		"id": 358,
		"school_name": "BRITE HILL SCHOOL"
	   },
	   {
		"id": 359,
		"school_name": "B-ZONE MUSLIM COMMUNITY NUR\/PRY SCHOOL"
	   },
	   {
		"id": 360,
		"school_name": "CHEROLAND KIDS SCHOOL"
	   },
	   {
		"id": 361,
		"school_name": "CHILD FOUNTAIN NUR\/PRY SCHOOL"
	   },
	   {
		"id": 362,
		"school_name": "CHIMAC HERITAGE SCHOOL"
	   },
	   {
		"id": 363,
		"school_name": "CHRISLINDY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 364,
		"school_name": "CHRIST THE SAVIOUR N\/P SCHOOL"
	   },
	   {
		"id": 365,
		"school_name": "COSMOS NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 366,
		"school_name": "CRYSTAL HOPE NUR\/PRY SCH"
	   },
	   {
		"id": 367,
		"school_name": "CYBOK  NUR  & PRY  SCHOOL"
	   },
	   {
		"id": 368,
		"school_name": "DADA EL-SHADDAI NUR & PRY SCHOOL"
	   },
	   {
		"id": 369,
		"school_name": "DALE HEIGHTS INT'L SCHOOL"
	   },
	   {
		"id": 370,
		"school_name": "DAMATS COMPUTER SERVICES"
	   },
	   {
		"id": 371,
		"school_name": "DANDIES DAY NUSERY AND PRY SCHOOL"
	   },
	   {
		"id": 372,
		"school_name": "DAYSTAR SCHOOL"
	   },
	   {
		"id": 373,
		"school_name": "DE CHRISTOL SCHOOL"
	   },
	   {
		"id": 374,
		"school_name": "DE LORD HERITAGE SCHOOL"
	   },
	   {
		"id": 375,
		"school_name": "DE MARTHA NUR\/PRY SCHOOL"
	   },
	   {
		"id": 376,
		"school_name": "DEBI-C NUY&PRY SCHOOL"
	   },
	   {
		"id": 377,
		"school_name": "DEE EVIDENCE MONT. SCHOOL"
	   },
	   {
		"id": 378,
		"school_name": "DE-GLORIOUS HERITAGE SCHOOL"
	   },
	   {
		"id": 379,
		"school_name": "DELAMOG SCHOOL"
	   },
	   {
		"id": 380,
		"school_name": "DE-PAUL CATHOLIC SCHOOL"
	   },
	   {
		"id": 381,
		"school_name": "DEPENDABLE PRIVATE SCHOOL "
	   },
	   {
		"id": 382,
		"school_name": "DESTINY EDUCATION"
	   },
	   {
		"id": 383,
		"school_name": "DESTINY HERITAGE SCHOOL"
	   },
	   {
		"id": 384,
		"school_name": "DHARAFOT NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 385,
		"school_name": "DIFAST NUR AND PRY SCHOOL"
	   },
	   {
		"id": 386,
		"school_name": "DIVINE APPLE MONT"
	   },
	   {
		"id": 387,
		"school_name": "DIVINE BRIDE N\/P SCHOOL"
	   },
	   {
		"id": 388,
		"school_name": "DIVINE GRACE NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 389,
		"school_name": "DIVINE HERITAGE EDUCATIONAL CONCEPT LIMITED"
	   },
	   {
		"id": 390,
		"school_name": "DIVINE REHOBOTH INT'L SCHOOLS"
	   },
	   {
		"id": 391,
		"school_name": "DIVINE STARS NUR &BPRY SCHOOL"
	   },
	   {
		"id": 392,
		"school_name": "DOYINIK N\/P SCHOOL"
	   },
	   {
		"id": 393,
		"school_name": "DREAMREALITY  SCHOOL"
	   },
	   {
		"id": 394,
		"school_name": "EAGLES HEART NUR&PRY SCHOOL. "
	   },
	   {
		"id": 395,
		"school_name": "EBINOT PRIVATE ACADEMY"
	   },
	   {
		"id": 396,
		"school_name": "ECWA  LEANINIG  NUR\/PRY SCHOOL"
	   },
	   {
		"id": 397,
		"school_name": "EDANA MONTESSORI SCHOOL"
	   },
	   {
		"id": 398,
		"school_name": "ED-MIGAN SCHOOL"
	   },
	   {
		"id": 399,
		"school_name": "EMINENT GROUP OF SCHOOL"
	   },
	   {
		"id": 400,
		"school_name": "ENIGREEN EDUCATIONAL SERVICES "
	   },
	   {
		"id": 401,
		"school_name": "ESTALEX CHILDREN SCHOOL"
	   },
	   {
		"id": 402,
		"school_name": "ESTATE BAPTIST SCHOOL"
	   },
	   {
		"id": 403,
		"school_name": "EXCLUSIVE MUSTARD SCHOOLS"
	   },
	   {
		"id": 404,
		"school_name": "FAITH ACADEMY SECONDARY SCHOOL"
	   },
	   {
		"id": 405,
		"school_name": "FEMBA SCHOOLS"
	   },
	   {
		"id": 406,
		"school_name": "FEMOPEL PRIVATE SCHOOL"
	   },
	   {
		"id": 407,
		"school_name": "FEPREGO'S CARE CENTER SCHOOL"
	   },
	   {
		"id": 408,
		"school_name": "FEROMA N\/P SCHOOL"
	   },
	   {
		"id": 409,
		"school_name": "FESBACH NUR & PRY SCH"
	   },
	   {
		"id": 410,
		"school_name": "FLOR-PEAK COMPREHENSIVE COLLEGE"
	   },
	   {
		"id": 411,
		"school_name": "FOLLY BOLS PRIVATE SCHOOL"
	   },
	   {
		"id": 412,
		"school_name": "FOLLY DEE MONTESSORI"
	   },
	   {
		"id": 413,
		"school_name": "FUNKE EARLY LIGHT"
	   },
	   {
		"id": 414,
		"school_name": "GIGGLES MON. SCHOOL"
	   },
	   {
		"id": 415,
		"school_name": "GILEAD CHILDREN SCHOOL"
	   },
	   {
		"id": 416,
		"school_name": "GLEAMING STARS SCHOOL"
	   },
	   {
		"id": 417,
		"school_name": "GLOBAL EXCELLENCE COMPREHENSIVE SCHOOL"
	   },
	   {
		"id": 418,
		"school_name": "GLOBAL EXCELLENCE NUR\/ PRY SCHOOL"
	   },
	   {
		"id": 419,
		"school_name": "GODS BLESSINGS COMPREHENSIVE HIGH SCHOOL"
	   },
	   {
		"id": 420,
		"school_name": "GOD'S MERIT GROUP OF SCHOOL"
	   },
	   {
		"id": 421,
		"school_name": "GOLDEN LEARNERS SCHOOL"
	   },
	   {
		"id": 422,
		"school_name": "GOSELD NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 423,
		"school_name": "GRACE & WISDOM ACADEMY"
	   },
	   {
		"id": 424,
		"school_name": "GRACE BELL  NUR & PRY SCHOOL"
	   },
	   {
		"id": 425,
		"school_name": "GRACELAND KIDDIES COLLEGE"
	   },
	   {
		"id": 426,
		"school_name": "GRAFFIMS SCHOOL"
	   },
	   {
		"id": 427,
		"school_name": "GREAT BETOL SCHOOLS"
	   },
	   {
		"id": 428,
		"school_name": "GREAT DOMINION KIDS"
	   },
	   {
		"id": 429,
		"school_name": "GREAT FEATS SCHOOL"
	   },
	   {
		"id": 430,
		"school_name": "GREAT HAVENA SCHOOL"
	   },
	   {
		"id": 431,
		"school_name": "GREAT OKI SCHOOL"
	   },
	   {
		"id": 432,
		"school_name": "GREEN LAKE SCHOOL"
	   },
	   {
		"id": 433,
		"school_name": "HALL OF FAME ACADEMY"
	   },
	   {
		"id": 434,
		"school_name": "HAVIBORAH SCHOOL"
	   },
	   {
		"id": 435,
		"school_name": "HETTYFIELD SCHOOL"
	   },
	   {
		"id": 436,
		"school_name": "HIGH RISE PRIVATE  ACADEMY "
	   },
	   {
		"id": 437,
		"school_name": "HIGH RISE PRIVATE SCHOOL"
	   },
	   {
		"id": 438,
		"school_name": "HIS WAY INT SCHOOL"
	   },
	   {
		"id": 439,
		"school_name": "HOPE KIDDY NUR & PRY SCHOOL"
	   },
	   {
		"id": 440,
		"school_name": "IREYEMI SCHOOL"
	   },
	   {
		"id": 441,
		"school_name": "JAGUAR COMPREHENSIVE HIGHG"
	   },
	   {
		"id": 442,
		"school_name": "JELSKIDS SAVIOUR N\/P SCHOOL"
	   },
	   {
		"id": 443,
		"school_name": "JESAN DIVINE SCHOOL"
	   },
	   {
		"id": 444,
		"school_name": "JOY MANUEL PRIVATE SCHOOL"
	   },
	   {
		"id": 445,
		"school_name": "JULES PRIVATE SCHOOL"
	   },
	   {
		"id": 446,
		"school_name": "JULIE MOULD NUR&PRY SCH"
	   },
	   {
		"id": 447,
		"school_name": "K & B NUR AND PRY SCHOOL"
	   },
	   {
		"id": 448,
		"school_name": "KARIS HALL EDUCATIONAL SERVICES"
	   },
	   {
		"id": 449,
		"school_name": "KECEED PRIVATE SCHOOL"
	   },
	   {
		"id": 450,
		"school_name": "KEMSY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 451,
		"school_name": "KIDDIES STAR HERITAGE SCHOOL"
	   },
	   {
		"id": 452,
		"school_name": "KIDDZZPENN SCHOOL"
	   },
	   {
		"id": 453,
		"school_name": "KIKE N\/P SCHOOL"
	   },
	   {
		"id": 454,
		"school_name": "KINDER CARE  NURSERY SCHOOL"
	   },
	   {
		"id": 455,
		"school_name": "KINGDOM SCHOOL"
	   },
	   {
		"id": 456,
		"school_name": "KINGS ARENA NURS & PRY SCHOLL"
	   },
	   {
		"id": 457,
		"school_name": "LARRY BELL NURSERY\/PRIMARY SCHOOL"
	   },
	   {
		"id": 458,
		"school_name": "LERATO GROUP OF SCHOOL"
	   },
	   {
		"id": 459,
		"school_name": "LEVITES ACADEMY"
	   },
	   {
		"id": 460,
		"school_name": "LISA COT NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 461,
		"school_name": "LTB NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 462,
		"school_name": "LUSAN VILLA NUSERY AND PRIMARY  SCHOOL"
	   },
	   {
		"id": 463,
		"school_name": "MACEVILLE NUR PRY SCHOOL"
	   },
	   {
		"id": 464,
		"school_name": "MARIESWORTH SCHOOL"
	   },
	   {
		"id": 465,
		"school_name": "MARIGOLD COLLEGE"
	   },
	   {
		"id": 466,
		"school_name": "MARYLAW SCHOOL"
	   },
	   {
		"id": 467,
		"school_name": "MASTERS PLACE MONT. SCHOOL"
	   },
	   {
		"id": 468,
		"school_name": "MAVLON  INT'L PRIVATE SCHOOL"
	   },
	   {
		"id": 469,
		"school_name": "MAY PRIDE N\/P SCHOOL"
	   },
	   {
		"id": 470,
		"school_name": "MIDLAND NUR & PRY SCHOOL"
	   },
	   {
		"id": 471,
		"school_name": "MINI MASTER MONTESSORI SCHOOL"
	   },
	   {
		"id": 472,
		"school_name": "MOLBUM NUR &PRY SCHOOL"
	   },
	   {
		"id": 473,
		"school_name": "MORALITY COLLEGE"
	   },
	   {
		"id": 474,
		"school_name": "MORALITY NUR & PRY SCHOOL"
	   },
	   {
		"id": 475,
		"school_name": "MUSLIM ASSOCIATION OF NIGERIA SCHOOL (MAN NUR & PRY SCH)"
	   },
	   {
		"id": 476,
		"school_name": "NEW DAY MEDALS"
	   },
	   {
		"id": 477,
		"school_name": "NIPHILS ACADEMY"
	   },
	   {
		"id": 478,
		"school_name": "OBAAK ACADEMY SCHOOL"
	   },
	   {
		"id": 479,
		"school_name": "OCEAN SPRING COLLEGE"
	   },
	   {
		"id": 480,
		"school_name": "ORDAINED LEADERS INT'L SCHOOL"
	   },
	   {
		"id": 481,
		"school_name": "ORE-OLUWANI NURSERY\/ PRIMARY SCHOOL"
	   },
	   {
		"id": 482,
		"school_name": "OSBOT  GROUP OF SCHOOL"
	   },
	   {
		"id": 483,
		"school_name": "OXBOARD COMP. COLLEGE"
	   },
	   {
		"id": 484,
		"school_name": "PADEK CHILDEN SCHOOL"
	   },
	   {
		"id": 485,
		"school_name": "PEACE AMBASSADORS MONTESSORI ACADEMY"
	   },
	   {
		"id": 486,
		"school_name": "PEACE MEMORIAL COLLEGE"
	   },
	   {
		"id": 487,
		"school_name": "PEACE MEMORIAL NUR\/PRY SCHOOL"
	   },
	   {
		"id": 488,
		"school_name": "PENLAND SCHOOL"
	   },
	   {
		"id": 489,
		"school_name": "PHAROS MONTESSORI CHILDREN NUR & PRY SCHOOL"
	   },
	   {
		"id": 490,
		"school_name": "PRAISEWAY COLLEGE"
	   },
	   {
		"id": 491,
		"school_name": "PRECIOUS KIDZ NUR\/PRY SCHOOL"
	   },
	   {
		"id": 492,
		"school_name": "PRESTON COLLEGE "
	   },
	   {
		"id": 493,
		"school_name": "PRE-TEENS SCHOOL"
	   },
	   {
		"id": 494,
		"school_name": "PROMISE SEED SCHOOL"
	   },
	   {
		"id": 495,
		"school_name": "RACY & STURDY SCHOOL"
	   },
	   {
		"id": 496,
		"school_name": "RAPID GROWTH NUR & PRY SCHOOL"
	   },
	   {
		"id": 497,
		"school_name": "REDEEMERS NUR & PRY SCHOOL"
	   },
	   {
		"id": 498,
		"school_name": "REDITH DIVINE ROCK EDGE"
	   },
	   {
		"id": 499,
		"school_name": "REFERENCE POINT ACADEMY"
	   },
	   {
		"id": 500,
		"school_name": "REHOSEBA KIDDIES PRIVATE SCHOOL"
	   },
	   {
		"id": 501,
		"school_name": "RENICS CHILDREN SCHOOL"
	   },
	   {
		"id": 502,
		"school_name": "RENICS COLLEGE"
	   },
	   {
		"id": 503,
		"school_name": "RHEMTIES NUR\/PRY SCHOOL"
	   },
	   {
		"id": 504,
		"school_name": "RHOSAAC GROUP OF SCHOOL"
	   },
	   {
		"id": 505,
		"school_name": "RINDE SEED SCHOOL"
	   },
	   {
		"id": 506,
		"school_name": "ROOT ANN NUR\/PRY SCHOL"
	   },
	   {
		"id": 507,
		"school_name": "ROZBAN CHILDREN SCHOOL"
	   },
	   {
		"id": 508,
		"school_name": "ROZBAN SCHOOLS(COLLEGE)"
	   },
	   {
		"id": 509,
		"school_name": "RS N\/P SCHOOL"
	   },
	   {
		"id": 510,
		"school_name": "RUPHEM BASIC SCHOOL"
	   },
	   {
		"id": 511,
		"school_name": "RUTH MATH INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 512,
		"school_name": "SAINT MICHAEL'S MODEL SCHOOL"
	   },
	   {
		"id": 513,
		"school_name": "SAMEC INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 514,
		"school_name": "SHALOM NUR & PRY   SCHOOLS"
	   },
	   {
		"id": 515,
		"school_name": "SILVER FOUNTAIN COLLEGE"
	   },
	   {
		"id": 516,
		"school_name": "SINGLETON  NUR \/ PRY."
	   },
	   {
		"id": 517,
		"school_name": "SINGLETON COLLEGE"
	   },
	   {
		"id": 518,
		"school_name": "SITO GODS TIME NUR\/PRY SCH"
	   },
	   {
		"id": 519,
		"school_name": "SOUND GLOBAL NUR AND PRY SCHOOL"
	   },
	   {
		"id": 520,
		"school_name": "SOUND HOPE SCHOOL"
	   },
	   {
		"id": 521,
		"school_name": "SPECIAL BREED INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 522,
		"school_name": "SPRING OF LIFE NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 523,
		"school_name": "SPRINGING SEED MONTESSORI NURSERY SCHOOL"
	   },
	   {
		"id": 524,
		"school_name": "ST FERDINAND CATHOLIC NUR\/PRY SCHOOL"
	   },
	   {
		"id": 525,
		"school_name": "STAR BLOOMS N\/P SCHOOL"
	   },
	   {
		"id": 526,
		"school_name": "STONE BRIDGE SCHOOL"
	   },
	   {
		"id": 527,
		"school_name": "SUCCESS PRIVATE SCHOOL"
	   },
	   {
		"id": 528,
		"school_name": "SWEETHOPE CHILDREN SCHOOL"
	   },
	   {
		"id": 529,
		"school_name": "T AND Y PRIVATE SCHOOL "
	   },
	   {
		"id": 530,
		"school_name": "TADEY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 531,
		"school_name": "TERRE D'OR SCHOOL"
	   },
	   {
		"id": 532,
		"school_name": "TESTAMENT CHILDREN SCHOOL"
	   },
	   {
		"id": 533,
		"school_name": "THE DAMLEY SCHOOLS "
	   },
	   {
		"id": 534,
		"school_name": "THE FRONTLINERS SCHOOL"
	   },
	   {
		"id": 535,
		"school_name": "THE HILLS FOUNDATION SCHOOL"
	   },
	   {
		"id": 536,
		"school_name": "TIMOTINA NUR\/PRY SCHOOL"
	   },
	   {
		"id": 537,
		"school_name": "TINUOLA PRIVATE SCHOOL"
	   },
	   {
		"id": 538,
		"school_name": "TOFS - TSELEM INTERNATIONAL SCHOOLS"
	   },
	   {
		"id": 539,
		"school_name": "TOMBEE ROYAL N\/P SCHOOL"
	   },
	   {
		"id": 540,
		"school_name": "TOMLARK PRIVATE SCHOOL"
	   },
	   {
		"id": 541,
		"school_name": "TOP VICTOR PRIVATE SCHOOL"
	   },
	   {
		"id": 542,
		"school_name": "TOSMOL SCHOOL"
	   },
	   {
		"id": 543,
		"school_name": "TREASURE STONE SCHOOL"
	   },
	   {
		"id": 544,
		"school_name": "UPPER CHAMBERS SCHOOL"
	   },
	   {
		"id": 545,
		"school_name": "UPPER ROOM INTERNATIONAL NUR & PRY SCHOOL"
	   },
	   {
		"id": 546,
		"school_name": "VERODU SCHOOL"
	   },
	   {
		"id": 547,
		"school_name": "VICWIN PREPARATORY"
	   },
	   {
		"id": 548,
		"school_name": "VIFADOM NUSERY AND PRY SCHOOL"
	   },
	   {
		"id": 549,
		"school_name": "VIVAVOCE GIFTED SCHOOL"
	   },
	   {
		"id": 550,
		"school_name": "WHITE HOUSE INT'L SCHOOL"
	   },
	   {
		"id": 551,
		"school_name": "WINTON SMART SCHOOL"
	   },
	   {
		"id": 552,
		"school_name": "WOLEX POLYTHECNIC"
	   },
	   {
		"id": 553,
		"school_name": "WORD OF POWER N\/P SCHOOL"
	   },
	   {
		"id": 554,
		"school_name": "YALA PRIVATE ACADEMY SCHOOL"
	   },
	   {
		"id": 555,
		"school_name": "YEROKUN EARLY LEARNING CENTER"
	   },
	   {
		"id": 556,
		"school_name": "RAISED HOPE ACADEMY"
	   },
	   {
		"id": 557,
		"school_name": "OLAS CRECHE"
	   },
	   {
		"id": 558,
		"school_name": "VICSHI INT'L SCHOOL"
	   },
	   {
		"id": 559,
		"school_name": "GLORY OF GOD CONVALESCENT"
	   },
	   {
		"id": 560,
		"school_name": "GRAMDIT NUR\/PRY SCHOOL "
	   },
	   {
		"id": 561,
		"school_name": "PAMS MONTESSORI SCH"
	   },
	   {
		"id": 562,
		"school_name": "KHADIJAT NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 563,
		"school_name": "THE BEULAH PIVATE SCHOOL"
	   },
	   {
		"id": 564,
		"school_name": "LIZZYLAND SCHOOLS"
	   },
	   {
		"id": 565,
		"school_name": "MARY FOUNDATION NUR\/ PRY SCHOO "
	   },
	   {
		"id": 566,
		"school_name": "BRIDGE WATER ACADEMY"
	   },
	   {
		"id": 567,
		"school_name": "SOLEST SCHOOL"
	   },
	   {
		"id": 568,
		"school_name": "BEREA NUR\/PRY SCHOOL"
	   },
	   {
		"id": 569,
		"school_name": "INTERGUIDE MONTESSORI SCHOOL"
	   },
	   {
		"id": 570,
		"school_name": "UNIMSON NUR\/PRY SCH"
	   },
	   {
		"id": 571,
		"school_name": "EXCECUTIVE CARE AND LEARNING CENTRE"
	   },
	   {
		"id": 572,
		"school_name": "JIM'S NUR\/PRY SCH"
	   },
	   {
		"id": 573,
		"school_name": "ST GRAAG'S COLLEGE"
	   },
	   {
		"id": 574,
		"school_name": "dexcelxi nursery and primary school"
	   },
	   {
		"id": 575,
		"school_name": "KELVRON KIDS COLLEGE"
	   },
	   {
		"id": 576,
		"school_name": "PEN ARK SCHOOLS"
	   },
	   {
		"id": 577,
		"school_name": "FEMBISCO PRIVATE SCH"
	   },
	   {
		"id": 578,
		"school_name": "RIPPLES INTERNATIONAL SCH."
	   },
	   {
		"id": 579,
		"school_name": "CAMBRIDGE COLLEGE"
	   },
	   {
		"id": 580,
		"school_name": "HEAVENS GATE REDEEMER'S SCHOOL"
	   },
	   {
		"id": 581,
		"school_name": "DAFAP KIDS VERSLY NUR\/PRY SCHOOL"
	   },
	   {
		"id": 582,
		"school_name": "DANIK ROYAL INT'L SCHOOL"
	   },
	   {
		"id": 583,
		"school_name": "ELITES INT'L NUR & PRY SCHOOL"
	   },
	   {
		"id": 584,
		"school_name": "ABBI RABBI GROUP OF SCHOOL"
	   },
	   {
		"id": 585,
		"school_name": "ADELOLA SALAKO INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 586,
		"school_name": "ADVINA NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 587,
		"school_name": "AFOD INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 588,
		"school_name": "AL-MARDIYYAH N\/P SCHOOL"
	   },
	   {
		"id": 589,
		"school_name": "ALPHA MARIES SCHOOL"
	   },
	   {
		"id": 590,
		"school_name": "AMIABLE PREPARATORY SCHOOL"
	   },
	   {
		"id": 591,
		"school_name": "ARUTH PRIVATE SCHOOL"
	   },
	   {
		"id": 592,
		"school_name": "ATRISLAND NUR \/PRY SCHOOL"
	   },
	   {
		"id": 593,
		"school_name": "AUNTY REMS INTL SCH"
	   },
	   {
		"id": 594,
		"school_name": "AVONALAND VENTURES"
	   },
	   {
		"id": 595,
		"school_name": "AYOPE INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 596,
		"school_name": "BELL FLOWER COLLEGE"
	   },
	   {
		"id": 597,
		"school_name": "BEMA INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 598,
		"school_name": "BESTON PEAK CHILDREN  SCHOOL"
	   },
	   {
		"id": 599,
		"school_name": "BILCOST NUR & PRY SCHOOL"
	   },
	   {
		"id": 600,
		"school_name": "BJK BEAUTY N\/P SCHOOL"
	   },
	   {
		"id": 601,
		"school_name": "BLOOMFIELD SCHOOL"
	   },
	   {
		"id": 602,
		"school_name": "BOLS INT'L SCHOOL"
	   },
	   {
		"id": 603,
		"school_name": "BOLYDIA MONTESSORI NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 604,
		"school_name": "BRAINBUILDER(BBIC)"
	   },
	   {
		"id": 605,
		"school_name": "BRITE HILL SCHOOL"
	   },
	   {
		"id": 606,
		"school_name": "B-ZONE MUSLIM COMMUNITY NUR\/PRY SCHOOL"
	   },
	   {
		"id": 607,
		"school_name": "CHEROLAND KIDS SCHOOL"
	   },
	   {
		"id": 608,
		"school_name": "CHILD FOUNTAIN NUR\/PRY SCHOOL"
	   },
	   {
		"id": 609,
		"school_name": "CHIMAC HERITAGE SCHOOL"
	   },
	   {
		"id": 610,
		"school_name": "CHRISLINDY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 611,
		"school_name": "CHRIST THE SAVIOUR N\/P SCHOOL"
	   },
	   {
		"id": 612,
		"school_name": "COSMOS NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 613,
		"school_name": "CRYSTAL HOPE NUR\/PRY SCH"
	   },
	   {
		"id": 614,
		"school_name": "CYBOK  NUR  & PRY  SCHOOL"
	   },
	   {
		"id": 615,
		"school_name": "DADA EL-SHADDAI NUR & PRY SCHOOL"
	   },
	   {
		"id": 616,
		"school_name": "DALE HEIGHTS INT'L SCHOOL"
	   },
	   {
		"id": 617,
		"school_name": "DAMATS COMPUTER SERVICES"
	   },
	   {
		"id": 618,
		"school_name": "DANDIES DAY NUSERY AND PRY SCHOOL"
	   },
	   {
		"id": 619,
		"school_name": "DAYSTAR SCHOOL"
	   },
	   {
		"id": 620,
		"school_name": "DE CHRISTOL SCHOOL"
	   },
	   {
		"id": 621,
		"school_name": "DE LORD HERITAGE SCHOOL"
	   },
	   {
		"id": 622,
		"school_name": "DE MARTHA NUR\/PRY SCHOOL"
	   },
	   {
		"id": 623,
		"school_name": "DEBI-C NUY&PRY SCHOOL"
	   },
	   {
		"id": 624,
		"school_name": "DEE EVIDENCE MONT. SCHOOL"
	   },
	   {
		"id": 625,
		"school_name": "DE-GLORIOUS HERITAGE SCHOOL"
	   },
	   {
		"id": 626,
		"school_name": "DELAMOG SCHOOL"
	   },
	   {
		"id": 627,
		"school_name": "DE-PAUL CATHOLIC SCHOOL"
	   },
	   {
		"id": 628,
		"school_name": "DEPENDABLE PRIVATE SCHOOL "
	   },
	   {
		"id": 629,
		"school_name": "DESTINY EDUCATION"
	   },
	   {
		"id": 630,
		"school_name": "DESTINY HERITAGE SCHOOL"
	   },
	   {
		"id": 631,
		"school_name": "DHARAFOT NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 632,
		"school_name": "DIFAST NUR AND PRY SCHOOL"
	   },
	   {
		"id": 633,
		"school_name": "DIVINE APPLE MONT"
	   },
	   {
		"id": 634,
		"school_name": "DIVINE BRIDE N\/P SCHOOL"
	   },
	   {
		"id": 635,
		"school_name": "DIVINE GRACE NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 636,
		"school_name": "DIVINE HERITAGE EDUCATIONAL CONCEPT LIMITED"
	   },
	   {
		"id": 637,
		"school_name": "DIVINE REHOBOTH INT'L SCHOOLS"
	   },
	   {
		"id": 638,
		"school_name": "DIVINE STARS NUR &BPRY SCHOOL"
	   },
	   {
		"id": 639,
		"school_name": "DOYINIK N\/P SCHOOL"
	   },
	   {
		"id": 640,
		"school_name": "DREAMREALITY  SCHOOL"
	   },
	   {
		"id": 641,
		"school_name": "EAGLES HEART NUR&PRY SCHOOL. "
	   },
	   {
		"id": 642,
		"school_name": "EBINOT PRIVATE ACADEMY"
	   },
	   {
		"id": 643,
		"school_name": "ECWA  LEANINIG  NUR\/PRY SCHOOL"
	   },
	   {
		"id": 644,
		"school_name": "EDANA MONTESSORI SCHOOL"
	   },
	   {
		"id": 645,
		"school_name": "ED-MIGAN SCHOOL"
	   },
	   {
		"id": 646,
		"school_name": "EMINENT GROUP OF SCHOOL"
	   },
	   {
		"id": 647,
		"school_name": "ENIGREEN EDUCATIONAL SERVICES "
	   },
	   {
		"id": 648,
		"school_name": "ESTALEX CHILDREN SCHOOL"
	   },
	   {
		"id": 649,
		"school_name": "ESTATE BAPTIST SCHOOL"
	   },
	   {
		"id": 650,
		"school_name": "EXCLUSIVE MUSTARD SCHOOLS"
	   },
	   {
		"id": 651,
		"school_name": "FAITH ACADEMY SECONDARY SCHOOL"
	   },
	   {
		"id": 652,
		"school_name": "FEMBA SCHOOLS"
	   },
	   {
		"id": 653,
		"school_name": "FEMOPEL PRIVATE SCHOOL"
	   },
	   {
		"id": 654,
		"school_name": "FEPREGO'S CARE CENTER SCHOOL"
	   },
	   {
		"id": 655,
		"school_name": "FEROMA N\/P SCHOOL"
	   },
	   {
		"id": 656,
		"school_name": "FESBACH NUR & PRY SCH"
	   },
	   {
		"id": 657,
		"school_name": "FLOR-PEAK COMPREHENSIVE COLLEGE"
	   },
	   {
		"id": 658,
		"school_name": "FOLLY BOLS PRIVATE SCHOOL"
	   },
	   {
		"id": 659,
		"school_name": "FOLLY DEE MONTESSORI"
	   },
	   {
		"id": 660,
		"school_name": "FUNKE EARLY LIGHT"
	   },
	   {
		"id": 661,
		"school_name": "GIGGLES MON. SCHOOL"
	   },
	   {
		"id": 662,
		"school_name": "GILEAD CHILDREN SCHOOL"
	   },
	   {
		"id": 663,
		"school_name": "GLEAMING STARS SCHOOL"
	   },
	   {
		"id": 664,
		"school_name": "GLOBAL EXCELLENCE COMPREHENSIVE SCHOOL"
	   },
	   {
		"id": 665,
		"school_name": "GLOBAL EXCELLENCE NUR\/ PRY SCHOOL"
	   },
	   {
		"id": 666,
		"school_name": "GODS BLESSINGS COMPREHENSIVE HIGH SCHOOL"
	   },
	   {
		"id": 667,
		"school_name": "GOD'S MERIT GROUP OF SCHOOL"
	   },
	   {
		"id": 668,
		"school_name": "GOLDEN LEARNERS SCHOOL"
	   },
	   {
		"id": 669,
		"school_name": "GOSELD NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 670,
		"school_name": "GRACE & WISDOM ACADEMY"
	   },
	   {
		"id": 671,
		"school_name": "GRACE BELL  NUR & PRY SCHOOL"
	   },
	   {
		"id": 672,
		"school_name": "GRACELAND KIDDIES COLLEGE"
	   },
	   {
		"id": 673,
		"school_name": "GRAFFIMS SCHOOL"
	   },
	   {
		"id": 674,
		"school_name": "GREAT BETOL SCHOOLS"
	   },
	   {
		"id": 675,
		"school_name": "GREAT DOMINION KIDS"
	   },
	   {
		"id": 676,
		"school_name": "GREAT FEATS SCHOOL"
	   },
	   {
		"id": 677,
		"school_name": "GREAT HAVENA SCHOOL"
	   },
	   {
		"id": 678,
		"school_name": "GREAT OKI SCHOOL"
	   },
	   {
		"id": 679,
		"school_name": "GREEN LAKE SCHOOL"
	   },
	   {
		"id": 680,
		"school_name": "HALL OF FAME ACADEMY"
	   },
	   {
		"id": 681,
		"school_name": "HAVIBORAH SCHOOL"
	   },
	   {
		"id": 682,
		"school_name": "HETTYFIELD SCHOOL"
	   },
	   {
		"id": 683,
		"school_name": "HIGH RISE PRIVATE  ACADEMY "
	   },
	   {
		"id": 684,
		"school_name": "HIGH RISE PRIVATE SCHOOL"
	   },
	   {
		"id": 685,
		"school_name": "HIS WAY INT SCHOOL"
	   },
	   {
		"id": 686,
		"school_name": "HOPE KIDDY NUR & PRY SCHOOL"
	   },
	   {
		"id": 687,
		"school_name": "IREYEMI SCHOOL"
	   },
	   {
		"id": 688,
		"school_name": "JAGUAR COMPREHENSIVE HIGHG"
	   },
	   {
		"id": 689,
		"school_name": "JELSKIDS SAVIOUR N\/P SCHOOL"
	   },
	   {
		"id": 690,
		"school_name": "JESAN DIVINE SCHOOL"
	   },
	   {
		"id": 691,
		"school_name": "JOY MANUEL PRIVATE SCHOOL"
	   },
	   {
		"id": 692,
		"school_name": "JULES PRIVATE SCHOOL"
	   },
	   {
		"id": 693,
		"school_name": "JULIE MOULD NUR&PRY SCH"
	   },
	   {
		"id": 694,
		"school_name": "K & B NUR AND PRY SCHOOL"
	   },
	   {
		"id": 695,
		"school_name": "KARIS HALL EDUCATIONAL SERVICES"
	   },
	   {
		"id": 696,
		"school_name": "KECEED PRIVATE SCHOOL"
	   },
	   {
		"id": 697,
		"school_name": "KEMSY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 698,
		"school_name": "KIDDIES STAR HERITAGE SCHOOL"
	   },
	   {
		"id": 699,
		"school_name": "KIDDZZPENN SCHOOL"
	   },
	   {
		"id": 700,
		"school_name": "KIKE N\/P SCHOOL"
	   },
	   {
		"id": 701,
		"school_name": "KINDER CARE  NURSERY SCHOOL"
	   },
	   {
		"id": 702,
		"school_name": "KINGDOM SCHOOL"
	   },
	   {
		"id": 703,
		"school_name": "KINGS ARENA NURS & PRY SCHOLL"
	   },
	   {
		"id": 704,
		"school_name": "LARRY BELL NURSERY\/PRIMARY SCHOOL"
	   },
	   {
		"id": 705,
		"school_name": "LERATO GROUP OF SCHOOL"
	   },
	   {
		"id": 706,
		"school_name": "LEVITES ACADEMY"
	   },
	   {
		"id": 707,
		"school_name": "LISA COT NURSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 708,
		"school_name": "LTB NUSERY AND PRIMARY SCHOOL"
	   },
	   {
		"id": 709,
		"school_name": "LUSAN VILLA NUSERY AND PRIMARY  SCHOOL"
	   },
	   {
		"id": 710,
		"school_name": "MACEVILLE NUR PRY SCHOOL"
	   },
	   {
		"id": 711,
		"school_name": "MARIESWORTH SCHOOL"
	   },
	   {
		"id": 712,
		"school_name": "MARIGOLD COLLEGE"
	   },
	   {
		"id": 713,
		"school_name": "MARYLAW SCHOOL"
	   },
	   {
		"id": 714,
		"school_name": "MASTERS PLACE MONT. SCHOOL"
	   },
	   {
		"id": 715,
		"school_name": "MAVLON  INT'L PRIVATE SCHOOL"
	   },
	   {
		"id": 716,
		"school_name": "MAY PRIDE N\/P SCHOOL"
	   },
	   {
		"id": 717,
		"school_name": "MIDLAND NUR & PRY SCHOOL"
	   },
	   {
		"id": 718,
		"school_name": "MINI MASTER MONTESSORI SCHOOL"
	   },
	   {
		"id": 719,
		"school_name": "MOLBUM NUR &PRY SCHOOL"
	   },
	   {
		"id": 720,
		"school_name": "MORALITY COLLEGE"
	   },
	   {
		"id": 721,
		"school_name": "MORALITY NUR & PRY SCHOOL"
	   },
	   {
		"id": 722,
		"school_name": "MUSLIM ASSOCIATION OF NIGERIA SCHOOL (MAN NUR & PRY SCH)"
	   },
	   {
		"id": 723,
		"school_name": "NEW DAY MEDALS"
	   },
	   {
		"id": 724,
		"school_name": "NIPHILS ACADEMY"
	   },
	   {
		"id": 725,
		"school_name": "OBAAK ACADEMY SCHOOL"
	   },
	   {
		"id": 726,
		"school_name": "OCEAN SPRING COLLEGE"
	   },
	   {
		"id": 727,
		"school_name": "ORDAINED LEADERS INT'L SCHOOL"
	   },
	   {
		"id": 728,
		"school_name": "ORE-OLUWANI NURSERY\/ PRIMARY SCHOOL"
	   },
	   {
		"id": 729,
		"school_name": "OSBOT  GROUP OF SCHOOL"
	   },
	   {
		"id": 730,
		"school_name": "OXBOARD COMP. COLLEGE"
	   },
	   {
		"id": 731,
		"school_name": "PADEK CHILDEN SCHOOL"
	   },
	   {
		"id": 732,
		"school_name": "PEACE AMBASSADORS MONTESSORI ACADEMY"
	   },
	   {
		"id": 733,
		"school_name": "PEACE MEMORIAL COLLEGE"
	   },
	   {
		"id": 734,
		"school_name": "PEACE MEMORIAL NUR\/PRY SCHOOL"
	   },
	   {
		"id": 735,
		"school_name": "PENLAND SCHOOL"
	   },
	   {
		"id": 736,
		"school_name": "PHAROS MONTESSORI CHILDREN NUR & PRY SCHOOL"
	   },
	   {
		"id": 737,
		"school_name": "PRAISEWAY COLLEGE"
	   },
	   {
		"id": 738,
		"school_name": "PRECIOUS KIDZ NUR\/PRY SCHOOL"
	   },
	   {
		"id": 739,
		"school_name": "PRESTON COLLEGE "
	   },
	   {
		"id": 740,
		"school_name": "PRE-TEENS SCHOOL"
	   },
	   {
		"id": 741,
		"school_name": "PROMISE SEED SCHOOL"
	   },
	   {
		"id": 742,
		"school_name": "RACY & STURDY SCHOOL"
	   },
	   {
		"id": 743,
		"school_name": "RAPID GROWTH NUR & PRY SCHOOL"
	   },
	   {
		"id": 744,
		"school_name": "REDEEMERS NUR & PRY SCHOOL"
	   },
	   {
		"id": 745,
		"school_name": "REDITH DIVINE ROCK EDGE"
	   },
	   {
		"id": 746,
		"school_name": "REFERENCE POINT ACADEMY"
	   },
	   {
		"id": 747,
		"school_name": "REHOSEBA KIDDIES PRIVATE SCHOOL"
	   },
	   {
		"id": 748,
		"school_name": "RENICS CHILDREN SCHOOL"
	   },
	   {
		"id": 749,
		"school_name": "RENICS COLLEGE"
	   },
	   {
		"id": 750,
		"school_name": "RHEMTIES NUR\/PRY SCHOOL"
	   },
	   {
		"id": 751,
		"school_name": "RHOSAAC GROUP OF SCHOOL"
	   },
	   {
		"id": 752,
		"school_name": "RINDE SEED SCHOOL"
	   },
	   {
		"id": 753,
		"school_name": "ROOT ANN NUR\/PRY SCHOL"
	   },
	   {
		"id": 754,
		"school_name": "ROZBAN CHILDREN SCHOOL"
	   },
	   {
		"id": 755,
		"school_name": "ROZBAN SCHOOLS(COLLEGE)"
	   },
	   {
		"id": 756,
		"school_name": "RS N\/P SCHOOL"
	   },
	   {
		"id": 757,
		"school_name": "RUPHEM BASIC SCHOOL"
	   },
	   {
		"id": 758,
		"school_name": "RUTH MATH INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 759,
		"school_name": "SAINT MICHAEL'S MODEL SCHOOL"
	   },
	   {
		"id": 760,
		"school_name": "SAMEC INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 761,
		"school_name": "SHALOM NUR & PRY   SCHOOLS"
	   },
	   {
		"id": 762,
		"school_name": "SILVER FOUNTAIN COLLEGE"
	   },
	   {
		"id": 763,
		"school_name": "SINGLETON  NUR \/ PRY."
	   },
	   {
		"id": 764,
		"school_name": "SINGLETON COLLEGE"
	   },
	   {
		"id": 765,
		"school_name": "SITO GODS TIME NUR\/PRY SCH"
	   },
	   {
		"id": 766,
		"school_name": "SOUND GLOBAL NUR AND PRY SCHOOL"
	   },
	   {
		"id": 767,
		"school_name": "SOUND HOPE SCHOOL"
	   },
	   {
		"id": 768,
		"school_name": "SPECIAL BREED INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 769,
		"school_name": "SPRING OF LIFE NURSERY & PRIMARY SCHOOL"
	   },
	   {
		"id": 770,
		"school_name": "SPRINGING SEED MONTESSORI NURSERY SCHOOL"
	   },
	   {
		"id": 771,
		"school_name": "ST FERDINAND CATHOLIC NUR\/PRY SCHOOL"
	   },
	   {
		"id": 772,
		"school_name": "STAR BLOOMS N\/P SCHOOL"
	   },
	   {
		"id": 773,
		"school_name": "STONE BRIDGE SCHOOL"
	   },
	   {
		"id": 774,
		"school_name": "SUCCESS PRIVATE SCHOOL"
	   },
	   {
		"id": 775,
		"school_name": "SWEETHOPE CHILDREN SCHOOL"
	   },
	   {
		"id": 776,
		"school_name": "T AND Y PRIVATE SCHOOL "
	   },
	   {
		"id": 777,
		"school_name": "TADEY INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 778,
		"school_name": "TERRE D'OR SCHOOL"
	   },
	   {
		"id": 779,
		"school_name": "TESTAMENT CHILDREN SCHOOL"
	   },
	   {
		"id": 780,
		"school_name": "THE DAMLEY SCHOOLS "
	   },
	   {
		"id": 781,
		"school_name": "THE FRONTLINERS SCHOOL"
	   },
	   {
		"id": 782,
		"school_name": "THE HILLS FOUNDATION SCHOOL"
	   },
	   {
		"id": 783,
		"school_name": "TIMOTINA NUR\/PRY SCHOOL"
	   },
	   {
		"id": 784,
		"school_name": "TINUOLA PRIVATE SCHOOL"
	   },
	   {
		"id": 785,
		"school_name": "TOFS - TSELEM INTERNATIONAL SCHOOLS"
	   },
	   {
		"id": 786,
		"school_name": "TOMBEE ROYAL N\/P SCHOOL"
	   },
	   {
		"id": 787,
		"school_name": "TOMLARK PRIVATE SCHOOL"
	   },
	   {
		"id": 788,
		"school_name": "TOP VICTOR PRIVATE SCHOOL"
	   },
	   {
		"id": 789,
		"school_name": "TOSMOL SCHOOL"
	   },
	   {
		"id": 790,
		"school_name": "TREASURE STONE SCHOOL"
	   },
	   {
		"id": 791,
		"school_name": "UPPER CHAMBERS SCHOOL"
	   },
	   {
		"id": 792,
		"school_name": "UPPER ROOM INTERNATIONAL NUR & PRY SCHOOL"
	   },
	   {
		"id": 793,
		"school_name": "VERODU SCHOOL"
	   },
	   {
		"id": 794,
		"school_name": "VICWIN PREPARATORY"
	   },
	   {
		"id": 795,
		"school_name": "VIFADOM NUSERY AND PRY SCHOOL"
	   },
	   {
		"id": 796,
		"school_name": "VIVAVOCE GIFTED SCHOOL"
	   },
	   {
		"id": 797,
		"school_name": "WHITE HOUSE INT'L SCHOOL"
	   },
	   {
		"id": 798,
		"school_name": "WINTON SMART SCHOOL"
	   },
	   {
		"id": 799,
		"school_name": "WOLEX POLYTHECNIC"
	   },
	   {
		"id": 800,
		"school_name": "WORD OF POWER N\/P SCHOOL"
	   },
	   {
		"id": 801,
		"school_name": "YALA PRIVATE ACADEMY SCHOOL"
	   },
	   {
		"id": 802,
		"school_name": "YEROKUN EARLY LEARNING CENTER"
	   },
	   {
		"id": 803,
		"school_name": "THE ZION PLACE COLLEGE "
	   },
	   {
		"id": 804,
		"school_name": "VINELLI PRIVATE SCHOOL"
	   },
	   {
		"id": 805,
		"school_name": "OLIVE ASTERS SCHOOL"
	   },
	   {
		"id": 806,
		"school_name": "JOLIN FORT SCHOOL"
	   },
	   {
		"id": 807,
		"school_name": "MOREL PROGRESSIVE SCHOOL"
	   },
	   {
		"id": 808,
		"school_name": "SUPERSTAR SCHOOL"
	   },
	   {
		"id": 809,
		"school_name": "THE GARDNER SCHOOL"
	   },
	   {
		"id": 810,
		"school_name": "SHADIA MEMORIAL SCHOOL"
	   },
	   {
		"id": 811,
		"school_name": "DAREY ACADEMY"
	   },
	   {
		"id": 812,
		"school_name": "CENTERPOINT SCHOOLS"
	   },
	   {
		"id": 813,
		"school_name": "DIVINE SOLUTION NUR&PRY SCHOOL"
	   },
	   {
		"id": 814,
		"school_name": "FORTBENNY SCHOOL"
	   },
	   {
		"id": 815,
		"school_name": "IMEF SCHOOL"
	   },
	   {
		"id": 816,
		"school_name": "JUCOGS NUR&PRY SCHOOL"
	   },
	   {
		"id": 817,
		"school_name": "PRINCESS ADENIKE ROYAL MULTITUDE"
	   },
	   {
		"id": 818,
		"school_name": "REED SUCCESS NUR&PRY SCHOOL"
	   },
	   {
		"id": 819,
		"school_name": "MANIFOLD SCHOOLS"
	   },
	   {
		"id": 820,
		"school_name": "ABRAMHAM GRACE SCHOOL "
	   },
	   {
		"id": 821,
		"school_name": "PARAQUERETTE HALL ACADEMY"
	   },
	   {
		"id": 822,
		"school_name": "ABBEYDEB SCHOOL"
	   },
	   {
		"id": 823,
		"school_name": "BLUE ROYAL SCHOOL"
	   },
	   {
		"id": 824,
		"school_name": "SOREK NUR&PRY SCHOOL"
	   },
	   {
		"id": 825,
		"school_name": "OLAYINKA COLLEGE"
	   },
	   {
		"id": 826,
		"school_name": "MARY GREY HIGH SCHOOL"
	   },
	   {
		"id": 827,
		"school_name": "AFFABLE SCHOOL"
	   },
	   {
		"id": 828,
		"school_name": "PENTAGON SCHOOL"
	   },
	   {
		"id": 829,
		"school_name": "ASTUTE\/ROCK FOUNDATION SCHOOL"
	   },
	   {
		"id": 830,
		"school_name": "FAWASIL SCHOOL"
	   },
	   {
		"id": 831,
		"school_name": "HIGHER PRAISE SCHOOL"
	   },
	   {
		"id": 832,
		"school_name": "DISTRICT COLLEGE"
	   },
	   {
		"id": 833,
		"school_name": "FRANCEL MONTESSORI SCHOOL"
	   },
	   {
		"id": 834,
		"school_name": "GREAT MACKINGS NUR AND PRY SCHOOL"
	   },
	   {
		"id": 835,
		"school_name": "LIFELINE SCHOOL"
	   },
	   {
		"id": 836,
		"school_name": "MEGMARTINS MONT.SCHOOL"
	   },
	   {
		"id": 837,
		"school_name": "MOSHELEN SCHOOL"
	   },
	   {
		"id": 838,
		"school_name": "WISDOMLASS SCHOOL"
	   },
	   {
		"id": 839,
		"school_name": "WISDOM- LAS  COLLEGE"
	   },
	   {
		"id": 840,
		"school_name": "ZITEL CASTLE SCHOOL"
	   },
	   {
		"id": 841,
		"school_name": "SPRINGBOARD TUTORIAL COLLEGE"
	   },
	   {
		"id": 842,
		"school_name": "3AG GLOBAL RESOURCES LIMITED"
	   },
	   {
		"id": 843,
		"school_name": "BASIC STEP SCHOOL"
	   },
	   {
		"id": 844,
		"school_name": "BEEHIVE NURSERY \nAND PRIMARY SCHOOL"
	   },
	   {
		"id": 845,
		"school_name": "CHILDLINE EDUCATION"
	   },
	   {
		"id": 846,
		"school_name": "COLLEGE OF INSURANCE AND FINANCIAL MANAGEMENT LTD"
	   },
	   {
		"id": 847,
		"school_name": "DIGILEARN CENTRE LTD"
	   },
	   {
		"id": 848,
		"school_name": "DIVINE OFFSPRING INTERNATIONAL SCHOOL"
	   },
	   {
		"id": 849,
		"school_name": "FIELD OF SKILLS AND DREAMS TRAINING INSTITUTE"
	   },
	   {
		"id": 850,
		"school_name": "FORTE YARD MONTESSORI SCHOOL"
	   },
	   {
		"id": 851,
		"school_name": "FUTURE KIDS NURSERY AND PRIMARY SCHOOL "
	   },
	   {
		"id": 852,
		"school_name": "HOLBORN EDUCATIONAL SERVICES"
	   },
	   {
		"id": 853,
		"school_name": "HOME CLASS AND VICTORIAS TUTORS"
	   },
	   {
		"id": 854,
		"school_name": "IMPERIAL EDUCATIONAL SERVICES"
	   },
	   {
		"id": 855,
		"school_name": "KIDS HAVEN CRECHE AND AFTER SCHOOL"
	   },
	   {
		"id": 856,
		"school_name": "LEABRIDGE PREPARATORY SCHOOL LIMITED"
	   },
	   {
		"id": 857,
		"school_name": "LULLABIES AND LAUGHTER SCH"
	   },
	   {
		"id": 858,
		"school_name": "METROPOLITAN SCHOOL OF BUSINESS AND MANAGEMENT"
	   },
	   {
		"id": 859,
		"school_name": "MINDERS MONTESSORI SCHOOL"
	   },
	   {
		"id": 860,
		"school_name": "MUSTARDVILLE SCHOOL "
	   },
	   {
		"id": 861,
		"school_name": "NIGERIA TULIP INTERNATIONAL COLLEGES "
	   },
	   {
		"id": 862,
		"school_name": "PROFESSIONAL EDUCATIONAL SOLUTION LTD"
	   },
	   {
		"id": 863,
		"school_name": "REAL ACADEMY LTD"
	   },
	   {
		"id": 864,
		"school_name": "ROLA INTERNATIONAL SCHOOL    "
	   },
	   {
		"id": 865,
		"school_name": "SANCTUM STARTUP COLLEGE"
	   },
	   {
		"id": 866,
		"school_name": "ST LEOS CATHOLIC PRIVATE SCHOOL"
	   },
	   {
		"id": 867,
		"school_name": "THURSMAY EDUCATIONAL SERVICES LTD"
	   },
	   {
		"id": 868,
		"school_name": "TUNWASE HIGH SCHOOL"
	   },
	   {
		"id": 869,
		"school_name": "TUNWASE SCHOOL"
	   },
	   {
		"id": 870,
		"school_name": "TWINKLY TOTS"
	   },
	   {
		"id": 871,
		"school_name": "UNICAF EDUCATIONAL SERVICES LTD"
	   },
	   {
		"id": 872,
		"school_name": "VEG FOUNDATION SCHOOL"
	   },
	   {
		"id": 873,
		"school_name": "HONEYTREAT TRADE ACADEMY"
	   }
])
const banks = ref([
	{option: 'Mpesa', value: 'mpesa'},
	{option: 'Access bank', value: 'accessbank'},
	{option: 'First Bank', value: 'firstbankng'},
	{option: 'GTbank', value: 'gtbank'},
	{option: 'Uba bank', value: 'uba'},
	{option: 'Zenith bank', value: 'zenithbank'},
	{option: 'Equity bank', value: 'equitybank'},
	{option: 'Standard Charted Bank', value: 'stanchartbank'},
	{option: 'Absa bank', value: 'absabank'},
	{option: 'Coop bank', value: 'coopbank'},
	{option: 'Kcb bank', value: 'kcbbank'},
	{option: 'Wema bank', value: 'wemabank'},
	{option: 'Family bank', value: 'familybank'},
])
const analysis_type = ref([
	{option: 'Individual', value: 'individual'},
	{option: 'Business', value: 'business'},
	{option: 'Merchant', value: 'merchant'}
])

const getSchools = () => {
	makeFetchToAnotherUrl('GET', 'https://edikeatadmin.onrender.com/edike/api/v1/school/admin/all-active')
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
}

export const useDemos  = () => {

	getSchools()
	return { classes, schools, banks, analysis_type }
}