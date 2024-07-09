import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


const UserSchema = Schema({
    email: { type: String, require: true, unique: true },
    nip: { type: String, require: true, unique: true },
    city: { type: String, require: true },
    nameOfCompany: { type: String, require: true },
    postalCode: { type: String, require: true },
    password: { type: String, require: true }
});

UserSchema.plugin(uniqueValidator);

export default model("User", UserSchema);