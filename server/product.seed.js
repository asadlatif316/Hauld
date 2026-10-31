// Hauld: 28 products for Mongoose. No _id here, MongoDB assigns it.
// Prices are in PKR. Replace IMG with your own Cloudinary URLs.
// If your schema uses different field names, rename them in the map() at the bottom.

const IMG = 'https://res.cloudinary.com/demo/image/upload/sample.jpg';

const raw = [
  // Backpacks (6)
  [
    'Trailhead Daypack',
    'Backpacks',
    6500,
    24,
    'published',
    'Lightweight 20L daypack with padded straps and a water-bottle pocket.',
  ],
  [
    'Metro Commuter Backpack',
    'Backpacks',
    7800,
    18,
    'published',
    'Slim city backpack with a padded 15-inch laptop compartment.',
  ],
  [
    'Summit 30L Hiking Pack',
    'Backpacks',
    12500,
    9,
    'published',
    'Weather-resistant 30L pack with a ventilated back panel and rain cover.',
  ],
  [
    'Campus Roll-Top Backpack',
    'Backpacks',
    5900,
    30,
    'published',
    'Roll-top closure, expandable capacity, easy-clean fabric.',
  ],
  [
    'Urban Anti-Theft Backpack',
    'Backpacks',
    9200,
    14,
    'published',
    'Hidden zippers, cut-resistant straps and a USB charging port.',
  ],
  [
    'Mini Canvas Backpack',
    'Backpacks',
    3800,
    40,
    'published',
    'Compact canvas backpack with a front pocket, ideal for daily errands.',
  ],

  // Totes (6)
  [
    'Everyday Canvas Tote',
    'Totes',
    2800,
    45,
    'published',
    'Heavy cotton canvas tote with an inner zip pocket.',
  ],
  [
    'Leather Market Tote',
    'Totes',
    8900,
    12,
    'published',
    'Full-grain leather tote with reinforced handles.',
  ],
  [
    'Weekender Jute Tote',
    'Totes',
    3200,
    28,
    'published',
    'Natural jute tote with a cotton lining, strong and breathable.',
  ],
  [
    'Structured Work Tote',
    'Totes',
    10500,
    7,
    'published',
    'Firm-shaped office tote that fits a 14-inch laptop and files.',
  ],
  [
    'Foldable Shopper Tote',
    'Totes',
    1900,
    60,
    'published',
    'Folds into its own pouch. Water-resistant and easy to carry.',
  ],
  [
    'Zip-Top Beach Tote',
    'Totes',
    3600,
    0,
    'published',
    'Wide, quick-dry tote with a zip top to keep sand out.',
  ],

  // Duffels (5)
  [
    'Gym Barrel Duffel',
    'Duffels',
    4900,
    20,
    'published',
    'Barrel-shaped gym bag with a wet pocket and a shoulder pad.',
  ],
  [
    'Overnight Leather Duffel',
    'Duffels',
    15800,
    6,
    'published',
    'Premium leather duffel sized for a one-night trip.',
  ],
  [
    'Voyager 45L Travel Duffel',
    'Duffels',
    11200,
    10,
    'published',
    'Large 45L duffel with backpack straps and a tough base.',
  ],
  [
    'Sport Shoe-Compartment Duffel',
    'Duffels',
    5600,
    16,
    'published',
    'Separate ventilated shoe compartment and a side bottle holder.',
  ],
  [
    'Waxed Canvas Weekender',
    'Duffels',
    13400,
    2,
    'published',
    'Waxed canvas weekender with leather trims, built to last.',
  ],

  // Crossbody (6)
  [
    'Pocket Sling Crossbody',
    'Crossbody',
    2600,
    35,
    'published',
    'Small sling for phone, wallet and keys with an adjustable strap.',
  ],
  [
    'Leather Saddle Crossbody',
    'Crossbody',
    7400,
    11,
    'published',
    'Classic saddle-style leather bag with a magnetic flap.',
  ],
  [
    'Nylon Utility Crossbody',
    'Crossbody',
    3400,
    26,
    'published',
    'Light nylon crossbody with multiple quick-access pockets.',
  ],
  [
    'Compact Camera Crossbody',
    'Crossbody',
    6800,
    8,
    'published',
    'Padded crossbody that fits a small camera and accessories.',
  ],
  [
    'Quilted Chain Crossbody',
    'Crossbody',
    8200,
    13,
    'draft',
    'Quilted finish with a metal chain strap, evening-ready.',
  ],
  [
    'Phone Pouch Crossbody',
    'Crossbody',
    1800,
    50,
    'published',
    'Slim phone pouch with a card slot and a long strap.',
  ],

  // Laptop bags (5)
  [
    'Slim 15-inch Laptop Sleeve Bag',
    'Laptop Bags',
    4200,
    22,
    'published',
    'Padded sleeve bag with carry handles and a front pocket.',
  ],
  [
    'Executive Leather Briefcase',
    'Laptop Bags',
    16500,
    5,
    'draft',
    'Structured leather briefcase with a combination lock.',
  ],
  [
    'Commuter Laptop Messenger',
    'Laptop Bags',
    7100,
    17,
    'published',
    'Water-resistant messenger bag with a padded laptop section.',
  ],
  [
    'Padded Tech Organizer Bag',
    'Laptop Bags',
    5300,
    19,
    'published',
    'Organizer pockets for chargers, cables, mouse and a tablet.',
  ],
  [
    'Rolling Laptop Case',
    'Laptop Bags',
    14900,
    4,
    'draft',
    'Wheeled laptop case with a telescopic handle for travel.',
  ],
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const products = raw.map(
  ([name, category, price, stock, status, description]) => ({
    name,
    slug: slugify(name), // stable key so re-running the seed never duplicates
    description,
    category,
    price,
    stock,
    status, // "published" | "draft"
    image: IMG,
  }),
);

module.exports = products;
