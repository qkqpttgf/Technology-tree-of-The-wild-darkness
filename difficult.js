
dataRuinsofLight = {
    "Ruins of Light I": {
        "Map": "Forest Entrance",
        "Requires": [],
        "Blueprint": ["Light Tablet*1"],
        "Craft": ["Dimensional Tablet I"]
    },
    "Ruins of Light II": {
        "Map": "Desolate Meadow | Everblue Lake",
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*2", "Machinery*1"],
        "Craft": ["Dimensional Tablet II"]
    },
    "Ruins of Light III": {
        "Map": "Dense Jungle",
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Snake Fang*1", "Snake Leather*1", "Monster Bird Beak*1", "Feather*1", "Fish Fin Fragment*1"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light IV": {
        "Map": "Dark Cave @ Cold Terrain",
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Fur*1", "Rock*3", "Wool Clothes*1", "Snow Totem Decor*1"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light V": {
        "Map": "Burning Canyon",
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*5", "Mana Mote*2", "Rock Monster Debris*1", "Flaming Magic Heart*3"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light VI": {
        "Map": "Sealed Land",
        "Requires": [],
        "Blueprint": ["Light Tablet*3", "Rock*7", "Mana Crystal*1", "Silver Bar*2", "Basilisk Leather*1"],
        "Craft": ["Dimensional Tablet III"]
    },
    "Ruins of Light VII": {
        "Map": "Earth Spirit's Cave",
        "Requires": [],
        "Blueprint": ["Light Tablet*1", "Rock*10", "Mana Crystal*2", "Gold Bar*2", "Mythril Bar*2"],
        "Craft": ["Dimensional Tablet III"]
    },
};
dataStructures = {
    // 火/露营===========================================================================
    "Campfire": {
        "Requires": [],
        "Blueprint": ["Branch*2", "Log*1"],
        "Craft": []
    },
    "Fire Pit": {
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Rock*4", "Log*4"],
        "Craft": []
    },
    "Kiln": {
        "Requires": ["Foundry", "Ruins of Light II"],
        "Blueprint": ["Bush*4", "Clay*5"],
        "Craft": ["Charcoal", "Brick"]
    },
    "Foundry": {
        "Requires": ["Fire Pit"],
        "Blueprint": ["Branch*3", "Rock*5", "Log*3"],
        "Craft": ["Iron Bar", "Silver Bar", "Gold Bar", "Mercury"]
    },
    "Wind Foundry": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Foundry", "Machinery*4", "Stone*3", "Log*2"],
        "Craft": ["Iron Bar", "Steel Bar", "Earth Steel Bar", "Black Cast Iron Bar", "Silver Bar", "Gold Bar", "Platinum Bar", "Mythril Bar", "Mercury"]
    },
    "Cooking Oven": {
        "Requires": ["Fire Pit", "Storage Pot"],
        "Blueprint": ["Branch*2", "Stone*4", "Log*2", "Iron Bar*1"],
        "Craft": []
    },
    "Smoker": {
        "Requires": ["Ruins of Light IV", "Cooking Oven"],
        "Blueprint": ["Clay*3", "Charcoal*2", "Brick*3", "Log*4"],
        "Craft": []
    },
    "Magic Torch": {
        "Requires": ["Ruins of Light II", "Apprentice's Desk"],
        "Blueprint": ["Mana Mote*1", "Fire Herb*1", "Charcoal*2", "Iron Bar*1"],
        "Craft": []
    },
    "Indoor Oven": {
        "Requires": ["Kiln"],
        "Blueprint": ["Clay*1", "Brick*3", "Log*2"],
        "Craft": []
    },
    "Indoor Oil Lamp": {
        "Requires": ["Ruins of Light II", "Apprentice's Desk"],
        "Blueprint": ["Mana Mote*1", "Fire Herb*1", "Charcoal*1", "Iron Bar*1"],
        "Craft": []
    },
    // 制作/魔法=============================================================
    "Work Bench LV1": {
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Bush*2", "Rock*1", "Log*2"],
        "Craft": ["Rope", "Stone"]
    },
    "Work Bench LV2": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Work Bench LV1", "Machinery*1", "Branch*3", "Rock*2"],
        "Craft": ["Rope", "Stone"]
    },
    "Work Bench LV3": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Work Bench LV2", "Machinery*2", "Stone*4", "Log*3", "Steel Bar*1"],
        "Craft": ["Rope", "Stone", "Leather Strap"]
    },
    "Work Bench LV4": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Work Bench LV3", "Machinery*4", "Stone*5", "Black Cast Iron Bar*1"],
        "Craft": ["Rope", "Stone", "Leather Strap"]
    },
    "Armor Bench LV1": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*2", "Log*2"],
        "Craft": []
    },
    "Armor Bench LV2": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Armor Bench LV1", "Rock*4", "Log*3", "Iron Bar*1"],
        "Craft": []
    },
    "Armor Bench LV3": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Armor Bench LV2", "Machinery*3", "Stone*5", "Log*3", "Steel Bar*1"],
        "Craft": []
    },
    "Armor Bench LV4": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Armor Bench LV3", "Machinery*2", "Stone*6", "Log*3", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Armor Bench LV5": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Armor Bench LV4", "Machinery*5", "Stone*7", "Log*3", "Black Cast Iron Bar*1"],
        "Craft": []
    },
    "Weapon Bench LV1": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*2", "Log*4"],
        "Craft": []
    },
    "Weapon Bench LV2": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Weapon Bench LV1", "Rock*4", "Log*2", "Iron Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV3": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Weapon Bench LV2", "Machinery*3", "Brick*3", "Log*2", "Steel Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV4": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Weapon Bench LV3", "Machinery*2", "Brick*3", "Log*2", "Earth Steel Bar*2"],
        "Craft": []
    },
    "Weapon Bench LV5": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Weapon Bench LV4", "Machinery*5", "Brick*4", "Log*2", "Black Cast Iron Bar*2"],
        "Craft": []
    },
    "Tanning Bench": {
        "Requires": ["Armor Bench LV1"],
        "Blueprint": ["Branch*3", "Rope*1", "Charcoal*1"],
        "Craft": ["Parchment", "Leather", "Tough Leather"]
    },
    "Jerky Dryer": {
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Branch*2", "Rope*1"],
        "Craft": []
    },
    "Fermented Jar": {
        "Requires": ["Cooking Oven", "Storage Pot"],
        "Blueprint": ["Bush*2", "Clay*3"],
        "Craft": []
    },
    "Fish Trap": {
        "Requires": ["Weaver LV2", "Cooking Oven"],
        "Blueprint": ["Branch*3", "Cobweb Thread*4"],
        "Craft": []
    },
    "Cheese Ripener": {
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Log*4"],
        "Craft": ["Cheese"]
    },
    "Beehive": {
        "Requires": ["Storage Pot", "Ruins of Light III"],
        "Blueprint": ["Beehive*2", "Log*4"],
        "Craft": []
    },
    "Weaver LV1": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*3", "Rope*2", "Log*2"],
        "Craft": ["Linen", "Cobweb Thread"]
    },
    "Weaver LV2": {
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Weaver LV1", "Machinery*5", "Branch*3", "Earth Steel Bar*1"],
        "Craft": ["Linen", "Cobweb Thread"]
    },
    "Juicer": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Log*3", "Steel Bar*1", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Magic EQPT Bench": {
        "Requires": ["Alchemy EQPT", "Work Bench LV3"],
        "Blueprint": ["Mana Crystal*2", "Brick*4", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Black Magical Anvil": {
        "Requires": ["Power Controller"],
        "Blueprint": ["Stone*8", "Earth Steel Bar*1", "Black Cast Iron Bar*1", "Mythril Bar*1"],
        "Craft": []
    },
    "Apprentice's Desk": {
        "Requires": ["Canopy"],
        "Blueprint": ["Branch*2", "Log*2"],
        "Craft": []
    },
    "Archwizard's Desk": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Apprentice's Desk", "Oak Branch*2", "Mana Mote*4", "Pixie Dust*2", "Log*2"],
        "Craft": []
    },
    "Alchemist's Pot": {
        "Requires": ["Kiln", "Apprentice's Desk"],
        "Blueprint": ["Clay*4", "Mana Mote*3", "Log*2"],
        "Craft": []
    },
    "Alchemy EQPT": {
        "Requires": ["Alchemist's Pot", "Ruins of Light III"],
        "Blueprint": ["Branch*3", "Sulfur*1", "Mana Crystal*1", "Platinum Bar*1", "Mercury*1"],
        "Craft": ["Magic Branch"]
    },
    "Meditation Study": {
        "Requires": ["Apprentice's Desk", "Ruins of Light II"],
        "Blueprint": ["Apple Branch*2", "Mana Crystal*1", "Ghost Mushroom*2", "Log*2"],
        "Craft": []
    },
    "Power Controller": {
        "Requires": ["Lightning Rod"],
        "Blueprint": ["Rock*5", "Dark Element*4", "Mana Crystal*2", "Mercury*2"],
        "Craft": []
    },
    "Lightning Rod": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Mana Crystal*1", "Earth Steel Bar*1", "Silver Bar*1"],
        "Craft": []
    },
    "Portal Exit": {
        "Requires": ["Lightning Rod", "Ancient Mythril Forge"],
        "Blueprint": ["Old Branch*1", "Rock*5", "Mana Crystal*1"],
        "Craft": []
    },
    "Tree Stump": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Log*2"],
        "Craft": []
    },
    "Groundwater Pump": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Rock*2", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Water Purifier": {
        "Requires": ["Groundwater Pump"],
        "Blueprint": ["Flint*7", "Earth Steel Bar*1"],
        "Craft": []
    },
    "Barrel": {
        "Requires": ["Fermented Jar", "Storage Pot"],
        "Blueprint": ["Apple Branch*2", "Rope*2", "Log*4", "Iron Bar*1"],
        "Craft": []
    },
    "Ancient Mythril Forge": {
        "Map": "Dwarf Ruins F6 @ Burning Canyon",
        "Requires": ["Ruins of Light V"],
        "Blueprint": ["Mana Crystal*2", "Gold Bar*2", "Black Cast Iron Bar*2", "Platinum Bar*1"],
        "Craft": []
    },
    // 存储室/居住===================================================================
    "Basket": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Bush*2", "Branch*1"],
        "Craft": []
    },
    "Wooden Box": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Basket", "Log*4"],
        "Craft": []
    },
    "Sturdy Box": {
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Wooden Box", "Log*3", "Steel Bar*1"],
        "Craft": []
    },
    "Safe": {
        "Requires": ["Work Bench LV4"],
        "Blueprint": ["Sturdy Box", "Log*3", "Black Cast Iron Bar*1"],
        "Craft": []
    },
    "Safe of Magic": {
        "Requires": ["Power Controller"],
        "Blueprint": ["Safe", "Log*5", "Mana Crystal*1"],
        "Craft": []
    },
    "Bathroom": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*4", "Leather*1"],
        "Craft": ["Fertilizer"]
    },
    "Garden": {
        "Requires": ["Ruins of Light II", "Bathroom"],
        "Blueprint": ["Branch*4", "Charcoal*3"],
        "Craft": []
    },
    "Mound of Fertilizer": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Bush*10", "Clay*2", "Rope*4"],
        "Craft": []
    },
    "Mountain Goat Pen": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Branch*4", "Log*2"],
        "Craft": []
    },
    "Pet Crate": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Branch*6", "Log*4"],
        "Craft": []
    },
    "Storage Pot": {
        "Requires": ["Kiln"],
        "Blueprint": ["Bush*1", "Clay*2"],
        "Craft": []
    },
    "Refrigerated Pot": {
        "Requires": ["Power Controller"],
        "Blueprint": ["Storage Pot", "Frost Stone*1", "Clay*3", "Mana Crystal*1", "Silver Bar*1"],
        "Craft": []
    },
    "Auto Repair Exhibit": {
        "Requires": ["Magic EQPT Bench"],
        "Blueprint": ["Machinery*4", "Mana Crystal*1", "Log*4", "Silver Bar*1", "Gold Bar*1"],
        "Craft": []
    },
    "Battle Scarecrow": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Bush*4", "Branch*2", "Rope*2"],
        "Craft": []
    },
    "Taunting Scarecrow": {
        "Requires": ["Battle Scarecrow", "Armor Bench LV2"],
        "Blueprint": ["Apple Branch*1", "Oak Branch*1", "Rope*1", "Linen*1"],
        "Craft": []
    },
    "Pumpkin Scarecrow": {
        "Requires": ["Battle Scarecrow", "Armor Bench LV2"],
        "Blueprint": ["Apple Branch*2", "Oak Branch*1", "Rope*1", "Linen*1", "Pumpkin*1"],
        "Craft": []
    },
    "Human Cannon": {
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Sulfur*1", "Mana Crystal*1", "Log*5", "Steel Bar*3", "Mercury*1"],
        "Craft": []
    },
    "Fence": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*1", "Rope*4", "Log*1"],
        "Craft": []
    },
    "Strong Fence": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Fence", "Clay*2", "Rock*2"],
        "Craft": []
    },
    "Fence Door": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Branch*4", "Log*2"],
        "Craft": []
    },
    "Strong Fence Door": {
        "Requires": ["Ruins of Light IV"],
        "Blueprint": ["Fence Door", "Log*4", "Iron Bar*4"],
        "Craft": []
    },
    "Raft": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Rope*4", "Log*6"],
        "Craft": []
    },
    "Stone Road": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Stone*1"],
        "Craft": []
    },
    "Mannequin": {
        "Requires": ["Armor Bench LV4", "Sturdy Box"],
        "Blueprint": ["Linen*4", "Log*3"],
        "Craft": []
    },
    "Egg Incubator": {
        "Requires": ["Ruins of Light III"],
        "Blueprint": ["Apple Branch*2", "Rope*2", "Log*2"],
        "Craft": []
    },
    "Canopy": {
        "Requires": ["Fire Pit"],
        "Blueprint": ["Bush*4", "Branch*3"],
        "Craft": []
    },
    "Straw Hut": {
        "Requires": ["Ruins of Light II"],
        "Blueprint": ["Canopy", "Bush*5", "Branch*4", "Rope*2"],
        "Craft": []
    },
    "Shack": {
        "Requires": ["Work Bench LV4"],
        "Blueprint": ["Straw Hut", "Clay*2", "Stone*8", "Brick*4", "Log*4"],
        "Craft": []
    },
    "Leather Hut": {
        "Requires": ["Weaver LV2", "Ruins of Light II"],
        "Blueprint": ["Branch*4", "Rope*2", "Linen*2", "Leather*2"],
        "Craft": []
    },
    "Storage": {
        "Requires": ["Wooden Box", "Canopy"],
        "Blueprint": ["Clay*4", "Rock*4", "Log*4"],
        "Craft": []
    },
    "Straw Pile Bed": {
        "Requires": ["Canopy"],
        "Blueprint": ["Bush*4"],
        "Craft": []
    },
    "Cot": {
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Straw Pile Bed", "Bush*3", "Branch*4"],
        "Craft": []
    },
    "Wooden Bed": {
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Cot", "Wool*3", "Linen*4", "Log*2"],
        "Craft": []
    },
    "Hammock": {
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Branch*2", "Rope*4"],
        "Craft": []
    },
    "Spacetime Rift": {
        "Requires": ["Apprentice's Desk"],
        "Blueprint": ["Map Piece*3"],
        "Craft": []
    },
    "Strange Magical Symbol": {
        "Requires": ["Apprentice's Desk", "Ruins of Light II"],
        "Blueprint": ["Strange Symbol Map Fragment*6", "Magic Branch*1"],
        "Craft": []
    },
};
dataCrafts = {
    "Rope": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Bush*2"],
    },
    "Stone": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Rock*1"],
    },
    "Leather Strap": {
        "Requires": ["Tanning Bench", "Work Bench LV1"],
        "Blueprint": ["Leather*1"],
    },
    /*"Leather Strap": {
        "Requires": ["Tanning Bench", "Work Bench LV1"],
        "Blueprint": ["Tough Leather*1"],
    },*/
    "Charcoal": {
        "Requires": ["Kiln"],
        "Blueprint": ["Log*1"],
    },
    "Brick": {
        "Requires": ["Kiln"],
        "Blueprint": ["Clay*1"],
    },
    "Linen": {
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Hemp*3"],
    },
    "Cobweb Thread": {
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Spider Cocoon*2"],
    },
    /*"Parchment": {
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Tough Hide*1", "Sulfur*1"],
    },*/
    "Leather": {
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Hide*1"],
    },
    "Tough Leather": {
        "Requires": ["Tanning Bench"],
        "Blueprint": ["Tough Hide*1"],
    },
    "Iron Bar": {
        "Requires": ["Foundry"],
        "Blueprint": ["Steel Ore*3", "Log*1"],
    },
    "Silver Bar": {
        "Requires": ["Foundry"],
        "Blueprint": ["Silver Ore*3", "Log*1"],
    },
    "Gold Bar": {
        "Requires": ["Foundry"],
        "Blueprint": ["Gold Ore*3", "Log*1"],
    },
    "Mercury": {
        "Requires": ["Foundry"],
        "Blueprint": ["Mercury Ore*2"],
    },
    "Steel Bar": {
        "Requires": ["Wind Foundry"],
        "Blueprint": ["Steel Ore*3", "Charcoal*1"],
    },
    "Earth Steel Bar": {
        "Requires": ["Wind Foundry", "Alchemy EQPT"],
        "Blueprint": ["Steel Ore*4", "Earth Element*1", "Charcoal*1"],
    },
    "Black Cast Iron Bar": {
        "Requires": ["Wind Foundry", "Power Controller"],
        "Blueprint": ["Steel Ore*4", "Dark Element*1", "Charcoal*1"],
    },
    "Platinum Bar": {
        "Requires": ["Wind Foundry"],
        "Blueprint": ["Platinum Ore*3", "Charcoal*1"],
    },
    "Mythril Bar": {
        "Requires": ["Wind Foundry", "Ancient Mythril Forge"],
        "Blueprint": ["Mythril Ore*4", "Charcoal*1"],
    },
};
dataTools = {
    "Torch": {
        "Requires": [],
        "Blueprint": ["Bush*1", "Branch*1"],
    },
    "Incantation Bag": {
        "Requires": ["Work Bench LV1", "Ruins of Light I"],
        "Blueprint": ["Hide*1"],
    },
    "Alchemy Bag": {
        "Requires": ["Work Bench LV2", "Incantation Bag"],
        "Blueprint": ["Hemp*2", "Hide*2"],
    },
    "Straw Sleeping Bag": {
        "Requires": ["Straw Pile Bed"],
        "Blueprint": ["Bush*2"],
    },
    "Thick Sleeping Bag": {
        "Requires": ["Weaver LV2"],
        "Blueprint": ["Wool*1", "Linen*1"],
    },
    "Cooking Pot": {
        "Requires": ["Cooking Oven"],
        "Blueprint": ["Steel Bar*2"],
    },
    "Simple Tent": {
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Branch*3", "Linen*4"],
    },
    "Stone Knife": {
        "Requires": ["Stone Axe"],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Shovel": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*1", "Iron Bar*2"]
    },
    "Stone Axe": {
        "Requires": [],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Stone Pickaxe": {
        "Requires": ["Ruins of Light I"],
        "Blueprint": ["Branch*1", "Flint*1"]
    },
    "Pickaxe": {
        "Requires": ["Work Bench LV2", "Wind Foundry"],
        "Blueprint": ["Branch*2", "Steel Bar*2"]
    },
    "Lumberjack Axe": {
        "Requires": ["Work Bench LV2", "Foundry"],
        "Blueprint": ["Branch*2", "Iron Bar*3"]
    },
    "Black Iron Pickaxe": {
        "Requires": ["Work Bench LV3", "Magic EQPT Bench"],
        "Blueprint": ["Branch*3", "Tough Leather*1", "Black Cast Iron Bar*2"],
    },
    "Carrier": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*3", "Rope*2", "Log*1"]
    },
    "Multipurpose Cooler Bag": {
        "Requires": ["Work Bench LV4", "Magic EQPT Bench", "Alchemy EQPT"],
        "Blueprint": ["Frost Stone*1", "Mana Mote*4", "Pixie Dust*3", "Tough Leather*4", "Silver Bar*1"]
    },
    "Backpack": {
        "Requires": ["Work Bench LV4", "Ruins of Light V"],
        "Blueprint": ["Linen*4", "Cobweb Thread*4", "Leather*4", "Tough Leather*6"]
    },
    "Small Backpack": {
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Cobweb Thread*3", "Leather*5"],
    },
    "Small Bag": {
        "Requires": ["Work Bench LV3", "Weaver LV2"],
        "Blueprint": ["Cobweb Thread*2", "Tough Leather*3"],
    },
    "Crude Pouch": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Hide*2"]
    },
    "Bandage": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Linen*1"]
    },
    "First-aid Bandage": {
        "Requires": ["Work Bench LV2", "Alchemist's Pot"],
        "Blueprint": ["Beast's Grass*1", "Bandage*2"]
    },
    "Fishing Pole": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Hemp*2", "Branch*2"]
    },
    "Lasso": {
        "Requires": ["Mountain Goat Pen"],
        "Blueprint": ["Rope*2"]
    },
    "Empty Water Bag": {
        "Requires": ["Work Bench LV2", "Tanning Bench"],
        "Blueprint": ["Hemp*1", "Leather*1"]
    },
    "Repair Hammer": {
        "Requires": ["Work Bench LV3"],
        "Blueprint": ["Branch*2", "Mana Mote*3", "Steel Bar*2"],
    },
    "Dynamite": {
        "Requires": ["Work Bench LV3", "Alchemy EQPT"],
        "Blueprint": ["Earth Element*1", "Sulfur*1", "Charcoal*2"],
    },
    "Magic Handwarmer": {
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Earth Element*2", "Mana Crystal*1", "Fire Herb*3", "Mercury*2"]
    },
    "Frost Stone": {
        "Requires": ["Alchemy EQPT"],
        "Blueprint": ["Dark Element*2", "Mana Crystal*1", "Icecap*3", "Mercury*2"]
    },
    "Repair Kit for Metal, Wood": {
        "Requires": ["Work Bench LV2"],
        "Blueprint": ["Branch*2", "Steel Bar*1"]
    },
    "Repair Kit for Cloth, Leather": {
        "Requires": ["Weaver LV1"],
        "Blueprint": ["Linen*2", "Cobweb Thread*1", "Leather*1"]
    },
    "Bear Trap": {
        "Requires": ["Foundry"],
        "Blueprint": ["Machinery*1", "Iron Bar*1"]
    },
    "Wooden Arrow": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*2"]
    },
    "Stone Arrow": {
        "Requires": ["Work Bench LV1"],
        "Blueprint": ["Branch*2", "Flint*2"]
    },
    "Hand Axe": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*2", "Iron Bar*3"]
    },
    "Wooden Spear": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*1", "Flint*1", "Rope*1"]
    },
    "Crude Staff": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Branch*1"]
    },
    "Hunting Bow": {
        "Requires": ["Weapon Bench LV1"],
        "Blueprint": ["Bush*1", "Branch*2"]
    },
};
