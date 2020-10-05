"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../firebase"));
class Repository {
    constructor(collection) {
        this.getAll = async () => {
            const data = await firebase_1.default.firestore().collection(this.collection).get();
            console.info(data);
            const newList = [];
            data.forEach(doc => newList.push({ ...doc.data(), id: doc.id }));
            return newList;
        };
        this.getData = async (id) => {
            const data = await firebase_1.default.firestore().collection(this.collection).doc(id).get();
            console.log(this.collection, " get a data ", data);
            return data;
        };
        this.updateData = async (object, id) => {
            return await firebase_1.default.firestore().collection(this.collection).doc(id).set(object);
        };
        this.createDocument = async (object) => {
            return await firebase_1.default.firestore().collection(this.collection).add(object);
        };
        this.findDocument = async (tag, value) => {
            const data = await firebase_1.default.firestore().collection(this.collection).where(tag, "==", value).get();
            const newList = [];
            data.forEach(doc => newList.push({ ...doc.data(), id: doc.id }));
            return newList;
        };
        this.deleteDocument = async (id) => {
            return await firebase_1.default.firestore().collection(this.collection).doc(id).delete();
        };
        this.collection = collection;
    }
}
exports.default = Repository;
