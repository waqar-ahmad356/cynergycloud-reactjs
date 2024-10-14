import React from "react";
import "./Pricing.css";
import basic from "../../assets/basic.png";
import check_circle from "../../assets/Check Circle.png";
import all_data from "../../assets/all_data";
import { useState,useEffect } from 'react';


// Map country codes to currency symbols
const currencySymbolMap = {
  USD: "$",    // United States Dollar
  GBP: "£",    // British Pound Sterling
  EUR: "€",    // Euro
  INR: "₹",    // Indian Rupee
  PKR: "₨",    // Pakistani Rupee
  AUD: "A$",   // Australian Dollar
  CAD: "C$",   // Canadian Dollar
  CNY: "¥",    // Chinese Yuan
  JPY: "¥",    // Japanese Yen
  RUB: "₽",    // Russian Ruble
  BRL: "R$",   // Brazilian Real
  ZAR: "R",    // South African Rand
  MXN: "$",    // Mexican Peso
  SGD: "S$",   // Singapore Dollar
  CHF: "CHF",  // Swiss Franc
  SEK: "kr",   // Swedish Krona
  NOK: "kr",   // Norwegian Krone
  DKK: "kr",   // Danish Krone
  NZD: "NZ$",  // New Zealand Dollar
  KRW: "₩",    // South Korean Won
  THB: "฿",    // Thai Baht
  MYR: "RM",   // Malaysian Ringgit
  IDR: "Rp",   // Indonesian Rupiah
  VND: "₫",    // Vietnamese Dong
  SAR: "﷼",    // Saudi Riyal
  AED: "د.إ",  // United Arab Emirates Dirham
  NGN: "₦",    // Nigerian Naira
  EGP: "£",    // Egyptian Pound
  KES: "KSh",  // Kenyan Shilling
  BDT: "৳",    // Bangladeshi Taka
  TRY: "₺",    // Turkish Lira
  HKD: "HK$",  // Hong Kong Dollar
  ILS: "₪",    // Israeli Shekel
  ARS: "$",    // Argentine Peso
  CLP: "$",    // Chilean Peso
  COP: "$",    // Colombian Peso
  PEN: "S/",   // Peruvian Sol
  PHP: "₱",    // Philippine Peso
  LKR: "Rs",   // Sri Lankan Rupee
  QAR: "﷼",    // Qatari Riyal
  KWD: "KD",   // Kuwaiti Dinar
  OMR: "﷼",    // Omani Rial
  BHD: "BD",   // Bahraini Dinar
  JMD: "J$",   // Jamaican Dollar
  ZWL: "Z$",   // Zimbabwean Dollar
  IRR: "﷼",    // Iranian Rial
  IQD: "د.ع",  // Iraqi Dinar
  JOD: "د.ا",  // Jordanian Dinar
  LBP: "ل.ل",  // Lebanese Pound
  MMK: "K",    // Myanmar Kyat
  ISK: "kr",   // Icelandic Krona
  PLN: "zł",   // Polish Zloty
  HUF: "Ft",   // Hungarian Forint
  CZK: "Kč",   // Czech Koruna
  RON: "lei",  // Romanian Leu
  BGN: "лв",   // Bulgarian Lev
  HRK: "kn",   // Croatian Kuna
  UAH: "₴",    // Ukrainian Hryvnia
  KZT: "₸",    // Kazakhstani Tenge
  UZS: "лв",   // Uzbekistani Som
  GEL: "₾",    // Georgian Lari
  AMD: "֏",    // Armenian Dram
  AZN: "₼",    // Azerbaijani Manat
  BYN: "Br",   // Belarusian Ruble
  TMT: "T",    // Turkmenistani Manat
  KGS: "с",    // Kyrgyzstani Som
  MNT: "₮",    // Mongolian Tugrik
  // Add more currencies as needed
};

const Pricing = () => {
  const [currencies, setCurrencies] = useState([]); // Available currencies
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default selected currency
  const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate
  const [prices, setPrices] = useState({ basic: 99, pro: 149, enterprise: 199 }); // Prices in USD

  // Fetch available currencies
  const fetchCurrencies = async () => {
    try {
      const api_key="6ec1f09c44cdd1fbb203274c67475489";
      const res = await fetch(`http://api.currencylayer.com/list?access_key=${api_key}`);
      const data = await res.json();
      setCurrencies(data.currencies); // Extract only currency codes (like USD, INR)
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch exchange rate and convert price
  const fetchExchangeRate = async (currency) => {
    try {
      const apikey="Zm84WOoRBmUglB0ucbMeOA1sPZLPbiVw"
      const res = await fetch(`https://api.currencybeacon.com/v1/convert?from=USD&to=${currency}&amount=1&api_key=${apikey}`);
      const data = await res.json();
      const rate = data.response.value;
      setExchangeRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch user's location to determine the currency
  const fetchUserLocation = async () => {
    try {
      const apiKey = "478fe52c3fc9487fb0049aa136d319dc"; // Your API key for ipgeolocation.io
      const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
      const data = await res.json();
      const countryCode = data.country_code2; // Get user's country code (e.g., "US")
      const userCurrency = getCurrencyByCountryCode(countryCode) || countryCode; // Map country code to currency code
      console.log(userCurrency)
      setSelectedCurrency(userCurrency);
    } catch (error) {
      console.log("Error fetching user location", error);
    }
  };

 // Map country code to currency code
const getCurrencyByCountryCode = (countryCode) => {
  const currencyMap = {
    US: "USD",   // United States
    GB: "GBP",   // United Kingdom
    EU: "EUR",   // European Union
    IN: "INR",   // India
    PK: "PKR",   // Pakistan
    AU: "AUD",   // Australia
    CA: "CAD",   // Canada
    CN: "CNY",   // China
    JP: "JPY",   // Japan
    RU: "RUB",   // Russia
    BR: "BRL",   // Brazil
    ZA: "ZAR",   // South Africa
    MX: "MXN",   // Mexico
    SG: "SGD",   // Singapore
    CH: "CHF",   // Switzerland
    SE: "SEK",   // Sweden
    NO: "NOK",   // Norway
    DK: "DKK",   // Denmark
    NZ: "NZD",   // New Zealand
    KR: "KRW",   // South Korea
    TH: "THB",   // Thailand
    MY: "MYR",   // Malaysia
    ID: "IDR",   // Indonesia
    VN: "VND",   // Vietnam
    SA: "SAR",   // Saudi Arabia
    AE: "AED",   // United Arab Emirates
    NG: "NGN",   // Nigeria
    EG: "EGP",   // Egypt
    KE: "KES",   // Kenya
    BD: "BDT",   // Bangladesh
    TR: "TRY",   // Turkey
    HK: "HKD",   // Hong Kong
    IL: "ILS",   // Israel
    AR: "ARS",   // Argentina
    CL: "CLP",   // Chile
    CO: "COP",   // Colombia
    PE: "PEN",   // Peru
    PH: "PHP",   // Philippines
    LK: "LKR",   // Sri Lanka
    QA: "QAR",   // Qatar
    KW: "KWD",   // Kuwait
    OM: "OMR",   // Oman
    BH: "BHD",   // Bahrain
    JM: "JMD",   // Jamaica
    ZW: "ZWL",   // Zimbabwe
    IR: "IRR",   // Iran
    IQ: "IQD",   // Iraq
    JO: "JOD",   // Jordan
    LB: "LBP",   // Lebanon
    MM: "MMK",   // Myanmar
    IS: "ISK",   // Iceland
    PL: "PLN",   // Poland
    HU: "HUF",   // Hungary
    CZ: "CZK",   // Czech Republic
    RO: "RON",   // Romania
    BG: "BGN",   // Bulgaria
    HR: "HRK",   // Croatia
    UA: "UAH",   // Ukraine
    KZ: "KZT",   // Kazakhstan
    UZ: "UZS",   // Uzbekistan
    GE: "GEL",   // Georgia
    AM: "AMD",   // Armenia
    AZ: "AZN",   // Azerbaijan
    BY: "BYN",   // Belarus
    TM: "TMT",   // Turkmenistan
    KG: "KGS",   // Kyrgyzstan
    MN: "MNT",   // Mongolia
    ZW: "ZWL",   // Zimbabwe
    IR: "IRR",   // Iran
    IQ: "IQD",   // Iraq
    JO: "JOD",   // Jordan
    LB: "LBP",   // Lebanon
    MM: "MMK",   // Myanmar
    IS: "ISK",   // Iceland
    PL: "PLN",   // Poland
    HU: "HUF",   // Hungary
    CZ: "CZK",   // Czech Republic
    RO: "RON",   // Romania
    BG: "BGN",   // Bulgaria
    HR: "HRK",   // Croatia
    UA: "UAH",   // Ukraine
    KZ: "KZT",   // Kazakhstan
    UZ: "UZS",   // Uzbekistan
    GE: "GEL",   // Georgia
    AM: "AMD",   // Armenia
    AZ: "AZN",   // Azerbaijan
    BY: "BYN",   // Belarus
    TM: "TMT",   // Turkmenistan
    KG: "KGS",   // Kyrgyzstan
    MN: "MNT",   // Mongolia
    // Add more country-to-currency mappings as needed
  };
  return currencyMap[countryCode];
};


  // Get the symbol for a selected currency
  const getCurrencySymbol = (currencyCode) => {
    return currencySymbolMap[currencyCode] || currencyCode; // Fallback to currency code if symbol not found
  };

  // On component mount, fetch currencies and user location
  useEffect(() => {
    fetchCurrencies();
    fetchUserLocation();
  }, []);

  // Update exchange rate when the selected currency or location changes
  useEffect(() => {
    if (selectedCurrency !== "USD") {
      fetchExchangeRate(selectedCurrency);
    } else {
      setExchangeRate(1); // If USD is selected, no conversion needed
    }
  }, [selectedCurrency]);

  // Format price based on the selected currency and exchange rate
  const formatPrice = (price) => {
    const symbol = getCurrencySymbol(selectedCurrency);
    return symbol + (price * exchangeRate).toFixed(2);  // Combine symbol with the formatted price
  };
  

  return (
    <div className="pricing-section">
      <div className="pricing-plans">
        <div className="pricing-head">
          <h2>Affordable pricing plans</h2>
          <p>Flexible Plans Tailored to Your Goals</p>
        </div>
        <div className="pricing-users">
          <p>How many users you have?</p>
          <span className="user-btn">10</span>
          <span className="user">user</span>
        </div>
      </div>
      <div className="pricing-cards">
        <div className="card">
          <div className="card-head">
            <img src={basic} alt="basic-plan" />
            <div className="card-head-content">
              <p className="mb-0">{all_data.basic_card.subtitle}</p>
              <h2>{all_data.basic_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className="mb-0">{all_data.basic_card.description}</p>
          </div>
          <div className="pricing-plan-details">
            <h2>{formatPrice(prices.basic)}</h2><span>/monthly</span>
          </div>
          <div className="features">
            <h2>What’s included</h2>
            <div className="feature">
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.basic_card.feature_1}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.basic_card.feature_2}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.basic_card.feature_3}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.basic_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="get-btn">
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
        {/*-------------card 2------------*/}
        <div className="card" style={{ backgroundColor: "#22739C" }}>
          <div className="card-head">
            <img src={basic} alt="basic-plan" />
            <div className="card-head-content">
              <p className="mb-0" style={{ color: "#fff" }}>
                {all_data.pro_card.subtitle}
              </p>
              <h2 style={{ color: "#fff" }}>{all_data.pro_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className="mb-0" style={{ color: "#fff" }}>
              {all_data.pro_card.description}
            </p>
          </div>
          <div className="pricing-plan-details">
            <h2 style={{ color: "#fff" }}>{formatPrice(prices.pro)}</h2>
            <span style={{ color: "#fff" }}>/monthly</span>
          </div>
          <div className="features">
            <h2 style={{ color: "#fff" }}>What’s included</h2>
            <div className="feature">
              <div className="feature1">
                <img src={all_data.pro_card.check_circle} alt="" />
                <p className="mb-0 text-white">{all_data.pro_card.feature_1}</p>
              </div>
              <div className="feature1">
                <img src={all_data.pro_card.check_circle} alt="" />
                <p className="mb-0 text-white">{all_data.pro_card.feature_2}</p>
              </div>
              <div className="feature1">
                <img src={all_data.pro_card.check_circle} alt="" />
                <p className="mb-0 text-white">{all_data.pro_card.feature_3}</p>
              </div>
              <div className="feature1">
                <img src={all_data.pro_card.check_circle} alt="" />
                <p className="mb-0 text-white">{all_data.pro_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="get-btn">
            <button
              className="btn btn-primary bg-white"
              style={{ color: "#22739C" }}
            >
              Get started
            </button>
          </div>
          <p className="popular-btn px-4 py-2 text-white mt-2">Popular</p>
        </div>
        {/*------------------------card 3 -------------------*/}
        <div className="card">
          <div className="card-head">
            <img src={basic} alt="basic-plan" />
            <div className="card-head-content">
              <p className="mb-0">{all_data.enterprise_card.subtitle}</p>
              <h2>{all_data.enterprise_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className="mb-0">{all_data.enterprise_card.description}</p>
          </div>
          <div className="pricing-plan-details" >
            <h2>{formatPrice(prices.enterprise)}</h2><span>/monthly</span>
          </div>
          <div className="features">
            <h2>What’s included</h2>
            <div className="feature">
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.enterprise_card.feature_1}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.enterprise_card.feature_2}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.enterprise_card.feature_3}</p>
              </div>
              <div className="feature1">
                <img src={check_circle} alt="" />
                <p className="mb-0">{all_data.enterprise_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="get-btn">
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
