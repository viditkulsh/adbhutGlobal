export interface Package {
    id: number
    title: string
    location: string
    image: string
    duration: string
    groupSize: string
    description: string
    highlights: string[]
    category: "international" | "domestic"
    featured: boolean
  }

export const travelPackages: Package[] = [
    {
      id: 1,
      title: "Bali Paradise Escape",
      location: "Bali, Indonesia",
      image: "/International/Bali/UlunDanu.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the magic of Bali with this comprehensive package that includes visits to sacred temples, rice terraces, and pristine beaches. Enjoy luxury accommodations and authentic local cuisine.",
      highlights: [
        "Visit the sacred Uluwatu Temple",
        "Explore the Tegallalang Rice Terraces",
        "Relax on the beaches of Nusa Dua",
        "Experience traditional Balinese dance performance",
        "Luxury villa accommodation with private pool",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 2,
      title: "Tokyo Cultural Immersion",
      location: "Tokyo, Japan",
      image: "/International/Japan/pic1.webp?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 8 people",
      description:
        "Dive into the fascinating blend of ancient traditions and cutting-edge technology in Tokyo. This package offers a perfect balance of cultural experiences, sightseeing, and culinary adventures.",
      highlights: [
        "Guided tour of Meiji Shrine and Imperial Palace",
        "Sushi making workshop with a master chef",
        "Day trip to Mount Fuji and Hakone",
        "Explore the vibrant districts of Shibuya and Shinjuku",
        "Traditional ryokan stay experience",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 3,
      title: "Dubai Luxury Getaway",
      location: "Dubai, UAE",
      image: "/International/Dubai/dubai-landscape-andrey-bo.jpg?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 6 people",
      description:
        "Indulge in the opulence of Dubai with this luxury package featuring 5-star accommodations, desert safaris, and shopping experiences at the world's largest malls.",
      highlights: [
        "Desert safari with dune bashing and BBQ dinner",
        "Visit to Burj Khalifa observation deck",
        "Dhow cruise with dinner in Dubai Marina",
        "Shopping at Dubai Mall and Gold Souk",
        "Day trip to Abu Dhabi and Ferrari World",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 4,
      title: "Enchanting Rajasthan",
      location: "Rajasthan, India",
      image: "/Domestic/Rajasthan/pic4.jpg?height=600&width=800",
      duration: "10 Days / 9 Nights",
      groupSize: "Up to 12 people",
      description:
        "Explore the royal heritage of Rajasthan with visits to majestic forts, palaces, and vibrant markets. Experience the rich culture, traditional cuisine, and warm hospitality of this colorful state.",
      highlights: [
        "Visit the magnificent Amber Fort in Jaipur",
        "Explore the blue city of Jodhpur",
        "Experience the romance of Udaipur's lakes and palaces",
        "Camel safari in the Thar Desert",
        "Stay in heritage hotels and former royal residences",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 5,
      title: "Kerala Backwaters Bliss",
      location: "Kerala, India",
      image: "/Domestic/Kerala/pic4.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 8 people",
      description:
        "Discover the serene beauty of Kerala's backwaters, lush tea plantations, and pristine beaches. Relax in luxury houseboats and experience the unique culture and cuisine of God's Own Country.",
      highlights: [
        "Overnight stay in a traditional houseboat",
        "Visit to Munnar tea plantations",
        "Kathakali dance performance in Kochi",
        "Ayurvedic spa treatments",
        "Beach relaxation in Kovalam",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 6,
      title: "Goa Beach Retreat",
      location: "Goa, India",
      image: "/Domestic/Goa/pic1.jpg?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 10 people",
      description:
        "Unwind on the beautiful beaches of Goa with this perfect beach getaway. Enjoy water sports, beach parties, and explore the Portuguese heritage of this popular coastal destination.",
      highlights: [
        "Stay at a luxury beach resort",
        "Water sports activities",
        "Visit to historic churches and forts",
        "Sunset cruise on the Arabian Sea",
        "Authentic Goan seafood cuisine",
      ],
      category: "domestic",
      featured: false,
    },
    {
      id: 8,
      title: "Andaman Island Escape",
      location: "Andaman and Nicobar Islands, India",
      image: "/Domestic/Andaman/pic1.jpg?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the pristine beauty of the Andaman Islands with this tropical getaway. Enjoy water sports, beach relaxation, and explore the rich marine life of this stunning archipelago.",
      highlights: [
        "Snorkeling and scuba diving in Havelock Island",
        "Visit to Cellular Jail and light and sound show",
        "Beach hopping in Neil Island",
        "Explore the underwater world at North Bay Island",
        "Relaxation on Radhanagar Beach",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 9,
      title: "Singapore City Tour",
      location: "Singapore",
      image: "/International/Singapore/pic2.avif?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the vibrant city-state of Singapore with this comprehensive package. Visit iconic landmarks, enjoy shopping, and experience the unique blend of cultures in this modern metropolis.",
      highlights: [
        "Visit to Marina Bay Sands and Gardens by the Bay",
        "Explore Sentosa Island and Universal Studios",
        "Shopping on Orchard Road",
        "Cultural experiences in Chinatown and Little India",
        "Night safari at Singapore Zoo",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 10,
      title: "Paris Romantic Getaway",
      location: "Paris, France",
      image: "/International/Europe/pic4.webp?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 8 people",
      description:
        "Experience the romance of Paris with this enchanting package. Visit iconic landmarks, enjoy gourmet dining, and take leisurely strolls along the Seine River.",
      highlights: [
        "Visit to the Eiffel Tower and Louvre Museum",
        "Seine River cruise with dinner",
        "Explore Montmartre and Sacré-Cœur",
        "Wine tasting in the Champagne region",
        "Stay in a charming boutique hotel",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 11,
      title: "New York City Adventure",
      location: "New York, USA",
      image: "/International/New York/pic1.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the vibrant energy of New York City with this exciting package. Visit iconic landmarks, enjoy Broadway shows, and experience the diverse culture of the Big Apple.",
      highlights: [
        "Visit to Statue of Liberty and Ellis Island",
        "Broadway show tickets",
        "Explore Central Park and Times Square",
        "Shopping in Fifth Avenue",
        "Culinary experiences in diverse neighborhoods",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 12,
      title: "Sydney Coastal Escape",
      location: "Sydney, Australia",
      image: "/International/Australia/pic1.jpg?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 8 people",
      description:
        "Experience the stunning coastal beauty of Sydney with this package. Enjoy beach relaxation, city tours, and explore the iconic Sydney Opera House.",
      highlights: [
        "Visit to Sydney Opera House and Harbour Bridge",
        "Beach day at Bondi Beach",
        "Explore the Blue Mountains National Park",
        "Whale watching tour (seasonal)",
        "Culinary experiences in Darling Harbour",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 13,
      title: "Iceland Natural Wonders",
      location: "Iceland",
      image: "/International/Iceland/pic1.webp?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 6 people",
      description:
        "Discover the breathtaking natural beauty of Iceland with this adventure package. Experience geysers, waterfalls, glaciers, and the stunning Northern Lights.",
      highlights: [
        "Visit to the Golden Circle (Geysir, Gullfoss, Þingvellir)",
        "Explore the Blue Lagoon geothermal spa",
        "Northern Lights tour (seasonal)",
        "Glacier hiking and ice cave exploration",
        "Relaxation in hot springs and natural pools",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 14,
      title: "Santorini Island Escape",
      location: "Santorini, Greece",
      image: "/International/Greece/pic2.jpg?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the stunning beauty of Santorini with this romantic getaway. Enjoy breathtaking sunsets, explore charming villages, and relax on beautiful beaches.",
      highlights: [
        "Visit to Oia for sunset views",
        "Wine tasting at local vineyards",
        "Explore the ancient ruins of Akrotiri",
        "Relaxation on Red Beach and Black Beach",
        "Stay in a cliffside hotel with caldera views",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 15,
      title: "Rome Historical Tour",
      location: "Rome, Italy",
      image: "/International/Rome/pic1.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 8 people",
      description:
        "Explore the rich history and culture of Rome with this comprehensive package. Visit iconic landmarks, enjoy authentic Italian cuisine, and experience the vibrant atmosphere of the Eternal City.",
      highlights: [
        "Visit to the Colosseum and Roman Forum",
        "Explore Vatican City and St. Peter's Basilica",
        "Guided tour of the Pantheon and Trevi Fountain",
        "Cooking class with a local chef",
        "Wine tasting in the countryside",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 16,
      title: "Machu Picchu Adventure",
      location: "Machu Picchu, Peru",
      image: "/International/Peru/pic1.avif?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Embark on an unforgettable journey to the ancient Incan city of Machu Picchu. Experience breathtaking landscapes, rich culture, and the thrill of hiking the Inca Trail.",
      highlights: [
        "Hike the Inca Trail to Machu Picchu",
        "Guided tour of Machu Picchu and Huayna Picchu",
        "Explore the Sacred Valley and Pisac Market",
        "Visit to Ollantaytambo ruins",
        "Cultural experiences with local communities",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 17,
      title: "Thailand Island Hopping",
      location: "Thailand",
      image: "/International/Thailand/pic1.jpg?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 12 people",
      description:
        "Explore the stunning islands of Thailand with this island-hopping adventure. Enjoy pristine beaches, vibrant nightlife, and unique cultural experiences.",
      highlights: [
        "Island hopping tour to Phi Phi Islands and James Bond Island",
        "Snorkeling and diving in crystal-clear waters",
        "Visit to the Big Buddha and Wat Pho in Phuket",
        "Explore the vibrant markets and street food",
        "Relaxation on the beaches of Koh Samui",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 18,
      title: "Egyptian Wonders",
      location: "Egypt",
      image: "/International/Egypt/pic1.webp?height=600&width=800",
      duration: "10 Days / 9 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the ancient wonders of Egypt with this comprehensive package. Visit the Pyramids of Giza, cruise the Nile River, and explore the rich history and culture of this fascinating country.",
      highlights: [
        "Visit to the Pyramids of Giza and Sphinx",
        "Nile River cruise with stops at Luxor and Aswan",
        "Explore the Valley of the Kings and Karnak Temple",
        "Visit to Abu Simbel temples",
        "Cultural experiences with local communities",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 19,
      title: "Costa Rica Eco Adventure",
      location: "Costa Rica",
      image: "/International/Costa Rica/pic1.webp?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 8 people",
      description:
        "Experience the incredible biodiversity of Costa Rica with this eco-adventure package. Explore rainforests, volcanoes, and pristine beaches while enjoying thrilling activities.",
      highlights: [
        "Visit to Arenal Volcano and hot springs",
        "Zip-lining through the rainforest canopy",
        "Wildlife spotting in Manuel Antonio National Park",
        "Relaxation on the beaches of Tamarindo",
        "Cultural experiences with local communities",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 20,
      title: "Barcelona City Break",
      location: "Barcelona, Spain",
      image: "/International/Spain/pic1.png?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the vibrant city of Barcelona with this city break package. Visit iconic landmarks, enjoy delicious tapas, and experience the unique culture of Catalonia.",
      highlights: [
        "Visit to Sagrada Familia and Park Güell",
        "Explore the Gothic Quarter and La Rambla",
        "Tapas tasting tour with a local guide",
        "Beach relaxation on Barceloneta Beach",
        "Cultural experiences in local markets",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 21,
      title: "London City Tour",
      location: "London, UK",
      image: "/International/UK/pic1.jpeg?height=600&width=800",
      duration: "4 Days / 3 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the iconic sights of London with this city tour package. Visit famous landmarks, enjoy local cuisine, and experience the vibrant culture of the UK capital.",
      highlights: [
        "Visit to the British Museum and Tower of London",
        "Explore Buckingham Palace and the Houses of Parliament",
        "River Thames cruise",
        "Shopping at Covent Garden",
        "Cultural experiences in local neighborhoods",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 22,
      title: "Amsterdam Canal Cruise",
      location: "Amsterdam, Netherlands",
      image: "/International/Netherlands/pic1.jpg?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 8 people",
      description:
        "Experience the charm of Amsterdam with this canal cruise package. Explore the city's famous canals, visit world-class museums, and enjoy the vibrant atmosphere of this unique city.",
      highlights: [
        "Canal cruise with dinner",
        "Visit to the Anne Frank House and Van Gogh Museum",
        "Explore the Jordaan neighborhood",
        "Bicycle tour of the city",
        "Cultural experiences in local markets",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 23,
      title: "Prague Fairytale Escape",
      location: "Prague, Czech Republic",
      image: "/International/Prague/pic1.jpg?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the enchanting city of Prague with this fairytale escape package. Visit historic castles, stroll through charming streets, and enjoy the vibrant culture of this beautiful city.",
      highlights: [
        "Visit to Prague Castle and Charles Bridge",
        "Explore the Old Town Square and Astronomical Clock",
        "Czech beer tasting tour",
        "Day trip to Kutná Hora and Sedlec Ossuary",
        "Cultural experiences in local markets",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 24,
      title: "African Safari Adventure",
      location: "Kenya, Africa",
      image: "/International/Africa/pic1.jpg?height=600&width=800",
      duration: "10 Days / 9 Nights",
      groupSize: "Up to 8 people",
      description:
        "Embark on a thrilling African safari adventure in Kenya. Witness the majestic wildlife, explore stunning landscapes, and experience the rich culture of Africa.",
      highlights: [
        "Game drives in Maasai Mara National Reserve",
        "Visit to Amboseli National Park with views of Mount Kilimanjaro",
        "Boat safari on Lake Naivasha",
        "Cultural experiences with the Maasai community",
        "Stay in luxury safari lodges and camps",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 25,
      title: "Scenic Norway Fjords",
      location: "Norway",
      image: "/International/Norway/pic1.jpg?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the breathtaking beauty of Norway's fjords with this scenic package. Enjoy stunning landscapes, outdoor activities, and cultural experiences in this Nordic paradise.",
      highlights: [
        "Cruise through the Geirangerfjord and Nærøyfjord",
        "Hiking in the Lofoten Islands",
        "Visit to the Viking Museum in Oslo",
        "Explore Bergen's UNESCO-listed wharf",
        "Cultural experiences with local communities",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 26,
      title: "Baku City Exploration",
      location: "Baku, Azerbaijan",
      image: "/International/Baku/pic2.jpg?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the unique blend of modernity and tradition in Baku, the capital of Azerbaijan. Explore its historic sites, futuristic architecture, and vibrant culture.",
      highlights: [
        "Visit to the Flame Towers and Heydar Aliyev Center",
        "Explore the Old City (Icherisheher) and Maiden Tower",
        "Day trip to Gobustan National Park and Mud Volcanoes",
        "Stroll along the Baku Boulevard",
        "Taste traditional Azerbaijani cuisine",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 27,
      title: "Istanbul Cultural Journey",
      location: "Istanbul, Turkey",
      image: "/International/Turkey/pic1.avif?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the rich history and culture of Istanbul with this cultural journey package. Visit iconic landmarks, enjoy local cuisine, and explore the vibrant neighborhoods of this fascinating city.",
      highlights: [
        "Visit to Hagia Sophia and Blue Mosque",
        "Explore the Grand Bazaar and Spice Bazaar",
        "Bosphorus cruise with dinner",
        "Cultural experiences in local neighborhoods",
        "Stay in a boutique hotel in Sultanahmet",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 28,
      title: "Tokyo Highlights Tour",
      location: "Tokyo, Japan",
      image: "/International/Japan/pic1.webp?height=600&width=800",
      duration: "5 Days / 4 Nights",
      groupSize: "Up to 8 people",
      description:
        "Discover the vibrant city of Tokyo with this highlights tour. Experience the perfect blend of traditional culture and modern attractions in Japan's bustling capital.",
      highlights: [
        "Visit to the iconic Tokyo Tower and Skytree",
        "Explore the historic Asakusa and Senso-ji Temple",
        "Shopping in Ginza and Akihabara",
        "Cultural experiences in Harajuku and Shibuya",
        "Day trip to Nikko or Kamakura",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 29,
      title: "Malaysia Tropical Escape",
      location: "Malaysia",
      image: "/International/Malaysia/pic1.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the diverse beauty of Malaysia with this tropical escape. Explore vibrant cities, pristine beaches, and lush rainforests while enjoying the rich cultural heritage of this Southeast Asian gem.",
      highlights: [
        "Visit to the iconic Petronas Twin Towers in Kuala Lumpur",
        "Explore the historic streets of George Town, Penang",
        "Relaxation on the beaches of Langkawi",
        "Trekking in the Cameron Highlands",
        "Cultural experiences in Malacca and local markets",
      ],
      category: "international",
      featured: true,
    },
    {
      id: 30,
      title: "Vietnam Cultural Odyssey",
      location: "Vietnam",
      image: "/International/Vietnam/pic1.webp?height=600&width=800",
      duration: "10 Days / 9 Nights",
      groupSize: "Up to 12 people",
      description:
        "Experience the rich culture and stunning landscapes of Vietnam with this cultural odyssey package. From bustling cities to serene countryside, this journey offers a perfect blend of experiences.",
      highlights: [
        "Visit to the ancient town of Hoi An",
        "Cruise through Halong Bay's limestone islands",
        "Explore the bustling streets of Hanoi and Ho Chi Minh City",
        "Cultural experiences with local communities",
        "Cooking class with a local chef",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 31,
      title: "Sri Lanka Nature Retreat",
      location: "Sri Lanka",
      image: "/International/Sri_Lanka/pic1.jpg?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the natural beauty and rich culture of Sri Lanka with this nature retreat package. Explore lush tea plantations, stunning beaches, and vibrant wildlife.",
      highlights: [
        "Visit to Sigiriya Rock Fortress",
        "Wildlife safari in Yala National Park",
        "Explore the ancient city of Anuradhapura",
        "Relaxation on the beaches of Mirissa",
        "Cultural experiences in Kandy and Galle",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 32,
      title: "Mexico Beach Getaway",
      location: "Mexico",
      image: "/International/Mexico/pic1.webp?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Experience the vibrant culture and stunning beaches of Mexico with this beach getaway package. Enjoy relaxation, water sports, and cultural experiences in this tropical paradise.",
      highlights: [
        "Relaxation on the beaches of Cancun or Playa del Carmen",
        "Visit to ancient Mayan ruins in Tulum",
        "Snorkeling in cenotes and coral reefs",
        "Cultural experiences in local markets and cuisine",
        "Day trip to Chichen Itza or Cozumel",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 33,
      title: "Canada Rockies Adventure",
      location: "Canada",
      image: "/International/Canada/pic1.jpg?height=600&width=800",
      duration: "8 Days / 7 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the stunning landscapes of the Canadian Rockies with this adventure package. Enjoy outdoor activities, breathtaking views, and cultural experiences in this natural paradise.",
      highlights: [
        "Visit to Banff National Park and Lake Louise",
        "Hiking in Jasper National Park",
        "Wildlife spotting in Yoho National Park",
        "Cultural experiences with Indigenous communities",
        "Stay in luxury lodges and cabins",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 34,
      title: "Russian Heritage Tour",
      location: "Russia",
      image: "/International/Russia/pic1.jpg?height=600&width=800",
      duration: "10 Days / 9 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the rich history and cultural heritage of Russia with this comprehensive tour. Visit iconic landmarks, experience traditional Russian cuisine, and immerse yourself in the vibrant culture of this vast country.",
      highlights: [
        "Visit to the Kremlin and Red Square in Moscow",
        "Explore the Hermitage Museum in St. Petersburg",
        "Guided tour of the Golden Ring cities",
        "Cruise on the Neva River",
        "Experience traditional Russian ballet or opera",
      ],
      category: "international",
      featured: false,
    },
    {
      id: 35,
      title: "Gujarat Heritage Tour",
      location: "Gujarat, India",
      image: "/Domestic/Gujarat/pic1.jpg?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the rich cultural heritage and vibrant traditions of Gujarat. Visit historic sites, experience local crafts, and enjoy the unique cuisine of this colorful state.",
      highlights: [
        "Visit to the iconic Rann of Kutch",
        "Explore the Gir National Park, home to Asiatic lions",
        "Visit to the Somnath and Dwarka temples",
        "Experience the vibrant Navratri festival (seasonal)",
        "Discover the ancient city of Lothal and its Indus Valley heritage",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 36,
      title: "Kashmir Valley Retreat",
      location: "Kashmir, India",
      image: "/Domestic/Kashmir/pic2.webp?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 8 people",
      description:
        "Discover the breathtaking beauty of Kashmir, often referred to as 'Paradise on Earth.' Enjoy serene landscapes, lush valleys, and the warm hospitality of the locals.",
      highlights: [
        "Shikara ride on Dal Lake",
        "Visit to Gulmarg and its stunning meadows",
        "Explore the Mughal Gardens in Srinagar",
        "Trek through the picturesque valleys of Pahalgam",
        "Stay in a traditional houseboat",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 37,
      title: "Odisha Cultural Odyssey",
      location: "Odisha, India",
      image: "/Domestic/Odisha/pic1.jpg?height=600&width=800",
      duration: "6 Days / 5 Nights",
      groupSize: "Up to 10 people",
      description:
        "Discover the rich cultural heritage and natural beauty of Odisha. Explore ancient temples, pristine beaches, and vibrant tribal traditions in this unique destination.",
      highlights: [
        "Visit to the Sun Temple in Konark",
        "Explore the Jagannath Temple in Puri",
        "Relaxation on the beaches of Puri and Chandrabhaga",
        "Experience the tribal culture in Koraput",
        "Boat ride in Chilika Lake to spot migratory birds",
      ],
      category: "domestic",
      featured: false,
    },
    {
      id: 38,
      title: "Mumbai City Experience",
      location: "Mumbai, India",
      image: "/Domestic/Mumbai/pic1.jpg?height=600&width=800",

      duration: "4 Days / 3 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the bustling city of Mumbai, the financial capital of India. Discover its iconic landmarks, vibrant culture, and delicious street food.",
      highlights: [
        "Visit to the Gateway of India and Marine Drive",
        "Explore the historic Elephanta Caves",
        "Shopping at Colaba Causeway and Crawford Market",
        "Experience the vibrant nightlife of Mumbai",
        "Taste authentic Mumbai street food like Vada Pav and Pav Bhaji",
      ],
      category: "domestic",
      featured: false,
    },
    {
      id: 39,
      title: "Delhi Historical Journey",
      location: "Delhi, India",
      image: "/Domestic/Delhi/pic1.webp?height=600&width=800",
      duration: "3 Days / 2 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the rich history and vibrant culture of Delhi, the capital city of India. Visit iconic landmarks, bustling markets, and experience the diverse cuisine of this historic city.",
      highlights: [
        "Visit to the Red Fort and Qutub Minar",
        "Explore Humayun's Tomb and India Gate",
        "Shopping at Chandni Chowk and Connaught Place",
        "Taste authentic street food like Chaat and Parathas",
        "Cultural experiences at Dilli Haat",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 42,
      title: "Haridwar and Rishikesh Spiritual Retreat",
      location: "Haridwar & Rishikesh, India",
      image: "/Domestic/Haridwar Rishikesh/pic1.avif?height=600&width=800",
      duration: "4 Days / 3 Nights",
      groupSize: "Up to 10 people",
      description:
        "Immerse yourself in the spiritual and serene ambiance of Haridwar and Rishikesh. Explore sacred ghats, ancient temples, and the tranquil banks of the Ganges River.",
      highlights: [
        "Attend the Ganga Aarti at Har Ki Pauri in Haridwar",
        "Visit to the iconic Laxman Jhula and Ram Jhula in Rishikesh",
        "Explore the Beatles Ashram and its artistic graffiti",
        "Experience yoga and meditation sessions by the Ganges",
        "Enjoy a serene boat ride on the holy river",
      ],
      category: "domestic",
      featured: true,
    },
    {
      id: 43,
      title: "Germany Historical Tour",
      location: "Germany",
      image: "/International/Germany/pic1.webp?height=600&width=800",
      duration: "7 Days / 6 Nights",
      groupSize: "Up to 10 people",
      description:
        "Explore the rich history and cultural heritage of Germany with this comprehensive tour. Visit iconic landmarks, enjoy traditional German cuisine, and experience the vibrant cities and scenic countryside.",
      highlights: [
        "Visit to the Brandenburg Gate and Berlin Wall Memorial",
        "Explore Neuschwanstein Castle and Bavarian Alps",
        "Guided tour of Munich and its historic beer halls",
        "Cruise on the Rhine River with views of medieval castles",
        "Cultural experiences in local markets and festivals",
      ],
      category: "international",
      featured: true,
    },
    {
        id: 44,
        title: "Swiss Alpine Adventure",
        location: "Switzerland",
        image: "/International/Switzerland/pic2.jpeg?height=600&width=800",
        duration: "8 Days / 7 Nights",
        groupSize: "Up to 8 people",
        description:
            "Experience the breathtaking beauty of the Swiss Alps with this adventure package. Enjoy scenic train rides, hiking trails, and luxury stays in charming alpine villages.",
        highlights: [
            "Ride on the Glacier Express panoramic train",
            "Explore the Matterhorn and Zermatt",
            "Visit to Lake Geneva and Chillon Castle",
            "Hiking in Interlaken and Jungfrau Region",
            "Stay in luxury mountain chalets",
        ],
        category: "international",
        featured: true,
    },
    {
        id: 45,
        title: "Maldives Overwater Bliss",
        location: "Maldives",
        image: "/International/Maldives/pic1.jpg?height=600&width=800",
        duration: "5 Days / 4 Nights",
        groupSize: "Up to 6 people",
        description:
            "Indulge in the ultimate luxury with this Maldives getaway. Stay in overwater villas, enjoy crystal-clear lagoons, and experience world-class hospitality.",
        highlights: [
            "Stay in an overwater villa with private pool",
            "Snorkeling and diving in vibrant coral reefs",
            "Sunset dolphin cruise",
            "Relaxation on pristine white-sand beaches",
            "Gourmet dining with ocean views",
        ],
        category: "international",
        featured: true,
    },
    {
        id: 46,
        title: "Scotland Highlands Escape",
        location: "Scotland, UK",
        image: "/International/Scotland/pic1.jpg?height=600&width=800",
        duration: "7 Days / 6 Nights",
        groupSize: "Up to 10 people",
        description:
            "Discover the rugged beauty of the Scottish Highlands with this escape. Explore historic castles, serene lochs, and charming villages.",
        highlights: [
            "Visit to Edinburgh Castle and Royal Mile",
            "Explore Loch Ness and the Great Glen",
            "Scenic drive through Glencoe Valley",
            "Whisky tasting at a traditional distillery",
            "Stay in cozy countryside inns",
        ],
        category: "international",
        featured: false,
    },
    {
        id: 47,
        title: "Rajasthan Desert Majesty",
        location: "Rajasthan, India",
        image: "/Domestic/Rajasthan/pic2.jpeg?height=600&width=800",
        duration: "9 Days / 8 Nights",
        groupSize: "Up to 12 people",
        description:
            "Experience the grandeur of Rajasthan's deserts and royal heritage. Stay in luxury tents, explore historic forts, and enjoy cultural performances.",
        highlights: [
            "Camel safari in the Thar Desert",
            "Visit to Jaisalmer Fort and Patwon Ki Haveli",
            "Stay in luxury desert camps with cultural shows",
            "Explore the vibrant bazaars of Jaipur",
            "Visit to Mehrangarh Fort in Jodhpur",
        ],
        category: "domestic",
        featured: true,
    },
    {
        id: 48,
        title: "Himalayan Serenity Retreat",
        location: "Uttarakhand, India",
        image: "/Domestic/Himalaya/pic2.webp?height=600&width=800",
        duration: "6 Days / 5 Nights",
        groupSize: "Up to 8 people",
        description:
            "Reconnect with nature in the serene Himalayas. Enjoy yoga, meditation, and breathtaking views of snow-capped peaks.",
        highlights: [
            "Yoga and meditation sessions in Rishikesh",
            "Trekking to hidden Himalayan villages",
            "Visit to the Valley of Flowers (seasonal)",
            "Stay in eco-friendly mountain lodges",
            "Relaxation by the Ganges River",
        ],
        category: "domestic",
        featured: false,
    },
];

// // Shuffle the travel packages array
// export const shuffledTravelPackages = travelPackages.sort(() => Math.random() - 0.5);