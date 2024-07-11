import pkg from 'mongoose';

const { Schema, model } = pkg;


const UserSchema = Schema({
    email: { type: String, require: true, unique: true },
    nip: { type: String, require: true, unique: true },
    city: { type: String, require: true },
    nameOfCompany: { type: String, require: true },
    postalCode: { type: String, require: true },
    password: { type: String, require: true }
});

export default model("User", UserSchema);