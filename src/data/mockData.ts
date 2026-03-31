import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Whole Wheat Atta',
    alternateNames: ['Chakki Fresh Atta', 'Whole Wheat Flour'],
    shortDescription: 'Stone-ground whole wheat flour for soft, fluffy rotis.',
    description: 'Our Chakki Fresh Atta is made from 100% MP Sharbati wheat, known for its golden color and sweet taste. Stone-ground to perfection to retain all the natural bran, germ, and endosperm. This ensures your rotis stay soft for hours and are packed with dietary fiber.',
    images: [
      'https://images.unsplash.com/photo-1508338712271-40539c94170c?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Atta & Flours',
    ingredients: ['100% Whole Wheat'],
    howToUse: 'Knead with warm water and a pinch of salt to make dough for rotis, parathas, or puris. Let the dough rest for 15 minutes before rolling.',
    storageTips: 'Store in an airtight container in a cool, dry place. For long-term storage, keep refrigerated.',
    origin: 'Madhya Pradesh, India',
    freshnessGuarantee: 'Milled within 30 days of packaging to ensure maximum freshness and nutrient retention.',
    usedInDishes: ['Roti', 'Paratha', 'Puri', 'Halwa'],
    pairsWellWith: ['Pure Desi Ghee', 'Toor Dal', 'Butter Chicken'],
    nutritionalInfo: { calories: '340 kcal', fat: '1.5g', carbs: '72g', protein: '13g' },
    stock: 500,
    isBestSeller: true,
    reviews: [
      { id: 'r1', userId: 'u1', userName: 'Priya S.', rating: 5, comment: 'Makes the softest rotis ever! Reminds me of home.', date: '2023-10-15' }
    ]
  },
  {
    id: 'p2',
    name: 'Aged Basmati Rice (Extra Long Grain)',
    alternateNames: ['Chawal', 'Premium Basmati'],
    shortDescription: 'Aged for 2 years for the perfect fluffy texture and aroma.',
    description: 'Our premium Basmati rice is aged for a minimum of two years in temperature-controlled silos. This aging process reduces moisture content, ensuring that upon cooking, the grains elongate to twice their original size, remain separate, and release a captivating nutty aroma.',
    images: [
      'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Rice & Grains',
    ingredients: ['100% Aged Basmati Rice'],
    howToUse: 'Rinse thoroughly until water runs clear. Soak for 30 minutes before cooking. Use a 1:1.5 rice to water ratio for boiling.',
    storageTips: 'Store in a cool, dry place away from direct sunlight. Keep in a sealed container to prevent moisture.',
    origin: 'Punjab, India',
    freshnessGuarantee: 'Carefully aged and packed to preserve the natural aromatic oils.',
    usedInDishes: ['Biryani', 'Pulao', 'Jeera Rice', 'Kheer'],
    pairsWellWith: ['Garam Masala', 'Pure Desi Ghee', 'Saffron'],
    nutritionalInfo: { calories: '350 kcal', fat: '0.5g', carbs: '78g', protein: '8g' },
    stock: 150,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p3',
    name: 'Toor Dal (Pigeon Peas) - Unpolished',
    alternateNames: ['Arhar Dal', 'Yellow Pigeon Peas'],
    shortDescription: 'Protein-rich, unpolished dal for authentic Indian meals.',
    description: 'Our unpolished Toor Dal retains its natural dietary fibers and nutrients that are often lost during the polishing process. It cooks faster, tastes sweeter, and provides a wholesome, comforting base for your daily dal tadka or sambar.',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Lentils & Pulses (Dal)',
    ingredients: ['Unpolished Pigeon Peas'],
    howToUse: 'Wash and soak for 30 minutes. Pressure cook with turmeric and salt until soft. Temper with ghee, cumin, and garlic.',
    storageTips: 'Transfer to an airtight container after opening. Keep in a dry pantry.',
    origin: 'Maharashtra, India',
    freshnessGuarantee: 'Sourced directly from farmers post-harvest to ensure quick cooking times.',
    usedInDishes: ['Dal Tadka', 'Sambar', 'Rasam', 'Puran Poli'],
    pairsWellWith: ['Basmati Rice', 'Turmeric Powder', 'Mustard Seeds'],
    nutritionalInfo: { calories: '343 kcal', fat: '1.5g', carbs: '63g', protein: '22g' },
    stock: 300,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p4',
    name: 'Chana Dal (Split Bengal Gram)',
    alternateNames: ['Bengal Gram Dal', 'Split Chickpeas'],
    shortDescription: 'Nutty and earthy dal, perfect for curries and snacks.',
    description: 'Premium quality, unpolished Chana Dal known for its sweet and earthy flavor. It holds its shape well when cooked, making it ideal for hearty curries, sweet dishes, and savory snacks.',
    images: [
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Lentils & Pulses (Dal)',
    ingredients: ['Split Bengal Gram'],
    howToUse: 'Soak for 1-2 hours before cooking. Great for making dal fry, adding to vegetable curries, or grinding into besan.',
    storageTips: 'Store in an airtight container in a cool, dry place.',
    origin: 'Madhya Pradesh, India',
    freshnessGuarantee: 'Sorted and packed using state-of-the-art technology to ensure zero impurities.',
    usedInDishes: ['Chana Dal Fry', 'Puran Poli', 'Vada', 'Lauki Chana Dal'],
    pairsWellWith: ['Garam Masala', 'Cumin Seeds', 'Ghee'],
    nutritionalInfo: { calories: '360 kcal', fat: '5g', carbs: '60g', protein: '20g' },
    stock: 200,
    reviews: []
  },
  {
    id: 'p5',
    name: 'Garam Masala Signature Blend',
    alternateNames: ['Hot Spice Blend', 'Mixed Spices'],
    shortDescription: 'A secret family recipe of 15 roasted spices.',
    description: 'Elevate your curries with our signature Garam Masala. We dry-roast 15 premium whole spices, including green cardamom, cloves, cinnamon, and mace, before grinding them in small batches. This ensures a robust, complex flavor profile that adds warmth and depth to any dish.',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Spices',
    ingredients: ['Coriander', 'Cumin', 'Cardamom', 'Cinnamon', 'Black Pepper', 'Cloves', 'Nutmeg', 'Mace', 'Bay Leaves'],
    howToUse: 'Sprinkle a pinch at the end of cooking your curries, dals, or marinades to preserve its volatile aromatic oils.',
    storageTips: 'Keep in a tightly sealed glass jar away from heat and light to maintain aroma.',
    origin: 'Blended in USA from imported spices',
    freshnessGuarantee: 'Ground in small batches weekly for maximum potency.',
    usedInDishes: ['Chicken Tikka Masala', 'Chole', 'Dal Makhani', 'Biryani'],
    pairsWellWith: ['Kashmiri Red Chili Powder', 'Turmeric Powder', 'Coriander Powder'],
    nutritionalInfo: { calories: '379 kcal', fat: '14g', carbs: '53g', protein: '13g' },
    stock: 80,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p6',
    name: 'Organic Turmeric Powder (Haldi)',
    alternateNames: ['Haldi', 'Curcuma'],
    shortDescription: 'High-curcumin, stone-ground organic turmeric.',
    description: 'Sourced from organic farms in Kerala, our turmeric powder boasts a high curcumin content (over 5%), ensuring maximum health benefits and a vibrant golden hue. Stone-ground at low temperatures to retain its natural oils and medicinal properties.',
    images: [
      'https://images.unsplash.com/photo-1615486171448-6a7576c965c4?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Spices',
    ingredients: ['Organic Turmeric Root'],
    howToUse: 'Add a teaspoon to curries, dals, or warm milk (Haldi Doodh) for immunity. Always pair with a pinch of black pepper for better absorption.',
    storageTips: 'Store in a dark, cool cupboard. Turmeric is sensitive to light.',
    origin: 'Kerala, India',
    freshnessGuarantee: 'Harvested and ground within the same season.',
    usedInDishes: ['Golden Milk', 'All Indian Curries', 'Dal', 'Marinades'],
    pairsWellWith: ['Black Pepper', 'Ghee', 'Ginger'],
    nutritionalInfo: { calories: '354 kcal', fat: '10g', carbs: '65g', protein: '8g' },
    stock: 200,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p7',
    name: 'Pure Desi Ghee (Clarified Butter)',
    alternateNames: ['Asli Ghee', 'Clarified Butter'],
    shortDescription: 'Traditional bilona churned ghee from grass-fed cows.',
    description: 'Made using the traditional Vedic bilona method, our ghee is cultured from A2 milk of grass-fed cows. It has a rich, nutty aroma and a granular texture that melts perfectly over hot rotis or rice.',
    images: [
      'https://images.unsplash.com/photo-1627485937980-221c88ce04ea?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Oils & Ghee',
    ingredients: ['Milk Fat'],
    howToUse: 'Use for sautéing, deep frying, tempering dals (tadka), or simply drizzle over hot rice and rotis.',
    storageTips: 'Does not require refrigeration. Store in a cool, dark place. Always use a clean, dry spoon.',
    origin: 'Gujarat, India',
    freshnessGuarantee: 'Made in small batches to ensure the perfect aroma and texture.',
    usedInDishes: ['Dal Tadka', 'Halwa', 'Roti', 'Biryani'],
    pairsWellWith: ['Atta', 'Toor Dal', 'Basmati Rice'],
    nutritionalInfo: { calories: '900 kcal', fat: '100g', carbs: '0g', protein: '0g' },
    stock: 100,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p8',
    name: 'Thick Poha (Flattened Rice)',
    alternateNames: ['Chivda', 'Aval', 'Beaten Rice'],
    shortDescription: 'Premium thick poha for the perfect non-sticky breakfast.',
    description: 'Made from the finest quality paddy, our thick poha absorbs water perfectly without turning mushy. It is the ideal choice for making authentic Maharashtrian Kanda Poha or Indori Poha.',
    images: [
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Rice & Grains',
    ingredients: ['Flattened Rice'],
    howToUse: 'Rinse gently in a colander under running water for 30 seconds. Let it sit for 5 minutes to soften before cooking.',
    storageTips: 'Store in an airtight container to keep out moisture and pests.',
    origin: 'Madhya Pradesh, India',
    freshnessGuarantee: 'Hygienically packed to retain freshness and prevent breakage.',
    usedInDishes: ['Kanda Poha', 'Batata Poha', 'Chivda Mixture'],
    pairsWellWith: ['Mustard Seeds', 'Turmeric Powder', 'Peanuts'],
    nutritionalInfo: { calories: '346 kcal', fat: '1g', carbs: '77g', protein: '7g' },
    stock: 180,
    reviews: []
  },
  {
    id: 'p9',
    name: 'Besan (Gram Flour)',
    alternateNames: ['Chickpea Flour', 'Chana Dal Flour'],
    shortDescription: 'Finely milled, 100% pure chana dal flour.',
    description: 'Our Besan is made by finely milling premium quality, unpolished Chana Dal. It has a sweet, nutty flavor and a smooth texture, perfect for making crispy pakoras, soft dhoklas, and rich sweets.',
    images: [
      'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Atta & Flours',
    ingredients: ['100% Chana Dal (Gram Flour)'],
    howToUse: 'Mix with water and spices to make a batter for frying pakoras, or roast with ghee to make besan ladoos.',
    storageTips: 'Store in an airtight container in the refrigerator to extend shelf life and prevent bitterness.',
    origin: 'Rajasthan, India',
    freshnessGuarantee: 'Milled fresh and packed immediately to lock in the nutty aroma.',
    usedInDishes: ['Pakora', 'Dhokla', 'Besan Ladoo', 'Kadhi'],
    pairsWellWith: ['Ajwain (Carom Seeds)', 'Turmeric Powder', 'Ghee'],
    nutritionalInfo: { calories: '387 kcal', fat: '6g', carbs: '57g', protein: '22g' },
    stock: 250,
    reviews: []
  },
  {
    id: 'p10',
    name: 'Frozen Malabar Paratha (Family Pack)',
    alternateNames: ['Kerala Parotta', 'Flaky Bread'],
    shortDescription: 'Flaky, multi-layered flatbreads ready in minutes.',
    description: 'Experience the authentic taste of South India with our frozen Malabar Parathas. Hand-stretched and folded to create beautiful, flaky layers that are crispy on the outside and soft on the inside.',
    images: [
      'https://images.unsplash.com/photo-1626779833836-41f516a282f6?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Frozen / Ready-to-cook',
    ingredients: ['Wheat Flour', 'Water', 'Vegetable Oil', 'Salt', 'Sugar'],
    howToUse: 'Do not thaw. Heat a pan and cook the frozen paratha on medium heat for 2-3 minutes on each side until golden brown. Gently crush from the sides to open the layers.',
    storageTips: 'Keep frozen at -18°C or below. Do not refreeze after thawing.',
    origin: 'Made in USA',
    freshnessGuarantee: 'Flash-frozen immediately after preparation to lock in freshness.',
    usedInDishes: ['With Chicken Chettinad', 'With Veg Kurma', 'With Beef Fry'],
    pairsWellWith: ['Butter Chicken', 'Paneer Tikka Masala'],
    nutritionalInfo: { calories: '320 kcal', fat: '14g', carbs: '42g', protein: '6g' },
    stock: 120,
    isNew: true,
    reviews: []
  },
  {
    id: 'p11',
    name: 'Cold Pressed Mustard Oil (Kachi Ghani)',
    alternateNames: ['Sarson Ka Tel', 'Kachi Ghani'],
    shortDescription: 'Pungent, cold-pressed mustard oil for authentic cooking.',
    description: 'Extracted using the traditional wooden cold-press (Kachi Ghani) method to retain its natural pungency, strong aroma, and high nutritional value. Essential for authentic North Indian and Bengali cuisine.',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Oils & Ghee',
    ingredients: ['100% Mustard Oil'],
    howToUse: 'Heat to smoking point and let it cool slightly before adding spices to reduce the raw pungency. Ideal for frying, making pickles, and cooking curries.',
    storageTips: 'Store in a cool, dark place. Ensure the cap is tightly closed.',
    origin: 'Uttar Pradesh, India',
    freshnessGuarantee: 'Unrefined and unfiltered to maintain the highest quality and flavor.',
    usedInDishes: ['Fish Curry', 'Mango Pickle', 'Aloo Gobi', 'Bhaigan Bharta'],
    pairsWellWith: ['Panch Phoron', 'Kashmiri Red Chili', 'Turmeric'],
    nutritionalInfo: { calories: '884 kcal', fat: '100g', carbs: '0g', protein: '0g' },
    stock: 90,
    reviews: []
  },
  {
    id: 'p12',
    name: 'Kashmiri Red Chili Powder (Deggi Mirch)',
    alternateNames: ['Kashmiri Mirch', 'Paprika Alternative'],
    shortDescription: 'Vibrant red color with mild heat.',
    description: 'Known for imparting a stunning, fiery red hue to dishes without overpowering them with heat. Our Kashmiri chili powder is mildly pungent and highly flavorful, making it an essential ingredient for tandoori marinades and rich gravies.',
    images: [
      'https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Spices',
    ingredients: ['Kashmiri Red Chilies'],
    howToUse: 'Use generously in marinades, curries, and tadkas to achieve a rich red color without making the dish too spicy.',
    storageTips: 'Store in an airtight container away from direct sunlight to preserve the vibrant color.',
    origin: 'Kashmir, India',
    freshnessGuarantee: 'Ground from sun-dried whole chilies to ensure maximum color retention.',
    usedInDishes: ['Rogan Josh', 'Tandoori Chicken', 'Paneer Butter Masala'],
    pairsWellWith: ['Coriander Powder', 'Garam Masala', 'Ghee'],
    nutritionalInfo: { calories: '282 kcal', fat: '14g', carbs: '50g', protein: '13g' },
    stock: 150,
    isBestSeller: true,
    reviews: []
  },
  {
    id: 'p13',
    name: 'Cumin Seeds (Jeera)',
    alternateNames: ['Jeera', 'Whole Cumin'],
    shortDescription: 'Earthy, aromatic whole cumin seeds.',
    description: 'Our premium cumin seeds are carefully cleaned and sorted. They have a distinct earthy, nutty, and warming flavor that forms the base of almost every Indian tempering (tadka).',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Spices',
    ingredients: ['Whole Cumin Seeds'],
    howToUse: 'Roast dry to enhance flavor before grinding, or fry in hot oil/ghee at the beginning of cooking to release their essential oils.',
    storageTips: 'Store in a cool, dry place. Dry roast and grind in small batches for the best flavor.',
    origin: 'Gujarat, India',
    freshnessGuarantee: 'Packed in flavor-lock bags to retain essential oils.',
    usedInDishes: ['Jeera Rice', 'Dal Tadka', 'Aloo Jeera', 'Raita'],
    pairsWellWith: ['Coriander Seeds', 'Mustard Seeds', 'Turmeric'],
    nutritionalInfo: { calories: '375 kcal', fat: '22g', carbs: '44g', protein: '18g' },
    stock: 200,
    reviews: []
  },
  {
    id: 'p14',
    name: 'Sona Masoori Rice',
    alternateNames: ['Sona Masuri', 'Medium Grain Rice'],
    shortDescription: 'Lightweight, aromatic medium-grain rice.',
    description: 'A premium medium-grain rice grown largely in the southern states of India. It is lightweight, aromatic, and low in starch, making it an excellent choice for daily consumption and South Indian dishes.',
    images: [
      'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Rice & Grains',
    ingredients: ['Sona Masoori Rice'],
    howToUse: 'Wash well and soak for 20 minutes. Cook with a 1:2.5 rice to water ratio for a soft, fluffy texture.',
    storageTips: 'Store in a cool, dry place in an airtight container.',
    origin: 'Andhra Pradesh, India',
    freshnessGuarantee: 'Aged for 12 months for optimal cooking results.',
    usedInDishes: ['Daily Rice', 'Lemon Rice', 'Curd Rice', 'Idli Batter'],
    pairsWellWith: ['Toor Dal', 'Sambar', 'Pickle'],
    nutritionalInfo: { calories: '130 kcal', fat: '0g', carbs: '29g', protein: '3g' },
    stock: 300,
    reviews: []
  },
  {
    id: 'p15',
    name: 'Moong Dal (Yellow Split Green Gram)',
    alternateNames: ['Yellow Moong', 'Split Mung Bean'],
    shortDescription: 'Light, easy-to-digest yellow lentils.',
    description: 'Yellow Moong Dal is made from whole mung beans that have been hulled and split. It is extremely light, easy to digest, and cooks very quickly. Perfect for comforting khichdi or a light dal soup.',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Lentils & Pulses (Dal)',
    ingredients: ['Split Yellow Mung Beans'],
    howToUse: 'Does not require soaking. Rinse and boil until soft. Great for making sweet halwa, savory dal, or grinding into a batter for chilla (pancakes).',
    storageTips: 'Store in an airtight container in a dry place.',
    origin: 'Rajasthan, India',
    freshnessGuarantee: 'Hygienically processed and packed to ensure purity.',
    usedInDishes: ['Khichdi', 'Moong Dal Tadka', 'Moong Dal Halwa', 'Chilla'],
    pairsWellWith: ['Basmati Rice', 'Ghee', 'Cumin Seeds'],
    nutritionalInfo: { calories: '347 kcal', fat: '1.2g', carbs: '63g', protein: '24g' },
    stock: 250,
    reviews: []
  }
];

