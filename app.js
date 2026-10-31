/* ================= PARTS DATABASE (Takara Tomy Beyblade X) ================= */
const BLADES = [
 // [name, type A/D/S/B/'' , line]
 ['Dran Sword','A','BX'],['Hells Scythe','B','BX'],['Wizard Arrow','S','BX'],['Knight Shield','D','BX'],['Knight Lance','D','BX'],
 ['Shark Edge','A','BX'],['Leon Claw','B','BX'],['Viper Tail','','BX'],['Rhino Horn','D','BX'],['Dran Dagger','A','BX'],['Hells Chain','B','BX'],
 ['Phoenix Wing','A','BX'],['Wyvern Gale','S','BX'],['Unicorn Sting','B','BX'],['Sphinx Cowl','D','BX'],['Tyranno Beat','A','BX'],['Weiss Tiger','B','BX'],
 ['Cobalt Dragoon','A','BX'],['Black Shell','D','BX'],['Whale Wave','A','BX'],['Crimson Garuda','B','BX'],['Shelter Drake','','BX'],['Tricera Press','D','BX'],
 ['Samurai Calibur','A','BX'],['Dran Strike','A','BX'],['Mammoth Tusk','','BX'],['Samurai Steel','','BX'],['Cobalt Drake','A','BX'],['Phoenix Feather','A','BX'],
 ['Croc Crunch','','BX'],
 ['Dran Buster','A','UX'],['Hells Hammer','B','UX'],['Wizard Rod','S','UX'],['Shinobi Shadow','','UX'],['Leon Crest','D','UX'],['Phoenix Rudder','S','UX'],
 ['Silver Wolf','S','UX'],['Samurai Saber','A','UX'],['Knight Mail','D','UX'],['Impact Drake','A','UX'],['Ghost Circle','','UX'],['Golem Rock','D','UX'],
 ['Scorpio Spear','B','UX'],['Shark Scale','A','UX'],['Clock Mirage','','UX'],['Meteor Dragoon','A','UX'],['Mummy Curse','','UX'],['Bullet Griffon','','UX'],
 ['Glory Valkyrie','','UX'],['Wyvern Hover','S','UX'],['Orochi Cluster','','UX'],
 ['Dran Brave','A','CX'],['Wizard Arc','S','CX'],['Perseus Dark','','CX'],['Hells Reaper','B','CX'],['Fox Brush','','CX'],['Pegasus Blast','A','CX'],
 ['Cerberus Flame','','CX'],['Sol Eclipse','','CX'],['Wolf Hunt','','CX'],['Emperor Might','','CX'],['Bahamut Bliz','','CX'],['Knight Fortress','D','CX'],
 ['Ragna Rage','','CX'],['Unicorn Delta','','CX'],['Brachio Whip','','CX'],
 ['Bear Scratch','','BX'],['Heaven\'s Ring','','BX'],['Luster Dragoon','','BX'],['Siegsuperion','','BX'],['Ptera Swing','','BX'],
 ['Tricera Spiky','','BX'],['Aero Pegasus','','UX'],['Hells Nether','','UX'],['Bison Burrow','','UX'],
 ['Dranzer Spiral','A','BXG'],['Driger Slash','','BXG'],['Draciel Shield','','BXG'],['Lightning L-Drago (Upper)','','BXG'],['Lightning L-Drago (Rapid)','','BXG'],
 ['Xeno Xcalibur','','BXG'],['Rock Leone','','BXG'],['Storm Spriggan','','BXG'],['Dragoon Storm','','BXG'],['Storm Pegasis','','BXG'],['Victory Valkyrie','','BXG'],
 // Hasbro collaboration blades
 ...['Captain America','Red Hulk','Miles Morales','Green Goblin','Iron Man','Thanos','Spider-Man','Venom','Obi-Wan Kenobi','General Grievous','Chewbacca','Stormtrooper',
   'Luke Skywalker','Darth Vader','The Mandalorian','Moff Gideon','Grogu','Optimus Prime','Megatron','Optimus Primal','Starscream','Bumblebee','Shockwave',
   'T-Rex','Mosasaurus','Spinosaurus','Quetzalcoatlus'].map(n => [n, '', 'Collab']),
 // Hasbro-only blades
 ['Gill Shark','','BX'],['Tackle Goat','','BX'],['Yell Kong','','Hasbro'],['Helm Knight','','Hasbro'],['Knife Shinobi','','BX'],
 ['Talon Ptera','','Hasbro'],['Savage Bear','','BX'],['Hack Viking','','Hasbro'],['Clamp Crab','','Hasbro'],['Ridge Triceratops','','Hasbro'],
 ['Tread Croc','','CX'],['Nether Incendio','','UX'],['Suppress Superion','','Hasbro'],['Ring Aether','D','Hasbro'],['Valor Bison','','UX'],['Roar Tyranno','','BX'],
];
// Hasbro names for the same blades (Takara Tomy name → Hasbro name)
const HASBRO = {
 'Dran Sword':'Sword Dran','Hells Scythe':'Scythe Incendio','Wizard Arrow':'Arrow Wizard','Knight Lance':'Lance Knight','Viper Tail':'Tail Viper',
 'Shark Edge':'Keel Shark','Rhino Horn':'Horn Rhino','Dran Dagger':'Dagger Dran','Hells Chain':'Chain Incendio','Phoenix Wing':'Soar Phoenix',
 'Wyvern Gale':'Gale Wyvern','Unicorn Sting':'Sting Unicorn','Sphinx Cowl':'Cowl Sphinx','Tyranno Beat':'Beat Tyranno','Weiss Tiger':'Pearl Tiger',
 'Black Shell':'Obsidian Shell','Whale Wave':'Tide Whale','Tricera Press':'Brace Triceratops','Samurai Calibur':'Calibur Samurai',
 'Mammoth Tusk':'Tusk Mammoth','Samurai Steel':'Steel Samurai','Phoenix Feather':'Feather Phoenix','Croc Crunch':'Bite Croc',
 'Dran Buster':'Buster Dran','Hells Hammer':'Hammer Incendio','Wizard Rod':'Wand Wizard','Leon Crest':'Crest Leon','Phoenix Rudder':'Rudder Phoenix',
 'Samurai Saber':'Saber Samurai','Knight Mail':'Mail Knight','Ghost Circle':'Circle Ghost','Golem Rock':'Rock Golem','Scorpio Spear':'Spear Scorpio',
 'Shark Scale':'Scale Shark','Clock Mirage':'Mirage Clock','Meteor Dragoon':'Meteoroid Dragoon','Bullet Griffon':'Rocket Griffon','Orochi Cluster':'Coil Orochi',
 'Pegasus Blast':'Blast Pegasus','Bahamut Bliz':'Blitz Bahamut','Knight Fortress':'Armor Knight','Ragna Rage':'Rage Ragna','Brachio Whip':'Whip Brachio',
 'Emperor Might':'Might Emperor',
};
const FROM_HASBRO = Object.fromEntries(Object.entries(HASBRO).map(([t, h]) => [h, t]));
const ASSISTS = [['S','Slash'],['R','Round'],['B','Bumper'],['T','Turn'],['J','Jaggy'],['W','Wheel'],['A','Assault'],['D','Dual'],['F','Free'],['C','Charge'],['M','Massive'],['H','Heavy'],['Z','Zillion'],['K','Knuckle'],['V','Vertical'],['E','Erase'],['O','Odd'],['Q','Quell'],['G',''],['BK',''],['GV',''],['FE',''],['PO',''],['OW','']];
const RATCHETS = ['5-50','0-60','0-70','0-80','1-50','1-60','1-70','1-80','2-60','2-70','2-80','3-60','3-70','3-80','3-85','4-50','4-55','4-60','4-70','4-80','5-60','5-70','5-80','6-60','6-70','6-80','7-55','7-60','7-70','7-80','8-70','8-80','9-60','9-65','9-70','9-80','M-65','M-85'];
const BITS = [
 ['F','Flat','A'],['T','Taper','B'],['B','Ball','S'],['N','Needle','D'],['HN','High Needle','D'],['LF','Low Flat','A'],['P','Point','B'],['O','Orb','S'],
 ['S','Spike','D'],['R','Rush','A'],['HT','High Taper','B'],['GF','Gear Flat','A'],['GB','Gear Ball','S'],['GP','Gear Point','B'],['GN','Gear Needle','D'],
 ['U','Unite','B'],['H','Hexa',''],['D','Dot','D'],['A','Accel','A'],['Q','Quake','A'],['E','Elevate',''],['BS','Bound Spike','D'],['DB','Disk Ball','S'],
 ['FB','Free Ball','S'],['G','Glide','S'],['L','Level',''],['LR','Low Rush','A'],['M','Merge',''],['MN','Metal Needle','D'],['RA','Rubber Accel','A'],
 ['TP','Trans Point','B'],['UN','Under Needle','D'],['UF','Under Flat','A'],['C','Cyclone',''],['J','Jolt',''],['K','Kick',''],['V','Vortex',''],
 ['W','Wedge',''],['LO','Low Orb','S'],['WB','Wall Ball','S'],['TK','Trans Kick',''],['Z','Zap',''],['GR','Gear Rush','A'],['Tr','Turbo',''],
 ['FF','Free Flat',''],['DS','Disk Spike',''],['LP','Low Point',''],['I','Ignition',''],['Y','Yielding',''],['GU','Glide Unite',''],['Nr','Narrow',''],
 ['LC','Low Cyclone',''],['MT','Metal Taper',''],['Op','Operate',''],['WW','Wall Wedge',''],
];
// Sets: [code, name, kind, line, [combos "Blade|Assist|Ratchet|Bit"], note]
const SETS = [
 ['BX-01','Dran Sword 3-60F','Starter','BX',['Dran Sword||3-60|F']],
 ['BX-02','Hells Scythe 4-60T','Starter','BX',['Hells Scythe||4-60|T']],
 ['BX-03','Wizard Arrow 4-80B','Starter','BX',['Wizard Arrow||4-80|B']],
 ['BX-04','Knight Shield 3-80N','Starter','BX',['Knight Shield||3-80|N']],
 ['BX-05','Wizard Arrow 4-80B','Booster','BX',['Wizard Arrow||4-80|B']],
 ['BX-06','Knight Shield 3-80N','Booster','BX',['Knight Shield||3-80|N']],
 ['BX-07','Start Dash Set','Set','BX',['Dran Sword||3-60|F']],
 ['BX-08','3on3 Deck Set','Deck Set','BX',[],'Contents vary by printing. Add the parts you got under Parts.'],
 ['BX-13','Knight Lance 4-80HN','Booster','BX',['Knight Lance||4-80|HN']],
 ['BX-14','Random Booster Vol. 1','Random Booster','BX',['Shark Edge||3-60|LF'],'Main combo only. Add random pulls under Parts.'],
 ['BX-15','Leon Claw 5-60P','Starter','BX',['Leon Claw||5-60|P']],
 ['BX-16','Random Booster Viper Tail Select','Random Booster','BX',['Viper Tail||5-80|O'],'Main combo only. Add random pulls under Parts.'],
 ['BX-17','Battle Entry Set','Set','BX',[],'Add the parts you got under Parts.'],
 ['BX-19','Rhino Horn 3-80S','Booster','BX',['Rhino Horn||3-80|S']],
 ['BX-20','Dran Dagger Deck Set','Deck Set','BX',['Dran Dagger||4-60|R'],'Main combo only. Add the other two combos under Parts.'],
 ['BX-21','Hells Chain Deck Set','Deck Set','BX',['Hells Chain||5-60|HT'],'Main combo only. Add the other two combos under Parts.'],
 ['BX-22','Dran Sword Entry Package','Set','BX',['Dran Sword||3-60|F']],
 ['BX-23','Phoenix Wing 9-60GF','Starter','BX',['Phoenix Wing||9-60|GF']],
 ['BX-24','Random Booster Vol. 2','Random Booster','BX',['Wyvern Gale||5-80|GB'],'Main combo only. Add random pulls under Parts.'],
 ['BX-26','Unicorn Sting 5-60GP','Booster','BX',['Unicorn Sting||5-60|GP']],
 ['BX-27','Random Booster Sphinx Cowl Select','Random Booster','BX',['Sphinx Cowl||9-80|GN'],'Main combo only. Add random pulls under Parts.'],
 ['BX-31','Random Booster Vol. 3','Random Booster','BX',['Tyranno Beat||4-70|Q'],'Main combo only. Add random pulls under Parts.'],
 ['BX-33','Weiss Tiger 3-60U','Booster','BX',['Weiss Tiger||3-60|U']],
 ['BX-34','Cobalt Dragoon 2-60C','Starter','BX',['Cobalt Dragoon||2-60|C']],
 ['BX-35','Random Booster Vol. 4','Random Booster','BX',['Black Shell||4-60|D'],'Main combo only. Add random pulls under Parts.'],
 ['BX-36','Random Booster Whale Wave Select','Random Booster','BX',['Whale Wave||5-80|E'],'Main combo only. Add random pulls under Parts.'],
 ['BX-38','Crimson Garuda 4-70TP','Booster','BX',['Crimson Garuda||4-70|TP']],
 ['BX-39','Random Booster Shelter Drake Select','Random Booster','BX',['Shelter Drake|||'],'Blade only. Add the ratchet, bit and random pulls under Parts.'],
 ['BX-44','Tricera Press M-85BS','Booster','BX',['Tricera Press||M-85|BS']],
 ['BX-45','Samurai Calibur 6-70M','Booster','BX',['Samurai Calibur||6-70|M']],
 ['BX-46','Battle Entry Set Infinity','Set','BX',[],'Add the parts you got under Parts.'],
 ['BX-49','Dran Strike 4-50FF','Booster','BX',['Dran Strike||4-50|FF']],
 ['UX-01','Dran Buster 1-60A','Starter','UX',['Dran Buster||1-60|A']],
 ['UX-02','Hells Hammer 3-70H','Starter','UX',['Hells Hammer||3-70|H']],
 ['UX-03','Wizard Rod 5-70DB','Booster','UX',['Wizard Rod||5-70|DB']],
 ['UX-04','Battle Entry Set U','Set','UX',[],'Add the parts you got under Parts.'],
 ['UX-05','Random Booster Shinobi Shadow Select','Random Booster','UX',['Shinobi Shadow||1-80|MN'],'Main combo only. Add random pulls under Parts.'],
 ['UX-06','Leon Crest 7-60GN','Booster','UX',['Leon Crest||7-60|GN']],
 ['UX-07','Phoenix Rudder Deck Set','Deck Set','UX',['Phoenix Rudder||9-70|G'],'Main combo only. Add the other two combos under Parts.'],
 ['UX-08','Silver Wolf 3-80FB','Starter','UX',['Silver Wolf||3-80|FB']],
 ['UX-09','Samurai Saber 2-70L','Booster','UX',['Samurai Saber||2-70|L']],
 ['UX-10','Customize Set U','Set','UX',['Knight Mail||3-85|BS'],'Main combo only. Add the extra parts under Parts.'],
 ['UX-11','Impact Drake 9-60LR','Starter','UX',['Impact Drake||9-60|LR']],
 ['UX-12','Random Booster Vol. 5','Random Booster','UX',['Ghost Circle||0-80|GB'],'Main combo only. Add random pulls under Parts.'],
 ['UX-13','Golem Rock 1-60UN','Booster','UX',['Golem Rock||1-60|UN']],
 ['UX-14','Scorpio Spear 0-70Z','Booster','UX',['Scorpio Spear||0-70|Z']],
 ['UX-15','Shark Scale Deck Set','Deck Set','UX',['Shark Scale||4-50|UF'],'Main combo only. Add the other two combos under Parts.'],
 ['UX-16','Random Booster Clock Mirage Select','Random Booster','UX',['Clock Mirage|||'],'Blade only. Add the ratchet, bit and random pulls under Parts.'],
 ['UX-17','Meteor Dragoon 3-70J','Booster','UX',['Meteor Dragoon||3-70|J']],
 ['UX-18','Random Booster Vol. 8','Random Booster','UX',['Mummy Curse||7-55|W'],'Main combo only. Add random pulls under Parts.'],
 ['UX-19','Bullet Griffon','Booster','UX',['Bullet Griffon|||'],'Blade only. Add the other parts under Parts.'],
 ['UX-20','Glory Valkyrie','Booster','UX',['Glory Valkyrie|||'],'Blade only. Add the other parts under Parts.'],
 ['CX-01','Dran Brave S6-60V','Starter','CX',['Dran Brave|S|6-60|V']],
 ['CX-02','Wizard Arc R4-55LO','Booster','CX',['Wizard Arc|R|4-55|LO']],
 ['CX-03','Perseus Dark B6-80W','Booster','CX',['Perseus Dark|B|6-80|W']],
 ['CX-04','Battle Entry Set C','Set','CX',[],'Add the parts you got under Parts.'],
 ['CX-05','Random Booster Vol. 6','Random Booster','CX',['Hells Reaper|T|4-70|K'],'Main combo only. Add random pulls under Parts.'],
 ['CX-06','Random Booster Fox Brush Select','Random Booster','CX',['Fox Brush|J|9-70|GR'],'Main combo only. Add random pulls under Parts.'],
 ['CX-07','Pegasus Blast ATr','Starter','CX',['Pegasus Blast|A||Tr'],'Turbo is a ratchet and bit in one piece.'],
 ['CX-08','Random Booster Vol. 7','Random Booster','CX',['Cerberus Flame|W|5-80|WB'],'Main combo only. Add random pulls under Parts.'],
 ['CX-09','Sol Eclipse D5-70TK','Booster','CX',['Sol Eclipse|D|5-70|TK']],
 ['CX-10','Wolf Hunt F0-60DB','Booster','CX',['Wolf Hunt|F|0-60|DB']],
 ['CX-11','Emperor Might Deck Set','Deck Set','CX',['Emperor Might|||'],'Blade only. Add the rest under Parts.'],
 ['CX-13','Bahamut Bliz BK1-50I','Booster','CX',['Bahamut Bliz|BK|1-50|I']],
 ['CX-14','Knight Fortress GV8-70UN','Booster','CX',['Knight Fortress|GV|8-70|UN']],
 ['CX-15','Ragna Rage FE4-55Y','Booster','CX',['Ragna Rage|FE|4-55|Y']],
 ['CX-17','Random Booster Vol. 10','Random Booster','CX',['Unicorn Delta|PO|3-60|GU'],'Main combo only. Add random pulls under Parts.'],
 ['CX-18','Brachio Whip OW5-70Nr','Booster','CX',['Brachio Whip|OW|5-70|Nr']],
 ['BXG-01','Dranzer Spiral 3-80T','Special','Other',['Dranzer Spiral||3-80|T']],
 ['Event','Cobalt Drake 4-60F','Event','Other',['Cobalt Drake||4-60|F']],
 ['Event','Phoenix Feather 3-60F','Event','Other',['Phoenix Feather||3-60|F']],
 ['Event','Croc Crunch 2-60Q','Event','Other',['Croc Crunch||2-60|Q']],
 ['Event','Mammoth Tusk 2-80E','Event','Other',['Mammoth Tusk||2-80|E']],
 ['Event','Samurai Steel 5-70GF','Event','Other',['Samurai Steel||5-70|GF']],
 ['Event','Shark Edge 5-60GF (Metal Coat)','Event','Other',['Shark Edge||5-60|GF']],
 ['Event','Leon Claw 5-60P (Metal Coat)','Event','Other',['Leon Claw||5-60|P']],
 ['Event','Hells Scythe 3-80F','Event','Other',['Hells Scythe||3-80|F']],
 ['Event','Wyvern Hover 2-80GN','Event','Other',['Wyvern Hover||2-80|GN']],
 ['Event','Orochi Cluster 6-60LF','Event','Other',['Orochi Cluster||6-60|LF']],
 // ---- Hasbro (AU/US/UK shelves) ----
 ['Dual','Tail Viper 5-80O & Sword Dran 3-60F','Dual Pack','Hasbro',['Tail Viper||5-80|O','Sword Dran||3-60|F']],
 ['Dual','Knife Shinobi 4-80HN & Keel Shark 3-80F','Dual Pack','Hasbro',['Knife Shinobi||4-80|HN','Keel Shark||3-80|F']],
 ['Dual','Chain Incendio 5-60HT & Arrow Wizard 4-60N','Dual Pack','Hasbro',['Chain Incendio||5-60|HT','Arrow Wizard||4-60|N']],
 ['Dual','Yell Kong 3-60GB & Helm Knight 5-80T','Dual Pack','Hasbro',['Yell Kong||3-60|GB','Helm Knight||5-80|T']],
 ['Dual','Bite Croc 3-60LF & Sting Unicorn 4-60P','Dual Pack','Hasbro',['Bite Croc||3-60|LF','Sting Unicorn||4-60|P']],
 ['Dual','Gale Wyvern 5-80GB & Tail Viper 3-80HN','Dual Pack','Hasbro',['Gale Wyvern||5-80|GB','Tail Viper||3-80|HN']],
 ['Dual','Gale Wyvern 3-60T & Sword Dran 3-80B','Dual Pack','Hasbro',['Gale Wyvern||3-60|T','Sword Dran||3-80|B']],
 ['Dual','Beat Tyranno 4-70Q & Knife Shinobi 4-80HN','Dual Pack','Hasbro',['Beat Tyranno||4-70|Q','Knife Shinobi||4-80|HN']],
 ['Dual','Cowl Sphinx 1-80GF & Crest Leon 7-60GN','Dual Pack','Hasbro',['Cowl Sphinx||1-80|GF','Crest Leon||7-60|GN']],
 ['Dual','Gill Shark 4-70O & Pearl Tiger 3-60U','Dual Pack','Hasbro',['Gill Shark||4-70|O','Pearl Tiger||3-60|U']],
 ['Dual','Circle Ghost 0-80GB & Chain Incendio 5-60HT','Dual Pack','Hasbro',['Circle Ghost||0-80|GB','Chain Incendio||5-60|HT']],
 ['Dual','Tackle Goat 2-70N & Sword Dran 3-60F','Dual Pack','Hasbro',['Tackle Goat||2-70|N','Sword Dran||3-60|F']],
 ['Dual','Hack Viking 4-55O & Circle Ghost 4-60LR','Dual Pack','Hasbro',['Hack Viking||4-55|O','Circle Ghost||4-60|LR']],
 ['Dual','Brace Triceratops M-85BS & Dagger Dran 7-55K','Dual Pack','Hasbro',['Brace Triceratops||M-85|BS','Dagger Dran||7-55|K']],
 ['Dual','Pearl Tiger 3-85WB & Coil Orochi 6-60LF','Dual Pack','Hasbro',['Pearl Tiger||3-85|WB','Coil Orochi||6-60|LF']],
 ['Dual','Clamp Crab 9-65S & Crest Leon 4-55A','Dual Pack','Hasbro',['Clamp Crab||9-65|S','Crest Leon||4-55|A']],
 ['Dual','Tail Viper 3-85LO & Spear Scorpio 0-70Z','Dual Pack','Hasbro',['Tail Viper||3-85|LO','Spear Scorpio||0-70|Z']],
 ['Dual','Calibur Samurai 6-70M & Obsidian Shell 3-85S','Dual Pack','Hasbro',['Calibur Samurai||6-70|M','Obsidian Shell||3-85|S']],
 ['Hasbro','Sword Dran 3-60F','Starter','Hasbro',['Sword Dran||3-60|F']],
 ['Hasbro','Scythe Incendio 3-80B','Starter','Hasbro',['Scythe Incendio||3-80|B']],
 ['Hasbro','Arrow Wizard 4-80GB','Starter','Hasbro',['Arrow Wizard||4-80|GB']],
 ['Hasbro','Lance Knight 4-80HN','Booster','Hasbro',['Lance Knight||4-80|HN']],
 ['Hasbro','Horn Rhino 3-80S','Booster','Hasbro',['Horn Rhino||3-80|S']],
 ['Hasbro','Soar Phoenix 9-60GF','Starter','Hasbro',['Soar Phoenix||9-60|GF']],
 ['Hasbro','Soar Phoenix 5-80H','Booster','Hasbro',['Soar Phoenix||5-80|H']],
 ['Hasbro','Yell Kong 3-60GB','Booster','Hasbro',['Yell Kong||3-60|GB']],
 ['Hasbro','Obsidian Shell 4-60D','Booster','Hasbro',['Obsidian Shell||4-60|D']],
 ['Hasbro','Tide Whale 5-80E','Booster','Hasbro',['Tide Whale||5-80|E']],
 ['Hasbro','Savage Bear 5-60F','Booster','Hasbro',['Savage Bear||5-60|F']],
 ['Hasbro','Bite Croc 2-60Q (Deluxe Launcher Set)','Set','Hasbro',['Bite Croc||2-60|Q']],
 ['Hasbro','Feather Phoenix 2-60N','Starter','Hasbro',['Feather Phoenix||2-60|N']],
 ['Hasbro','Shelter Drake 7-80GP','Starter','Hasbro',['Shelter Drake||7-80|GP']],
 ['Hasbro','Shelter Drake 5-70O','Booster','Hasbro',['Shelter Drake||5-70|O']],
 ['Hasbro','Ridge Triceratops 9-80GN','Booster','Hasbro',['Ridge Triceratops||9-80|GN']],
 ['Hasbro','Cobalt Drake 4-60F (Clear)','Booster','Hasbro',['Cobalt Drake||4-60|F']],
 ['Hasbro','Xtreme Battle Set','Set','Hasbro',['Tusk Mammoth||3-60|T','Dagger Dran||4-60|R'],'Two combos; add any other parts under Parts.'],
 ['Hasbro','Buster Dran 1-60A','Starter','Hasbro',['Buster Dran||1-60|A']],
 ['Hasbro','Buster Dran 5-70DB','Booster','Hasbro',['Buster Dran||5-70|DB']],
 ['Hasbro','Hammer Incendio 3-70H','Starter','Hasbro',['Hammer Incendio||3-70|H']],
 ['Hasbro','Wand Wizard 1-60R','Booster','Hasbro',['Wand Wizard||1-60|R']],
 ['Hasbro','Rock Golem 1-60UN','Starter','Hasbro',['Rock Golem||1-60|UN']],
 ['Hasbro','Saber Samurai 2-70L','Booster','Hasbro',['Saber Samurai||2-70|L']],
 ['Hasbro','Rudder Phoenix 4-70LF','Booster','Hasbro',['Rudder Phoenix||4-70|LF']],
 ['Hasbro','Scale Shark 4-50UF','Booster','Hasbro',['Scale Shark||4-50|UF']],
 ['Hasbro','Meteoroid Dragoon 3-70J','Booster','Hasbro',['Meteoroid Dragoon||3-70|J']],
 ['Hasbro','Mirage Clock 9-65B','Booster','Hasbro',['Mirage Clock||9-65|B']],
 ['Hasbro','Rocket Griffon','Booster','Hasbro',['Rocket Griffon|||'],'Blade only. Add the other parts under Parts.'],
 ['Hasbro','Valor Bison','Infinity Starter','Hasbro',['Valor Bison|||'],'Blade only. Add the other parts under Parts.'],
 ['Hasbro','Ring Aether 0-80DS','Infinity Starter','Hasbro',['Ring Aether||0-80|DS']],
 ['Hasbro','Suppress Superion 0-70LP','Starter','Hasbro',['Suppress Superion||0-70|LP']],
 ['Hasbro','Tread Croc','Starter','Hasbro',['Tread Croc|||'],'Blade only. Add the other parts under Parts.'],
 ['Hasbro','Nether Incendio','Starter','Hasbro',['Nether Incendio|||'],'Blade only. Add the other parts under Parts.'],
 ['Hasbro','Blast Pegasus ATr (with Launcher)','Starter','Hasbro',['Blast Pegasus|A||Tr'],'Turbo is a ratchet and bit in one piece.'],
 ['Hasbro','Blitz Bahamut BK1-50I','Infinity Starter','Hasbro',['Blitz Bahamut|BK|1-50|I']],
 ['Hasbro','Armor Knight GV8-70UN','Booster','Hasbro',['Armor Knight|GV|8-70|UN']],
 ['Hasbro','Rage Ragna FE4-55Y','Booster','Hasbro',['Rage Ragna|FE|4-55|Y']],
 ['Hasbro','Whip Brachio OW5-70Nr','Starter','Hasbro',['Whip Brachio|OW|5-70|Nr']],
 ['Hasbro','Might Emperor (X-Treme Battlers Pack)','Set','Hasbro',['Might Emperor|||'],'Blade only. Add the other parts under Parts.'],
];

/* ================= UTIL ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const fmtDate = t => new Date(t).toLocaleDateString(undefined, {day:'numeric', month:'short', year:'numeric'});
const fmtTime = t => new Date(t).toLocaleTimeString(undefined, {hour:'numeric', minute:'2-digit'});
const fmtBytes = b => { if (!b && b !== 0) return '—'; const u = ['B','KB','MB','GB','TB']; let i = 0; while (b >= 1024 && i < 4) { b /= 1024; i++; } return (i ? b.toFixed(b < 10 ? 1 : 0) : b) + ' ' + u[i]; };
const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const LS = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
const DEVICE = LS.get('bxt-device') || (() => { const d = uid(); LS.set('bxt-device', d); return d; })();

/* ================= PART REGISTRY ================= */
const P = {};
const CAT_LABEL = {blade:'Blade', assist:'Assist Blade', ratchet:'Ratchet', bit:'Bit'};
function reg(cat, key, name, type, extra = {}) { const id = cat + ':' + key; P[id] = {id, cat, key, name, type: type || '', type0: type || '', ...extra}; return id; }
const TYPE_LABEL = {A: 'Attack', D: 'Defence', S: 'Stamina', B: 'Balance'};
function tags(p) {
  const line = p.cat === 'blade' || p.cat === 'assist' ? (p.line || (p.cat === 'assist' ? 'CX' : '')) : '';
  const code = p.cat !== 'blade' && p.cat !== 'ratchet' ? p.code : '';
  return `<span class="tags">${line ? `<span class="tag">${esc(line)}</span>` : ''}${code ? `<span class="tag">${esc(code)}</span>` : ''}${p.type ? `<span class="tag ty t-${p.type}">${TYPE_LABEL[p.type]}</span>` : ''}</span>`;
}
// Blades first added under their Hasbro name: same id, Takara name kept for the name toggle
const HB_FIRST = {'Gill Shark':'Shark Gill','Tackle Goat':'Goat Tackle','Knife Shinobi':'Shinobi Knife','Savage Bear':'Bear Scratch','Nether Incendio':'Hells Nether','Valor Bison':'Bison Burrow','Roar Tyranno':'Tyranno Roar'};
const TK_DUP = new Set(Object.values(HB_FIRST));
BLADES.forEach(([n, t, l]) => {
  if (TK_DUP.has(n)) return;
  if (HB_FIRST[n]) reg('blade', slug(n), HB_FIRST[n], t, {line: l, alt: n});
  else reg('blade', slug(n), n, t, {line: l, ...(HASBRO[n] ? {alt: HASBRO[n]} : {})});
});
ASSISTS.forEach(([c, n]) => reg('assist', c, n ? `${n} (${c})` : `Assist ${c}`, '', {code: c}));
RATCHETS.forEach(r => reg('ratchet', r, r, '', {code: r}));
BITS.forEach(([c, n, t]) => reg('bit', c, n ? `${n}` : `Bit ${c}`, t, {code: c}));
function bladeId(n) { const hf = Object.keys(HB_FIRST).find(k => HB_FIRST[k] === n); if (hf) n = hf; n = FROM_HASBRO[n] || n; const id = 'blade:' + slug(n); if (!P[id]) reg('blade', slug(n), n, ''); return id; }
const dn = p => (p.alt && S.settings?.naming !== 'takara') ? p.alt : p.name;
const pn = id => P[id] ? dn(P[id]) : id;
const SETS_X = SETS.map(([code, name, kind, line, combos, note]) => ({
  key: code + '~' + slug(name), code, name, kind, line, note: note || '',
  combos: combos.map(s => { const [b, a, r, t] = s.split('|'); return {blade: b ? bladeId(b) : '', assist: a ? 'assist:' + a : '', ratchet: r ? 'ratchet:' + r : '', bit: t ? 'bit:' + t : ''}; })
}));
const SET_BY_KEY = Object.fromEntries(SETS_X.map(s => [s.key, s]));
function comboParts(c) { return [c.blade, c.assist, c.ratchet, c.bit].filter(Boolean); }
function comboLabel(c) {
  const b = P[c.blade] ? pn(c.blade) : 'Blade?';
  const a = c.assist ? (P[c.assist]?.code || '') : '';
  const r = c.ratchet ? (P[c.ratchet]?.code || '') : '';
  const t = c.bit ? (P[c.bit]?.code || '') : '';
  return `${b} ${a}${r}${t}`.trim();
}

/* ================= PART ICONS (original generated art) ================= */
function partSVG(p) {
  if (!p) return '';
  const tc = `var(--tc)`;
  if (p.cat === 'blade') {
    const h = hash(p.name), n = 3 + (h % 4), rot = h % 60;
    let lobes = '';
    for (let k = 0; k < n; k++) {
      const a = rot + k * 360 / n;
      lobes += `<path transform="rotate(${a} 32 32)" d="M32 32 L30 5 Q44 4 54 15 Q49 22 40 26 Z" fill="${tc}" opacity="${k % 2 ? .78 : 1}"/>`;
    }
    const ini = dn(p).split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="${tc}" opacity=".14"/>${lobes}<circle cx="32" cy="32" r="12" fill="var(--surface)" stroke="${tc}" stroke-width="2"/><text x="32" y="36.5" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="11" fill="var(--ink)">${esc(ini)}</text></svg>`;
  }
  if (p.cat === 'assist') {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="var(--line)" stroke-width="6"/><path d="M12 32 A20 20 0 0 1 32 12" stroke="var(--accent)" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M52 32 A20 20 0 0 1 32 52" stroke="var(--accent)" stroke-width="7" fill="none" stroke-linecap="round"/><text x="32" y="37" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="13" fill="var(--ink)">${esc(p.code)}</text></svg>`;
  }
  if (p.cat === 'ratchet') {
    const [pr, ht] = p.code.split('-'); const n = /^\d$/.test(pr) ? (+pr || 10) : 8;
    let teeth = '';
    for (let k = 0; k < n; k++) teeth += `<rect x="30" y="7" width="4" height="8" rx="1" fill="var(--muted)" transform="rotate(${k * 360 / n} 32 32)"/>`;
    return `<svg viewBox="0 0 64 64" aria-hidden="true">${teeth}<circle cx="32" cy="32" r="18" fill="var(--surface)" stroke="var(--muted)" stroke-width="3"/><text x="32" y="35" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="10" fill="var(--ink)">${esc(p.code)}</text><rect x="22" y="40" width="${Math.min(20, (+ht || 60) / 4.25)}" height="3" rx="1.5" fill="var(--accent)"/></svg>`;
  }
  if (p.cat === 'bit') {
    const nm = (p.name + ' ' + p.code).toLowerCase();
    let tip;
    if (/needle|spike/.test(nm)) tip = 'M22 36 L42 36 L32 58 Z';
    else if (/ball|orb|dot/.test(nm)) tip = 'M20 36 L44 36 Q44 58 32 58 Q20 58 20 36 Z';
    else if (/low flat|under flat|free flat/.test(nm)) tip = 'M16 36 L48 36 L46 48 L18 48 Z';
    else if (/flat|rush|accel|quake|cyclone|jolt|zap|level|turbo/.test(nm)) tip = 'M18 36 L46 36 L42 52 L22 52 Z';
    else tip = 'M20 36 L44 36 L38 54 L26 54 Z';
    const gear = /gear/.test(nm) ? `<path d="M16 30 h4 v-4 h4 v4 h4 v-4 h4 v4 h4 v-4 h4 v4 h4 v-4 h4 v4" stroke="var(--muted)" stroke-width="2" fill="none"/>` : '';
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="16" y="10" width="32" height="26" rx="6" fill="var(--surface)" stroke="var(--muted)" stroke-width="2.5"/>${gear}<path d="${tip}" fill="${tc}"/><text x="32" y="27" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="${p.code.length > 2 ? 9 : 11}" fill="var(--ink)">${esc(p.code)}</text></svg>`;
  }
  return '';
}
function icon(pid, sz) {
  const p = P[pid]; if (!p) return `<div class="pi"${sz ? ` style="--sz:${sz}px"` : ''}></div>`;
  const ph = S.photos[pid];
  return `<div class="pi t-${p.type || 'U'}"${sz ? ` style="--sz:${sz}px"` : ''}>${ph ? `<img src="${esc(ph)}" alt="">` : partSVG(p)}</div>`;
}

/* ================= STATE + SYNC ================= */
const DEFAULT_SETTINGS = {pointsToWin: 4, faultLimit: 2, sound: true, mode: 'casual', lastP: ['', ''], naming: 'hasbro', autoRec: true, camFps: 60};
let S = {};
const CFG = window.BEYX_CONFIG || {};
const Store = {
  mode: 'local', sb: null, user: null, ch: null, docs: LS.get('bxt-docs', {}), status: 'Saved on this device only',
  get configured() { return !!(CFG.supabaseUrl && CFG.supabaseAnonKey && window.supabase); },
  async init() {
    derive(); render();
    if (!this.configured) { this.status = CFG.supabaseUrl ? 'Sync unavailable (check your connection)' : 'Saved on this device only'; render(true); return; }
    this.sb = supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {auth: {persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce'}});
    this.sb.auth.onAuthStateChange((_e, session) => {
      const u = session?.user || null;
      if ((u?.id || null) !== (this.user?.id || null)) { this.user = u; this.connect(); }
    });
    const {data} = await this.sb.auth.getSession();
    this.user = data?.session?.user || null;
    // tidy the ?code= left by the Discord redirect
    if (/[?&]code=/.test(location.search)) history.replaceState(null, '', location.pathname + location.hash);
    await this.connect();
  },
  async connect() {
    if (this.ch) { this.sb.removeChannel(this.ch); this.ch = null; }
    if (!this.user) { this.mode = 'local'; this.status = 'Signed out. Saved on this device only'; render(true); return; }
    this.status = 'Syncing…'; render(true);
    const rows = []; let from = 0;
    while (true) {
      const {data, error} = await this.sb.from('docs').select('id,data').eq('user_id', this.user.id).range(from, from + 999);
      if (error) { this.status = 'Sync error: ' + error.message; render(true); return; }
      rows.push(...data); if (data.length < 1000) break; from += 1000;
    }
    const d = {}; rows.forEach(r => { d[r.id] = r.data; });
    // first sign-in on this device: carry anything made while signed out into the account
    const flag = 'bxt-migrated-' + this.user.id;
    if (!LS.get(flag, false)) {
      const up = Object.entries(this.docs).filter(([k]) => !(k in d)).map(([k, v]) => { d[k] = v; return {user_id: this.user.id, id: k, data: v}; });
      for (let i = 0; i < up.length; i += 200) await this.sb.from('docs').upsert(up.slice(i, i + 200));
      LS.set(flag, true);
    }
    this.docs = d; LS.set('bxt-docs', d); this.mode = 'cloud'; this.status = 'Synced to your Discord account'; derive(); render(true);
    const uidv = this.user.id;
    this.ch = this.sb.channel('docs-' + uidv)
      .on('postgres_changes', {event: '*', schema: 'public', table: 'docs', filter: 'user_id=eq.' + uidv}, p => {
        if (p.eventType === 'DELETE') { if (p.old?.user_id && p.old.user_id !== uidv) return; delete this.docs[p.old.id]; }
        else this.docs[p.new.id] = p.new.data;
        LS.set('bxt-docs', this.docs); derive(); render(true);
      }).subscribe();
  },
  put(id, data) {
    this.docs[id] = data; LS.set('bxt-docs', this.docs); derive();
    if (this.mode === 'cloud') this.sb.from('docs').upsert({user_id: this.user.id, id, data, updated_at: new Date().toISOString()}).then(({error}) => { if (error) toast('Could not sync: ' + error.message); });
  },
  del(id) {
    delete this.docs[id]; LS.set('bxt-docs', this.docs); derive();
    if (this.mode === 'cloud') this.sb.from('docs').delete().eq('user_id', this.user.id).eq('id', id).then(({error}) => { if (error) toast('Could not sync: ' + error.message); });
  },
  signIn() {
    if (!this.configured) return toast('Discord sign-in isn\'t set up yet. Add your Supabase keys to config.js.');
    this.sb.auth.signInWithOAuth({provider: 'discord', options: {redirectTo: location.origin + location.pathname, scopes: 'identify'}});
  },
  async signOut() {
    await this.sb?.auth.signOut();
    // don't leave this account's data behind for the next person who signs in here
    this.docs = {}; LS.set('bxt-docs', {}); this.user = null; this.mode = 'local'; this.status = 'Signed out. Saved on this device only'; derive(); render(true);
  },
  get profile() {
    const m = this.user?.user_metadata || {};
    return {name: m.custom_claims?.global_name || m.full_name || m.name || m.user_name || 'Discord user', avatar: m.avatar_url || ''};
  }
};
function derive() {
  const d = Store.docs;
  S = {settings: {...DEFAULT_SETTINGS, ...(d.settings || {})}, coll: {sets: {}, extra: {}, ...(d.collection || {})}, photos: {},
       combos: [], decks: [], players: [], matches: [], tourneys: [], clips: []};
  for (const [k, v] of Object.entries(d)) {
    if (!v || !v.kind) continue;
    if (v.kind === 'part' && !P[v.pid]) reg(v.cat, v.key, v.name, v.type || '', {code: v.code || v.name, custom: true, line: 'Custom'});
    if (v.kind === 'photo') S.photos[v.pid] = v.src;
    if (v.kind === 'combo') S.combos.push(v);
    if (v.kind === 'deck') S.decks.push(v);
    if (v.kind === 'player') S.players.push(v);
    if (v.kind === 'match') S.matches.push(v);
    if (v.kind === 'tourney') S.tourneys.push(v);
    if (v.kind === 'clip') S.clips.push(v);
  }
  S.combos.sort((a, b) => b.created - a.created); S.decks.sort((a, b) => b.created - a.created);
  S.players.sort((a, b) => a.name.localeCompare(b.name)); S.matches.sort((a, b) => b.date - a.date);
  S.tourneys.sort((a, b) => (b.date || '').localeCompare(a.date || '')); S.clips.sort((a, b) => b.date - a.date);
  for (const p of Object.values(P)) p.type = p.type0 || '';
  for (const [pid, t] of Object.entries(d.types || {})) if (P[pid]) P[pid].type = t;
  S.counts = ownedCounts();
}
function saveSettings(patch) { Store.put('settings', {...S.settings, ...patch}); }
function saveColl(c) { Store.put('collection', c); }
function ownedCounts() {
  const c = {};
  for (const [k, q] of Object.entries(S.coll.sets || {})) { const s = SET_BY_KEY[k]; if (!s || !q) continue; s.combos.forEach(cb => comboParts(cb).forEach(pid => c[pid] = (c[pid] || 0) + q)); }
  for (const [pid, n] of Object.entries(S.coll.extra || {})) c[pid] = Math.max(0, (c[pid] || 0) + n);
  return c;
}
const player = id => S.players.find(p => p.id === id);
const pname = id => player(id)?.name || 'Unknown';
const combo = id => S.combos.find(c => c.id === id);
const deck = id => S.decks.find(d => d.id === id);

/* ================= LOCAL VIDEO STORE ================= */
const IDB = {
  db: null,
  open() { if (this.db) return Promise.resolve(this.db); return new Promise((res, rej) => { const r = indexedDB.open('bxt-clips', 1); r.onupgradeneeded = () => r.result.createObjectStore('clips'); r.onsuccess = () => res(this.db = r.result); r.onerror = () => rej(r.error); }); },
  async tx(mode, fn) { const db = await this.open(); return new Promise((res, rej) => { const t = db.transaction('clips', mode); const st = t.objectStore('clips'); const r = fn(st); t.oncomplete = () => res(r?.result); t.onerror = () => rej(t.error); }); },
  put(k, v) { return this.tx('readwrite', s => s.put(v, k)); },
  get(k) { return this.tx('readonly', s => s.get(k)); },
  del(k) { return this.tx('readwrite', s => s.delete(k)); },
  keys() { return this.tx('readonly', s => s.getAllKeys()); }
};
let localClips = new Set();
const clipURLs = {};
async function refreshLocalClips() { try { localClips = new Set(await IDB.keys()); } catch { localClips = new Set(); } }
async function clipURL(id) { if (clipURLs[id]) return clipURLs[id]; const b = await IDB.get(id); if (!b) return null; return clipURLs[id] = URL.createObjectURL(b); }

/* ================= UI PRIMITIVES ================= */
let toastT;
function toast(msg) { let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); } t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 2600); }
let sheetClose = null;
function openSheet(title, body, onClose) {
  $('#layer').innerHTML = `<div class="sheet-back" data-a="sheet-bg"><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="sheet-h"><h2>${esc(title)}</h2><button class="btn ghost sm" data-a="sheet-close" aria-label="Close">${I.x}</button></div><div class="sheet-b" id="sheetBody">${body}</div></div></div>`;
  sheetClose = onClose || null;
}
function setSheet(body) { const b = $('#sheetBody'); if (b) b.innerHTML = body; }
function closeSheet() { $('#layer').innerHTML = ''; const f = sheetClose; sheetClose = null; f && f(); }
function confirmSheet(title, msg, yesLabel, onYes) {
  openSheet(title, `<p>${esc(msg)}</p><div class="row" style="justify-content:flex-end"><button class="btn" data-a="sheet-close">Cancel</button><button class="btn primary" data-a="confirm-yes">${esc(yesLabel)}</button></div>`);
  pendingConfirm = onYes;
}
let pendingConfirm = null;

const I = {
  score: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>',
  build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>',
  coll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  stats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 5.5 5"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="M15.5 10.5l6-3.5v10l-6-3.5z"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  rec: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="currentColor"/></svg>',
  undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
  timer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
  starF: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M4 20h16"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

/* ================= NAV ================= */
const VIEWS = [
  ['score', 'Score', I.score], ['build', 'Build', I.build], ['collection', 'Collection', I.coll], ['insights', 'Insights', I.stats],
  ['tournaments', 'Tourneys', I.trophy], ['players', 'Players', I.users], ['clips', 'Clips', I.video], ['prefs', 'Setup', I.gear]
];
let view = 'score';
function routeFromHash() { const h = location.hash.slice(1); view = VIEWS.some(v => v[0] === h) ? h : 'score'; }
let menuOpen = false, slideDir = 0;
function liveScore() {
  if (!M || (!M.p[0] && !M.p[1] && !M.rounds.length)) return '';
  const st = replay(); const n = i => esc((M.p[i] ? pname(M.p[i]) : 'P' + (i + 1)).split(' ')[0]);
  return `<button class="livepill" data-a="nav" data-v="score" aria-label="Current match score">${M.done ? '<span class="lp-done">Final</span>' : Cam.recording ? '<i class="lp-rec" aria-label="Recording"></i>' : ''}<span class="lp-n" style="color:var(--p1)">${n(0)}</span><b class="num">${st.score[0]}</b><span class="muted">–</span><b class="num">${st.score[1]}</b><span class="lp-n" style="color:var(--p2)">${n(1)}</span></button>`;
}
const VIEW_NAME = {tournaments: 'Tournaments', prefs: 'Settings'};
function renderNav() {
  const cur = VIEWS.find(v => v[0] === view);
  $('#nav').innerHTML = `<header class="topbar">
    <button class="iconbtn" data-a="menu" aria-label="${menuOpen ? 'Close menu' : 'Menu'}" aria-expanded="${menuOpen}">${menuOpen ? I.x : I.menu}</button>
    <div class="tb-title"><span class="tb-logo">BEY<b>X</b></span><span class="tb-sec">${VIEW_NAME[cur[0]] || cur[1]}</span></div>
    ${liveScore()}
    <button class="iconbtn" data-a="nav" data-v="prefs" aria-label="Settings"${view === 'prefs' ? ' aria-current="page"' : ''}>${I.gear}</button>
    ${acctChip()}
  </header>
  ${menuOpen ? `<div class="menu-back" data-a="menu-close"></div><nav class="menu" aria-label="Sections">${VIEWS.map(([k, l, ic]) => `<button class="menuitem" data-a="nav" data-v="${k}"${view === k ? ' aria-current="page"' : ''}>${ic}<span>${VIEW_NAME[k] || l}</span></button>`).join('')}<div class="menu-hint">Swipe left or right on any screen to move to the next one.</div></nav>` : ''}`;
}
function go(v, dir) {
  menuOpen = false; slideDir = dir || 0;
  if (view === v) { render(); return; }
  try { history.replaceState(null, '', '#' + v); } catch {}
  view = v; render(); window.scrollTo(0, 0);
}
let lastRenderKey = '';
function acctChip() {
  if (Store.user) { const p = Store.profile; return `<button class="avbtn" data-a="nav" data-v="prefs" title="Signed in as ${esc(p.name)}" aria-label="Account">${p.avatar ? `<img src="${esc(p.avatar)}" alt="">` : `<span>${esc(p.name[0] || '?')}</span>`}</button>`; }
  return Store.configured ? `<button class="btn sm discord" data-a="signin">Sign in</button>` : '';
}
function render(fromSync) {
  // don't wipe an open picker/sheet on background sync
  renderNav();
  const scroll = window.scrollY;
  const fn = {score: vScore, build: vBuild, collection: vCollection, insights: vInsights, tournaments: vTourneys, players: vPlayers, clips: vClips, prefs: vPrefs}[view];
  $('#view').innerHTML = `<div class="wrap${slideDir ? (slideDir > 0 ? ' in-next' : ' in-prev') : ''}">${fn()}</div>`;
  slideDir = 0;
  if (view === 'clips') hydrateClips();
  if (Cam.stream) Cam.paintQS();
  if (fromSync) window.scrollTo(0, scroll);
}

/* ================= SCORER ================= */
let M = LS.get('bxt-live', null);
function freshMatch() {
  const s = S.settings;
  const last = s.lastP || ['', ''];
  M = {id: uid(), mode: s.mode || 'casual', p: [...last].map(id => player(id) ? id : ''), deck: ['', ''], combo: ['', ''], deckIdx: [0, 0],
       rounds: [], tid: '', started: Date.now(), done: false, ptw: s.pointsToWin, fl: s.faultLimit};
  persistLive();
}
function persistLive() { LS.set('bxt-live', M); }
function replay() {
  const st = {score: [0, 0], faults: [0, 0], deckIdx: [...(M.deckIdx0 || [0, 0])]};
  for (const r of M.rounds) {
    if (r.t === 'fault') { st.faults[r.s]++; continue; }
    st.score[r.s] += r.pts; st.faults = [0, 0];
    if (M.mode === 'competitive' && r.t !== 'penalty') st.deckIdx = st.deckIdx.map(i => (i + 1) % 3);
  }
  return st;
}
function liveCombo(i, st) {
  if (M.mode === 'competitive') { const d = deck(M.deck[i]); if (!d) return null; return combo(d.combos[(st || replay()).deckIdx[i]]) || null; }
  return combo(M.combo[i]) || null;
}
function snapCombo(c) { return c ? {id: c.id, label: comboLabel(c), b: c.blade, a: c.assist, r: c.ratchet, t: c.bit} : null; }
function recordWin(pid, mode, excludeId) {
  let w = 0, l = 0;
  for (const m of S.matches) { if (m.mode !== mode || m.id === excludeId) continue; const i = m.p.indexOf(pid); if (i < 0) continue; if (m.winner === i) w++; else l++; }
  return {w, l, rate: pct(w, w + l)};
}
function vScore() {
  if (!M) freshMatch();
  const st = replay();
  const comp = M.mode === 'competitive';
  const clips = S.clips.filter(c => c.matchId === M.id).length;
  const playersOpts = (sel) => `<option value="">Player…</option>` + S.players.map(p => `<option value="${p.id}"${p.id === sel ? ' selected' : ''}>${esc(p.name)}</option>`).join('') + `<option value="__new">+ New player…</option>`;
  const side = i => {
    const pid = M.p[i]; const wr = pid ? recordWin(pid, M.mode) : null;
    const left = M.fl - st.faults[i];
    const off = M.done ? ' disabled' : '';
    return `<section class="side s${i}" aria-label="Player ${i + 1}">
      <select class="psel" id="pl${i}" data-ch="player" data-i="${i}" aria-label="Player ${i + 1}">${playersOpts(pid)}</select>
      <div class="scoreline"><div class="score">${st.score[i]}</div>
        <div class="wr">${pid ? `<b>${wr.w + wr.l ? wr.rate + '%' : '—'}</b><span class="num">${wr.w}–${wr.l}</span>` : ''}</div></div>
      <div class="pips">${Array.from({length: M.ptw}, (_, k) => `<i class="${k < st.score[i] ? 'on' : ''}"></i>`).join('')}</div>
      <div class="pts">
        <button class="pt" data-a="pt" data-i="${i}" data-v="spin"${off}><small>SPIN</small><b>+1</b></button>
        <button class="pt" data-a="pt" data-i="${i}" data-v="burst"${off}><small>BURST</small><b>+2</b></button>
        <button class="pt" data-a="pt" data-i="${i}" data-v="over"${off}><small>OVER</small><b>+2</b></button>
        <button class="pt x" data-a="pt" data-i="${i}" data-v="xtreme"${off}><small>XTREME</small><b>+3</b></button>
      </div>
      <button class="faultbtn" data-a="fault" data-i="${i}"${off} aria-label="Launch error, ${left} left">F: ${left}<span class="fd">${Array.from({length: M.fl}, (_, k) => `<i class="${k < left ? '' : 'used'}"></i>`).join('')}</span></button>
    </section>`;
  };
  const beyPick = i => {
    const lc = liveCombo(i, st);
    if (comp) {
      const d = deck(M.deck[i]);
      return `<select id="deck${i}" data-ch="deck" data-i="${i}" aria-label="Deck for player ${i + 1}"><option value="">Deck…</option>${S.decks.map(x => `<option value="${x.id}"${x.id === M.deck[i] ? ' selected' : ''}>${esc(x.name)}</option>`).join('')}</select>` +
        (d ? `<div class="combochips">${d.combos.map((cid, k) => { const c = combo(cid); return c ? `<button class="cchip" data-a="deckpick" data-i="${i}" data-v="${k}" aria-pressed="${st.deckIdx[i] === k}">${icon(c.blade)}<span>${k + 1}. ${esc(comboLabel(c))}</span></button>` : ''; }).join('')}</div>` : '');
    }
    return `<select id="combo${i}" data-ch="combo" data-i="${i}" aria-label="Bey for player ${i + 1}"><option value="">Which bey?</option>${S.combos.map(c => `<option value="${c.id}"${c.id === M.combo[i] ? ' selected' : ''}>${esc(comboLabel(c))}</option>`).join('')}</select>` +
      (lc ? `<div class="combochips"><span class="cchip" aria-pressed="true">${icon(lc.blade)}${lc.ratchet ? icon(lc.ratchet) : ''}${icon(lc.bit)}</span></div>` : '');
  };
  const labels = {spin: 'Spin', burst: 'Burst', over: 'Over', xtreme: 'Xtreme', penalty: 'Penalty', fault: 'F'};
  const log = M.rounds.map(r => `<span class="chip s${r.s}">${esc(pname(M.p[r.s]).split(' ')[0])} · ${labels[r.t]}${r.pts ? ' +' + r.pts : ''}</span>`).join('');
  const tsel = comp ? `<select id="tsel" data-ch="tourney" aria-label="Tournament"><option value="">No tournament</option>${S.tourneys.map(t => `<option value="${t.id}"${t.id === M.tid ? ' selected' : ''}>${esc(t.name)}</option>`).join('')}</select>` : '';
  const needDeck = comp && S.decks.length === 0 ? `<div class="note">Competitive games use a deck of 3 combos for each player. <button class="btn sm" data-a="nav" data-v="build">Build a deck</button></div>` : '';
  const needCombo = !comp && S.combos.length === 0 ? `<div class="note">Tip: build combos to tag which bey each player used. That powers the combo and part stats.</div>` : '';
  return `<div class="sbar">
     <div class="seg mode" role="group" aria-label="Game type"><button data-a="mode" data-v="casual" aria-pressed="${!comp}">Casual</button><button data-a="mode" data-v="competitive" aria-pressed="${comp}">Competitive</button></div>
     <div class="tools">
       <button class="btn sm" data-a="countdown" aria-label="Countdown">${I.timer}<span>3-2-1</span></button>
       <button class="btn sm" data-a="record" style="color:var(--p2)" aria-label="Record">${I.rec}<span>${Cam.recording ? 'Rec' : Cam.stream ? 'Camera' : 'Record'}${clips ? ` (${clips})` : ''}</span></button>
       <button class="btn sm" data-a="undo"${M.rounds.length ? '' : ' disabled'} aria-label="Undo">${I.undo}<span>Undo</span></button>
       <button class="btn sm ghost" data-a="newmatch">New</button>
     </div></div>
   <div class="target">First to <b class="num">${M.ptw}</b> · <span class="num">${M.fl}</span> launch errors a round${M.done ? ' · <b style="color:var(--good)">Match saved</b>' : ''}</div>
   ${tsel}${needDeck}${needCombo}
   <div class="arena">${side(0)}${side(1)}</div>
   <div class="card beys"><div class="eyebrow">${comp ? 'Decks' : 'Beys in play'}</div><div class="beygrid"><div class="beycol s0">${beyPick(0)}</div><div class="beycol s1">${beyPick(1)}</div></div></div>
   ${log ? `<div class="card"><div class="eyebrow" style="margin-bottom:8px">Round log</div><div class="log">${log}</div></div>` : ''}`;
}
function score(i, type) {
  if (M.done) return;
  if (!M.p[0] || !M.p[1]) return toast('Pick both players first');
  if (M.p[0] === M.p[1]) return toast('Pick two different players');
  if (M.mode === 'competitive' && (!M.deck[0] || !M.deck[1])) return toast('Pick a deck for both players');
  const st = replay();
  if (!M.rounds.length) M.deckIdx0 = [...st.deckIdx];
  const pts = {spin: 1, burst: 2, over: 2, xtreme: 3}[type];
  M.rounds.push({s: i, t: type, pts, c: [snapCombo(liveCombo(0, st)), snapCombo(liveCombo(1, st))], at: Date.now()});
  vib(30); afterPoint();
}
function fault(i) {
  if (M.done) return;
  if (!M.p[0] || !M.p[1]) return toast('Pick both players first');
  const st = replay();
  if (!M.rounds.length) M.deckIdx0 = [...st.deckIdx];
  M.rounds.push({s: i, t: 'fault', pts: 0, at: Date.now()});
  if (st.faults[i] + 1 >= M.fl) {
    M.rounds.push({s: 1 - i, t: 'penalty', pts: 1, c: [snapCombo(liveCombo(0, st)), snapCombo(liveCombo(1, st))], at: Date.now()});
    toast(`${pname(M.p[i])} hit the launch error limit. +1 to ${pname(M.p[1 - i])}`);
  }
  vib(15); afterPoint();
}
function vib(ms) { try { navigator.vibrate && navigator.vibrate(ms); } catch {} }
function afterPoint() {
  const st = replay();
  const w = st.score[0] >= M.ptw ? 0 : st.score[1] >= M.ptw ? 1 : -1;
  if (w >= 0) finishMatch(w, st);
  persistLive(); render();
}
function finishMatch(w, st) {
  M.done = true;
  const m = {kind: 'match', id: M.id, mode: M.mode, p: M.p, names: M.p.map(pname), deck: M.deck, rounds: M.rounds, score: st.score, winner: w,
             ptw: M.ptw, fl: M.fl, tid: M.mode === 'competitive' ? (M.tid || '') : '', date: M.started, ended: Date.now()};
  Store.put('match_' + M.id, m);
  saveSettings({lastP: M.p});
  const recLive = Cam.recording;
  if (recLive && S.settings.autoRec !== false) setTimeout(() => Cam.stop(), 1500);
  beep(1046, .12); setTimeout(() => beep(1318, .25), 140);
  const wr = recordWin(M.p[w], M.mode);
  const clips = S.clips.filter(c => c.matchId === M.id).length + (recLive ? 1 : 0);
  setTimeout(() => {
    $('#layer').innerHTML = `<div class="overlay" data-a="win-close"><div class="winbox" role="dialog" aria-label="Match result">
      <div class="eyebrow">${M.mode === 'competitive' ? 'Competitive' : 'Casual'} · ${m.tid ? esc(S.tourneys.find(t => t.id === m.tid)?.name || '') : 'Match saved'}</div>
      <h2 style="font-size:1.6rem;color:var(${w ? '--p2' : '--p1'})">${esc(pname(M.p[w]))} wins</h2>
      <div class="big num">${st.score[0]} – ${st.score[1]}</div>
      <div class="muted">${esc(pname(M.p[w]))} is now ${wr.w}–${wr.l} (${wr.rate}%) in ${M.mode} games${clips ? ` · <span class="reccount">${clips} clip${clips > 1 ? 's' : ''} saved with this match</span>` : ''}</div>
      <div class="row" style="justify-content:center"><button class="btn primary" data-a="rematch">Rematch</button><button class="btn" data-a="win-close">Close</button></div>
    </div></div>`;
  }, 250);
}
let AC;
function beep(f, d) {
  if (!S.settings.sound) return;
  try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume();
    const o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.value = f;
    const t = AC.currentTime; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.22, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(g).connect(AC.destination); o.start(t); o.stop(t + d + .03);
  } catch {}
}
function countdown() {
  if (Cam.stream && !Cam.recording && S.settings.autoRec !== false) Cam.start();
  const steps = ['3', '2', '1', 'GO SHOOT!'];
  let k = 0;
  const show = () => {
    if (k >= steps.length) { $('#layer').innerHTML = ''; return; }
    const go = k === 3;
    $('#layer').innerHTML = `<div class="overlay" aria-live="assertive"><div class="cd${go ? ' go' : ''}">${steps[k]}</div></div>`;
    beep(go ? 1320 : 880, go ? .45 : .15); vib(go ? 120 : 40);
    k++; setTimeout(show, go ? 900 : 1000);
  };
  show();
}

/* ================= CAMERA (live preview + recording) ================= */
const Cam = {
  stream: null, rec: null, chunks: [], recording: false, facing: 'environment', min: false, t0: 0, timer: null, matchId: '', maxFps: 30, fps: 30,
  supported: !!(navigator.mediaDevices?.getUserMedia && window.MediaRecorder),
  async open() {
    if (!this.supported) { $('#camIn').value = ''; $('#camIn').click(); return; }
    if (this.stream) { this.min = false; this.paint(); return; }
    const want = S.settings.camFps || 60;
    const video = {facingMode: this.facing, width: {ideal: 1920}, height: {ideal: 1080}, frameRate: {ideal: want}};
    try { this.stream = await navigator.mediaDevices.getUserMedia({video, audio: true}); }
    catch { try { this.stream = await navigator.mediaDevices.getUserMedia({video}); } catch (e) {
      toast(e.name === 'NotAllowedError' ? 'Camera access was blocked. Allow it in your browser settings, or use your camera app.' : 'Camera unavailable. Opening your camera app instead.');
      $('#camIn').value = ''; $('#camIn').click(); return; } }
    this.readTrack(); this.paint(); render();
    try { this.wake = await navigator.wakeLock?.request('screen'); } catch {}
  },
  readTrack() {
    const t = this.stream.getVideoTracks()[0];
    const caps = t.getCapabilities ? t.getCapabilities() : {};
    this.maxFps = Math.round(caps.frameRate?.max || t.getSettings().frameRate || 30);
    this.fps = Math.round(t.getSettings().frameRate || 30);
  },
  options() { return [24, 30, 60, 120, 240].filter(f => f <= Math.max(this.maxFps, 30)); },
  async setFps(f) {
    saveSettings({camFps: f});
    const t = this.stream?.getVideoTracks()[0]; if (!t) return;
    if (this.recording) return toast('Stop recording to change frame rate');
    try { await t.applyConstraints({frameRate: {ideal: f, max: f}}); } catch {}
    this.readTrack(); this.paint();
    if (this.fps < f) toast(`This camera gives ${this.fps} fps in the browser`);
  },
  async flip() {
    if (this.recording) return toast('Stop recording to switch camera');
    this.facing = this.facing === 'environment' ? 'user' : 'environment';
    this.stream.getTracks().forEach(t => t.stop()); this.stream = null; await this.open();
  },
  mime() { return ['video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find(m => MediaRecorder.isTypeSupported(m)) || ''; },
  start() {
    if (!this.stream || this.recording) return;
    const mimeType = this.mime();
    try { this.rec = new MediaRecorder(this.stream, mimeType ? {mimeType, videoBitsPerSecond: 10e6} : undefined); }
    catch { return toast('Recording isn\'t supported in this browser'); }
    this.chunks = []; this.matchId = M?.id || ''; this.recFps = this.fps; this.round = M ? M.rounds.filter(r => r.t !== 'fault').length + 1 : 0;
    const round = this.round, t0 = Date.now();
    const rec = this.rec;
    rec.ondataavailable = e => { if (e.data.size) this.chunks.push(e.data); };
    rec.onstop = () => {
      const blob = new Blob(this.chunks, {type: rec.mimeType || mimeType || 'video/mp4'});
      this.chunks = []; if (blob.size) saveClip(blob, this.matchId, this.recFps, {round, dur: Math.round((Date.now() - t0) / 1000)});
    };
    rec.start(1000); this.recording = true; this.t0 = Date.now();
    this.timer = setInterval(() => { const el = $('#camTime'); if (el) el.textContent = this.elapsed(); }, 500);
    this.paint(); render();
  },
  stop() { if (!this.recording) return; this.recording = false; clearInterval(this.timer); try { this.rec.stop(); } catch {} this.paint(); render(); },
  close() { this.stop(); this.stream?.getTracks().forEach(t => t.stop()); this.stream = null; try { this.wake?.release(); } catch {} $('#camdock').innerHTML = ''; render(); },
  elapsed() { const s = Math.floor((Date.now() - this.t0) / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; },
  paint() {
    const d = $('#camdock'); if (!this.stream) { d.innerHTML = ''; return; }
    let v = d.querySelector('video');
    if (!v) {
      d.innerHTML = `<div class="camdock" role="region" aria-label="Camera"><div class="cam-vid"><video autoplay muted playsinline></video></div><div class="cam-side"><div class="cbar" id="cbar"></div><div class="qs" id="camqs"></div></div></div>`;
      v = d.querySelector('video'); v.srcObject = this.stream;
      const fit = () => { if (v.videoWidth) d.firstElementChild.style.setProperty('--ar', `${v.videoWidth} / ${v.videoHeight}`); };
      v.addEventListener('loadedmetadata', fit); v.addEventListener('resize', fit);
    } else if (v.srcObject !== this.stream) v.srcObject = this.stream;
    d.firstElementChild.classList.toggle('min', this.min);
    $('#cbar').innerHTML = `
      <button class="btn sm${this.recording ? '' : ' primary'}" data-a="cam-rec" style="${this.recording ? 'color:var(--p2)' : ''}">${this.recording ? '■ Stop' : I.rec + ' Record'}</button>
      ${this.recording ? `<span class="recdot"><i></i><span id="camTime">${this.elapsed()}</span></span>` : `<select id="camfps" data-ch="camfps" aria-label="Frame rate">${this.options().map(f => `<option value="${f}"${f === (S.settings.camFps || 60) ? ' selected' : ''}>${f} fps</option>`).join('')}</select>`}
      <span style="flex:1"></span>
      <button class="btn sm ghost" data-a="cam-flip" aria-label="Switch camera">⇄</button>
      <button class="btn sm ghost cam-minbtn" data-a="cam-min" aria-label="${this.min ? 'Show preview' : 'Hide preview'}">${this.min ? '▢' : '–'}</button>
      <button class="btn sm ghost" data-a="cam-close" aria-label="Close camera">${I.x}</button>
      <span class="muted cam-note">${this.recording ? 'Saves to Clips with this match' : `Live ${this.fps} fps · max ${this.maxFps} fps · turn sideways for full view`}</span>`;
    this.paintQS();
  },
  paintQS() {
    const q = $('#camqs'); if (!q || !M) return;
    const st = replay(); const off = M.done ? ' disabled' : '';
    q.innerHTML = [0, 1].map(i => `<div class="qs-row s${i}"><div class="qs-name"><span>${esc(M.p[i] ? pname(M.p[i]) : 'Player ' + (i + 1))}</span><b class="num">${st.score[i]}</b></div>
      <div class="qs-btns"><button class="pt" data-a="pt" data-i="${i}" data-v="spin"${off}><small>SPIN</small><b>+1</b></button><button class="pt" data-a="pt" data-i="${i}" data-v="burst"${off}><small>BURST</small><b>+2</b></button><button class="pt" data-a="pt" data-i="${i}" data-v="over"${off}><small>OVER</small><b>+2</b></button><button class="pt x" data-a="pt" data-i="${i}" data-v="xtreme"${off}><small>XTREME</small><b>+3</b></button><button class="faultbtn" data-a="fault" data-i="${i}"${off}>F: ${M.fl - st.faults[i]}</button></div></div>`).join('')
      + `<div class="row" style="gap:6px"><button class="btn sm" data-a="countdown">${I.timer}3-2-1</button><button class="btn sm" data-a="undo"${M.rounds.length ? '' : ' disabled'}>${I.undo}Undo</button></div>`;
  }
};

/* ================= BUILD (combos + decks) ================= */
let buildTab = 'combos';
let draft = {blade: '', assist: '', ratchet: '', bit: '', editing: ''};
let deckDraft = {name: '', combos: [], editing: ''};
function vBuild() {
  return `<div class="head"><div><div class="eyebrow">Workshop</div><h1>Build</h1></div>
    <div class="seg" role="group"><button data-a="btab" data-v="combos" aria-pressed="${buildTab === 'combos'}">Combos</button><button data-a="btab" data-v="decks" aria-pressed="${buildTab === 'decks'}">Decks</button></div></div>` +
    (buildTab === 'combos' ? vCombos() : vDecks());
}
function isCX(bid) { return P[bid]?.line === 'CX'; }
function vCombos() {
  const slot = (cat, label, dis) => {
    const v = draft[cat];
    return `<button class="slot${v ? ' filled' : ''}${dis ? ' dis' : ''}" data-a="${dis ? '' : 'pickpart'}" data-v="${cat}" ${dis ? 'aria-disabled="true"' : ''}>
      <span class="lbl">${label}</span>${v ? icon(v) : `<div class="pi" style="--sz:72px;border-style:dashed">${I.plus}</div>`}<span class="val">${v ? esc(pn(v)) : dis ? 'CX blades only' : 'Choose'}</span></button>`;
  };
  const ok = draft.blade && draft.bit && (draft.ratchet || draft.bit === 'bit:Tr');
  const name = draft.blade ? comboLabel(draft) : 'New combo';
  const list = S.combos.length ? `<div class="clist">${S.combos.map(c => {
      const st = comboStats()[c.id];
      return `<div class="citem"><div class="icons">${comboParts(c).map(p => icon(p)).join('')}</div><div class="t"><b>${esc(comboLabel(c))}</b><small>${st ? `${st.w}–${st.l} rounds · ${pct(st.w, st.w + st.l)}% win` : 'Not battled yet'}${ownWarn(c)}</small></div>
        <button class="btn sm" data-a="editcombo" data-v="${c.id}">Edit</button><button class="btn sm ghost danger" data-a="delcombo" data-v="${c.id}" aria-label="Delete combo">${I.trash}</button></div>`; }).join('')}</div>`
    : `<div class="empty"><h3>No combos yet</h3>Pick a blade, ratchet and bit above, then save.</div>`;
  return `<div class="card" style="display:flex;flex-direction:column;gap:14px">
      <div class="row" style="justify-content:space-between"><div><div class="eyebrow">${draft.editing ? 'Editing combo' : 'Combo builder'}</div><div class="comboname">${esc(name)}</div></div>
      <div class="row">${draft.blade || draft.editing ? `<button class="btn ghost" data-a="cleardraft">Clear</button>` : ''}<button class="btn primary" data-a="savecombo"${ok ? '' : ' disabled'}>${draft.editing ? 'Save changes' : 'Save combo'}</button></div></div>
      <div class="slots">${slot('blade', 'Blade')}${slot('assist', 'Assist', !isCX(draft.blade))}${slot('ratchet', 'Ratchet', draft.bit === 'bit:Tr')}${slot('bit', 'Bit')}</div>
      <div class="muted" style="font-size:.85rem">Parts you own show first. Turn on “Show every part” in the picker to use anything in the database.</div>
    </div>
    <div class="head"><h2>Your combos <span class="muted num">${S.combos.length}</span></h2></div>${list}`;
}
function ownWarn(c) {
  const miss = comboParts(c).filter(p => !S.counts[p]);
  return miss.length ? ` · <span style="color:var(--warn)">Not in collection: ${miss.map(p => esc(pn(p))).join(', ')}</span>` : '';
}
let pickCat = '', pickAll = false, pickQ = '';
function openPicker(cat) { pickCat = cat; pickQ = ''; openSheet('Choose ' + CAT_LABEL[cat], pickerBody()); }
function pickerBody() {
  const all = Object.values(P).filter(p => p.cat === pickCat);
  let list = all.filter(p => pickAll || S.counts[p.id]);
  if (pickQ) list = all.filter(p => (p.name + ' ' + (p.alt || '') + ' ' + (p.code || '')).toLowerCase().includes(pickQ.toLowerCase()));
  list.sort((a, b) => (S.counts[b.id] ? 1 : 0) - (S.counts[a.id] ? 1 : 0) || dn(a).localeCompare(dn(b), undefined, {numeric: true}));
  return `<div class="row"><input type="search" id="pickq" data-in="pickq" placeholder="Search ${CAT_LABEL[pickCat].toLowerCase()}s" value="${esc(pickQ)}" style="flex:1;min-width:0">
     <label class="row" style="gap:6px;font-size:.88rem"><input type="checkbox" id="pickall" data-ch="pickall"${pickAll ? ' checked' : ''}> Show every part</label></div>
    ${list.length ? `<div class="pgrid">${list.map(p => `<button class="ptile${draft[pickCat] === p.id ? ' sel' : ''}${S.counts[p.id] ? '' : ' off'}" data-a="choosepart" data-v="${p.id}">${S.counts[p.id] ? `<span class="cnt">${S.counts[p.id]}</span>` : ''}${icon(p.id)}<span class="nm">${esc(dn(p))}</span>${tags(p)}</button>`).join('')}</div>`
      : `<div class="empty"><h3>None in your collection</h3>Add expansions under Collection, or turn on “Show every part”.</div>`}`;
}
let comboStatsCache = null, comboStatsKey = null;
function comboStats() {
  if (comboStatsKey === S.matches) return comboStatsCache;
  const r = {};
  for (const m of S.matches) for (const rd of m.rounds) { if (!rd.c || rd.t === 'fault') continue; rd.c.forEach((c, i) => { if (!c) return; const o = r[c.id] = r[c.id] || {w: 0, l: 0}; rd.s === i ? o.w++ : o.l++; }); }
  comboStatsKey = S.matches; return comboStatsCache = r;
}
function vDecks() {
  const sel = deckDraft.combos;
  const issues = deckIssues(sel);
  return `<div class="card" style="display:flex;flex-direction:column;gap:14px">
     <div class="row" style="justify-content:space-between"><div class="eyebrow">${deckDraft.editing ? 'Editing deck' : 'Deck builder · pick 3 combos'}</div><span class="chip ${sel.length === 3 ? 'on' : ''} num">${sel.length}/3</span></div>
     <label class="f">Deck name<input type="text" id="deckname" data-in="deckname" value="${esc(deckDraft.name)}" placeholder="e.g. Tournament main"></label>
     ${S.combos.length ? `<div class="clist">${S.combos.map(c => { const k = sel.indexOf(c.id); return `<div class="citem pickable${k >= 0 ? ' sel' : ''}" data-a="deckcombo" data-v="${c.id}" role="button" tabindex="0" aria-pressed="${k >= 0}"><div class="icons">${comboParts(c).map(p => icon(p)).join('')}</div><div class="t"><b>${esc(comboLabel(c))}</b></div>${k >= 0 ? `<span class="chip on">Slot ${k + 1}</span>` : ''}</div>`; }).join('')}</div>`
       : `<div class="empty"><h3>Build combos first</h3>A deck is 3 of your saved combos. <button class="btn sm" data-a="btab" data-v="combos">Go to combos</button></div>`}
     ${issues.length && sel.length ? `<div class="note" style="color:var(--warn)">Not tournament legal: ${issues.map(esc).join('; ')}. Fine for casual practice.</div>` : ''}
     <div class="row" style="justify-content:flex-end">${deckDraft.editing ? `<button class="btn ghost" data-a="cleardeck">Cancel</button>` : ''}<button class="btn primary" data-a="savedeck"${sel.length === 3 ? '' : ' disabled'}>${deckDraft.editing ? 'Save changes' : 'Save deck'}</button></div>
   </div>
   <div class="head"><h2>Your decks <span class="muted num">${S.decks.length}</span></h2></div>
   ${S.decks.length ? `<div class="grid g2">${S.decks.map(d => { const iss = deckIssues(d.combos); return `<div class="card" style="display:flex;flex-direction:column;gap:10px">
      <div class="row" style="justify-content:space-between"><h3>${esc(d.name)}</h3>${iss.length ? '<span class="chip warn">Duplicate parts</span>' : '<span class="chip good">Legal</span>'}</div>
      ${d.combos.map((cid, k) => { const c = combo(cid); return c ? `<div class="row" style="gap:8px;flex-wrap:nowrap"><span class="eyebrow num">${k + 1}</span>${comboParts(c).map(p => icon(p, 30)).join('')}<span style="font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(comboLabel(c))}</span></div>` : `<div class="muted">Deleted combo</div>`; }).join('')}
      <div class="row" style="justify-content:flex-end"><button class="btn sm" data-a="editdeck" data-v="${d.id}">Edit</button><button class="btn sm ghost danger" data-a="deldeck" data-v="${d.id}" aria-label="Delete deck">${I.trash}</button></div></div>`; }).join('')}</div>`
     : `<div class="empty"><h3>No decks yet</h3>Decks are needed for competitive games.</div>`}`;
}
function deckIssues(ids) {
  const seen = {}, out = [];
  ids.map(combo).filter(Boolean).forEach(c => comboParts(c).forEach(p => { seen[p] = (seen[p] || 0) + 1; }));
  for (const [p, n] of Object.entries(seen)) if (n > 1) out.push(`${CAT_LABEL[P[p]?.cat] || ''} ${pn(p)} used ${n}×`);
  return out;
}

/* ================= COLLECTION ================= */
let collTab = 'sets', setLine = 'All', setQ = '', partCat = 'blade', ownedOnly = false;
function vCollection() {
  const owned = Object.values(S.coll.sets || {}).filter(Boolean).length;
  const partsOwned = Object.values(S.counts).filter(Boolean).length;
  return `<div class="head"><div><div class="eyebrow">Collection</div><h1>${owned} sets · ${partsOwned} parts</h1></div>
    <div class="row">${namingSeg()}<div class="seg" role="group"><button data-a="ctab" data-v="sets" aria-pressed="${collTab === 'sets'}">Sets</button><button data-a="ctab" data-v="parts" aria-pressed="${collTab === 'parts'}">Parts</button></div></div></div>` +
    (collTab === 'sets' ? vSets() : vParts());
}
function namingSeg() { const h = S.settings.naming !== 'takara'; return `<div class="seg" role="group" aria-label="Blade names"><button data-a="naming" data-v="hasbro" aria-pressed="${h}">Hasbro names</button><button data-a="naming" data-v="takara" aria-pressed="${!h}">Takara names</button></div>`; }
function vSets() {
  const lines = ['All', 'Hasbro', 'BX', 'UX', 'CX', 'Other', 'Owned'];
  let list = SETS_X;
  if (setLine === 'Owned') list = list.filter(s => S.coll.sets[s.key]); else if (setLine !== 'All') list = list.filter(s => s.line === setLine);
  if (setQ) list = list.filter(s => (s.code + ' ' + s.name).toLowerCase().includes(setQ.toLowerCase()));
  return `<div class="card" style="display:flex;flex-direction:column;gap:12px">
    <div class="row"><input type="search" id="setq" data-in="setq" placeholder="Search sets or codes" value="${esc(setQ)}" style="flex:1;min-width:0">
    <div class="seg" role="group" style="overflow-x:auto;max-width:100%">${lines.map(l => `<button data-a="setline" data-v="${l}" aria-pressed="${setLine === l}">${l}</button>`).join('')}</div></div>
    <div class="note">Hasbro is what Kmart, Target, Big W and Toys"R"Us stock. BX, UX and CX are the Japanese Takara Tomy releases. Set how many of each product you own. Its blade, ratchet and bit go straight into your parts. Random boosters and deck sets add their main combo; add extra pulls under Parts.</div>
    <div class="setlist">${list.map(s => { const q = S.coll.sets[s.key] || 0; const parts = s.combos.flatMap(comboParts);
      return `<div class="setrow"><span class="code">${esc(s.code)}</span>
        <div style="display:flex;gap:3px;flex:none">${parts.slice(0, 4).map(p => icon(p, 34)).join('')}</div>
        <div class="info"><b>${esc(s.name)}</b><small>${esc(s.kind)}${s.note ? ' · ' + esc(s.note) : ''}</small></div>
        <div class="stepper${q ? ' on' : ''}" aria-label="Quantity owned"><button data-a="setq-" data-v="${s.key}" aria-label="One fewer">−</button><span class="num">${q}</span><button data-a="setq+" data-v="${s.key}" aria-label="One more">+</button></div></div>`; }).join('') || '<div class="empty">No sets match.</div>'}</div></div>`;
}
function vParts() {
  const cats = [['blade', 'Blades'], ['assist', 'Assist Blades'], ['ratchet', 'Ratchets'], ['bit', 'Bits']];
  let list = Object.values(P).filter(p => p.cat === partCat);
  if (ownedOnly) list = list.filter(p => S.counts[p.id]);
  list.sort((a, b) => (S.counts[b.id] ? 1 : 0) - (S.counts[a.id] ? 1 : 0) || dn(a).localeCompare(dn(b), undefined, {numeric: true}));
  return `<div class="row" style="justify-content:space-between"><div class="seg" role="group" style="overflow-x:auto;max-width:100%">${cats.map(([k, l]) => `<button data-a="pcat" data-v="${k}" aria-pressed="${partCat === k}">${l}</button>`).join('')}</div>
     <div class="row"><label class="row" style="gap:6px;font-size:.9rem"><input type="checkbox" id="ownedonly" data-ch="ownedonly"${ownedOnly ? ' checked' : ''}> Owned only</label><button class="btn sm" data-a="bulkphotos">Import photos</button>${Object.keys(S.photos).length ? `<button class="btn sm" data-a="cleanphotos">Remove white backgrounds</button>` : ''}<button class="btn sm" data-a="addpart">${I.plus}Custom part</button></div></div>
     ${partCat === 'blade' ? `<div class="legend"><span><i style="background:var(--atk)"></i>Attack</span><span><i style="background:var(--def)"></i>Defence</span><span><i style="background:var(--sta)"></i>Stamina</span><span><i style="background:var(--bal)"></i>Balance</span><span><i style="background:var(--unk)"></i>Type not set</span></div>` : ''}
     ${list.length ? `<div class="pgrid">${list.map(p => `<button class="ptile${S.counts[p.id] ? '' : ' off'}" data-a="partdetail" data-v="${p.id}">${S.counts[p.id] ? `<span class="cnt">${S.counts[p.id]}</span>` : ''}${icon(p.id)}<span class="nm">${esc(dn(p))}</span>${tags(p)}</button>`).join('')}</div>`
       : `<div class="empty"><h3>Nothing owned here yet</h3>Add sets you've bought, or tap any part to add it as a loose part.</div>`}`;
}
function partDetail(pid) {
  const p = P[pid]; const fromSets = (S.counts[pid] || 0) - (S.coll.extra[pid] || 0);
  const inSets = SETS_X.filter(s => s.combos.some(c => comboParts(c).includes(pid)));
  openSheet(dn(p), `<div class="row" style="flex-wrap:nowrap">${icon(pid, 96)}<div style="min-width:0"><div class="eyebrow">${CAT_LABEL[p.cat]}${p.line ? ' · ' + esc(p.line) : ''}</div>
      <h2>${esc(dn(p))}</h2><div style="margin:4px 0">${tags(p)}</div><div class="muted">${p.alt ? `${S.settings.naming === 'takara' ? 'Hasbro' : 'Takara Tomy'} name: ${esc(S.settings.naming === 'takara' ? p.alt : p.name)}` : ''}</div></div></div>
    ${p.cat === 'ratchet' ? '' : `<div><div class="eyebrow" style="margin-bottom:6px">Type</div><div class="seg typeseg" role="group" aria-label="Type" style="flex-wrap:wrap">${[['A', 'Attack'], ['D', 'Defence'], ['S', 'Stamina'], ['B', 'Balance'], ['', 'Not set']].map(([k, l]) => `<button class="t-${k || 'U'}" data-a="settype" data-v="${pid}" data-t="${k}" aria-pressed="${(p.type || '') === k}">${l}</button>`).join('')}</div></div>`}
    <div class="row" style="justify-content:space-between"><div><b>Owned: <span class="num">${S.counts[pid] || 0}</span></b><div class="muted" style="font-size:.85rem">${Math.max(0, fromSets)} from sets · ${S.coll.extra[pid] || 0} loose</div></div>
      <div class="stepper on"><button data-a="extra-" data-v="${pid}" aria-label="Remove one loose">−</button><span class="num">${S.coll.extra[pid] || 0}</span><button data-a="extra+" data-v="${pid}" aria-label="Add one loose">+</button></div></div>
    <div class="row"><button class="btn" data-a="photo" data-v="${pid}">${S.photos[pid] ? 'Replace photo' : 'Add your own photo'}</button>${S.photos[pid] ? `<button class="btn ghost danger" data-a="delphoto" data-v="${pid}">Remove photo</button>` : ''}${p.custom ? `<button class="btn ghost danger" data-a="delpart" data-v="${pid}">Delete custom part</button>` : ''}</div>
    ${dbLink(p)}
    ${inSets.length ? `<div><div class="eyebrow" style="margin-bottom:6px">Comes in</div><div class="row" style="gap:6px">${inSets.map(s => `<span class="chip">${esc(s.code)} ${esc(s.name)}</span>`).join('')}</div></div>` : ''}`);
}
function dbLink(p) {
  if (p.custom) return '';
  const base = 'https://www.beybxdb.com/parts-system-guide/parts/';
  const cat = {blade: 'bxux-blade', ratchet: 'ratchet', bit: 'bit'}[p.cat];
  if (!cat) return '';
  const direct = p.cat === 'blade' && (p.line === 'BX' || p.line === 'UX') ? base + cat + '/' + slug(p.name) : '';
  return `<div class="note" style="display:flex;flex-direction:column;gap:6px"><span>See the official part photo on BeyBXDB or Beyblade Hub, then save it or snap your own with “Add your own photo”.</span><span class="row" style="gap:8px">${direct ? `<a class="btn sm" href="${direct}" target="_blank" rel="noopener">Open ${esc(p.name)} on BeyBXDB ↗</a>` : ''}<a class="btn sm${direct ? ' ghost' : ''}" href="${base + cat}" target="_blank" rel="noopener">All ${CAT_LABEL[p.cat].toLowerCase()}s on BeyBXDB ↗</a><a class="btn sm ghost" href="https://beybladehub.app/en/parts/${{blade: 'blades', ratchet: 'ratchets', bit: 'bits'}[p.cat]}" target="_blank" rel="noopener">Beyblade Hub ↗</a></span></div>`;
}
let photoTarget = '';
const loadImg = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
// Clears white/near-white background that touches the image edge, then softens the cut edge
function knockOut(x, s) {
  const d = x.getImageData(0, 0, s, s), p = d.data, n = s * s, seen = new Uint8Array(n), q = [];
  const bg = i => { const r = p[i * 4], g = p[i * 4 + 1], b = p[i * 4 + 2]; return p[i * 4 + 3] < 12 || (r > 226 && g > 226 && b > 226 && Math.max(r, g, b) - Math.min(r, g, b) < 20); };
  for (let k = 0; k < s; k++) q.push(k, (s - 1) * s + k, k * s, k * s + s - 1);
  while (q.length) {
    const i = q.pop(); if (seen[i]) continue; seen[i] = 1; if (!bg(i)) continue;
    p[i * 4 + 3] = 0; const xx = i % s, yy = (i / s) | 0;
    if (xx > 0) q.push(i - 1); if (xx < s - 1) q.push(i + 1); if (yy > 0) q.push(i - s); if (yy < s - 1) q.push(i + s);
  }
  // Enclosed white (the hole in a ratchet, gaps between blade wings): only flat, near-pure white patches,
  // so shaded white plastic on the part itself is kept
  const lum = i => (p[i * 4] + p[i * 4 + 1] + p[i * 4 + 2]) / 3;
  const flat = i => p[i * 4 + 3] > 0 && lum(i) >= 238 && Math.max(p[i * 4], p[i * 4 + 1], p[i * 4 + 2]) - Math.min(p[i * 4], p[i * 4 + 1], p[i * 4 + 2]) < 14;
  const done = new Uint8Array(n);
  for (let start = 0; start < n; start++) {
    if (done[start] || !flat(start)) continue;
    const region = [], st = [start]; done[start] = 1; let sum = 0;
    while (st.length) {
      const i = st.pop(); region.push(i); sum += lum(i); const xx = i % s;
      for (const j of [xx > 0 ? i - 1 : -1, xx < s - 1 ? i + 1 : -1, i - s, i + s]) if (j >= 0 && j < n && !done[j] && flat(j)) { done[j] = 1; st.push(j); }
    }
    if (region.length >= 30 && sum / region.length >= 248) for (const i of region) p[i * 4 + 3] = 0;
  }
  const clear = new Uint8Array(n); for (let i = 0; i < n; i++) clear[i] = p[i * 4 + 3] === 0;
  for (let i = 0; i < n; i++) {
    if (clear[i]) continue; const xx = i % s;
    const edge = (xx > 0 && clear[i - 1]) || (xx < s - 1 && clear[i + 1]) || (i >= s && clear[i - s]) || (i < n - s && clear[i + s]);
    if (edge) { const l = (p[i * 4] + p[i * 4 + 1] + p[i * 4 + 2]) / 3; if (l > 195) p[i * 4 + 3] = Math.max(0, Math.round(255 * (255 - l) / 60)); }
  }
  x.putImageData(d, 0, 0);
}
function encodeAlpha(c) { const w = c.toDataURL('image/webp', .86); return w.startsWith('data:image/webp') ? w : c.toDataURL('image/png'); }
async function thumbFromSrc(src) {
  const img = await loadImg(src);
  const s = 240, c = document.createElement('canvas'); c.width = c.height = s; const x = c.getContext('2d', {willReadFrequently: true});
  const m = Math.max(img.width, img.height), w = img.width / m * s, h = img.height / m * s;
  x.drawImage(img, (s - w) / 2, (s - h) / 2, w, h);
  knockOut(x, s);
  return encodeAlpha(c);
}
async function toThumb(file) {
  const url = URL.createObjectURL(file);
  try { return await thumbFromSrc(url); } finally { URL.revokeObjectURL(url); }
}
let cleaning = false;
async function cleanAllPhotos() {
  if (cleaning) return; cleaning = true;
  const ids = Object.keys(S.photos); let n = 0;
  toast(`Removing backgrounds from ${ids.length} photos…`);
  for (const pid of ids) {
    try { const src = await thumbFromSrc(S.photos[pid]); Store.put('photo_' + slug(pid), {kind: 'photo', pid, src}); n++; } catch {}
    if (n % 20 === 0) await new Promise(r => setTimeout(r, 0));
  }
  cleaning = false; render(); toast(`Backgrounds removed from ${n} photo${n === 1 ? '' : 's'}`);
}
const norm = s => String(s || '').toLowerCase().replace(/\.[a-z0-9]+$/, '').replace(/[^a-z0-9]/g, '');
const abbr = s => String(s || '').split(/\s+/).map(w => w.slice(0, 2)).join('').toLowerCase();
const HUB_BLADES = {DrSw:'Dran Sword',HlSc:'Hells Scythe',WzAr:'Wizard Arrow',KnSh:'Knight Shield',KnLn:'Knight Lance',ShEd:'Shark Edge',LnCl:'Leon Claw',VpTl:'Viper Tail',
 RhHr:'Rhino Horn',DrDg:'Dran Dagger',HlCh:'Hells Chain',PhWn:'Phoenix Wing',WyGl:'Wyvern Gale',UnSt:'Unicorn Sting',SpCw:'Sphinx Cowl',TyBt:'Tyranno Beat',WsTg:'Weiss Tiger',
 CbDg:'Cobalt Dragoon',BlSh:'Black Shell',WhWv:'Whale Wave',BrSc:'Savage Bear',CrGr:'Crimson Garuda',ShDr:'Shelter Drake',TrPr:'Tricera Press',SmCl:'Samurai Calibur',
 CbDr:'Cobalt Drake',GtTc:'Tackle Goat',DrSt:'Dran Strike',HvRg:"Heaven's Ring",LuDr:'Luster Dragoon',SgSp:'Siegsuperion',PhFt:'Phoenix Feather',ShKn:'Knife Shinobi',
 SmSt:'Samurai Steel',PtSw:'Ptera Swing',MmTs:'Mammoth Tusk',CrCr:'Croc Crunch',TyRr:'Roar Tyranno',TrSp:'Tricera Spiky',ShGl:'Gill Shark',DrBs:'Dran Buster',
 HlHm:'Hells Hammer',WzRd:'Wizard Rod',ShSh:'Shinobi Shadow',LnCr:'Leon Crest',PhRd:'Phoenix Rudder',SlWl:'Silver Wolf',SmSb:'Samurai Saber',KnMl:'Knight Mail',
 ImDr:'Impact Drake',GhCr:'Ghost Circle',GlRc:'Golem Rock',ScSp:'Scorpio Spear',ShSc:'Shark Scale',ClMr:'Clock Mirage',MtDg:'Meteor Dragoon',MmCr:'Mummy Curse',
 BlGr:'Bullet Griffon',GlVl:'Glory Valkyrie',HlNt:'Nether Incendio',BsBr:'Valor Bison',OrCl:'Orochi Cluster',ArPg:'Aero Pegasus',WyHv:'Wyvern Hover',DrSp:'Dranzer Spiral',
 DrSl:'Driger Slash',LtLdU:'Lightning L-Drago (Upper)',LtLdR:'Lightning L-Drago (Rapid)',DrSh:'Draciel Shield',XnXc:'Xeno Xcalibur',RkLn:'Rock Leone',S2:'Storm Spriggan',
 DgSt:'Dragoon Storm',StPg:'Storm Pegasis',V2:'Victory Valkyrie',
 'main-Br':'Dran Brave','main-Ar':'Wizard Arc','main-Dr':'Perseus Dark','main-Rp':'Hells Reaper','main-Bs':'Fox Brush','main-Bl':'Pegasus Blast','main-Fl':'Cerberus Flame',
 'main-Ec':'Sol Eclipse','main-Hn':'Wolf Hunt','main-Mg':'Emperor Might','metal-Bl':'Bahamut Bliz','metal-Fr':'Knight Fortress','metal-Rg':'Ragna Rage','metal-Dl':'Unicorn Delta',
 'metal-Wh':'Brachio Whip','metal-Tr':'Tread Croc',
 Capt:'Captain America',Redh:'Red Hulk',Mile:'Miles Morales',Gree:'Green Goblin',Iron:'Iron Man',Than:'Thanos',Spid:'Spider-Man',Veno:'Venom',Obiw:'Obi-Wan Kenobi',
 Gene:'General Grievous',Chew:'Chewbacca',Stor:'Stormtrooper',Luke:'Luke Skywalker',Dart:'Darth Vader',Mand:'The Mandalorian',Moff:'Moff Gideon',Grog:'Grogu',
 Opme:'Optimus Prime',Mega:'Megatron',Opal:'Optimus Primal',Star:'Starscream',Bumb:'Bumblebee',Shoc:'Shockwave',Trex:'T-Rex',Mosa:'Mosasaurus',Spno:'Spinosaurus',Qtzl:'Quetzalcoatlus'};
function guessAny(fname) {
  const base = fname.replace(/\.[a-z0-9]+$/i, '').replace(/\s*\(\d+\)$/, '').replace(/[-_](v\d+|official|z5m)$/i, '').trim();
  if (HUB_BLADES[base]) { const id = bladeId(HUB_BLADES[base]); if (P[id]) return id; }
  const am = base.match(/^assist-([A-Za-z]+)$/); if (am && P['assist:' + am[1].toUpperCase()]) return 'assist:' + am[1].toUpperCase();
  if (/^(\d|M)-\d\d$/i.test(base) && P['ratchet:' + base.toUpperCase()]) return 'ratchet:' + base.toUpperCase();
  const bit = Object.values(P).find(p => p.cat === 'bit' && p.code === base) || Object.values(P).find(p => p.cat === 'bit' && p.code.toLowerCase() === base.toLowerCase());
  if (bit) return bit.id;
  for (const cat of ['blade', 'ratchet', 'bit', 'assist']) { const g = guessPart(fname, cat); if (g) return g; }
  return '';
}
function guessPart(fname, cat) {
  const f = norm(fname.replace(/\.[a-z0-9]+$/i, '').replace(/-v\d+$/i, '').replace(/^chip-/i, ''));
  const parts = Object.values(P).filter(p => p.cat === cat);
  for (const p of parts) if ([norm(p.name), norm(p.alt), norm(p.code)].includes(f)) return p.id;
  for (const p of parts) if (p.cat === 'blade' && [abbr(p.name), abbr(p.alt)].includes(f)) return p.id;
  for (const p of parts) if (p.cat === 'blade' && (f.includes(norm(p.name)) || (p.alt && f.includes(norm(p.alt))))) return p.id;
  return '';
}
let bulk = [];
async function handleBulk(files) {
  toast(`Reading ${files.length} image${files.length > 1 ? 's' : ''}\u2026`);
  bulk = [];
  for (const f of files) { try { bulk.push({name: f.name, src: await toThumb(f), pid: guessAny(f.name)}); } catch { } }
  // one photo per part: keep the first match, later duplicates go to review
  const seen = new Set(); bulk.forEach(b => { if (b.pid && seen.has(b.pid)) b.pid = ''; else if (b.pid) seen.add(b.pid); });
  bulk.sort((a, b) => (a.pid ? 1 : 0) - (b.pid ? 1 : 0));
  const groups = Object.entries(CAT_LABEL).map(([c, l]) => `<optgroup label="${l}s">${Object.values(P).filter(p => p.cat === c).sort((a, b) => dn(a).localeCompare(dn(b), undefined, {numeric: true})).map(p => `<option value="${p.id}">${esc(dn(p))}${p.code && p.cat !== 'ratchet' ? ' (' + esc(p.code) + ')' : ''}</option>`).join('')}</optgroup>`).join('');
  const matched = bulk.filter(b => b.pid).length;
  openSheet('Import part photos', `<div class="note"><b>${matched} of ${bulk.length}</b> matched to a part automatically.${bulk.length - matched ? ` The ${bulk.length - matched} at the top didn't match: pick a part for any you want, or leave them on \u201cSkip\u201d.` : ''}</div>
    <div class="row" style="justify-content:flex-end"><button class="btn primary" data-a="savebulk">Save photos</button></div>
    <div class="clist">${bulk.map((b, k) => `<div class="citem"><div class="pi" style="--sz:48px"><img src="${b.src}" alt=""></div><div class="t"><small>${esc(b.name)}</small>
      ${b.pid ? `<b>${esc(pn(b.pid))} <span class="muted" style="font-weight:500;font-size:.8rem">${CAT_LABEL[P[b.pid].cat]}${S.photos[b.pid] ? ' \u00b7 replaces photo' : ''}</span></b>`
        : `<select id="bk${k}" data-ch="bulkpick" data-i="${k}" style="width:100%"><option value="">Skip</option>${groups}</select>`}</div>
      ${b.pid ? `<button class="btn sm ghost" data-a="bulkskip" data-i="${k}" aria-label="Skip this photo">${I.x}</button>` : ''}</div>`).join('')}</div>`);
}
async function handlePhoto(file) {
  try {
    const src = await toThumb(file);
    Store.put('photo_' + slug(photoTarget), {kind: 'photo', pid: photoTarget, src});
    toast('Photo saved'); partDetail(photoTarget); render();
  } catch { toast('That image could not be read. Try a JPG or PNG.'); }
}

/* ================= INSIGHTS ================= */
let insMode = 'casual', insPlayer = '';
function finishColors() { return {spin: 'var(--sta)', burst: 'var(--bal)', over: 'var(--def)', xtreme: 'var(--atk)', penalty: 'var(--unk)'}; }
function vInsights() {
  const ms = S.matches.filter(m => m.mode === insMode && (!insPlayer || m.p.includes(insPlayer)));
  const pRows = {}, fin = {spin: 0, burst: 0, over: 0, xtreme: 0, penalty: 0}, cRows = {}, partRows = {};
  let rounds = 0;
  for (const m of ms) {
    m.p.forEach((pid, i) => { const o = pRows[pid] = pRows[pid] || {pid, name: m.names?.[i] || pname(pid), m: 0, w: 0, pf: 0, pa: 0, x: 0}; o.m++; if (m.winner === i) o.w++; o.pf += m.score[i]; o.pa += m.score[1 - i]; });
    for (const r of m.rounds) {
      if (r.t === 'fault') continue; rounds++;
      if (!insPlayer || m.p[r.s] === insPlayer) fin[r.t] += r.pts;
      if (r.t === 'xtreme' && pRows[m.p[r.s]]) pRows[m.p[r.s]].x++;
      (r.c || []).forEach((c, i) => {
        if (!c || (insPlayer && m.p[i] !== insPlayer)) return;
        const o = cRows[c.id] = cRows[c.id] || {label: c.label, w: 0, l: 0, fin: {}}; r.s === i ? (o.w++, o.fin[r.t] = (o.fin[r.t] || 0) + 1) : o.l++;
        [c.b, c.a, c.r, c.t].filter(Boolean).forEach(pid => { const q = partRows[pid] = partRows[pid] || {pid, w: 0, l: 0}; r.s === i ? q.w++ : q.l++; });
      });
    }
  }
  const finTotal = Object.values(fin).reduce((a, b) => a + b, 0);
  const pr = insPlayer ? pRows[insPlayer] : null;
  const tiles = [
    ['Matches', ms.length],
    [insPlayer ? 'Win rate' : 'Rounds', insPlayer ? (pr ? pct(pr.w, pr.m) + '%' : '—') : rounds],
    [insPlayer ? 'Record' : 'Avg points / match', insPlayer ? (pr ? `${pr.w}–${pr.m - pr.w}` : '—') : (ms.length ? (ms.reduce((a, m) => a + m.score[0] + m.score[1], 0) / ms.length).toFixed(1) : '—')],
    ['Xtreme share', finTotal ? pct(fin.xtreme, finTotal) + '%' : '—'],
  ];
  const fc = finishColors();
  const combosSorted = Object.values(cRows).sort((a, b) => (b.w + b.l) - (a.w + a.l)).slice(0, 12);
  const partBy = cat => Object.values(partRows).filter(x => P[x.pid]?.cat === cat && x.w + x.l >= 2).sort((a, b) => pct(b.w, b.w + b.l) - pct(a.w, a.w + a.l) || (b.w + b.l) - (a.w + a.l)).slice(0, 6);
  const partTable = (cat, title) => { const rows = partBy(cat); return `<div class="card"><h3 style="margin-bottom:8px">${title}</h3>${rows.length ? rows.map(x => `<div class="row" style="flex-wrap:nowrap;padding:5px 0">${icon(x.pid, 30)}<span style="flex:1;min-width:0;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(pn(x.pid))}</span><span class="muted num" style="font-size:.82rem">${x.w}–${x.l}</span><b class="num" style="width:44px;text-align:right">${pct(x.w, x.w + x.l)}%</b></div>`).join('') : '<div class="muted" style="font-size:.88rem">Needs at least 2 tagged rounds.</div>'}</div>`; };
  return `<div class="head"><div><div class="eyebrow">Insights</div><h1>${insMode === 'competitive' ? 'Competitive' : 'Casual'} stats</h1></div>
     <div class="row"><select id="insp" data-ch="insplayer" aria-label="Player"><option value="">All players</option>${S.players.map(p => `<option value="${p.id}"${p.id === insPlayer ? ' selected' : ''}>${esc(p.name)}</option>`).join('')}</select>
     <div class="seg mode" role="group"><button data-a="insmode" data-v="casual" aria-pressed="${insMode === 'casual'}">Casual</button><button data-a="insmode" data-v="competitive" aria-pressed="${insMode === 'competitive'}">Competitive</button></div></div></div>
   ${ms.length ? `
   <div class="grid g4">${tiles.map(([k, v]) => `<div class="card tile"><span class="v num">${v}</span><span class="k">${k}</span></div>`).join('')}</div>
   <div class="card" style="display:flex;flex-direction:column;gap:10px"><div class="row" style="justify-content:space-between"><h3>How points were scored</h3><span class="muted num">${finTotal} pts</span></div>
     <div class="fbar">${Object.entries(fin).filter(([, v]) => v).map(([k, v]) => `<i style="width:${v / finTotal * 100}%;background:${fc[k]}" title="${k} ${v}"></i>`).join('')}</div>
     <div class="legend">${Object.entries(fin).map(([k, v]) => `<span><i style="background:${fc[k]}"></i>${k[0].toUpperCase() + k.slice(1)} <b class="num">${v}</b> <span class="num">(${pct(v, finTotal)}%)</span></span>`).join('')}</div></div>
   <div class="card"><h3 style="margin-bottom:6px">Players</h3><div class="tbl-wrap"><table><thead><tr><th>Player</th><th class="r">Played</th><th class="r">W–L</th><th>Win rate</th><th class="r">Pts for</th><th class="r">Pts against</th><th class="r">Xtremes</th></tr></thead><tbody>
     ${Object.values(pRows).sort((a, b) => pct(b.w, b.m) - pct(a.w, a.m) || b.m - a.m).map(o => `<tr><td><b>${esc(o.name)}</b></td><td class="r">${o.m}</td><td class="r">${o.w}–${o.m - o.w}</td><td><div class="barcell"><div class="b"><i style="width:${pct(o.w, o.m)}%"></i></div><span class="num">${pct(o.w, o.m)}%</span></div></td><td class="r">${o.pf}</td><td class="r">${o.pa}</td><td class="r">${o.x}</td></tr>`).join('')}
   </tbody></table></div></div>
   <div class="card"><h3 style="margin-bottom:6px">Combos${insPlayer ? ' used by ' + esc(pname(insPlayer)) : ''}</h3>${combosSorted.length ? `<div class="tbl-wrap"><table><thead><tr><th>Combo</th><th class="r">Rounds</th><th class="r">Won</th><th>Round win rate</th><th>Best finish</th></tr></thead><tbody>
     ${combosSorted.map(c => { const best = Object.entries(c.fin).sort((a, b) => b[1] - a[1])[0]; return `<tr><td><b>${esc(c.label)}</b></td><td class="r">${c.w + c.l}</td><td class="r">${c.w}</td><td><div class="barcell"><div class="b"><i style="width:${pct(c.w, c.w + c.l)}%"></i></div><span class="num">${pct(c.w, c.w + c.l)}%</span></div></td><td>${best ? `<span class="chip"><i class="tdot" style="background:${fc[best[0]]}"></i>${best[0]} ×${best[1]}</span>` : '—'}</td></tr>`; }).join('')}
   </tbody></table></div>` : '<div class="muted">Tag which bey each player used in the scorer to see combo stats.</div>'}</div>
   <div class="grid g3">${partTable('blade', 'Best blades')}${partTable('ratchet', 'Best ratchets')}${partTable('bit', 'Best bits')}</div>
   <div class="card"><h3 style="margin-bottom:6px">Recent matches</h3>${matchList(ms.slice(0, 12))}</div>`
   : `<div class="empty"><h3>No ${insMode} matches${insPlayer ? ' for ' + esc(pname(insPlayer)) : ''} yet</h3>Switch the scorer to ${insMode === 'casual' ? 'Casual' : 'Competitive'} and finish a match. Stats appear here.<br><br><button class="btn primary" data-a="nav" data-v="score">Open scorer</button></div>`}`;
}
function matchList(ms) {
  if (!ms.length) return '<div class="muted">No matches.</div>';
  return `<div class="tbl-wrap"><table><thead><tr><th>Date</th><th>Players</th><th class="r">Score</th><th>Type</th><th class="r">Clips</th><th></th></tr></thead><tbody>${ms.map(m => {
    const n = m.names || m.p.map(pname); const clips = S.clips.filter(c => c.matchId === m.id).length;
    return `<tr><td class="muted" style="white-space:nowrap">${fmtDate(m.date)}</td><td><b style="color:var(${m.winner === 0 ? '--p1' : '--ink'})">${esc(n[0])}</b> <span class="muted">vs</span> <b style="color:var(${m.winner === 1 ? '--p2' : '--ink'})">${esc(n[1])}</b></td><td class="r"><b>${m.score[0]}–${m.score[1]}</b></td><td><span class="chip">${m.mode}</span></td><td class="r">${clips ? `<button class="btn sm" data-a="matchclips" data-v="${m.id}">${I.play}${clips}</button>` : '—'}</td><td class="r"><button class="btn sm ghost danger" data-a="delmatch" data-v="${m.id}" aria-label="Delete match">${I.trash}</button></td></tr>`; }).join('')}</tbody></table></div>`;
}

/* ================= TOURNAMENTS ================= */
let tSel = '';
function vTourneys() {
  if (tSel && !S.tourneys.find(t => t.id === tSel)) tSel = '';
  if (tSel) return vTourney(S.tourneys.find(t => t.id === tSel));
  return `<div class="head"><div><div class="eyebrow">Tournaments</div><h1>Events</h1></div><button class="btn primary" data-a="newtourney">${I.plus}New tournament</button></div>
    <div class="note">Competitive matches tagged with a tournament (pick it in the scorer) are collected here with standings.</div>
    ${S.tourneys.length ? `<div class="grid g2">${S.tourneys.map(t => { const ms = S.matches.filter(m => m.tid === t.id); const st = standings(ms)[0];
      return `<button class="card pickable" data-a="opentourney" data-v="${t.id}" style="text-align:left;display:flex;flex-direction:column;gap:6px;cursor:pointer">
        <span class="eyebrow">${t.date ? fmtDate(t.date + 'T00:00') : 'No date'}${t.location ? ' · ' + esc(t.location) : ''}</span><h2>${esc(t.name)}</h2>
        <span class="muted">${ms.length} match${ms.length === 1 ? '' : 'es'}${st ? ` · Leader: <b style="color:var(--ink)">${esc(st.name)}</b> (${st.w}–${st.l})` : ''}</span></button>`; }).join('')}</div>`
      : `<div class="empty"><h3>No tournaments yet</h3>Create one, then select it in the competitive scorer.</div>`}`;
}
function standings(ms) {
  const r = {};
  for (const m of ms) m.p.forEach((pid, i) => { const o = r[pid] = r[pid] || {pid, name: m.names?.[i] || pname(pid), w: 0, l: 0, pf: 0, pa: 0}; m.winner === i ? o.w++ : o.l++; o.pf += m.score[i]; o.pa += m.score[1 - i]; });
  return Object.values(r).sort((a, b) => b.w - a.w || (b.pf - b.pa) - (a.pf - a.pa));
}
function vTourney(t) {
  const ms = S.matches.filter(m => m.tid === t.id);
  const st = standings(ms);
  return `<div><button class="btn ghost sm" data-a="opentourney" data-v="">← All tournaments</button></div>
   <div class="head"><div><div class="eyebrow">${t.date ? fmtDate(t.date + 'T00:00') : 'Tournament'}${t.location ? ' · ' + esc(t.location) : ''}</div><h1>${esc(t.name)}</h1></div>
   <div class="row"><button class="btn" data-a="addtmatches" data-v="${t.id}">Add past matches</button><button class="btn primary" data-a="playtourney" data-v="${t.id}">Score a match</button><button class="btn ghost danger" data-a="deltourney" data-v="${t.id}">Delete</button></div></div>
   <div class="card"><h3 style="margin-bottom:6px">Standings</h3>${st.length ? `<div class="tbl-wrap"><table><thead><tr><th>#</th><th>Player</th><th class="r">W</th><th class="r">L</th><th class="r">Pts +/−</th></tr></thead><tbody>${st.map((o, k) => `<tr><td class="num">${k + 1}</td><td><b>${esc(o.name)}</b></td><td class="r">${o.w}</td><td class="r">${o.l}</td><td class="r">${o.pf - o.pa > 0 ? '+' : ''}${o.pf - o.pa}</td></tr>`).join('')}</tbody></table></div>` : '<div class="muted">No matches yet.</div>'}</div>
   <div class="card"><h3 style="margin-bottom:6px">Matches</h3>${matchList(ms)}</div>`;
}

/* ================= PLAYERS ================= */
const PCOLORS = ['#2A48F5', '#E2432A', '#11996A', '#8B4CE0', '#D98A06', '#0E8FA3', '#D2367A', '#4B5568'];
function vPlayers() {
  return `<div class="head"><div><div class="eyebrow">Bladers</div><h1>Players</h1></div><button class="btn primary" data-a="newplayer">${I.plus}New player</button></div>
   ${S.players.length ? `<div class="grid g2">${S.players.map(p => { const c = recordWin(p.id, 'casual'), k = recordWin(p.id, 'competitive');
     return `<button class="card pickable" data-a="openplayer" data-v="${p.id}" style="display:flex;gap:12px;align-items:center;text-align:left;cursor:pointer">
       <span class="av" style="background:${esc(p.color || PCOLORS[0])}">${esc(p.name.slice(0, 1).toUpperCase())}</span>
       <span style="flex:1;min-width:0"><b style="font-family:var(--display);font-size:1.1rem">${esc(p.name)}</b><br>
       <span class="muted" style="font-size:.86rem">Competitive ${k.w}–${k.l}${k.w + k.l ? ` (${k.rate}%)` : ''} · Casual ${c.w}–${c.l}${c.w + c.l ? ` (${c.rate}%)` : ''}</span></span></button>`; }).join('')}</div>`
     : `<div class="empty"><h3>No players yet</h3>Add yourself and your friends. The scorer remembers the last two players.</div>`}`;
}
function playerForm(p, assignSide) {
  const col = p?.color || PCOLORS[S.players.length % PCOLORS.length];
  openSheet(p ? 'Edit player' : 'New player', `<label class="f">Name<input type="text" id="pname" value="${esc(p?.name || '')}" placeholder="Blader name" autocomplete="off"></label>
    <div><div class="eyebrow" style="margin-bottom:6px">Colour</div><div class="swatches" id="pcols">${PCOLORS.map(c => `<button data-a="pcol" data-v="${c}" style="background:${c}" aria-label="Colour ${c}" aria-pressed="${c === col}"></button>`).join('')}</div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn" data-a="sheet-close">Cancel</button><button class="btn primary" data-a="saveplayer" data-v="${p?.id || ''}" data-i="${assignSide ?? ''}">Save</button></div>`);
  setTimeout(() => $('#pname')?.focus(), 50);
}
function playerProfile(pid) {
  const p = player(pid); if (!p) return;
  const ms = S.matches.filter(m => m.p.includes(pid));
  const block = mode => { const r = recordWin(pid, mode); const mm = ms.filter(m => m.mode === mode); let pf = 0, pa = 0; mm.forEach(m => { const i = m.p.indexOf(pid); pf += m.score[i]; pa += m.score[1 - i]; });
    return `<div class="card tile"><span class="eyebrow">${mode}</span><span class="v num">${r.w + r.l ? r.rate + '%' : '—'}</span><span class="k num">${r.w}–${r.l} · ${pf} pts for, ${pa} against</span></div>`; };
  const fav = {}; ms.forEach(m => { const i = m.p.indexOf(pid); m.rounds.forEach(r => { const c = r.c?.[i]; if (c) { const o = fav[c.id] = fav[c.id] || {label: c.label, n: 0, w: 0}; o.n++; if (r.s === i) o.w++; } }); });
  const favs = Object.values(fav).sort((a, b) => b.n - a.n).slice(0, 5);
  const clips = S.clips.filter(c => ms.some(m => m.id === c.matchId)).length;
  openSheet(p.name, `<div class="row"><span class="av" style="background:${esc(p.color)};width:52px;height:52px;font-size:1.4rem">${esc(p.name[0].toUpperCase())}</span><div style="flex:1"><h2>${esc(p.name)}</h2><span class="muted">${ms.length} matches · ${clips} clips</span></div>
     <button class="btn sm" data-a="editplayer" data-v="${pid}">Edit</button><button class="btn sm ghost danger" data-a="delplayer" data-v="${pid}">Delete</button></div>
    <div class="grid g2">${block('competitive')}${block('casual')}</div>
    <div><h3 style="margin-bottom:6px">Most used combos</h3>${favs.length ? favs.map(f => `<div class="row" style="justify-content:space-between;padding:4px 0"><b>${esc(f.label)}</b><span class="muted num">${f.n} rounds · ${pct(f.w, f.n)}% won</span></div>`).join('') : '<div class="muted">No tagged combos yet.</div>'}</div>
    <div><h3 style="margin-bottom:6px">Match history</h3>${matchList(ms.slice(0, 20))}</div>`);
}

/* ================= CLIPS ================= */
let clipFilter = 'all', clipQuota = null;
const fmtDur = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
function vClips() {
  let list = S.clips;
  if (clipFilter === 'fav') list = list.filter(c => c.fav);
  if (clipFilter === 'match' && clipMatch) list = list.filter(c => c.matchId === clipMatch);
  const localBytes = S.clips.filter(c => localClips.has(c.id)).reduce((a, c) => a + (c.size || 0), 0);
  const q = clipQuota;
  const storage = q ? `<div class="meter" aria-label="Storage use"><i style="width:${Math.min(100, localBytes / q.quota * 100)}%;background:var(--p2)"></i><i style="width:${Math.min(100, Math.max(0, q.usage - localBytes) / q.quota * 100)}%;background:var(--muted)"></i></div>
      <div class="legend"><span><i style="background:var(--p2)"></i>Clips <b class="num">${fmtBytes(localBytes)}</b></span><span><i style="background:var(--muted)"></i>Other app data <b class="num">${fmtBytes(Math.max(0, q.usage - localBytes))}</b></span><span><i style="background:var(--surface-2);border:1px solid var(--line)"></i>Free <b class="num">${fmtBytes(Math.max(0, q.quota - q.usage))}</b></span></div>`
    : `<div class="muted">Checking storage…</div>`;
  // one card per match, its clips (rounds) inside
  const groups = new Map();
  [...list].sort((a, b) => a.date - b.date).forEach(c => { const k = c.matchId || '__imported'; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(c); });
  const ordered = [...groups.entries()].sort((a, b) => b[1][b[1].length - 1].date - a[1][a[1].length - 1].date);
  const row = (c, idx) => { const here = localClips.has(c.id);
    return `<div class="cliprow"><button class="cthumb" data-a="${here ? 'playclip' : ''}" data-v="${c.id}" aria-label="Play clip"${here ? '' : ' disabled'}>${here ? `<video data-clip="${c.id}" muted playsinline preload="metadata"></video><span class="cplay">${I.play}</span>` : `<span class="cother">Other<br>device</span>`}</button>
      <div class="cinfo"><b>${c.round ? 'Round ' + c.round : 'Clip ' + (idx + 1)}</b><span class="muted">${fmtTime(c.date)}${c.dur ? ' · ' + fmtDur(c.dur) : ''} · ${fmtBytes(c.size)}${c.fps ? ' · ' + c.fps + ' fps' : ''}</span></div>
      <div class="cacts"><button class="iconbtn sm${c.fav ? ' fav' : ''}" data-a="favclip" data-v="${c.id}" aria-label="${c.fav ? 'Unfavourite' : 'Favourite'}">${c.fav ? I.starF : I.star}</button><button class="iconbtn sm" data-a="saveclip" data-v="${c.id}" aria-label="Save to gallery"${here ? '' : ' disabled'}>${I.save}</button><button class="iconbtn sm del" data-a="delclip" data-v="${c.id}" aria-label="Delete clip">${I.trash}</button></div></div>`; };
  const card = ([k, cs]) => {
    const m = S.matches.find(x => x.id === k); const c0 = cs[0];
    const n = m?.names || (k === '__imported' ? null : c0.names) || ['?', '?'];
    const head = k === '__imported' ? `<div><div class="eyebrow">Imported</div><h3>Videos from your gallery</h3></div>`
      : `<div style="min-width:0"><div class="eyebrow">${fmtDate(m?.date || c0.date)} · ${fmtTime(m?.date || c0.date)} · ${esc(m?.mode || c0.mode || '')}</div>
         <h3 class="cg-score"><span style="color:var(--p1)">${esc(n[0])}</span> <span class="num">${m ? m.score[0] + '–' + m.score[1] : 'vs'}</span> <span style="color:var(--p2)">${esc(n[1])}</span></h3></div>
         ${m ? `<span class="chip good">${esc(n[m.winner])} won</span>` : `<span class="chip">Not finished</span>`}`;
    return `<section class="card cgroup"><div class="cg-head">${head}</div><div class="cg-list">${cs.map(row).join('')}</div>
      ${cs.length > 1 ? `<div class="row" style="justify-content:flex-end"><button class="btn sm ghost danger" data-a="delgroup" data-v="${k}">${I.trash}Delete all ${cs.length}</button></div>` : ''}</section>`;
  };
  return `<div class="head"><div><div class="eyebrow">Recordings</div><h1>Clips</h1></div>
     <div class="row"><div class="seg" role="group"><button data-a="clipf" data-v="all" aria-pressed="${clipFilter === 'all'}">All</button><button data-a="clipf" data-v="fav" aria-pressed="${clipFilter === 'fav'}">Favourites</button>${clipMatch ? `<button data-a="clipf" data-v="match" aria-pressed="${clipFilter === 'match'}">This match</button>` : ''}</div>
     <button class="btn sm" data-a="importclip">${I.plus}Import video</button></div></div>
   <details class="card storage"><summary class="row" style="justify-content:space-between;cursor:pointer"><h3>Storage on this device</h3><span class="muted num" style="font-size:.85rem">${q ? fmtBytes(Math.max(0, q.quota - q.usage)) + ' free' : ''}</span></summary>${storage}
     <div class="muted" style="font-size:.82rem">This is the space your browser gives this app, usually a share of your phone's free storage. Clips stay on the device that recorded them; match details sync everywhere. Save favourites to your gallery to keep them safe.</div></details>
   ${ordered.length ? ordered.map(card).join('')
     : `<div class="empty"><h3>${clipFilter === 'fav' ? 'No favourites yet' : 'No clips yet'}</h3>Tap Record in the scorer to film a battle. Each recording is saved under its match with the round, date, players and score.</div>`}`;
}
let clipMatch = '';
async function hydrateClips() {
  if (!clipQuota) { try { const e = await navigator.storage?.estimate?.(); if (e) { clipQuota = {usage: e.usage || 0, quota: e.quota || 0}; if (view === 'clips') render(true); return; } } catch {} }
  document.querySelectorAll('video[data-clip]').forEach(async v => { const u = await clipURL(v.dataset.clip); if (u) v.src = u + '#t=0.3'; });
}
async function saveClip(file, matchId, fps, extra = {}) {
  if (!file) return;
  const id = uid();
  try { await IDB.put(id, file); } catch (e) { return toast('Not enough space to save this clip on this device.'); }
  localClips.add(id); clipQuota = null;
  const m = M && M.id === matchId ? M : S.matches.find(x => x.id === matchId);
  Store.put('clip_' + id, {kind: 'clip', id, matchId: matchId || '', date: Date.now(), size: file.size, type: file.type || 'video/mp4', fav: false, fps: fps || 30, device: DEVICE,
    names: m ? m.p.map(pname) : ['Unlinked', 'clip'], mode: m?.mode || '', ...extra});
  toast(matchId ? 'Clip saved with this match' : 'Clip imported');
  render();
}
async function playClip(id) {
  const c = S.clips.find(x => x.id === id); const u = await clipURL(id); if (!u) return toast('This clip is stored on another device.');
  const m = S.matches.find(x => x.id === c.matchId); const n = m?.names || c.names || ['?', '?'];
  const fps = c.fps || 30;
  $('#layer').innerHTML = `<div class="viewer" role="dialog" aria-label="Clip player">
    <div class="vtop"><button class="btn sm" data-a="viewer-close">${I.x}Close</button>
      <div class="vt"><b>${esc(n[0])} vs ${esc(n[1])}${c.round ? ' · Round ' + c.round : ''}</b><span>${fmtDate(c.date)} ${fmtTime(c.date)}${m ? ` · ${m.score[0]}–${m.score[1]}` : ''}</span></div></div>
    <div class="vstage" id="vstage"><video id="pv" src="${u}" playsinline webkit-playsinline disablepictureinpicture preload="auto"></video><button class="vbig" data-a="vtoggle" id="vbig" aria-label="Play">${I.play}</button></div>
    <div class="vctrl">
      <div class="row" style="flex-wrap:nowrap;gap:10px"><button class="iconbtn" data-a="vtoggle" id="vpp" aria-label="Play">${I.play}</button><input type="range" id="vscrub" data-in="scrub" min="0" max="1000" value="0" aria-label="Position" style="flex:1;min-width:0"><span class="num vtime" id="vtime">0:00</span></div>
      <div class="row" style="justify-content:space-between;gap:8px"><div class="seg" role="group" id="spd" aria-label="Speed">${[0.1, 0.25, 0.5, 1].map(r => `<button data-a="speed" data-v="${r}" aria-pressed="${r === 1}">${r}×</button>`).join('')}</div>
        <div class="row" style="gap:6px"><button class="btn sm" data-a="frame" data-v="-1" aria-label="Previous frame">◀</button><button class="btn sm" data-a="frame" data-v="1" aria-label="Next frame">▶</button><select id="clipfps" data-ch="clipfps" data-v="${id}" aria-label="Recorded frame rate">${[24, 30, 60, 120, 240].map(f => `<option value="${f}"${f === fps ? ' selected' : ''}>${f} fps</option>`).join('')}</select></div></div>
      <div class="row" style="justify-content:space-between"><div class="row" style="gap:6px"><button class="btn sm${c.fav ? ' fav' : ''}" data-a="favclip" data-v="${id}">${c.fav ? I.starF : I.star}${c.fav ? 'Favourite' : 'Favourite'}</button><button class="btn sm" data-a="saveclip" data-v="${id}">${I.save}Save to gallery</button></div><button class="btn sm danger" data-a="delclip" data-v="${id}">${I.trash}Delete</button></div>
    </div></div>`;
  const v = $('#pv'), sc = $('#vscrub'), tm = $('#vtime');
  let raf = 0;
  const tick = () => { if (v.duration) { sc.value = Math.round(v.currentTime / v.duration * 1000); tm.textContent = fmtDur(v.currentTime); } if (!v.paused) raf = requestAnimationFrame(tick); };
  const sync = () => { const p = v.paused; $('#vpp').innerHTML = p ? I.play : I.pause; $('#vbig').hidden = !p; cancelAnimationFrame(raf); tick(); };
  v.addEventListener('play', sync); v.addEventListener('pause', sync); v.addEventListener('ended', sync); v.addEventListener('seeked', tick); v.addEventListener('loadedmetadata', tick);
  v.addEventListener('click', () => v.paused ? v.play() : v.pause());
  // swipe down on the video to close
  let y0 = null; const stg = $('#vstage');
  stg.addEventListener('touchstart', e => { y0 = e.touches.length === 1 ? e.touches[0].clientY : null; }, {passive: true});
  stg.addEventListener('touchend', e => { if (y0 !== null && e.changedTouches[0].clientY - y0 > 90) closeViewer(); y0 = null; }, {passive: true});
}
function closeViewer() { const v = $('#pv'); try { v?.pause(); } catch {} $('#layer').innerHTML = ''; }
async function shareOrDownload(blob, filename, title) {
  const file = new File([blob], filename, {type: blob.type || 'application/octet-stream'});
  if (navigator.canShare && navigator.canShare({files: [file]})) {
    try { await navigator.share({files: [file], title}); return 'shared'; }
    catch (e) { if (e.name === 'AbortError') return 'cancelled'; }
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 5000);
  return 'downloaded';
}
async function saveClipToDevice(id) {
  const c = S.clips.find(x => x.id === id); const b = await IDB.get(id); if (!b) return toast('This clip is stored on another device.');
  const ext = (c.type || '').includes('quicktime') ? 'mov' : (c.type || '').includes('webm') ? 'webm' : 'mp4';
  const n = (c.names || ['clip', '']).join('-vs-').replace(/[^a-z0-9-]+/gi, '');
  const r = await shareOrDownload(b, `beyx-${n}-${new Date(c.date).toISOString().slice(0, 10)}.${ext}`, 'Beyblade X clip');
  toast(r === 'shared' ? 'Clip shared. Pick “Save Video” to add it to your gallery' : r === 'cancelled' ? 'Save cancelled' : 'Clip downloaded');
}

/* ================= SETTINGS ================= */
function vPrefs() {
  const s = S.settings;
  const step = (k, min, max) => `<div class="stepper on"><button data-a="pref-" data-v="${k}" data-i="${min}" aria-label="Decrease">−</button><span class="num">${s[k]}</span><button data-a="pref+" data-v="${k}" data-i="${max}" aria-label="Increase">+</button></div>`;
  return `<div class="head"><div><div class="eyebrow">Setup</div><h1>Settings</h1></div><span class="sync${Store.mode === 'cloud' ? ' cloud' : ''}"><i></i>${esc(Store.status)}</span></div>
   <div class="card" style="display:flex;flex-direction:column;gap:14px">
     <div class="row" style="justify-content:space-between"><div><b>Points to win</b><div class="muted" style="font-size:.86rem">A match ends when a player reaches this score. Standard is 4.</div></div>${step('pointsToWin', 1, 12)}</div>
     <div class="row" style="justify-content:space-between"><div><b>Launch error limit</b><div class="muted" style="font-size:.86rem">Faults allowed per round before the opponent gets +1.</div></div>${step('faultLimit', 1, 5)}</div>
     <div class="row" style="justify-content:space-between"><div><b>Blade names</b><div class="muted" style="font-size:.86rem">Hasbro (Sword Dran) or Takara Tomy (Dran Sword). Same parts either way.</div></div>${namingSeg()}</div>
     <div class="row" style="justify-content:space-between"><div><b>Countdown sound</b><div class="muted" style="font-size:.86rem">Beeps for 3, 2, 1, Go Shoot and match point.</div></div><label class="row" style="gap:6px"><input type="checkbox" id="snd" data-ch="sound"${s.sound ? ' checked' : ''}> On</label></div>
     <div class="note">Changes apply to the next match you start.</div></div>
   <div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>Account &amp; sync</h3>
     ${Store.user ? `<div class="row" style="justify-content:space-between"><div class="row">${Store.profile.avatar ? `<img src="${esc(Store.profile.avatar)}" alt="" style="width:40px;height:40px;border-radius:50%">` : ''}<div><b>${esc(Store.profile.name)}</b><div class="muted" style="font-size:.86rem">Signed in with Discord. Everything except video files syncs between your devices.</div></div></div><button class="btn" data-a="signout">Sign out</button></div>`
       : Store.configured ? `<div class="muted">Sign in with Discord on your phone and desktop to keep players, combos, decks, collection, matches and tournaments in sync. Anything you've made on this device is added to your account the first time you sign in.</div><div class="row"><button class="btn discord" data-a="signin">Sign in with Discord</button></div>`
       : `<div class="muted">Discord sign-in isn't set up for this copy of the app yet, so everything is saved on this device only. See the README to connect Supabase.</div>`}
     <div class="row"><button class="btn" data-a="exportdata">${I.save}Export backup</button><button class="btn" data-a="importdata">Import backup</button></div>
     <div class="muted" style="font-size:.84rem">A backup is a JSON file of all your data. Importing adds to what's here; items with the same ID are replaced. Use it to bring data over from the earlier version of this app.</div></div>
   <div class="card" style="display:flex;flex-direction:column;gap:10px"><h3>Recording</h3>
     <div class="row" style="justify-content:space-between"><div><b>Start recording on 3-2-1</b><div class="muted" style="font-size:.86rem">If the camera is open, the countdown starts recording and the match result stops it.</div></div><label class="row" style="gap:6px"><input type="checkbox" id="autorec" data-ch="autorec"${s.autoRec !== false ? ' checked' : ''}> On</label></div></div>`;
}

/* ================= EVENTS ================= */
document.addEventListener('click', async e => {
  const el = e.target.closest('[data-a]'); if (!el) return;
  const a = el.dataset.a, v = el.dataset.v, i = el.dataset.i !== undefined && el.dataset.i !== '' ? +el.dataset.i : null;
  if (a === 'sheet-bg') { if (e.target === el) closeSheet(); return; }
  switch (a) {
    case 'nav': go(v); break;
    case 'menu': menuOpen = !menuOpen; renderNav(); break;
    case 'menu-close': menuOpen = false; renderNav(); break;
    case 'sheet-close': closeSheet(); break;
    case 'confirm-yes': { const f = pendingConfirm; pendingConfirm = null; closeSheet(); f && f(); break; }
    // scorer
    case 'mode': { if (M.rounds.length && !M.done) return toast('Finish or start a new match to switch type'); const keep = M; saveSettings({mode: v}); freshMatch(); M.p = keep.p; M.deck = keep.deck; M.combo = keep.combo; M.mode = v; persistLive(); render(); break; }
    case 'pt': score(i, v); break;
    case 'fault': fault(i); break;
    case 'undo': if (M.done) { M.done = false; Store.del('match_' + M.id); } M.rounds.pop(); persistLive(); render(); break;
    case 'newmatch': if (M.rounds.length && !M.done) confirmSheet('Start a new match?', 'The current scores will be discarded.', 'New match', () => { const keep = M; freshMatch(); M.deck = keep.deck; M.combo = keep.combo; M.tid = keep.tid; persistLive(); render(); }); else { const keep = M; freshMatch(); M.deck = keep.deck; M.combo = keep.combo; M.tid = keep.tid; persistLive(); render(); } break;
    case 'rematch': { const keep = M; $('#layer').innerHTML = ''; freshMatch(); M.p = keep.p; M.deck = keep.deck; M.combo = keep.combo; M.tid = keep.tid; M.mode = keep.mode; persistLive(); render(); break; }
    case 'win-close': if (e.target === el || el.tagName === 'BUTTON') $('#layer').innerHTML = ''; break;
    case 'countdown': beep(1, .01); countdown(); break;
    case 'record': Cam.open(); break;
    case 'deckpick': if (M.rounds.length) { M.deckIdx0 = M.deckIdx0 || [0, 0]; const st = replay(); const d = +v - st.deckIdx[i]; M.deckIdx0[i] = ((M.deckIdx0[i] + d) % 3 + 3) % 3; } else { M.deckIdx0 = M.deckIdx0 || [0, 0]; M.deckIdx0[i] = +v; } persistLive(); render(); break;
    // build
    case 'btab': buildTab = v; location.hash = 'build'; render(); break;
    case 'pickpart': openPicker(v); break;
    case 'choosepart': draft[pickCat] = v; if (pickCat === 'blade' && !isCX(v)) draft.assist = ''; if (pickCat === 'bit' && v === 'bit:Tr') draft.ratchet = ''; closeSheet(); render(); break;
    case 'cleardraft': draft = {blade: '', assist: '', ratchet: '', bit: '', editing: ''}; render(); break;
    case 'savecombo': { const id = draft.editing || uid(); const old = combo(id); Store.put('combo_' + id, {kind: 'combo', id, blade: draft.blade, assist: draft.assist, ratchet: draft.ratchet, bit: draft.bit, created: old?.created || Date.now()}); toast(draft.editing ? 'Combo updated' : 'Combo saved'); draft = {blade: '', assist: '', ratchet: '', bit: '', editing: ''}; render(); break; }
    case 'editcombo': { const c = combo(v); draft = {blade: c.blade, assist: c.assist, ratchet: c.ratchet, bit: c.bit, editing: c.id}; window.scrollTo(0, 0); render(); break; }
    case 'delcombo': confirmSheet('Delete combo?', `${comboLabel(combo(v))} will be removed. Past match stats keep its name.`, 'Delete', () => { Store.del('combo_' + v); render(); }); break;
    case 'deckcombo': { const k = deckDraft.combos.indexOf(v); if (k >= 0) deckDraft.combos.splice(k, 1); else if (deckDraft.combos.length < 3) deckDraft.combos.push(v); else toast('A deck holds 3 combos. Tap one to remove it.'); render(); break; }
    case 'savedeck': { const id = deckDraft.editing || uid(); const old = deck(id); Store.put('deck_' + id, {kind: 'deck', id, name: deckDraft.name.trim() || `Deck ${S.decks.length + 1}`, combos: [...deckDraft.combos], created: old?.created || Date.now()}); toast('Deck saved'); deckDraft = {name: '', combos: [], editing: ''}; render(); break; }
    case 'editdeck': { const d = deck(v); deckDraft = {name: d.name, combos: [...d.combos], editing: d.id}; window.scrollTo(0, 0); render(); break; }
    case 'cleardeck': deckDraft = {name: '', combos: [], editing: ''}; render(); break;
    case 'deldeck': confirmSheet('Delete deck?', `${deck(v).name} will be removed.`, 'Delete', () => { Store.del('deck_' + v); render(); }); break;
    // collection
    case 'ctab': collTab = v; render(); break;
    case 'setline': setLine = v; render(); break;
    case 'naming': saveSettings({naming: v}); render(); break;
    case 'setq+': case 'setq-': { const c = {sets: {...S.coll.sets}, extra: {...S.coll.extra}}; c.sets[v] = Math.max(0, (c.sets[v] || 0) + (a === 'setq+' ? 1 : -1)); if (!c.sets[v]) delete c.sets[v]; saveColl(c); render(); break; }
    case 'pcat': partCat = v; render(); break;
    case 'partdetail': partDetail(v); break;
    case 'extra+': case 'extra-': { const c = {sets: {...S.coll.sets}, extra: {...S.coll.extra}}; c.extra[v] = Math.max(0, (c.extra[v] || 0) + (a === 'extra+' ? 1 : -1)); if (!c.extra[v]) delete c.extra[v]; saveColl(c); partDetail(v); render(); break; }
    case 'photo': photoTarget = v; $('#photoIn').value = ''; $('#photoIn').click(); break;
    case 'settype': { const t = el.dataset.t; const types = {...(Store.docs.types || {})}; if (t === (P[v].type0 || '')) delete types[v]; else types[v] = t; Store.put('types', types); partDetail(v); render(); break; }
    case 'cleanphotos': cleanAllPhotos(); break;
    case 'bulkphotos': $('#bulkIn').value = ''; $('#bulkIn').click(); break;
    case 'bulkskip': if (bulk[i]) { bulk[i].pid = ''; el.closest('.citem').style.opacity = .35; el.disabled = true; } break;
    case 'savebulk': { let n = 0; bulk.forEach(b => { if (b.pid) { Store.put('photo_' + slug(b.pid), {kind: 'photo', pid: b.pid, src: b.src}); n++; } }); bulk = []; closeSheet(); render(); toast(`${n} photo${n === 1 ? '' : 's'} saved`); break; }
    case 'delphoto': Store.del('photo_' + slug(v)); partDetail(v); render(); break;
    case 'addpart': openSheet('Custom part', `<label class="f">Part type<select id="cpcat">${Object.entries(CAT_LABEL).map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></label>
        <label class="f">Name<input type="text" id="cpname" placeholder="e.g. Shark Gill"></label><label class="f">Code (for ratchets, bits and assists)<input type="text" id="cpcode" placeholder="e.g. 3-60 or LF"></label>
        <label class="f">Type<select id="cptype"><option value="">Not set</option><option value="A">Attack</option><option value="D">Defense</option><option value="S">Stamina</option><option value="B">Balance</option></select></label>
        <div class="row" style="justify-content:flex-end"><button class="btn" data-a="sheet-close">Cancel</button><button class="btn primary" data-a="savepart">Add part</button></div>`); break;
    case 'savepart': { const cat = $('#cpcat').value, name = $('#cpname').value.trim(), code = $('#cpcode').value.trim() || name; if (!name) return toast('Give the part a name'); const key = 'c-' + slug(code + '-' + name); const pid = cat + ':' + key;
      Store.put('part_' + slug(pid), {kind: 'part', pid, cat, key, name, code, type: $('#cptype').value}); const c = {sets: {...S.coll.sets}, extra: {...S.coll.extra}}; c.extra[pid] = 1; saveColl(c); closeSheet(); partCat = cat; render(); toast('Part added to your collection'); break; }
    case 'delpart': confirmSheet('Delete custom part?', 'It will be removed from your collection.', 'Delete', () => { Store.del('part_' + slug(v)); delete P[v]; const c = {sets: {...S.coll.sets}, extra: {...S.coll.extra}}; delete c.extra[v]; saveColl(c); render(); }); break;
    // insights
    case 'insmode': insMode = v; render(); break;
    case 'delmatch': confirmSheet('Delete match?', 'Its points will be removed from all stats.', 'Delete', () => { Store.del('match_' + v); render(); }); break;
    case 'matchclips': clipMatch = v; clipFilter = 'match'; closeSheet(); location.hash = 'clips'; render(); break;
    // tourneys
    case 'newtourney': openSheet('New tournament', `<label class="f">Name<input type="text" id="tname" placeholder="e.g. Saturday Locals #4"></label><div class="grid g2"><label class="f">Date<input type="date" id="tdate" value="${new Date().toISOString().slice(0, 10)}"></label><label class="f">Location (optional)<input type="text" id="tloc"></label></div><div class="row" style="justify-content:flex-end"><button class="btn" data-a="sheet-close">Cancel</button><button class="btn primary" data-a="savetourney">Create</button></div>`); break;
    case 'savetourney': { const name = $('#tname').value.trim(); if (!name) return toast('Name the tournament'); const id = uid(); Store.put('tourney_' + id, {kind: 'tourney', id, name, date: $('#tdate').value, location: $('#tloc').value.trim(), created: Date.now()}); closeSheet(); tSel = id; render(); break; }
    case 'opentourney': tSel = v; render(); break;
    case 'deltourney': confirmSheet('Delete tournament?', 'Its matches stay in your competitive stats.', 'Delete', () => { S.matches.filter(m => m.tid === v).forEach(m => Store.put('match_' + m.id, {...m, tid: ''})); Store.del('tourney_' + v); tSel = ''; render(); }); break;
    case 'playtourney': if (M.rounds.length && !M.done) return toast('Finish the current match first'); { const keep = M; freshMatch(); M.mode = 'competitive'; M.tid = v; M.deck = keep?.deck || ['', '']; persistLive(); location.hash = 'score'; } break;
    case 'addtmatches': { const free = S.matches.filter(m => m.mode === 'competitive' && !m.tid);
      openSheet('Add matches', free.length ? `<div class="clist">${free.map(m => `<label class="citem" style="cursor:pointer"><input type="checkbox" class="tm" value="${m.id}"><div class="t"><b>${esc((m.names || m.p.map(pname)).join(' vs '))} · ${m.score[0]}–${m.score[1]}</b><small>${fmtDate(m.date)} ${fmtTime(m.date)}</small></div></label>`).join('')}</div><div class="row" style="justify-content:flex-end"><button class="btn primary" data-a="savetmatches" data-v="${v}">Add selected</button></div>` : '<div class="empty">Every competitive match is already in a tournament.</div>'); break; }
    case 'savetmatches': document.querySelectorAll('.tm:checked').forEach(cb => { const m = S.matches.find(x => x.id === cb.value); if (m) Store.put('match_' + m.id, {...m, tid: v}); }); closeSheet(); render(); break;
    // players
    case 'newplayer': playerForm(null); break;
    case 'pcol': document.querySelectorAll('#pcols button').forEach(b => b.setAttribute('aria-pressed', b === el)); break;
    case 'saveplayer': { const name = $('#pname').value.trim(); if (!name) return toast('Enter a name'); const color = document.querySelector('#pcols [aria-pressed="true"]')?.dataset.v || PCOLORS[0];
      const id = v || uid(); const old = player(id); Store.put('player_' + id, {kind: 'player', id, name, color, created: old?.created || Date.now()});
      if (i !== null && M) { M.p[i] = id; persistLive(); } closeSheet(); render(); toast(v ? 'Player updated' : 'Player added'); break; }
    case 'openplayer': playerProfile(v); break;
    case 'editplayer': playerForm(player(v)); break;
    case 'delplayer': confirmSheet('Delete player?', 'Their profile is removed. Matches stay in stats under their name.', 'Delete', () => { Store.del('player_' + v); render(); }); break;
    // clips
    case 'clipf': clipFilter = v; render(); break;
    case 'importclip': $('#importIn').value = ''; $('#importIn').click(); break;
    case 'playclip': playClip(v); break;
    case 'viewer-close': closeViewer(); break;
    case 'vtoggle': { const pv = $('#pv'); if (pv) pv.paused ? pv.play() : pv.pause(); break; }
    case 'delgroup': { const ids = S.clips.filter(c => (c.matchId || '__imported') === v).map(c => c.id);
      confirmSheet('Delete these clips?', `All ${ids.length} videos for this match are removed from this device for good. The match result stays in your stats.`, 'Delete all', async () => { for (const id of ids) { try { await IDB.del(id); } catch {} localClips.delete(id); if (clipURLs[id]) { URL.revokeObjectURL(clipURLs[id]); delete clipURLs[id]; } Store.del('clip_' + id); } clipQuota = null; render(); toast(`Deleted ${ids.length} clips`); }); break; }
    case 'favclip': { const c = S.clips.find(x => x.id === v); Store.put('clip_' + v, {...c, fav: !c.fav}); if ($('#pv')) { el.innerHTML = (!c.fav ? I.starF : I.star) + 'Favourite'; el.classList.toggle('fav', !c.fav); } render(); break; }
    case 'saveclip': saveClipToDevice(v); break;
    case 'delclip': confirmSheet('Delete clip?', 'The video is removed from this device for good.', 'Delete', async () => { try { await IDB.del(v); } catch {} localClips.delete(v); if (clipURLs[v]) { URL.revokeObjectURL(clipURLs[v]); delete clipURLs[v]; } clipQuota = null; Store.del('clip_' + v); render(); }); break;
    case 'speed': { const pv = $('#pv'); if (pv) pv.playbackRate = +v; document.querySelectorAll('#spd button').forEach(b => b.setAttribute('aria-pressed', b === el)); break; }
    case 'frame': { const pv = $('#pv'); if (!pv) break; pv.pause(); const fps = +($('#clipfps')?.value || 30); pv.currentTime = Math.max(0, pv.currentTime + (+v) / fps); break; }
    // prefs
    case 'pref+': case 'pref-': { const n = S.settings[v] + (a === 'pref+' ? 1 : -1); if (n < (a === 'pref-' ? i : -Infinity) || n > (a === 'pref+' ? i : Infinity)) return; saveSettings({[v]: n}); if (M && !M.rounds.length) { M.ptw = S.settings.pointsToWin; M.fl = S.settings.faultLimit; persistLive(); } render(); break; }
    case 'exportdata': { const r = await shareOrDownload(new Blob([JSON.stringify(Store.docs, null, 1)], {type: 'application/json'}), `beyx-backup-${new Date().toISOString().slice(0, 10)}.json`, 'Beyblade X backup'); if (r !== 'cancelled') toast('Backup saved'); break; }
    case 'importdata': $('#backupIn').value = ''; $('#backupIn').click(); break;
    case 'signin': Store.signIn(); break;
    case 'signout': confirmSheet('Sign out?', 'Your data stays in your account. This device will be cleared until you sign in again.', 'Sign out', () => Store.signOut()); break;
    case 'cam-rec': Cam.recording ? Cam.stop() : Cam.start(); break;
    case 'cam-flip': Cam.flip(); break;
    case 'cam-close': Cam.close(); break;
    case 'cam-min': Cam.min = !Cam.min; Cam.paint(); break;
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { menuOpen = false; renderNav(); } if (e.key === 'Escape' && $('#layer').innerHTML) { if ($('#pv')) closeViewer(); else closeSheet(); } if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"][data-a]')) { e.preventDefault(); e.target.click(); } });
document.addEventListener('change', e => {
  const el = e.target, ch = el.dataset.ch; if (!ch) return; const i = +el.dataset.i;
  if (ch === 'player') { if (el.value === '__new') { el.value = M.p[i] || ''; return playerForm(null, i); } if (M.rounds.length && !M.done) { el.value = M.p[i]; return toast('Players are locked once scoring starts'); } M.p[i] = el.value; persistLive(); render(); }
  if (ch === 'deck') { if (M.rounds.length && !M.done) { el.value = M.deck[i]; return toast('Decks are locked once scoring starts'); } M.deck[i] = el.value; M.deckIdx0 = M.deckIdx0 || [0, 0]; M.deckIdx0[i] = 0; persistLive(); render(); }
  if (ch === 'combo') { M.combo[i] = el.value; persistLive(); render(); }
  if (ch === 'tourney') { M.tid = el.value; persistLive(); }
  if (ch === 'pickall') { pickAll = el.checked; setSheet(pickerBody()); }
  if (ch === 'bulkpick') { if (bulk[i]) bulk[i].pid = el.value; }
  if (ch === 'ownedonly') { ownedOnly = el.checked; render(); }
  if (ch === 'insplayer') { insPlayer = el.value; render(); }
  if (ch === 'sound') saveSettings({sound: el.checked});
  if (ch === 'autorec') saveSettings({autoRec: el.checked});
  if (ch === 'camfps') Cam.setFps(+el.value);
  if (ch === 'clipfps') { const c = S.clips.find(x => x.id === el.dataset.v); if (c) Store.put('clip_' + c.id, {...c, fps: +el.value}); }
});
document.addEventListener('input', e => {
  const k = e.target.dataset.in; if (!k) return;
  if (k === 'pickq') { pickQ = e.target.value; const pos = e.target.selectionStart; setSheet(pickerBody()); const n = $('#pickq'); n.focus(); n.setSelectionRange(pos, pos); }
  if (k === 'setq') { setQ = e.target.value; const pos = e.target.selectionStart; render(); const n = $('#setq'); n.focus(); n.setSelectionRange(pos, pos); }
  if (k === 'deckname') deckDraft.name = e.target.value;
  if (k === 'scrub') { const pv = $('#pv'); if (pv?.duration) pv.currentTime = e.target.value / 1000 * pv.duration; }
});
$('#camIn').addEventListener('change', e => saveClip(e.target.files[0], M?.id, 30, {round: M ? M.rounds.filter(r => r.t !== 'fault').length + 1 : 0}));
$('#importIn').addEventListener('change', e => saveClip(e.target.files[0], ''));
$('#backupIn').addEventListener('change', async e => {
  const f = e.target.files[0]; if (!f) return;
  try {
    const data = JSON.parse(await f.text());
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('not a backup');
    const ents = Object.entries(data).filter(([, v]) => v && typeof v === 'object');
    ents.forEach(([k, v]) => Store.put(k, v));
    render(); toast(`Imported ${ents.length} item${ents.length === 1 ? '' : 's'}`);
  } catch { toast('That file isn\'t a Beyblade X Tracker backup.'); }
});
$('#photoIn').addEventListener('change', e => e.target.files[0] && handlePhoto(e.target.files[0]));
$('#bulkIn').addEventListener('change', e => e.target.files.length && handleBulk([...e.target.files]));
window.addEventListener('hashchange', () => { routeFromHash(); render(); window.scrollTo(0, 0); });

/* ================= GESTURES ================= */
let sw = null;
document.addEventListener('touchstart', e => {
  sw = null;
  if (e.touches.length !== 1 || menuOpen || $('#layer').innerHTML) return;
  const t = e.touches[0];
  if (t.clientX < 24 || t.clientX > innerWidth - 24) return; // leave the browser's edge-swipe alone
  if (e.target.closest('input,select,textarea,video,.camdock,.tbl-wrap,.seg,.combochips,.noswipe')) return;
  sw = {x: t.clientX, y: t.clientY, t: Date.now()};
}, {passive: true});
document.addEventListener('touchend', e => {
  if (!sw) return; const t = e.changedTouches[0];
  const dx = t.clientX - sw.x, dy = t.clientY - sw.y, dt = Date.now() - sw.t; sw = null;
  if (dt > 700 || Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 2) return;
  const i = VIEWS.findIndex(v => v[0] === view), j = i + (dx < 0 ? 1 : -1);
  if (j < 0 || j >= VIEWS.length) return;
  go(VIEWS[j][0], dx < 0 ? 1 : -1);
}, {passive: true});
// no pinch zoom (iOS ignores the viewport setting, so block the gesture itself)
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, {passive: false});

/* ================= BOOT ================= */
routeFromHash();
refreshLocalClips().then(() => { if (view === 'clips') render(true); });
Store.init();
try { navigator.wakeLock?.request('screen').catch(() => {}); } catch {}
try { navigator.storage?.persist?.(); } catch {}
