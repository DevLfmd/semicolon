(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 6518:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1139))

/***/ }),

/***/ 5986:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ es; }
});

// UNUSED EXPORTS: EmailJSResponseStatus, init, send, sendForm

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
class EmailJSResponseStatus {
    constructor(_status = 0, _text = "Network Error"){
        this.status = _status;
        this.text = _text;
    }
}

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js
const createWebStorage = ()=>{
    if (typeof localStorage === "undefined") return;
    return {
        get: (key)=>Promise.resolve(localStorage.getItem(key)),
        set: (key, value)=>Promise.resolve(localStorage.setItem(key, value)),
        remove: (key)=>Promise.resolve(localStorage.removeItem(key))
    };
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/store/store.js

const store = {
    origin: "https://api.emailjs.com",
    blockHeadless: false,
    storageProvider: createWebStorage()
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js
const buildOptions = (options)=>{
    if (!options) return {};
    // support compatibility with SDK v3
    if (typeof options === "string") {
        return {
            publicKey: options
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === "[object Object]") {
        return options;
    }
    return {};
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/init/init.js


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */ const init = function(options) {
    let origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "https://api.emailjs.com";
    if (!options) return;
    const opts = buildOptions(options);
    store.publicKey = opts.publicKey;
    store.blockHeadless = opts.blockHeadless;
    store.storageProvider = opts.storageProvider;
    store.blockList = opts.blockList;
    store.limitRate = opts.limitRate;
    store.origin = opts.origin || origin;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/api/sendPost.js


const sendPost = async function(url, data) {
    let headers = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const response = await fetch(store.origin + url, {
        method: "POST",
        headers,
        body: data
    });
    const message = await response.text();
    const responseStatus = new EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== "string") {
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    }
    if (!serviceID || typeof serviceID !== "string") {
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    }
    if (!templateID || typeof templateID !== "string") {
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    }
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== "[object Object]") {
        throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
    }
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js
const isHeadless = (navigator)=>{
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js

const headlessError = ()=>{
    return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) {
        throw "The BlockList list has to be an array";
    }
    if (typeof watchVariable !== "string") {
        throw "The BlockList watchVariable has to be a string";
    }
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js

const isBlockListDisabled = (options)=>{
    var _options_list;
    return !((_options_list = options.list) === null || _options_list === void 0 ? void 0 : _options_list.length) || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    validateBlockListParams(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== "string") return false;
    return options.list.includes(value);
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js

const blockedEmailError = ()=>{
    return new EmailJSResponseStatus(403, "Forbidden");
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== "number" || throttle < 0) {
        throw "The LimitRate throttle has to be a positive number";
    }
    if (id && typeof id !== "string") {
        throw "The LimitRate ID has to be a non-empty string";
    }
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js

const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage)=>{
    if (!options.throttle || !storage) {
        return false;
    }
    validateLimitRateParams(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js

const limitRateError = ()=>{
    return new EmailJSResponseStatus(429, "Too Many Requests");
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/send/send.js











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */ const send = async (serviceID, templateID, templateParams, options)=>{
    const opts = buildOptions(options);
    const publicKey = opts.publicKey || store.publicKey;
    const blockHeadless = opts.blockHeadless || store.blockHeadless;
    const storageProvider = opts.storageProvider || store.storageProvider;
    const blockList = {
        ...store.blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...store.limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && isHeadless(navigator)) {
        return Promise.reject(headlessError());
    }
    validateParams(publicKey, serviceID, templateID);
    validateTemplateParams(templateParams);
    if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
        return Promise.reject(blockedEmailError());
    }
    if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
        return Promise.reject(limitRateError());
    }
    const params = {
        lib_version: "4.4.1",
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
        "Content-type": "application/json"
    });
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js
const validateForm = (form)=>{
    if (!form || form.nodeName !== "FORM") {
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
    }
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js











const findHTMLForm = (form)=>{
    return typeof form === "string" ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */ const sendForm = async (serviceID, templateID, form, options)=>{
    const opts = buildOptions(options);
    const publicKey = opts.publicKey || store.publicKey;
    const blockHeadless = opts.blockHeadless || store.blockHeadless;
    const storageProvider = store.storageProvider || opts.storageProvider;
    const blockList = {
        ...store.blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...store.limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && isHeadless(navigator)) {
        return Promise.reject(headlessError());
    }
    const currentForm = findHTMLForm(form);
    validateParams(publicKey, serviceID, templateID);
    validateForm(currentForm);
    const formData = new FormData(currentForm);
    if (isBlockedValueInParams(blockList, formData)) {
        return Promise.reject(blockedEmailError());
    }
    if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
        return Promise.reject(limitRateError());
    }
    formData.append("lib_version", "4.4.1");
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", publicKey);
    return sendPost("/api/v1.0/email/send-form", formData);
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/index.js





/* harmony default export */ var es = ({
    init: init,
    send: send,
    sendForm: sendForm,
    EmailJSResponseStatus: EmailJSResponseStatus
});


/***/ }),

/***/ 1139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3827);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(4090);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownIcon.js

function ArrowDownIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ react.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowDownIcon);
/* harmony default export */ var esm_ArrowDownIcon = (ForwardRef);

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js

function CodeBracketIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ react.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    }));
}
const CodeBracketIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(CodeBracketIcon);
/* harmony default export */ var esm_CodeBracketIcon = (CodeBracketIcon_ForwardRef);

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js

function CheckCircleIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ react.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }));
}
const CheckCircleIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(CheckCircleIcon);
/* harmony default export */ var esm_CheckCircleIcon = (CheckCircleIcon_ForwardRef);

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/DevicePhoneMobileIcon.js

function DevicePhoneMobileIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ react.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    }));
}
const DevicePhoneMobileIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(DevicePhoneMobileIcon);
/* harmony default export */ var esm_DevicePhoneMobileIcon = (DevicePhoneMobileIcon_ForwardRef);

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ServerIcon.js

function ServerIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ react.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
    }));
}
const ServerIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(ServerIcon);
/* harmony default export */ var esm_ServerIcon = (ServerIcon_ForwardRef);

// EXTERNAL MODULE: ./node_modules/@emailjs/browser/es/index.js + 19 modules
var es = __webpack_require__(5986);
;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Home() {
    const [formData, setFormData] = (0,react.useState)({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [submitStatus, setSubmitStatus] = (0,react.useState)(null);
    // Initialize EmailJS
    (0,react.useEffect)(()=>{
        try {
            es/* default.init */.ZP.init("fkyTKEWPMpDZrvJIJ");
            console.log("EmailJS initialized successfully");
        } catch (error) {
            console.error("Error initializing EmailJS:", error);
        }
    }, []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("Form submitted", formData);
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                success: false,
                message: "Please fill in all required fields."
            });
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                success: false,
                message: "Please enter a valid email address."
            });
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            console.log("Starting email sending...");
            const serviceId = "service_3fezsm8";
            const templateId = "template_w17cycd";
            const publicKey = "fkyTKEWPMpDZrvJIJ";
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message
            };
            console.log("Template parameters:", templateParams);
            const result = await es/* default.send */.ZP.send(serviceId, templateId, templateParams, publicKey);
            console.log("Sending result:", result);
            if (result.text === "OK") {
                setSubmitStatus({
                    success: true,
                    message: "Message sent successfully! We will contact you soon."
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus({
                success: false,
                message: "An error occurred while sending your message. Please try again later."
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        style: {
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                style: {
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(to bottom right, #1e3a8a, #1d4ed8)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "black",
                            opacity: 0.5
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 1rem",
                            textAlign: "center",
                            position: "relative",
                            zIndex: 10
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                style: {
                                    fontSize: "3.5rem",
                                    fontWeight: "bold",
                                    marginBottom: "1.5rem"
                                },
                                children: [
                                    "Transforming Ideas into",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        style: {
                                            display: "block",
                                            color: "#60a5fa"
                                        },
                                        children: "Digital Reality"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                style: {
                                    fontSize: "1.35rem",
                                    marginBottom: "2rem",
                                    maxWidth: "48rem",
                                    margin: "0 auto"
                                },
                                children: "Full Stack Development of high performance to boost your business"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#contact",
                                        style: {
                                            backgroundColor: "white",
                                            color: "#1e3a8a",
                                            padding: "0.75rem 2rem",
                                            borderRadius: "9999px",
                                            fontSize: "1.125rem",
                                            fontWeight: "600",
                                            transition: "background-color 0.3s"
                                        },
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#services",
                                        style: {
                                            backgroundColor: "transparent",
                                            border: "2px solid white",
                                            color: "white",
                                            padding: "0.75rem 2rem",
                                            borderRadius: "9999px",
                                            fontSize: "1.125rem",
                                            fontWeight: "600",
                                            transition: "all 0.3s"
                                        },
                                        children: "Our Services"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "2.5rem"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowDownIcon, {
                            style: {
                                height: "2rem",
                                width: "2rem",
                                animation: "bounce 1s infinite"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                style: {
                    padding: "4rem 0",
                    backgroundColor: "white"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "2rem",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    padding: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        style: {
                                            fontSize: "2.25rem",
                                            fontWeight: "bold",
                                            color: "#1e3a8a",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "8+"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        style: {
                                            color: "#4b5563"
                                        },
                                        children: "Years of Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    padding: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        style: {
                                            fontSize: "2.25rem",
                                            fontWeight: "bold",
                                            color: "#1e3a8a",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "50+"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        style: {
                                            color: "#4b5563"
                                        },
                                        children: "Completed Projects"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    padding: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        style: {
                                            fontSize: "2.25rem",
                                            fontWeight: "bold",
                                            color: "#1e3a8a",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "30+"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        style: {
                                            color: "#4b5563"
                                        },
                                        children: "Satisfied Clients"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    padding: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        style: {
                                            fontSize: "2.25rem",
                                            fontWeight: "bold",
                                            color: "#1e3a8a",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "100%"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        style: {
                                            color: "#4b5563"
                                        },
                                        children: "Commitment"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                id: "services",
                style: {
                    padding: "5rem 0",
                    backgroundColor: "#f9fafb"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                marginBottom: "4rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    style: {
                                        fontSize: "2.25rem",
                                        fontWeight: "bold",
                                        marginBottom: "1rem"
                                    },
                                    children: "Our Services"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    style: {
                                        color: "#4b5563",
                                        maxWidth: "42rem",
                                        margin: "0 auto"
                                    },
                                    children: "We offer complete solutions in software development to boost your business"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "2rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    style: {
                                        backgroundColor: "white",
                                        padding: "2rem",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            style: {
                                                backgroundColor: "#dbeafe",
                                                padding: "1rem",
                                                borderRadius: "9999px",
                                                width: "4rem",
                                                height: "4rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CodeBracketIcon, {
                                                style: {
                                                    height: "2rem",
                                                    width: "2rem",
                                                    color: "#1e3a8a"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.5rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Web Development"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            style: {
                                                color: "#4b5563",
                                                marginBottom: "1.5rem"
                                            },
                                            children: "We create modern and responsive web applications using the latest technologies on the market."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Institutional Sites"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "E-commerces"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Web Applications"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    style: {
                                        backgroundColor: "white",
                                        padding: "2rem",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            style: {
                                                backgroundColor: "#dbeafe",
                                                padding: "1rem",
                                                borderRadius: "9999px",
                                                width: "4rem",
                                                height: "4rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_DevicePhoneMobileIcon, {
                                                style: {
                                                    height: "2rem",
                                                    width: "2rem",
                                                    color: "#1e3a8a"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.5rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Mobile Apps"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            style: {
                                                color: "#4b5563",
                                                marginBottom: "1.5rem"
                                            },
                                            children: "Development of native and hybrid mobile applications for iOS and Android."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Native Apps"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Hybrid Apps"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "PWA"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    style: {
                                        backgroundColor: "white",
                                        padding: "2rem",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            style: {
                                                backgroundColor: "#dbeafe",
                                                padding: "1rem",
                                                borderRadius: "9999px",
                                                width: "4rem",
                                                height: "4rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ServerIcon, {
                                                style: {
                                                    height: "2rem",
                                                    width: "2rem",
                                                    color: "#1e3a8a"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.5rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Backend & API"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            style: {
                                                color: "#4b5563",
                                                marginBottom: "1.5rem"
                                            },
                                            children: "Robust and scalable architecture for your applications with RESTful APIs."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "RESTful APIs"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Microservices"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                            style: {
                                                                height: "1.25rem",
                                                                width: "1.25rem",
                                                                color: "#1e3a8a",
                                                                marginRight: "0.5rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Cloud Solutions"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                style: {
                    padding: "5rem 0"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "3rem",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        style: {
                                            fontSize: "2.25rem",
                                            fontWeight: "bold",
                                            marginBottom: "1.5rem"
                                        },
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        style: {
                                            color: "#4b5563",
                                            marginBottom: "1.5rem"
                                        },
                                        children: "We are a company specialized in full stack development, focused on creating innovative and high-quality technological solutions. Our team is composed of experienced professionals passionate about technology."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                        style: {
                                                            height: "1.5rem",
                                                            width: "1.5rem",
                                                            color: "#1e3a8a",
                                                            marginRight: "0.75rem",
                                                            marginTop: "0.25rem"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                style: {
                                                                    fontSize: "1.25rem",
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Experience in Complex Projects"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                style: {
                                                                    color: "#4b5563"
                                                                },
                                                                children: "We develop solutions for various sectors and company sizes."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                        style: {
                                                            height: "1.5rem",
                                                            width: "1.5rem",
                                                            color: "#1e3a8a",
                                                            marginRight: "0.75rem",
                                                            marginTop: "0.25rem"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                style: {
                                                                    fontSize: "1.25rem",
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Agile Methodologies"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                style: {
                                                                    color: "#4b5563"
                                                                },
                                                                children: "We use agile methodologies for fast and efficient deliveries."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckCircleIcon, {
                                                        style: {
                                                            height: "1.5rem",
                                                            width: "1.5rem",
                                                            color: "#1e3a8a",
                                                            marginRight: "0.75rem",
                                                            marginTop: "0.25rem"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                style: {
                                                                    fontSize: "1.25rem",
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Specialized Technical Support"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                style: {
                                                                    color: "#4b5563"
                                                                },
                                                                children: "We offer specialized technical support for all our clients."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    background: "linear-gradient(to bottom right, #1e3a8a, #1d4ed8)",
                                    height: "24rem",
                                    borderRadius: "0.5rem",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                }
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                id: "contact",
                style: {
                    padding: "5rem 0",
                    backgroundColor: "#f9fafb"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                marginBottom: "4rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    style: {
                                        fontSize: "2.25rem",
                                        fontWeight: "bold",
                                        marginBottom: "1rem"
                                    },
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    style: {
                                        color: "#4b5563",
                                        maxWidth: "42rem",
                                        margin: "0 auto"
                                    },
                                    children: "We are ready to transform your idea into reality. Contact us!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                maxWidth: "56rem",
                                margin: "0 auto"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "3rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                style: {
                                                    fontSize: "1.5rem",
                                                    fontWeight: "600",
                                                    marginBottom: "1.5rem"
                                                },
                                                children: "Contact Information"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "1.5rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                style: {
                                                                    fontSize: "1.125rem",
                                                                    fontWeight: "500",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                children: "Address"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                style: {
                                                                    color: "#4b5563"
                                                                },
                                                                children: "Minas Gerais, MG - Brazil"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                style: {
                                                                    fontSize: "1.125rem",
                                                                    fontWeight: "500",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                style: {
                                                                    color: "#4b5563"
                                                                },
                                                                children: "luizfmd16@gmail.com"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                style: {
                                                                    fontSize: "1.125rem",
                                                                    fontWeight: "500",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                children: "Social Media"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "1rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                        href: "https://www.linkedin.com/in/luiz-fernando-dias-0a4b2a1b8/",
                                                                        style: {
                                                                            color: "#1e3a8a"
                                                                        },
                                                                        children: "LinkedIn"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                        href: "https://github.com/luizfmd16",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        style: {
                                                                            color: "#1e3a8a"
                                                                        },
                                                                        children: "GitHub"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1.5rem"
                                            },
                                            children: [
                                                submitStatus && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    style: {
                                                        padding: "1rem",
                                                        borderRadius: "0.5rem",
                                                        backgroundColor: submitStatus.success ? "#dcfce7" : "#fee2e2",
                                                        color: submitStatus.success ? "#166534" : "#991b1b"
                                                    },
                                                    role: "alert",
                                                    "aria-live": "polite",
                                                    children: submitStatus.message
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            htmlFor: "name",
                                                            style: {
                                                                display: "block",
                                                                color: "#374151",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                "Name ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    style: {
                                                                        color: "#ef4444"
                                                                    },
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            id: "name",
                                                            type: "text",
                                                            name: "name",
                                                            value: formData.name,
                                                            onChange: handleChange,
                                                            style: {
                                                                width: "100%",
                                                                padding: "0.5rem 1rem",
                                                                border: "1px solid #d1d5db",
                                                                borderRadius: "0.5rem",
                                                                outline: "none",
                                                                backgroundColor: isSubmitting ? "#f3f4f6" : "white"
                                                            },
                                                            required: true,
                                                            disabled: isSubmitting,
                                                            "aria-required": "true",
                                                            "aria-invalid": submitStatus && !formData.name.trim() ? "true" : "false"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            htmlFor: "email",
                                                            style: {
                                                                display: "block",
                                                                color: "#374151",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                "Email ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    style: {
                                                                        color: "#ef4444"
                                                                    },
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            id: "email",
                                                            type: "email",
                                                            name: "email",
                                                            value: formData.email,
                                                            onChange: handleChange,
                                                            style: {
                                                                width: "100%",
                                                                padding: "0.5rem 1rem",
                                                                border: "1px solid #d1d5db",
                                                                borderRadius: "0.5rem",
                                                                outline: "none",
                                                                backgroundColor: isSubmitting ? "#f3f4f6" : "white"
                                                            },
                                                            required: true,
                                                            disabled: isSubmitting,
                                                            "aria-required": "true",
                                                            "aria-invalid": submitStatus && !formData.email.trim() ? "true" : "false"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                            htmlFor: "phone",
                                                            style: {
                                                                display: "block",
                                                                color: "#374151",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            id: "phone",
                                                            type: "tel",
                                                            name: "phone",
                                                            value: formData.phone,
                                                            onChange: handleChange,
                                                            style: {
                                                                width: "100%",
                                                                padding: "0.5rem 1rem",
                                                                border: "1px solid #d1d5db",
                                                                borderRadius: "0.5rem",
                                                                outline: "none",
                                                                backgroundColor: isSubmitting ? "#f3f4f6" : "white"
                                                            },
                                                            disabled: isSubmitting
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            htmlFor: "message",
                                                            style: {
                                                                display: "block",
                                                                color: "#374151",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                "Message ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    style: {
                                                                        color: "#ef4444"
                                                                    },
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                            id: "message",
                                                            name: "message",
                                                            value: formData.message,
                                                            onChange: handleChange,
                                                            style: {
                                                                width: "100%",
                                                                padding: "0.5rem 1rem",
                                                                border: "1px solid #d1d5db",
                                                                borderRadius: "0.5rem",
                                                                outline: "none",
                                                                height: "8rem",
                                                                backgroundColor: isSubmitting ? "#f3f4f6" : "white",
                                                                resize: "vertical"
                                                            },
                                                            required: true,
                                                            disabled: isSubmitting,
                                                            "aria-required": "true",
                                                            "aria-invalid": submitStatus && !formData.message.trim() ? "true" : "false"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "submit",
                                                    style: {
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        borderRadius: "0.5rem",
                                                        backgroundColor: isSubmitting ? "#9ca3af" : "#1e3a8a",
                                                        color: "white",
                                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                                        transition: "background-color 0.3s",
                                                        fontWeight: "600"
                                                    },
                                                    disabled: isSubmitting,
                                                    "aria-busy": isSubmitting,
                                                    children: isSubmitting ? "Sending..." : "Send Message"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                style: {
                    backgroundColor: "#111827",
                    color: "white",
                    padding: "3rem 0"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "2rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            style: {
                                                color: "#9ca3af"
                                            },
                                            children: "Company specialized in full stack development, creating innovative technological solutions."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Services"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "#services",
                                                        style: {
                                                            color: "#9ca3af"
                                                        },
                                                        children: "Web Development"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "#services",
                                                        style: {
                                                            color: "#9ca3af"
                                                        },
                                                        children: "Mobile Apps"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "#services",
                                                        style: {
                                                            color: "#9ca3af"
                                                        },
                                                        children: "Backend & API"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "#services",
                                                        style: {
                                                            color: "#9ca3af"
                                                        },
                                                        children: "Consultancy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    style: {
                                                        color: "#9ca3af"
                                                    },
                                                    children: "Email: luizfmd16@gmail.com"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    style: {
                                                        color: "#9ca3af"
                                                    },
                                                    children: "Minas Gerais, MG"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem"
                                            },
                                            children: "Social Media"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://www.linkedin.com/in/luiz-fernando-dias-0a4b2a1b8/",
                                                    style: {
                                                        color: "#9ca3af"
                                                    },
                                                    children: "LinkedIn"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://github.com/luizfmd16",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        color: "#9ca3af"
                                                    },
                                                    children: "GitHub"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                borderTop: "1px solid #1f2937",
                                marginTop: "2rem",
                                paddingTop: "2rem",
                                textAlign: "center",
                                color: "#9ca3af"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "\xa9 2025 Semicolon. All rights reserved."
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [971,69,744], function() { return __webpack_exec__(6518); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);