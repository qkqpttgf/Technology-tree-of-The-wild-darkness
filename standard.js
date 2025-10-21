
dataRuinsofLight = {
    "Ruins of Light I": {
        "Map": "Forest Entrance",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1"],
        "Craft": ["Dimensional Tablet I"]
    },
    "Ruins of Light II": {
        "Map": "Desolate Meadow",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*2"],
        "Craft": ["Dimensional Tablet II"]
    },
    "Ruins of Light III": {
        "Map": "Dense Jungle",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*3", "Mana Mote*1"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light IV": {
        "Map": "Ancient Mine F1 @ Frozen Hill",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*4", "Mana Mote*2"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light V": {
        "Map": "Burning Canyon",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*5", "Mana Mote*3"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light VI": {
        "Map": "Sealed Land",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*2", "Rock*7", "Mana Crystal*1", "Silver Bar*2"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light VII": {
        "Map": "Earth Spirit's Cave",
        "Texture": { x1: 1165, y1: 225, x2: 1270, y2: 350, r: 1 },
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*10", "Mana Crystal*2", "Gold Bar*2", "Mythril Bar*2"],
        "Craft": ["Dimensional Tablet III"]
    },
};
dataStructures = {
    // 火/露营===========================================================================
    "Campfire": {
        "Texture": { x1: 1215, y1: 697, x2: 1272, y2: 739, r: 0 },
        "Requires": [],
        "Blueprint": ["Branch*2", "Log*1"],
        "Craft": []
    },
    "Fire Pit": {
        "Texture": { x1: 1020, y1: 467, x2: 1130, y2: 574, r: 0 },
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Rock*4", "Log*4"],
        "Craft": []
    },
    "Kiln": {
        "Texture": { x1: 930, y1: 10, x2: 1035, y2: 103, r: 0 },
        "Requires": ["Foundry", "Ruins of Light II"],
        "Blueprint": ["Bush*4", "Clay*5"],
        "Craft": ["Charcoal", "Brick"]
    },
    "Foundry": {
        "Texture": { x1: 828, y1: 355, x2: 982, y2: 464, r: 1 },
        "Requires": ["Fire Pit"],
        "Blueprint": ["Branch*3", "Rock*5", "Log*3"],
        "Craft": ["Iron Bar", "Silver Bar", "Gold Bar", "Mercury"]
    },
    "Wind Foundry": {
        "Texture": { x1: 691, y1: 600, x2: 846, y2: 771, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Foundry", "Machinery*4", "Stone*3", "Log*2"],
        "Craft": ["Iron Bar", "Steel Bar", "Earth Steel Bar", "Black Cast Iron Bar", "Silver Bar", "Gold Bar", "Platinum Bar", "Mythril Bar", "Mercury"]
    },
    "Cooking Oven": {
        "Texture": { x1: 844, y1: 1043, x2: 957, y2: 1150, r: 0 },
        "Requires": ["Fire Pit", "Storage Pot"],
        "Blueprint": ["Branch*2", "Stone*4", "Log*2", "Iron Bar*1"],
        "Craft": []
    },
    "Smoker": {
        "Texture": { x1: 1277, y1: 698, x2: 1452, y2: 807, r: 1 },
        "Requires": ["Ruins of Light IV", "Cooking Oven"],
        "Blueprint": ["Clay*3", "Charcoal*2", "Brick*3", "Log*4"],
        "Craft": []
    },
    "Magic Torch": {
        "Texture": { x1: 1350, y1: 1046, x2: 1404, y2: 1140, r: 0 },
        "Requires": ["Ruins of Light II", "Apprentice's Desk"],
        "Blueprint": ["Mana Mote*1", "Fire Herb*1", "Charcoal*2", "Iron Bar*1"],
        "Craft": []
    },
    "Indoor Oven": {
        "Texture": { x1: 916, y1: 106, x2: 1004, y2: 210, r: 0 },
        "Requires": ["Kiln"],
        "Blueprint": ["Clay*1", "Brick*3", "Log*2"],
        "Craft": []
    },
    "Indoor Oil Lamp": {
        "Texture": { x1: 1414, y1: 1050, x2: 1478, y2: 1128, r: 0 },
        "Requires": ["Ruins of Light II", "Apprentice's Desk"],
        "Blueprint": ["Mana Mote*1", "Fire Herb*1", "Charcoal*1", "Iron Bar*1"],
        "Craft": []
    },
    // 制作/魔法=============================================================
    "Work Bench LV1": {
        "Texture": { x1: 1973, y1: 658, x2: 2045, y2: 748, r: 1 },
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Bush*2", "Rock*1", "Log*2"],
        "Craft": ["Rope", "Stone"]
    },
    "Work Bench LV2": {
        "Texture": { x1: 1973, y1: 658, x2: 2045, y2: 748, r: 1 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Work Bench LV1", "Machinery*1", "Branch*3", "Rock*2"],
        "Craft": ["Rope", "Stone"]
    },
    "Work Bench LV3": {
        "Texture": { x1: 1973, y1: 658, x2: 2045, y2: 748, r: 1 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Work Bench LV2", "Machinery*2", "Stone*4", "Log*3", "Steel Bar*1"],
        "Craft": ["Rope", "Stone", "Leather Strap"]
    },
    "Work Bench LV4": {
        "Texture": { x1: 1973, y1: 658, x2: 2045, y2: 748, r: 1 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Work Bench LV3", "Machinery*4", "Stone*5", "Black Cast Iron Bar*1"],
        "Craft": ["Rope", "Stone", "Leather Strap"]
    },
    "Armor Bench LV1": {
        "Texture": { x1: 1548, y1: 75, x2: 1632, y2: 152, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*2", "Log*2"],
        "Craft": []
    },
    "Armor Bench LV2": {
        "Texture": { x1: 1548, y1: 75, x2: 1632, y2: 152, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Armor Bench LV1", "Rock*4", "Log*3", "Iron Bar*1"],
        "Craft": []
    },
    "Armor Bench LV3": {
        "Texture": { x1: 1548, y1: 75, x2: 1632, y2: 152, r: 0 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Armor Bench LV2", "Machinery*3", "Stone*5", "Log*3", "Steel Bar*1"],
        "Craft": []
    },
    "Armor Bench LV4": {
        "Texture": { x1: 1548, y1: 75, x2: 1632, y2: 152, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Armor Bench LV3", "Machinery*2", "Stone*6", "Log*3", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Armor Bench LV5": {
        "Texture": { x1: 1548, y1: 75, x2: 1632, y2: 152, r: 0 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Armor Bench LV4", "Machinery*5", "Stone*7", "Log*3", "Black Cast Iron Bar*1"],
        "Craft": []
    },
    "Weapon Bench LV1": {
        "Texture": { x1: 1590, y1: 347, x2: 1683, y2: 439, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*2", "Log*4"],
        "Craft": []
    },
    "Weapon Bench LV2": {
        "Texture": { x1: 1590, y1: 347, x2: 1683, y2: 439, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Weapon Bench LV1", "Rock*4", "Log*2", "Iron Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV3": {
        "Texture": { x1: 1590, y1: 347, x2: 1683, y2: 439, r: 0 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Weapon Bench LV2", "Machinery*3", "Brick*3", "Log*2", "Steel Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV4": {
        "Texture": { x1: 1590, y1: 347, x2: 1683, y2: 439, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Weapon Bench LV3", "Machinery*2", "Brick*3", "Log*2", "Earth Steel Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV5": {
        "Texture": { x1: 1590, y1: 347, x2: 1683, y2: 439, r: 0 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Weapon Bench LV4", "Machinery*5", "Brick*4", "Log*2", "Black Cast Iron Bar*2"],
        "Craft": []
    },
    "Tanning Bench": {
        "Texture": { x1: 622, y1: 1040, x2: 719, y2: 1156, r: 0 },
        "Requires": ["Armor Bench LV1"],
        "Blueprint": ["Branch*3", "Rope*1", "Charcoal*1"],
        "Craft": ["Parchment", "Leather", "Tough Leather"]
    },
    "Jerky Dryer": {
        "Texture": { x1: 1059, y1: 1042, x2: 1148, y2: 1146, r: 0 },
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Branch*2", "Rope*1"],
        "Craft": []
    },
    "Fermented Jar": {
        "Texture": { x1: 1349, y1: 168, x2: 1455, y2: 241, r: 0 },
        "Requires": ["Cooking Oven", "Storage Pot"],
        "Blueprint": ["Bush*2", "Clay*3"],
        "Craft": []
    },
    "Fish Trap": {
        "Texture": { x1: 923, y1: 757, x2: 1086, y2: 817, r: 0 },
        "Requires": ["Weaver LV2", "Cooking Oven"],
        "Blueprint": ["Branch*3", "Cobweb Thread*4"],
        "Craft": []
    },
    "Cheese Ripener": {
        "Texture": { x1: 672, y1: 379, x2: 825, y2: 475, r: 1 },
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Log*4"],
        "Craft": ["Cheese"]
    },
    "Beehive": {
        "Texture": { x1: 1828, y1: 520, x2: 1975, y2: 614, r: 1 },
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Beehive*2", "Log*4"],
        "Craft": []
    },
    "Weaver LV1": {
        "Texture": { x1: 625, y1: 2, x2: 708, y2: 92, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*3", "Rope*2", "Log*2"],
        "Craft": ["Linen", "Cobweb Thread"]
    },
    "Weaver LV2": {
        "Texture": { x1: 625, y1: 2, x2: 708, y2: 92, r: 0 },
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Weaver LV1", "Machinery*5", "Branch*3", "Earth Steel Bar*1"],
        "Craft": ["Linen", "Cobweb Thread"]
    },
    "Juicer": {
        "Texture": { x1: 346, y1: 277, x2: 411, y2: 360, r: 0 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Log*3", "Steel Bar*1", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Magic EQPT Bench": {
        "Texture": { x1: 428, y1: 2, x2: 525, y2: 92, r: 1 },
        "Requires": ["Alchemy EQPT", "Work Bench LV3"],
        "Blueprint": ["Mana Crystal*2", "Brick*4", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Black Magical Anvil": {
        "Texture": { x1: 1650, y1: 2, x2: 1711, y2: 79, r: 0 },
        "Requires": ["Power Controller"],
        "Blueprint": ["Stone*8", "Earth Steel Bar*1", "Black Cast Iron Bar*1", "Mythril Bar*1"],
        "Craft": []
    },
    "Apprentice's Desk": {
        "Texture": { x1: 532, y1: 2, x2: 620, y2: 92, r: 0 },
        "Requires": ["Ruins of Light I", "Canopy"],
        "Blueprint": ["Branch*2", "Log*2"],
        "Craft": []
    },
    "Archwizard's Desk": {
        "Texture": { x1: 532, y1: 2, x2: 620, y2: 92, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Apprentice's Desk", "Oak Branch*2", "Mana Mote*4", "Pixie Dust*2", "Log*2"],
        "Craft": []
    },
    "Alchemist's Pot": {
        "Texture": { x1: 1612, y1: 550, x2: 1686, y2: 638, r: 0 },
        "Requires": ["Apprentice's Desk", "Kiln"],
        "Blueprint": ["Clay*4", "Mana Mote*3", "Log*2"],
        "Craft": []
    },
    "Alchemy EQPT": {
        "Texture": { x1: 1698, y1: 93, x2: 1772, y2: 170, r: 0 },
        "Requires": ["Alchemist's Pot", "Ruins of Light III"],
        "Blueprint": ["Branch*3", "Sulfur*1", "Mana Crystal*1", "Platinum Bar*1", "Mercury*1"],
        "Craft": ["Magic Branch"]
    },
    "Meditation Study": {
        "Texture": { x1: 1516, y1: 894, x2: 1722, y2: 1021, r: 1 },
        "Requires": ["Apprentice's Desk"],
        "Blueprint": ["Apple Branch*2", "Mana Crystal*1", "Ghost Mushroom*2", "Log*2"],
        "Craft": []
    },
    "Power Controller": {
        "Texture": { x1: 1636, y1: 83, x2: 1693, y2: 171, r: 0 },
        "Requires": ["Lightning Rod"],
        "Blueprint": ["Rock*5", "Dark Element*4", "Mana Crystal*2", "Mercury*2"],
        "Craft": []
    },
    "Lightning Rod": {
        "Texture": { x1: 163, y1: 277, x2: 218, y2: 476, r: 0 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Mana Crystal*1", "Earth Steel Bar*1", "Silver Bar*1"],
        "Craft": []
    },
    "Portal Exit": {
        "Texture": { x1: 1549, y1: 797, x2: 1728, y2: 890, r: 1 },
        "Requires": ["Lightning Rod", "Ancient Mythril Forge"],
        "Blueprint": ["Old Branch*1", "Rock*5", "Mana Crystal*1"],
        "Craft": []
    },
    "Tree Stump": {
        "Texture": { x1: 1278, y1: 1047, x2: 1346, y2: 1141, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Log*2"],
        "Craft": []
    },
    "Groundwater Pump": {
        "Texture": { x1: 963, y1: 1042, x2: 1051, y2: 1148, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Rock*2", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Water Purifier": {
        "Texture": { x1: 972, y1: 214, x2: 1048, y2: 352, r: 0 },
        "Requires": ["Groundwater Pump"],
        "Blueprint": ["Flint*7", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Barrel": {
        "Texture": { x1: 1834, y1: 619, x2: 1969, y2: 748, r: 1 },
        "Requires": ["Fermented Jar", "Storage Pot"],
        "Blueprint": ["Apple Branch*2", "Rope*2", "Log*4", "Iron Bar*1"],
        "Craft": []
    },
    "Abyss of Dream's machine": {
        "Texture": { x1: 722, y1: 1040, x2: 835, y2: 1149, r: 0 },
        "Requires": ["Apprentice's Desk", "Meditation Study"],
        "Blueprint": ["Debris of nightmares*1", "Mana Mote*2", "Silver Bar*1", "Gold Bar*1"],
        "Craft": []
    },
    "Ancient Mythril Forge": {
        "Texture": { x1: 8, y1: 1036, x2: 141, y2: 1205, r: 0 },
        "Map": "Dwarf Ruins F6 @ Burning Canyon",
        "Requires": ["Ruins of Light V"],
        "Blueprint": ["Mana Crystal*2", "Gold Bar*2", "Black Cast Iron Bar*2", "Platinum Bar*1"],
        "Craft": []
    },
    // 存储室/居住===================================================================
    "Basket": {
        "Texture": { x1: 1928, y1: 271, x2: 1977, y2: 305, r: 1 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Bush*2", "Branch*1"],
        "Craft": []
    },
    "Wooden Box": {
        "Texture": { x1: 1797, y1: 264, x2: 1852, y2: 332, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Basket", "Log*4"],
        "Craft": []
    },
    "Sturdy Box": {
        "Texture": { x1: 1567, y1: 6, x2: 1646, y2: 71, r: 1 },
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Wooden Box", "Log*3", "Steel Bar*1"],
        "Craft": []
    },
    "Safe": {
        "Texture": { x1: 314, y1: 3, x2: 425, y2: 88, r: 1 },
        "Requires": ["Work Bench LV4"],
        "Blueprint": ["Sturdy Box", "Log*3", "Black Cast Iron Bar*1"],
        "Craft": []
    },
    "Safe of Magic": {
        "Texture": { x1: 221, y1: 280, x2: 343, y2: 359, r: 1 },
        "Requires": ["Power Controller"],
        "Blueprint": ["Safe", "Log*5", "Mana Crystal*1"],
        "Craft": []
    },
    "Bathroom": {
        "Texture": { x1: 1389, y1: 561, x2: 1470, y2: 693, r: 0 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*4", "Leather*1"],
        "Craft": ["Fertilizer"]
    },
    "Garden": {
        "Texture": { x1: 1477, y1: 551, x2: 1608, y2: 695, r: 1 },
        "Requires": ["Ruins of Light II", "Bathroom"],
        "Blueprint": ["Branch*4", "Charcoal*3"],
        "Craft": []
    },
    "Mound of Fertilizer": {
        "Texture": { x1: 1691, y1: 637, x2: 1828, y2: 755, r: 1 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Bush*10", "Clay*2", "Rope*4"],
        "Craft": []
    },
    "Mountain Goat Pen": {
        "Texture": { x1: 769, y1: 107, x2: 906, y2: 210, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Branch*4", "Log*2"],
        "Craft": []
    },
    "Pet Crate": {
        "Texture": { x1: 7, y1: 502, x2: 223, y2: 818, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Branch*6", "Log*4"],
        "Craft": []
    },
    "Storage Pot": {
        "Texture": { x1: 558, y1: 544, x2: 603, y2: 572, r: 1 },
        "Requires": ["Kiln"],
        "Blueprint": ["Bush*1", "Clay*2"],
        "Craft": []
    },
    "Refrigerated Pot": {
        "Texture": { x1: 1806, y1: 211, x2: 1854, y2: 261, r: 1 },
        "Requires": ["Power Controller"],
        "Blueprint": ["Storage Pot", "Frost Stone*1", "Clay*3", "Mana Crystal*1", "Silver Bar*1"],
        "Craft": []
    },
    "Auto Repair Exhibit": {
        "Texture": { x1: 669, y1: 96, x2: 766, y2: 201, r: 1 },
        "Requires": ["Magic EQPT Bench"],
        "Blueprint": ["Machinery*4", "Mana Crystal*1", "Log*4", "Silver Bar*1", "Gold Bar*1"],
        "Craft": []
    },
    "Battle Scarecrow": {
        "Texture": { x1: 1157, y1: 1050, x2: 1195, y2: 1136, r: 0 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Bush*4", "Branch*2", "Rope*2"],
        "Craft": []
    },
    "Taunting Scarecrow": {
        "Texture": { x1: 1468, y1: 351, x2: 1587, y2: 439, r: 1 },
        "Requires": ["Battle Scarecrow", "Armor Bench LV2"],
        "Blueprint": ["Apple Branch*1", "Oak Branch*1", "Rope*1", "Linen*1"],
        "Craft": []
    },
    "Pumpkin Scarecrow": {
        "Texture": { x1: 1689, y1: 423, x2: 1823, y2: 533, r: 1 },
        "Requires": ["Battle Scarecrow", "Armor Bench LV2"],
        "Blueprint": ["Apple Branch*2", "Oak Branch*1", "Rope*1", "Linen*1", "Pumpkin*1"],
        "Craft": []
    },
    "Human Cannon": {
        "Texture": { x1: 850, y1: 607, x2: 1028, y2: 753, r: 1 },
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Sulfur*1", "Mana Crystal*1", "Log*5", "Steel Bar*3", "Mercury*1"],
        "Craft": []
    },
    "Fence": {
        "Texture": { x1: 1687, y1: 335, x2: 1802, y2: 419, r: 1 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*1", "Rope*4", "Log*1"],
        "Craft": []
    },
    "Strong Fence": {
        "Texture": { x1: 1032, y1: 617, x2: 1212, y2: 740, r: 1 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Fence", "Clay*2", "Rock*2"],
        "Craft": []
    },
    "Fence Door": {
        "Texture": { x1: 253, y1: 1041, x2: 350, y2: 1181, r: 0 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*4", "Log*2"],
        "Craft": []
    },
    "Strong Fence Door": {
        "Texture": { x1: 147, y1: 1039, x2: 243, y2: 1183, r: 0 },
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Fence Door", "Log*4", "Iron Bar*4"],
        "Craft": []
    },
    "Raft": {
        "Texture": { x1: 1731, y1: 760, x2: 1879, y2: 886, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Rope*4", "Log*6"],
        "Craft": []
    },
    "Stone Road": {
        "Texture": { x1: 1476, y1: 444, x2: 1608, y2: 548, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Stone*1"],
        "Craft": []
    },
    "Mannequin": {
        "Texture": { x1: 475, y1: 1042, x2: 525, y2: 1162, r: 0 },
        "Requires": ["Armor Bench LV4", "Sturdy Box"],
        "Blueprint": ["Linen*4", "Log*3"],
        "Craft": []
    },
    "Egg Incubator": {
        "Texture": { x1: 1348, y1: 363, x2: 1462, y2: 465, r: 0 },
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Apple Branch*2", "Rope*2", "Log*2"],
        "Craft": []
    },
    "Canopy": {
        "Texture": { x1: 697, y1: 231, x2: 802, y2: 342, r: 0 },
        "Requires": ["Fire Pit"],
        "Blueprint": ["Bush*4", "Branch*3"],
        "Craft": []
    },
    "Straw Hut": {
        "Texture": { x1: 1216, y1: 578, x2: 1382, y2: 694, r: 1 },
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Canopy", "Bush*5", "Branch*4", "Rope*2"],
        "Craft": []
    },
    "Shack": {
        "Texture": { x1: 235, y1: 517, x2: 394, y2: 734, r: 0 },
        "Requires": ["Work Bench LV4"],
        "Blueprint": ["Straw Hut", "Clay*2", "Stone*8", "Brick*4", "Log*4"],
        "Craft": []
    },
    "Leather Hut": {
        "Texture": { x1: 1299, y1: 884, x2: 1512, y2: 1021, r: 1 },
        "Requires": ["Weaver LV2", "Ruins of Light II"],
        "Blueprint": ["Branch*4", "Rope*2", "Linen*2", "Leather*2"],
        "Craft": []
    },
    "Storage": {
        "Texture": { x1: 831, y1: 215, x2: 963, y2: 351, r: 0 },
        "Requires": ["Wooden Box", "Canopy"],
        "Blueprint": ["Clay*4", "Rock*4", "Log*4"],
        "Craft": []
    },
    "Straw Pile Bed": {
        "Texture": { x1: 1582, y1: 252, x2: 1682, y2: 343, r: 0 },
        "Requires": ["Canopy"],
        "Blueprint": ["Bush*4"],
        "Craft": []
    },
    "Cot": {
        "Texture": { x1: 415, y1: 267, x2: 541, y2: 368, r: 0 },
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Straw Pile Bed", "Bush*3", "Branch*4"],
        "Craft": []
    },
    "Wooden Bed": {
        "Texture": { x1: 1919, y1: 824, x2: 2031, y2: 930, r: 0 },
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Cot", "Wool*3", "Linen*4", "Log*2"],
        "Craft": []
    },
    "Hammock": {
        "Texture": { x1: 1125, y1: 107, x2: 1225, y2: 210, r: 0 },
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Branch*2", "Rope*4"],
        "Craft": []
    },
    "Spacetime Rift": {
        "Texture": { x1: 1203, y1: 1042, x2: 1265, y2: 1179, r: 0 },
        "Requires": ["Apprentice's Desk"],
        "Blueprint": ["Map Piece*3"],
        "Craft": []
    },
    "Strange Magical Symbol": {
        "Texture": { x1: 1623, y1: 1066, x2: 1727, y2: 1147, r: 0 },
        "Requires": ["Apprentice's Desk", "Ruins of Light II"],
        "Blueprint": ["Strange Symbol Map Fragment*6", "Magic Branch*1"],
        "Craft": []
    },
};
dataCrafts = {
    "Rope": {
        "Texture": { x1: 1937, y1: 2294, x2: 2006, y2: 2348, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Bush*2"],
    },
    "Stone": {
        "Texture": { x1: 951, y1: 2513, x2: 1036, y2: 2602, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*1"],
    },
    "Leather Strap": {
        "Texture": { x1: 793, y1: 2095, x2: 874, y2: 2161, r: 0 },
        "Requires": ["Tanning Bench", "Work Bench LV1"],
        "Blueprint": ["Leather*1"],
    },
    /*"Leather Strap": {
        "Texture": { x1: 793, y1: 2095, x2: 874, y2: 2161, r: 0 },
        "Requires": ["Tanning Bench", "Work Bench LV1"],
        "Blueprint": ["Tough Leather*1"],
    },*/
    "Charcoal": {
        "Texture": { x1: 1469, y1: 1951, x2: 1548, y2: 2019, r: 0 },
        "Requires": ["Kiln"],
        "Blueprint": ["Log*1"],
    },
    "Brick": {
        "Texture": { x1: 479, y1: 1953, x2: 551, y2: 2020, r: 0 },
        "Requires": ["Kiln"],
        "Blueprint": ["Clay*1"],
    },
    "Linen": {
        "Texture": { x1: 1331, y1: 2163, x2: 1411, y2: 2224, r: 0 },
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Hemp*3"],
    },
    "Cobweb Thread": {
        "Texture": { x1: 167, y1: 2412, x2: 236, y2: 2459, r: 0 },
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Spider Cocoon*2"],
    },
    /*"Parchment": {
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Tough Hide*1", "Sulfur*1"],
    },*/
    "Leather": {
        "Texture": { x1: 1203, y1: 1951, x2: 1293, y2: 2021, r: 0 },
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Hide*1"],
    },
    "Tough Leather": {
        "Texture": { x1: 669, y1: 1476, x2: 767, y2: 1558, r: 0 },
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Tough Hide*1"],
    },
    "Iron Bar": {
        "Texture": { x1: 469, y1: 2095, x2: 539, y2: 2160, r: 0 },
        "Requires": ["Foundry"],
        "Blueprint": ["Steel Ore*3", "Log*1"],
    },
    "Silver Bar": {
        "Texture": { x1: 585, y1: 1799, x2: 660, y2: 1873, r: 0 },
        "Requires": ["Foundry"],
        "Blueprint": ["Silver Ore*3", "Log*1"],
    },
    "Gold Bar": {
        "Texture": { x1: 739, y1: 1799, x2: 814, y2: 1873, r: 0 },
        "Requires": ["Foundry"],
        "Blueprint": ["Gold Ore*3", "Log*1"],
    },
    "Mercury": {
        "Texture": { x1: 1742, y1: 2410, x2: 1811, y2: 2450, r: 0 },
        "Requires": ["Foundry"],
        "Blueprint": ["Mercury Ore*2"],
    },
    "Steel Bar": {
        "Texture": { x1: 1932, y1: 1951, x2: 2001, y2: 2021, r: 0 },
        "Requires": ["Wind Foundry"],
        "Blueprint": ["Steel Ore*3", "Charcoal*1"],
    },
    "Earth Steel Bar": {
        "Texture": { x1: 1780, y1: 1722, x2: 1854, y2: 1795, r: 0 },
        "Requires": ["Wind Foundry", "Alchemy EQPT"],
        "Blueprint": ["Steel Ore*4", "Earth Element*1", "Charcoal*1"],
    },
    "Black Cast Iron Bar": {
        "Texture": { x1: 1859, y1: 1722, x2: 1931, y2: 1795, r: 0 },
        "Requires": ["Wind Foundry", "Power Controller"],
        "Blueprint": ["Steel Ore*4", "Dark Element*1", "Charcoal*1"],
    },
    "Platinum Bar": {
        "Texture": { x1: 1703, y1: 1722, x2: 1779, y2: 1795, r: 0 },
        "Requires": ["Wind Foundry"],
        "Blueprint": ["Platinum Ore*3", "Charcoal*1"],
    },
    "Mythril Bar": {
        "Texture": { x1: 662, y1: 1799, x2: 736, y2: 1873, r: 0 },
        "Requires": ["Wind Foundry", "Ancient Mythril Forge"],
        "Blueprint": ["Mythril Ore*4", "Charcoal*1"],
    },
};
dataTools = {
    "Torch": {
        "Texture": { x1: 855, y1: 2516, x2: 943, y2: 2602, r: 0 },
        "Requires": [],
        "Blueprint": ["Bush*1", "Branch*1"],
    },
    "Straw Sleeping Bag": {
        "Texture": { x1: 1305, y1: 2294, x2: 1407, y2: 2347, r: 0 },
        "Requires": ["Straw Pile Bed"],
        "Blueprint": ["Bush*2"],
    },
    "Thick Sleeping Bag": {
        "Texture": { x1: 1010, y1: 1560, x2: 1106, y2: 1637, r: 0 },
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Wool*1", "Linen*1"],
    },
    "Cooking Pot": {
        "Texture": { x1: 1780, y1: 103, x2: 1836, y2: 176, r: 1 },
        "Requires": ["Cooking Oven"],
        "Blueprint": ["Steel Bar*2"],
    },
    "Simple Tent": {
        "Texture": { x1: 1519, y1: 2513, x2: 1615, y2: 2609, r: 0 },
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Branch*3", "Linen*4"],
    },
    "Stone Knife": {
        "Texture": { x1: 2, y1: 2165, x2: 64, y2: 2226, r: 0 },
        "Requires": ["Stone Axe"],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Shovel": {
        "Texture": { x1: 231, y1: 2512, x2: 343, y2: 2627, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*1", "Iron Bar*2"]
    },
    "Stone Axe": {
        "Texture": { x1: 1118, y1: 2515, x2: 1216, y2: 2599, r: 0 },
        "Requires": [],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Stone Pickaxe": {
        "Texture": { x1: 751, y1: 2515, x2: 851, y2: 2602, r: 0 },
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Pickaxe": {
        "Texture": { x1: 1, y1: 2512, x2: 107, y2: 2618, r: 0 },
        "Requires": ["Work Bench LV2", "Wind Foundry"],
        "Blueprint": ["Branch*2", "Steel Bar*2"]
    },
    "Lumberjack Axe": {
        "Texture": { x1: 535, y1: 2514, x2: 644, y2: 2606, r: 0 },
        "Requires": ["Work Bench LV2", "Foundry"],
        "Blueprint": ["Branch*2", "Iron Bar*3"]
    },
    "Black Iron Pickaxe": {
        "Texture": { x1: 1918, y1: 2510, x2: 2026, y2: 2618, r: 0 },
        "Requires": ["Work Bench LV3", "Magic EQPT Bench"],
        "Blueprint": ["Branch*3", "Tough Leather*1", "Black Cast Iron Bar*2"],
    },
    "Carrier": {
        "Texture": { x1: 115, y1: 2512, x2: 223, y2: 2626, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*3", "Rope*2", "Log*1"]
    },
    "Multipurpose Cooler Bag": {
        "Texture": { x1: 1620, y1: 2512, x2: 1729, y2: 2610, r: 0 },
        "Requires": ["Work Bench LV4", "Magic EQPT Bench", "Alchemy EQPT"],
        "Blueprint": ["Frost Stone*1", "Mana Mote*4", "Pixie Dust*3", "Tough Leather*4", "Silver Bar*1"]
    },
    "Backpack": {
        "Texture": { x1: 450, y1: 2513, x2: 529, y2: 2606, r: 0 },
        "Requires": ["Work Bench LV4", "Ruins of Light V"],
        "Blueprint": ["Linen*4", "Cobweb Thread*4", "Leather*4", "Tough Leather*6"]
    },
    "Small Backpack": {
        "Texture": { x1: 1042, y1: 2514, x2: 1112, y2: 2598, r: 0 },
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Cobweb Thread*3", "Leather*5"],
    },
    "Small Bag": {
        "Texture": { x1: 1059, y1: 2163, x2: 1152, y2: 2224, r: 0 },
        "Requires": ["Work Bench LV3", "Weaver LV2"],
        "Blueprint": ["Cobweb Thread*2", "Tough Leather*3"],
    },
    "Crude Pouch": {
        "Texture": { x1: 1797, y1: 1877, x2: 1871, y2: 1947, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Hide*2"]
    },
    "Bandage": {
        "Texture": { x1: 874, y1: 1722, x2: 942, y2: 1796, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Linen*1"]
    },
    "First-aid Bandage": {
        "Texture": { x1: 1610, y1: 1560, x2: 1678, y2: 1638, r: 0 },
        "Requires": ["Work Bench LV2", "Alchemist's Pot"],
        "Blueprint": ["Beast's Grass*1", "Bandage*2"]
    },
    "Fishing Pole": {
        "Texture": { x1: 649, y1: 2514, x2: 744, y2: 2606, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Hemp*2", "Branch*2"]
    },
    "Lasso": {
        "Texture": { x1: 1108, y1: 1951, x2: 1200, y2: 2019, r: 0 },
        "Requires": ["Mountain Goat Pen"],
        "Blueprint": ["Rope*2"]
    },
    "Empty Water Bag": {
        "Texture": { x1: 1846, y1: 2518, x2: 1914, y2: 2602, r: 0 },
        "Requires": ["Work Bench LV2", "Tanning Bench"],
        "Blueprint": ["Hemp*1", "Leather*1"]
    },
    "Repair Hammer": {
        "Texture": { x1: 1094, y1: 1878, x2: 1167, y2: 1947, r: 0 },
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Branch*2", "Mana Mote*3", "Steel Bar*2"],
    },
    "Dynamite": {
        "Texture": { x1: 1648, y1: 1390, x2: 1720, y2: 1472, r: 0 },
        "Requires": ["Work Bench LV3", "Alchemy EQPT"],
        "Blueprint": ["Earth Element*1", "Sulfur*1", "Charcoal*2"],
    },
    "Magic Handwarmer": {
        "Texture": { x1: 1638, y1: 2024, x2: 1710, y2: 2090, r: 0 },
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Earth Element*2", "Mana Crystal*1", "Fire Herb*3", "Mercury*2"]
    },
    "Frost Stone": {
        "Texture": { x1: 306, y1: 2412, x2: 366, y2: 2460, r: 0 },
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Dark Element*2", "Mana Crystal*1", "Icecap*3", "Mercury*2"]
    },
    "Repair Kit for Metal, Wood": {
        "Texture": { x1: 556, y1: 2165, x2: 628, y2: 2225, r: 0 },
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*2", "Steel Bar*1"]
    },
    "Repair Kit for Cloth, Leather": {
        "Texture": { x1: 1476, y1: 2026, x2: 1556, y2: 2090, r: 0 },
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Linen*2", "Cobweb Thread*1", "Leather*1"]
    },
    "Bear Trap": {
        "Texture": { x1: 1423, y1: 3, x2: 1471, y2: 71, r: 1 },
        "Requires": ["Foundry"],
        "Blueprint": ["Machinery*1", "Iron Bar*1"]
    },
    "Wooden Arrow": {
        "Texture": { x1: 1225, y1: 2512, x2: 1315, y2: 2602, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*2"]
    },
    "Stone Arrow": {
        "Texture": { x1: 1324, y1: 2513, x2: 1412, y2: 2599, r: 0 },
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*2", "Flint*2"]
    },
    "Hand Axe": {
        "Texture": { x1: 532, y1: 1723, x2: 622, y2: 1796, r: 0 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*2", "Iron Bar*3"]
    },
    "Wooden Spear": {
        "Texture": { x1: 1416, y1: 2510, x2: 1513, y2: 2614, r: 0 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*1", "Flint*1", "Rope*1"]
    },
    "Crude Staff": {
        "Texture": { x1: 1737, y1: 2510, x2: 1841, y2: 2614, r: 0 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*1"]
    },
    "Hunting Bow": {
        "Texture": { x1: 348, y1: 2515, x2: 444, y2: 2610, r: 0 },
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Bush*1", "Branch*2"]
    },
};
