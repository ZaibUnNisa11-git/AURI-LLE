import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, default: 0 },
    material: { type: String, default: 'Gold vermeil' },
    colour: { type: String, default: 'Champagne' },
    style: { type: String, default: 'Everyday' },
    occasion: { type: String, default: 'Gift' },
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    availability: { type: String, default: 'In stock' },
    careInstructions: { type: String, default: 'Store in a jewellery box away from moisture.' },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
