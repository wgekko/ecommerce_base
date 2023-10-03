export const navOptions = [
  {
    id: "home",
    label: "Inicio",
    path: "/",
  },
  {
    id: "listing",
    label: "Productos",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Hombre",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Mujer",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Niños",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Gestionar Productos",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Agregar Producto",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Digite su nombre",
    label: "Nombre",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Digite su email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Digite su password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "clinte",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Digite su email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Digite su password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Ingresar nombre",
    label: "Nombre",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Ingresar precio",
    label: "Precio",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Ingresar  descripción",
    label: "Descripción",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Categoria",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Hombre",
      },
      {
        id: "women",
        label: "Mujer",
      },
      {
        id: "kids",
        label: "Niño",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Ingrese InfoEntrega",
    label: "Info Entrega",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "En venta",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Si",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Ingrese Descuento",
    label: "Descuento",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STROAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};

export const firebaseStroageURL =
  "YOUR_FIREBASE_STROAGE_URL";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Ingresa tu nombre completo",
    label: "Nombre Completo",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Ingresa tu dirección completa",
    label: "Dirección",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Ingresa la cuidad",
    label: "Ciudad",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Ingresa tu país",
    label: "País",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Ingresa tu código postal",
    label: "Codito Postal",
    componentType: "input",
  },
];
