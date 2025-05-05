(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[327],{

/***/ 349:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9690))

/***/ }),

/***/ 9690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3827);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4090);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2175);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5986);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ContactPage = ()=>{
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "idle",
        message: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus({
            type: "loading",
            message: "Enviando mensagem..."
        });
        try {
            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__/* ["default"].send */ .ZP.send("service_3fezsm8", "template_w17cycd", {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            }, "fkyTKEWPMpDZrvJIJ");
            setStatus({
                type: "success",
                message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
            });
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: "Erro ao enviar mensagem. Por favor, tente novamente."
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                            className: "text-4xl font-bold mb-4",
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "text-gray-400",
                            children: "Do you have any questions or proposals? We are here to help!"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    className: "bg-gray-800 rounded-lg shadow-xl p-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Nome"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                required: true,
                                                className: "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleChange,
                                                required: true,
                                                className: "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        htmlFor: "subject",
                                        className: "block text-sm font-medium text-gray-300",
                                        children: "Assunto"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        type: "text",
                                        id: "subject",
                                        name: "subject",
                                        value: formData.subject,
                                        onChange: handleChange,
                                        required: true,
                                        className: "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        htmlFor: "message",
                                        className: "block text-sm font-medium text-gray-300",
                                        children: "Mensagem"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                        id: "message",
                                        name: "message",
                                        value: formData.message,
                                        onChange: handleChange,
                                        required: true,
                                        rows: 6,
                                        className: "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    type: "submit",
                                    disabled: status.type === "loading",
                                    className: "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: status.type === "loading" ? "Enviando..." : "Enviar Mensagem"
                                })
                            }),
                            status.type === "success" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "text-green-400 text-center",
                                children: status.message
                            }),
                            status.type === "error" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "text-red-400 text-center",
                                children: status.message
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (ContactPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [444,971,69,744], function() { return __webpack_exec__(349); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);