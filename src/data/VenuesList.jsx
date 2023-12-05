
// hotels imgs 
const img1 = 'https://th.bing.com/th/id/OIP.hkyf8wr_x63V8b83c-kZeQHaHa?w=450&h=450&rs=1&pid=ImgDetMain';
const img2 = 'https://images.trvl-media.com/hotels/1000000/470000/465100/465005/b6be1b6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium';
const img3 = 'https://th.bing.com/th/id/OIP.C0mbBq0bzfZtUJxuYZZFHgHaE8?rs=1&pid=ImgDetMain';
const img4 = 'https://th.bing.com/th/id/R.e931aa75326f390a5e9939ab6b981460?rik=ID%2bdzzNeb6DJuA&riu=http%3a%2f%2fwww.pavillionarchitects.com%2fwp-content%2fuploads%2f2015%2f10%2fsho5.jpg&ehk=EfLp8TvokZVd6i80Ow2T66dxmtYj5I66dYeEVRXtK3E%3d&risl=&pid=ImgRaw&r=0';
const img5 = 'https://www.essentialcyprus.com/wp-content/uploads/2012/02/5-star-hotels.jpg';
const img6 = 'https://th.bing.com/th/id/R.ae2b39438108f71c74453adf25925297?rik=XhSeMRrzGDWdCw&riu=http%3a%2f%2fwww.luxurystuff.org%2fwp-content%2fuploads%2f2014%2f07%2fSingapore-luxury-Hotel.jpg&ehk=CVh4%2fIe4wPeXMPCqoCYHUcsAQztsyLjBn1AKlr%2fnyC0%3d&risl=&pid=ImgRaw&r=0';
const img7 = 'https://i.pinimg.com/736x/e5/c6/69/e5c669b842aeed8ffbc799a066f16d9e--vacation-travel-vacations.jpg';
const img8 = 'https://i.ytimg.com/vi/Nfz6Z5q5YWM/maxresdefault.jpg'
const img9 = 'https://i.pinimg.com/originals/1a/b1/6a/1ab16a2ee04b562787ce91f10a1be994.jpg';
const img10 = 'https://th.bing.com/th/id/OIP.dMlUA-zg97xYYhFnS6G9rwHaEo?rs=1&pid=ImgDetMain'
const imgf1 = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=1000&h=600&s=1';


const img15 = 'https://cache.marriott.com/marriottassets/marriott/HKGDT/hkgdt-guestroom-5572-hor-clsc.jpg?interpolation=progressive-bilinear&';
const img11 = 'https://media-cdn.tripadvisor.com/media/photo-s/01/84/14/5b/new-york-city.jpg';
const img12 = 'https://th.bing.com/th/id/OIP.9wc0HHKR7XajGhCxC8O8agHaE3?rs=1&pid=ImgDetMain';
const img13 = 'https://th.bing.com/th/id/OIP.0NOkljUGmQ7-UlNwNe9QQgAAAA?rs=1&pid=ImgDetMain';
const img14 = 'https://th.bing.com/th/id/OIP.b4jB34trDM0YQGnlAjJNEQHaEN?rs=1&pid=ImgDetMain';



const venueList = [
    {
        id: 1,
        img: img14,
        name: 'Le maridean Banglore',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.7',
        type: '5 Star Hotel',
        price: ['Per Room - 3000', 'Veg -400', 'NonVeg - 700'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.9',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 2,
        img: img2,
        name: 'Dream Valley Resorts',
        city: 'Hydrabad',
        location: '34B, whitefield, Hydrabad',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Per Room - 3000', 'Veg -400', 'NonVeg - 700'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 3,
        img: img3,
        name: 'Ramoi Flim City',
        city: 'Hyderabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ["Rental Only"],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 4,
        img: img4,
        name: 'City Convention Center',
        city: 'Hyderabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Banquet Halls',
        price: ["Only -Rental"],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 5,
        img: img5,
        name: 'The Imperial Suite',
        city: 'Hydrabad',
        location: '55st, jubli hills , hydrabad',
        rating: '4.9',
        type: '5 Star Hotel',
        price: ['Per Room - 2000', 'Veg -400', 'NonVeg - 700'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 6,
        img: img6,
        name: 'Grandeur Gateway',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ["Rental Only"],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 7,
        img: img7,
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 8,
        img: 'https://th.bing.com/th/id/OIP.D4dznvO4PSQyDPFMTmkoOAHaFd?rs=1&pid=ImgDetMain',
        name: 'Raddison Blue',
        city: 'Hydrabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.3',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 9,
        img: 'https://momblogsociety.com/wp-content/uploads/2019/09/dfrnt-types-oof-hotels.jpg',
        name: 'Hotel Hilton',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.1',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 10,
        img: 'https://pix10.agoda.net/hotelImages/1276018/0/c470ba5ca69418ba6c82b217ed6c63be.jpg?s=1024x768',
        name: 'The Westin Banglore',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.7',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 11,
        img: 'https://th.bing.com/th/id/R.20150ac229702448a03946dab795344e?rik=%2fgXBHfNWHBbzjA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1846070.jpg&ehk=%2bOYz%2fdrb0%2bjhTasPLbLbZS56P%2bvV3wqMMpLqOPa2Nlo%3d&risl=&pid=ImgRaw&r=0',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 12,
        img: 'https://th.bing.com/th/id/OIP.gV-4tZcwZVsMpPF_0nkhIgHaE8?rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 13,
        img: 'https://th.bing.com/th/id/OIP.ULcdHao9Y0kQhucN_2y9EQHaHa?rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 14,
        img: 'https://www.rocsalt.gg/media/cjldht5y/roc-salt-may-2020-8634-1.jpg?anchor=center&mode=crop&width=960&height=800&rnd=132350581341700000',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 15,
        img: 'https://www.whitehorsebuckover.com/wp-content/uploads/2021/08/20210622_120219-rotated.jpg',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 16,
        img: 'https://www.tajhotels.com/content/dam/luxury/hotels/Old-Taj_Fort_Aguada_Goa/new-images/F%20A%20B%20R%20-%20Facade%20Day.jpg',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 17,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d3/37/c1/pool-side-view.jpg?w=700&h=-1&s=1',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: '34B, jubbli hills, Hydrabad',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 18,
        img: 'https://th.bing.com/th/id/OIP.zIcUDc7CJRo0WdBXH2h10wHaEw?rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 19,
        img: 'https://q-xx.bstatic.com/xdata/images/hotel/max1200/17173782.jpg?k=741c80ecda52c527bdcba7756c51ac618f3e7c40416b3cf58aa68e0753edbda5&o=',
        name: 'Hyaat Residance',
        city: 'Hydrabad',
        location: '34B, Jubli Hills ,Hydrabad',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 20,
        img: 'https://th.bing.com/th/id/OIP.XsoCO0rYpHkFN1sWP1maqwAAAA?rs=1&pid=ImgDetMain',
        name: 'Hotel Hajmola Hydrabad',
        city: 'Hydrabad',
        location: 'City Road, quagejde Nagar, Hydrabad',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 21,
        img: 'https://th.bing.com/th/id/OIP.WLgVHenNfpslCSW1FHUiEgHaEK?w=748&h=421&rs=1&pid=ImgDetMain',
        name: 'Shangri-La Banglore',
        city: 'Banglore',
        location: 'Jp Nagar, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 22,
        img: 'https://th.bing.com/th/id/R.96df10ad7a23b6b885df38ecb8f517ae?rik=icZmFm4GkU%2bkLg&riu=http%3a%2f%2fwww.rajgovt.org%2fwp-content%2fuploads%2f2015%2f12%2fHotel.jpg&ehk=A3%2f7JNZmeQ63aGfB%2brGt1FJYsr9FIgGdeaxTJP4viVg%3d&risl=&pid=ImgRaw&r=0',
        name: 'Hotel Badsha',
        city: 'Banglore',
        location: 'Badsha Nagar, Banglore, Karnataka',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 23,
        img: 'https://i.pinimg.com/originals/eb/bb/08/ebbb081e197a36753bbdfc8dee3e47bc.jpg',
        name: 'Grand Place Hotel',
        city: 'HydraBad',
        location: '11C, tech city, Hydrabad',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 24,
        img: 'https://th.bing.com/th/id/OIP.3O_tJVmbAaYGDVtE5oTwoQAAAA?w=320&h=320&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 25,
        img: 'https://th.bing.com/th/id/OIP.zkP36OBXHCHnYriSSq2HTQHaEP?rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '5.0',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 26,
        img: 'https://th.bing.com/th/id/OIP.3O_tJVmbAaYGDVtE5oTwoQAAAA?w=320&h=320&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: '34B, whitefield, Banglore, Karnataka',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Lawra Loson',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 27,
        img: 'https://th.bing.com/th/id/OIP.3O_tJVmbAaYGDVtE5oTwoQAAAA?w=320&h=320&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Kolkata',
        location: 'Ecospace, new town, kolkata',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },





    // banquete 


    {
        id: 28,
        img: 'https://th.bing.com/th/id/OIP.w--Czm1NCqSx-Pb-PCgY0QHaE8?rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Hotel',
        city: 'Kolkata',
        location: 'Ecospace, new town, kolkata',
        rating: '4.5',
        type: '5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },

    {
        id: 29,
        img: 'https://live.staticflickr.com/7380/13554521483_3162572d8a.jpg',
        name: 'Le Maredian Hydrabad',
        city: 'Hydrabad',
        location: '99 st, Jubli Hills, Hydrabad',
        rating: '5.0',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 30,
        img: 'https://th.bing.com/th/id/OIP.Uj2EQm3dPTGjoBRWrRilvwHaEK?rs=1&pid=ImgDetMain',
        name: 'Shangari-La Kolkata',
        city: 'Kolkata',
        location: 'Ecospace, new town, kolkata',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 31,
        img: 'https://cdn0.weddingwire.in/vendor/5950/3_2/960/jpg/banquet-halls-trisara-convention-hall-event-space-2_15_425950-166447328626104.jpeg ',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: 'Ecospace, new town, Hydrabad',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 32,
        img: ' https://th.bing.com/th/id/R.3699ea3784dabc21d71f52a6019637b3?rik=ZAuWPTIsHDzgOA&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f04%2fBanqueting-Hall-Wallpaper-Full-HD.jpg&ehk=KLeuFdp%2fa9jQwYUIFIFLEM4eSUgJ559r6hrSWDMxwcw%3d&risl=&pid=ImgRaw&r=0',
        name: 'Velvet Villa Hotel',
        city: 'Hydrabad',
        location: 'Tech Park, Hi-tech City,Hydrabad',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 33,
        img: ' https://th.bing.com/th/id/OIP.4slnPJ8b_nN_Qyt1F2270AHaE7?rs=1&pid=ImgDetMain',
        name: 'The Plaza',
        city: 'Kolkata',
        location: 'Ecospace, new town, kolkata',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 34,
        img: 'https://th.bing.com/th/id/OIP.3O_tJVmbAaYGDVtE5oTwoQAAAA?w=320&h=320&rs=1&pid=ImgDetMain',
        name: 'GOlden Resort',
        city: 'Hydrabd',
        location: 'anna Park, 33c ,Hydrabad',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 35,
        img: 'https://th.bing.com/th/id/OIP._0vYYEtLPp3cimnBxZEg4AHaE6?w=800&h=530&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Resort',
        city: 'Banglore',
        location: 'hubli, Karnatka',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 36,
        img: 'https://th.bing.com/th/id/OIP.Mm_pBCG2aR_w8NEvPcIluAHaE9?w=747&h=500&rs=1&pid=ImgDetMain',
        name: 'RG Hotel and Resort',
        city: 'Banglore',
        location: 'Malur,banglore,karnataka',
        rating: '4.5',
        type: 'Resort 5 Star Hotel',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 37,
        img: 'https://th.bing.com/th/id/R.da157e1a20f4c534641f77d68a2af094?rik=MreMizIdFusUNQ&riu=http%3a%2f%2ftravelspan.in%2fwp-content%2fuploads%2f2019%2f04%2fIndian-Hotels-Company-Limited-opens-Taj-Rishikesh-Resort-and-Spa-in-Uttarakhand.jpg&ehk=88YHTB5Ugt2Jf9LxbObknpsoIZ0XAL2T5bBzQR7nHkU%3d&risl=&pid=ImgRaw&r=0',
        name: 'Velvet Villa Hotel',
        city: 'Banglore',
        location: 'Jp Nagar, Banglore,3393',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 38,
        img: 'https://storage.googleapis.com/hotels2thailand-storage/pictures/products/01414501-204814-original.jpg',
        name: 'RedVelvet Conviation Center',
        city: 'Banglore',
        location: 'Mejistic, Yashvantpur, Banglore',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 39,
        img: 'https://www.homestratosphere.com/wp-content/uploads/2021/02/two-story-4-bedroom-modern-farmhouse-with-a-balcony-loft-Feb92021-min.jpg',
        name: 'The Plaza Farmhouse',
        city: 'Banglore',
        location: 'Ecospace, new town, Banglore',
        rating: '4.5',
        type: 'Farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 40,
        img: ' https://th.bing.com/th/id/OIP.4slnPJ8b_nN_Qyt1F2270AHaE7?rs=1&pid=ImgDetMain',
        name: 'The Plaza Hall',
        city: 'Banglore',
        location: 'Ecospace, new town, kolkata',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 41,
        img: 'https://th.bing.com/th/id/OIP.3O_tJVmbAaYGDVtE5oTwoQAAAA?w=320&h=320&rs=1&pid=ImgDetMain',
        name: 'GOlden Rik Conveation Center',
        city: 'Banglore',
        location: 'anna Park, 33c ,Hydrabad',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 42,
        img: 'https://th.bing.com/th/id/OIP._0vYYEtLPp3cimnBxZEg4AHaE6?w=800&h=530&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Resort',
        city: 'Banglore',
        location: 'hubli, Karnatka',
        rating: '4.5',
        type: 'Resort',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },

    {
        id: 43,
        img: ' https://th.bing.com/th/id/OIP.MqKWtgXA1Cvsn5HPXFuoYgAAAA?w=400&h=300&rs=1&pid=ImgDetMain',
        name: 'Himaloyan Homestay',
        city: 'Hydrabad',
        location: 'Ecospace, new town, Hydrabad',
        rating: '4.5',
        type: 'farmhouse',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 44,
        img: 'https://cityhotels.ge/modules/photo_gallery/uploads/step_1/2843.jpg',
        name: 'GOlden Resort',
        city: 'Hydrabd',
        location: 'anna Park, 33c ,Hydrabad',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },
    {
        id: 45,
        img: 'https://th.bing.com/th/id/OIP.KqcsD-cG1qusqiYiIeTW3gHaE8?w=550&h=367&rs=1&pid=ImgDetMain',
        name: 'Velvet Villa Resort',
        city: 'Hydrabad',
        location: 'hubli, Karnatka',
        rating: '4.5',
        type: 'Banquet Hall',
        price: ['Veg -1000', 'NonVeg - 1500'],
        photos: [img1, img2, img3, img5, img10, img11, img12, img13, img14, img15],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['33 rooms', '100 pax'],
    },



    // photographsdata .........................................
    {
        id: 46,
        img: 'https://image.wedmegood.com/resized/450X/uploads/member/168101/1571341597_DSC_3347_Edit.jpg?crop=8,90,2030,1142',
        name: 'Click-O-Craphy',
        city: 'Banglore',
        location: 'hubli, Karnatka',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['50,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 47,
        img: 'https://image.wedmegood.com/resized/450X/uploads/project/269386/1699905029_DSC_0136.JPG?crop=12,188,2022,1137',
        name: 'The Wedding Gallery',
        city: 'Hydrabad',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 49,
        img: 'https://image.wedmegood.com/resized/450X/uploads/member/443535/1640415468_MG0_6354_Edit.jpg?crop=12,161,2023,1138',
        name: 'The Wedding Gallery',
        city: 'Banglore',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },

    {
        id: 50,
        img: 'https://image.wedmegood.com/resized/450X/uploads/member/597002/1652675541_DSC01718_copy.jpg?crop=15,222,2033,1143',
        name: 'The Wedding Gallery',
        city: 'Banglore',
        location: '33c, Jubli Hills, Banglore',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 51,
        img: 'https://image.wedmegood.com/resized/450X/uploads/member/19691/1616609106_image6768.jpg?crop=0,189,828,465',
        name: 'The Wedding Gallery',
        city: 'Banglore',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 52,
        img: 'https://image.wedmegood.com/resized/450X/uploads/project/260798/1692972834_35.jpg?crop=111,249,1067,600',
        name: 'The Wedding Gallery',
        city: 'Hydrabad',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 53,
        img: 'https://image.wedmegood.com/resized/450X/uploads/project/227003/1670309402_SBH07923.jpg?crop=12,191,2023,1138',
        name: 'The Wedding Gallery',
        city: 'Hydrabad',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },
    {
        id: 54,
        img: 'https://image.wedmegood.com/resized/450X/uploads/member/308960/1566501289_0W4A3049_Edit_2.jpg?crop=0,27,2048,1152',
        name: 'The Wedding Gallery',
        city: 'Hydrabad',
        location: '33c, Jubli Hills, Hydrabad',
        rating: '4.5',
        type: 'Photo + Video',
        price: ['125,000 per day', ''],
        photos: [],
        reviews: [
            {
                author: 'Jhon Doe',
                date: '22 Nov 2022',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            },
            {
                author: 'Dua lipa',
                date: '02 Nov 2019',
                rating: '4.4',
                content: 'This hotel is good for everyone ldjf ksdad aodkf dfjd kfjd fdkf dfkdfjlsakdjfd dkf dfkjdf '
            }
        ],
        faqs: [
            {
                que: 'Does Royalton Hotel allow small size gatherings (<100) ?',
                ans: 'Less than 50 Pax allowed'
            },
            {
                que: 'What is Royalton Hotels policy on catering?',
                ans: 'Inhouse catering only'
            },
            {
                que: 'Is outside alchol permitted at royalton Hotel?',
                ans: 'Outside alchol not permitted, inhouse alchol abaliavle'
            }
        ],
        about: " You may have an opulent and amazing banqueting experience at Royalton Hotel in Abids, Hyderabad. This facility offers a number of halls and an outside area where various wedding-related festivities can be planned. To make your occasion memorable and outstanding, it offers spacious, numerous event locations with gorgeous decor, expert services, and a range of cuisines. Royalton Hotel is your one-stop location for all activities associated with pre-wedding events, wedding events, and post-wedding events. Because your wedding day is one of the most significant days of your life and you are the centre of attention, you should be treated with respect and pampered.",

        areas: [
            {
                place: 'Outdoor',
                type: 'Banquet Hall',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Outdoor',
                type: 'Lawn area',
                capacity: '100 Seatting | 200 floating'
            },
            {
                place: 'Indoor',
                type: 'Poolside',
                capacity: '100 Seatting | 200 floating'
            }
        ],
        desc: ['Professionalism', 'Value for money'],
    },


]



export default venueList;