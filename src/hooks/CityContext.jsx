
import { createContext, useContext, useState } from "react";

export const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
    const [cityName, setCityName] = useState('All Cities');
    const [venueType, setVenueType] = useState('banquet');
    const [vendorType, setVendorType] = useState('photographer');
    // const [user, setUser] = useState(false);



    const updateCity = (newCity) => {
        setCityName(newCity);
    }
    const updateVenueType = (venue) => {
        setVenueType(venue);
    }
    const updateVendorType = (vendor) => {
        setVendorType(vendor);
    }
    // const updateUser = (isLog) => {
    //     setUser(isLog);
    // }

    return (
        <CityContext.Provider value={{
            cityName, updateCity,
            venueType, updateVenueType,
            vendorType, updateVendorType,
            // user, updateUser
        }}>
            {children}
        </CityContext.Provider>
    )
}

export const useCityContext = () => {
    return useContext(CityContext);
}







