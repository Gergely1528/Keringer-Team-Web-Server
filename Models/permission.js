import mongoose from 'mongoose' //mongoose importálása

//   Adatbázis a felhasználói jogosultságok tárolására   
 
const permissionSchema = new mongoose.Schema({
  // A felhasználó email címe a jogosultságok rendszerezéséhez.
  email: {
    type: String,
    required: false
  },
  // Jogosultság a saját felhasználói adatainak lekérdezésére.
  readUser: {
    type: Boolean,
    required: false,
    default: false
  },
  // Jogosultság az összes felhasználó adatainak lekérdezésére.
  readUsers: {
    type: Boolean,
    required: false,
    default: false
  },
  // Jogosultság új felhasználó létrehozására.
  createUser: {
    type: Boolean,
    required: false,
    default: false
  },
  // Jogosultság a felhasználói adatok módosítására.
  updateUser: {
    type: Boolean,
    required: false,
    default: false
  },
  // Jogosultság felhasználó törlésére.
  deleteUser: {
    type: Boolean,
    required: false,
    default: false
  },
  // Belépési engedély a rendszerbe.
  loginUser: {
    type: Boolean,
    required: false,
    default: false
  }

});

const Permission = mongoose.model('Permission', permissionSchema);

export default Permission