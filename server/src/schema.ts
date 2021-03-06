import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const MONGO_URL = String(process.env.MONGO_URL);
mongoose.connect(MONGO_URL, {
    useMongoClient: false
}).catch(err => {
    throw err;
});
export {mongoose};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface RootDocument {
    _id: mongoose.Types.ObjectId;
}
export function createNew<T extends RootDocument>(model: mongoose.Model<T & mongoose.Document, {}>, doc: Omit<T, "_id">) {
    return new model(doc);
}

export interface IUser extends RootDocument {
    uuid: string;
    email: string;
    name: string;
    token: string | null;
    admin?: boolean;
    school?: string;
    grad_year?: string;
    skills?: string[];
    beginner?: boolean;
    experience?: string;
    contact?: string;
    image?: string;
    contact_method?: string;
    visible?: number;
}

export interface ITeam {
    uuid: string;
    creator: string;
    name: string;
    picture?: string;
    members: string[];
    interests?: string[];
    description?: string;
}

export type IUserMongoose = IUser & mongoose.Document;
export type ITeamMongoose = ITeam & mongoose.Document;

export const Team = mongoose.model<ITeamMongoose>("Team", new mongoose.Schema({
    creator: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String,
        unique: true
    },
    picture: String,
    members: {
        required: true,
        type: [String],
        unique: true
    },
    interests: [String],
    description: String
    },
    {
        usePushEach: true
    }));

export const User = mongoose.model<IUserMongoose>("User", new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    school: {
        type: String,
        required: false
    },
    token: String,
    grad_year: String,
    skills: [String],
    beginner: {
        type: Boolean,
        required: false
    },
    experience: String,
    image: String,
    auth_keys: [String],
    admin: Boolean,
    contact: String,
    contact_method: String,
    visible: Number
    },
    {
        usePushEach: true
    }));

