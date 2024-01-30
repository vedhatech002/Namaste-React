import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header
 *   - Logo
 *   - Nav Items
 * - Body
 *  - Search
 *  - RestaruntContainer
 *    - RestaruntCard
 *      -Img
 *      -resName of Res, Star Rating, Cusine, delevery Time
 * - Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  -Contact
 */
const restaruntsData = [
  {
    id: "405742",
    resName: "KMS Hakkim Kalyana Biriyani Restaurant",
    cloudinaryImageId: "ovmclgi9ebnvi093hakf",
    locality: "Higheays Colony",
    areaName: "TVS Tolgate",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Biryani"],
    avgRating: 4.3,
    parentId: "387543",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",

    sla: {
      deliveryTime: 22,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 22:40:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "15% OFF",
      subHeader: "UPTO ₹45",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "297853",
    resName: "Suvai Briyani Family Restaurant",
    cloudinaryImageId: "n4dtclgkxfxlo9vic4hp",
    locality: "Ubaidulrahman",
    areaName: "Karumandapam",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "North Indian", "Biryani"],
    avgRating: 4.4,
    parentId: "17966",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "657095",
    resName: "Suvai Briyani Family Restaurant Elite",
    cloudinaryImageId: "b33020eb6608b35bc925b8cf8614b418",
    locality: "Palayambazar Road",
    areaName: "Thillai Nagar",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Indian"],
    avgRating: 4.3,
    parentId: "394887",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "617528",
    resName: "Arbutha Bhavan Veg Restaurant (AC)",
    cloudinaryImageId: "eljco5cihwyrhu01lcui",
    locality: "Sangillyandapuram",
    areaName: "TVS Tolgate",
    costForTwo: "₹300 for two",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Juices",
      "Beverages",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "368525",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "89807",
    resName: "Suvai Biriyani",
    cloudinaryImageId: "rbsg8tkjrufs3ngvk2zz",
    locality: "Wireless Road",
    areaName: "Wireless road, Airport",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "North Indian", "Biryani"],
    avgRating: 4.4,
    parentId: "18304",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹175 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "72970",
    resName: "Banana Leaf AC Restaurant",
    cloudinaryImageId: "jomkf7zxvwwhbjh2shio",
    locality: "Everest Park Residency",
    areaName: "TVS Tolgate",
    costForTwo: "₹500 for two",
    cuisines: [
      "Chinese",
      "North Indian",
      "South Indian",
      "Ice Cream",
      "Biryani",
    ],
    avgRating: 4.4,
    parentId: "6474",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 16,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "588597",
    resName: "Juice 700",
    cloudinaryImageId: "qun7dgqvkpxqijo0v3vq",
    locality: "Pudukottai Road",
    areaName: "KK Nagar",
    costForTwo: "₹150 for two",
    cuisines: ["Pastas", "Chinese", "Burgers", "Ice Cream"],
    avgRating: 4.2,
    parentId: "285276",
    avgRatingString: "4.2",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 21:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹175 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "756333",
    resName: "Madras Midnight Biriyani",
    cloudinaryImageId: "71f95af64cc899103d040aa28bc1d44c",
    locality: "Salai Road",
    areaName: "Thillai Nagar",
    costForTwo: "₹300 for two",
    cuisines: ["Biryani", "Chinese", "Barbecue", "North Indian"],
    avgRating: 4.1,
    parentId: "447343",
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 6.4,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "6.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-31 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "523453",
    resName: "Suvai Briyani Restaurant",
    cloudinaryImageId: "h4a69fatnrhw9dnprxvj",
    locality: "palakarai",
    areaName: "KK Nagar",
    costForTwo: "₹250 for two",
    cuisines: ["Biryani", "Arabian", "South Indian"],
    avgRating: 4.4,
    parentId: "312306",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        ></img>
      </div>
      <nav className="nav">
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Cart</a>
      </nav>
    </header>
  );
};

const styleCard = {
  backgroundColor: "lightblue",
};

//resName: "KMS Hakkim Kalyana Biriyani Restaurant",
// cloudinaryImageId: "ovmclgi9ebnvi093hakf",
// locality: "Higheays Colony",
// areaName: "TVS Tolgate",
// costForTwo: "₹250 for two",
// cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Biryani"],
// avgRating: 4.3,
// sla: {
//     deliveryTime: 22,
const RestaruntCard = (props) => {
  const { resData } = props;
  //   const {resName, cuisine, avgRating } = resData;
  //   const { deliveryTime } = resData?.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-log"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData?.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <section className="body">
      <div className="search-container">search</div>
      <div className="res-container" style={{ padding: "1rem" }}>
        {restaruntsData.map((restarunt) => (
          <RestaruntCard key={restarunt.id} resData={restarunt} />
        ))}
      </div>
    </section>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
