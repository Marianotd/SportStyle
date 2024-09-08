import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    phone: Number,
    email: String,
    admin: Boolean,
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
});

export default model('User', userSchema);
