import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    customerEmail: { type: String, required: true },
    products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      quantity: Number,
      price: Number
    }],
    subtotal: { type: Number, required: true },
    deliveryCharges: { type: Number, default: 0 },
    total: { type: Number, required: true },
    shippingAddress: { type: Object, required: true },
    orderStatus: { type: String, default: 'Pending' },
    trackingId: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
