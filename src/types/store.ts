// Store types for Hart Medical e-commerce

export interface Product {
  id: string;
  name: string;
  vendor: string;
  sku: string;
  price: number;
  category: string;
  inStock: boolean;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Vendor {
  id: string;
  name: string;
}

// Sample data for products
export const sampleProducts: Product[] = [
  { id: "1", name: '?" SuperStick® 230, Sticks, Light Body, Pink, 200+gms, 1/bx', vendor: "PacDent Gingi-Pak", sku: "PAC 50280", price: 36.49, category: "diagnostic", inStock: true },
  { id: "2", name: '?" SuperStick® 250, Sticks, Heavy Body, Orange, 200+gms, 1/bx', vendor: "PacDent Gingi-Pak", sku: "PAC 50285", price: 36.49, category: "diagnostic", inStock: true },
  { id: "3", name: ".125 NPT Pipe Fitting (Delivery Info Sheet Required)", vendor: "Midmark Corporation", sku: "MMK 014-0519-00", price: 35.68, category: "instruments", inStock: true },
  { id: "4", name: ".875 Stem Bumper (Delivery Info Sheet Required)", vendor: "Midmark Corporation", sku: "MMK 053-1530-00-216", price: 3.32, category: "instruments", inStock: true },
  { id: "5", name: "Hypodermic Standard Needle, 27G x 1/2\"", vendor: "BD", sku: "BD 305109", price: 4.49, category: "needles-syringes", inStock: true },
  { id: "6", name: "Nitrile Exam Gloves, Medium, 100/bx", vendor: "Cardinal Health", sku: "CH 8899M", price: 8.99, category: "exam-room", inStock: true },
  { id: "7", name: "Exam Table Paper Roll, 21\" x 225'", vendor: "Dukal Corporation", sku: "DUK 2125", price: 45.00, category: "exam-room", inStock: true },
  { id: "8", name: "Digital Blood Pressure Monitor", vendor: "Hillrom", sku: "HIL BP200", price: 189.99, category: "diagnostic", inStock: true },
  { id: "9", name: "Stethoscope, Cardiology III", vendor: "3M Littmann", sku: "3M 3128", price: 179.00, category: "diagnostic", inStock: false },
  { id: "10", name: "Wheelchair, Standard 18\"", vendor: "Drive Medical", sku: "DRV STD18", price: 289.99, category: "extended-care", inStock: true },
  { id: "11", name: "N95 Respirator Mask, 20/bx", vendor: "3M", sku: "3M 8210", price: 24.99, category: "ppe-safety", inStock: true },
  { id: "12", name: "Acetaminophen 500mg, 100 Tablets", vendor: "McKesson", sku: "MCK ACE500", price: 12.99, category: "pharmaceuticals", inStock: true },
];

export const categories: Category[] = [
  { id: "all", name: "All Products", count: 60000 },
  { id: "diagnostic", name: "Diagnostic Equipment", count: 2500 },
  { id: "exam-room", name: "Exam Room Supplies", count: 8000 },
  { id: "instruments", name: "Medical Instruments", count: 5000 },
  { id: "needles-syringes", name: "Needles & Syringes", count: 3000 },
  { id: "extended-care", name: "Extended Care", count: 12000 },
  { id: "pharmaceuticals", name: "Pharmaceuticals", count: 15000 },
  { id: "ppe-safety", name: "PPE & Safety", count: 4000 },
];

export const vendors: Vendor[] = [
  { id: "midmark", name: "Midmark Corporation" },
  { id: "cardinal", name: "Cardinal Health" },
  { id: "bsn", name: "BSN Medical/Jobst" },
  { id: "dukal", name: "Dukal Corporation" },
  { id: "hillrom", name: "Hillrom" },
  { id: "bd", name: "BD" },
];
