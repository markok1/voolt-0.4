const BASE_URL = "https://app.voolt.com";
const API_URL = "https://api.voolt.com/api";
const COOKIE_TOKEN_NAME = "_Secure-1PAUTHV";
const COOKIE_WEBSITE_ID_NAME = "_Secure-1PWEBID";
const BASE_PATH = "/marketing2";

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

const industrySearchInput = document.getElementById("industry-search-input");
const industrySearchResults = document.getElementById("industry-search-results");
const industryButton = document.getElementById("industry-search-button");

const backButton = document.getElementById("back-button-website");

const businessNameInput = document.getElementById("business-name-input-text");
const addressSearchInput = document.getElementById("address-search-input");
const addressSearchResults = document.getElementById("address-search-results");

const teamSizeInput = document.querySelector('input[name="team-size"]:checked');

const createWebsiteButton = document.getElementById("create-website-button");

// const websitePreview = document.getElementById("website-preview");
const createAccountButton = document.getElementById("create-account-button");

let searchQuery = new URL(window.location.href).search;

let industries = [];
let onboardingData = {
  industry: null,
  businessName: "",
  location: null,
};

//Endpoints
const api = {
  getIndustries: async () => {
    let res = await fetch(`${API_URL}/cmsv2/industries`);
    return res.json();
  },
  createWebsite: async (data) => {
    let res = await fetch(`${API_URL}/onboardingv2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  createAccount: async (data) => {
    let res = await fetch(`${API_URL}/accountv2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};

const MapBoxClient = {
  searchAddress: async (searchTerm, center = "") => {
    let res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?autocomplete=true&country=us,ca&proximity=${center}&fuzzyMatch=true&limit=5&types=place,address,neighborhood,locality&access_token=pk.eyJ1Ijoidm9vbHRhaSIsImEiOiJjbGdkdXhjbGYxbXJmM3VwYzJpNW45c3RvIn0.ZGcCQboEzKD8hOGsqfo34Q`);
    return res.json();
  },
};

//Helpers
const sendEvent = (eventName, props = {}, callback = () => {}) => {
  if (typeof eventName === "undefined" || !eventName) return callback();
  try {
    window.dataLayer = window.dataLayer || [];
    if (eventName?.ecommerce === null) {
      window.dataLayer.push({ ecommerce: null });
    } else {
      window.dataLayer.push({
        event: eventName,
        ...props,
      });
    }
    setTimeout(() => {
      return callback();
    }, 250);
  } catch (err) {
    console.log(err);
  }
};
function disableButton(button) {
  button.classList.add("disabled");
  button.setAttribute("disabled", "disabled");
}
function enableButton(button) {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
}
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const locationHelper = {
  getCity(data) {
    if (data.context.find((element) => element.id.includes("place"))) {
      return data.context.find((element) => element.id.includes("place")).text;
    } else {
      return data.text;
    }
  },
  getCountry(data) {
    return data.context.find((element) => element.id.includes("country")).text || null;
  },
  getCountryShort(data) {
    return data.context
      .find((element) => element.id.includes("country"))
      .text.toLowerCase()
      .includes("ca")
      ? "ca"
      : "us";
  },
  getCoords(data, index) {
    return data.center[index];
  },
  getState(data) {
    return data.context.find((element) => element.id.includes("region")).text || null;
  },
  getZipCode(data) {
    return data.context.find((element) => element.id.includes("postcode"))?.text || null;
  },
};
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function getTimeInSeconds(exdays) {
  const d = new Date();
  let formula = exdays === 0 ? 5 * 60 * 1000 : exdays * 24 * 60 * 60 * 1000;
  d.setTime(d.getTime() + formula);
  return d.toUTCString();
}
function setCookie(cname, cvalue, exdays = 0, priority = "High", sameSite = "Lax") {
  let expires = "expires=" + getTimeInSeconds(exdays);
  let domain = ".voolt.com";

  if (location.origin.includes("localhost")) {
    domain = "localhost";
  } else if (location?.port === "3001") {
    return (document.cookie = `${cname}=${cvalue};path=/;priority=${priority};${expires};`);
  }

  return (document.cookie = `${cname}=${cvalue};domain=${domain};path=/;priority=${priority};${expires};SameSite=${sameSite};secure;`);
}
function getCookie(name) {
  let cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name + "=") == 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}
function splitCookieForGTM(cookie) {
  if (typeof cookie === "boolean") {
    return "";
  } else {
    let splitCookie = cookie.split(".");
    return `${splitCookie[2]}.${splitCookie[3]}`;
  }
}

//Functions
function searchIndustries(search, optionsList) {
  let filteredOptions = [];
  if (!optionsList) return true;
  if (!search || search?.trim() === "") {
    filteredOptions = [];
  } else {
    try {
      filteredOptions = [
        ...optionsList.filter((option) => option.name.toLowerCase().startsWith(search.toLowerCase())),
        ...optionsList.filter((option) => option.name.toLowerCase().includes(search.toLowerCase())),
        ...optionsList.filter((option) => option.synonyms.find((element) => element.toLowerCase() === search.toLowerCase())),
        ...optionsList.filter((option) => option.synonyms.find((element) => element.toLowerCase().startsWith(search.toLowerCase()))),
        ...optionsList.filter((option) => option.synonyms.find((element) => element.toLowerCase().includes(search.toLowerCase()))),
        ...optionsList.filter((option) => option.services.find((element) => element.name.toLowerCase().startsWith(search.toLowerCase()) || element.name.toLowerCase() === search.toLowerCase())),
        ...optionsList.filter((option) => option.services.find((element) => element.name.toLowerCase().includes(search.toLowerCase()) && !element.name.toLowerCase().startsWith(search.toLowerCase()))),
        ...optionsList.filter((option) => option.services.find((element) => element.synonyms.find((synonym) => synonym.toLowerCase().startsWith(search.toLowerCase()) || synonym.toLowerCase() === search.toLowerCase()))),
        ...optionsList.filter((option) => option.services.find((element) => element.synonyms.find((synonym) => synonym.toLowerCase().includes(search.toLowerCase()) && !synonym.toLowerCase().startsWith(search.toLowerCase())))),
      ];
    } catch (err) {
      console.log(err);
    }

    filteredOptions = [...new Set(filteredOptions)];
  }
  return filteredOptions;
}
function selectIndustry(industry) {
  industrySearchInput.value = industry.name;
  onboardingData.industry = industry;
  industrySearchResults.innerHTML = "";

  if (onboardingData.industry) {
    enableButton(industryButton);
  }

  return;
}
async function searchAddresses(searchedTerm) {
  let res = await MapBoxClient.searchAddress(searchedTerm);
  return await res.features;
}
function selectAddress(address) {
  addressSearchInput.value = address.place_name;
  addressSearchResults.innerHTML = "";
  onboardingData.location = address;
  readyToCreateWebsite();
  return;
}
function readyToCreateWebsite() {
  if (onboardingData.industry?.id && onboardingData.businessName && onboardingData.location?.id) {
    enableButton(createWebsiteButton);
    console.log("Ready to create website");
  } else {
    disableButton(createWebsiteButton);
    console.log("Not ready to create website");
  }
}

//On DOM Load
async function init() {
  if (step1) {
    setCookie("vlt_referrer_url", document.referrer + document.location.search, 30);
    await api.getIndustries().then((res) => {
      industries = res.data.industries;
    });
    //Event Listeners
    industrySearchInput.addEventListener("input", function (ev) {
      let searchedTerm = ev.target.value;
      industrySearchResults.innerHTML = "";
      onboardingData.industry = null;
      disableButton(industryButton);

      //if search term is less than 3 characters, don't search
      if (searchedTerm.trim().length < 3) return;

      let filteredIndustries = searchIndustries(searchedTerm, industries);

      //if no results, don't show anything
      if (filteredIndustries.length === 0) return;

      let industryTrack = document.createElement("div");
      industryTrack.classList.add("industry-track");
      filteredIndustries.forEach((industry) => {
        let industryDiv = document.createElement("button");
        industryDiv.classList.add("industry-option");
        industryDiv.innerHTML = industry.name;
        industryDiv.addEventListener("click", function () {
          selectIndustry(industry);
        });
        industryTrack.appendChild(industryDiv);
      });
      industrySearchResults.appendChild(industryTrack);
    });
    industryButton.addEventListener("click", function () {
      saveToLocalStorage("voolt-onboarding", onboardingData);
      window.location.href = BASE_PATH + "/2/" + searchQuery;
    });
  }
  if (step2) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("industryId")) {
      await api.getIndustries().then((res) => {
        onboardingData["industry"] = res.data.industries?.find((e) => e.id === parseInt(urlParams.get("industryId")));
      });
    } else {
      onboardingData = getFromLocalStorage("voolt-onboarding") || {};
    }

    businessNameInput.addEventListener("input", function (ev) {
      onboardingData.businessName = ev.target.value;
      readyToCreateWebsite();
    });
    addressSearchInput.addEventListener("input", function (ev) {
      let searchedTerm = ev.target.value;
      addressSearchResults.innerHTML = "";
      if (searchedTerm.trim().length < 2) return;
      //debounce search to avoid too many requests
      debounce(
        searchAddresses(searchedTerm).then((res) => {
          let filteredAddresses = res;
          if (filteredAddresses.length === 0) return;
          let addressTrack = document.createElement("div");
          addressTrack.classList.add("address-track");
          filteredAddresses.forEach((address) => {
            let addressDiv = document.createElement("button");
            addressDiv.classList.add("address-option");
            addressDiv.innerHTML = address.place_name;
            addressDiv.addEventListener("click", function () {
              selectAddress(address);
            });
            addressTrack.appendChild(addressDiv);
          });
          addressSearchResults.appendChild(addressTrack);
        }),
        250
      );
      readyToCreateWebsite();
    });
    createWebsiteButton.addEventListener("click", function () {
      const body = {
        businessName: onboardingData.businessName,
        industryId: onboardingData.industry?.id,
        industryType: onboardingData.industry?.type,
        contentWritten: teamSizeInput.value === "Team" ? `For a business | Example: “We are…”` : `For a single person | Example: “I am…”`,
        country: locationHelper.getCountryShort(onboardingData.location),
        location: {
          address1: onboardingData.location.place_name,
          city: locationHelper.getCity(onboardingData.location),
          country: locationHelper.getCountry(onboardingData.location),
          longitude: locationHelper.getCoords(onboardingData.location, 0),
          latitude: locationHelper.getCoords(onboardingData.location, 1),
          radius: 50,
          zipcode: locationHelper.getZipCode(onboardingData.location),
          state: locationHelper.getState(onboardingData.location),
        },
      };
      api.createWebsite(body).then((data) => {
        saveToLocalStorage("voolt-onboarding", data);
        window.location.href = BASE_PATH + "/preview/" + searchQuery;
      });
    });
    backButton.addEventListener("click", function () {
      window.location.href = BASE_PATH + "/1/" + searchQuery;
    });
    readyToCreateWebsite();
  }
  if (step3) {
    let websiteInfo = getFromLocalStorage("voolt-onboarding");
    if (!websiteInfo) {
      window.location.href = BASE_PATH + "/1/" + searchQuery;
    }
    // websitePreview.src = websiteInfo.data.lpUrl;

    createAccountButton.addEventListener("click", function () {
      var body = {
        firstName: document.getElementById("first-name-input-text").value,
        lastName: document.getElementById("last-name-input-text").value,
        email: document.getElementById("email-input-text").value,
        password: document.getElementById("password-input-text").value,
        confirmPassword: document.getElementById("password-input-text").value,
        termsAndConditions: document.getElementById("checkboxId-terms_conditions").value,
        lpKey: websiteInfo.data.lpKey,
        referrerUrl: getCookie("vlt_referrer_url") || "direct",
        googleClientId: splitCookieForGTM(getCookie("_ga")),
        onboardFlow: "adsOnly",
      };
      api.createAccount(body).then(({ data }) => {
        removeFromLocalStorage("voolt-onboarding");
        setCookie(COOKIE_TOKEN_NAME, data.authModel.token, 30);
        setCookie(COOKIE_WEBSITE_ID_NAME, data.authModel.websites[0].id, 30);
        //Custom Event for GTM
        sendEvent("Successful_Registration", {
          lpKey: body.lpKey,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          userId: `${data.authModel?.userId}`,
        });
        window.location.href = BASE_URL + "/dashboard/marketing/" + searchQuery;
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  init();
});
