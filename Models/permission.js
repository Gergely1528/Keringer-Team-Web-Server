import mongoose from 'mongoose' //mongoose importálása
// Adatbázis a felhasználói jogosultságok tárolására
const permissionSchema = new mongoose.Schema({
  // Felhasználói belépés
  loginUser: { 
    type: Boolean,
    required: false
  },
  // Felhasználói adatok olvasása.
  readUser: { 
    type: Boolean,
    required: false
  },
  // Aktuális felhasználó lekérdezése.
  readUser: { 
    type: Boolean,
    required: false
  },// Az összes felhasználó lekérdezése.
  readUsers: { 
    type: Boolean,
    required: false
  },// Felhasználó létrehozása.
  createUser: { 
    type: Boolean,
    required: false
  },// Felhasználó módosítása.
  updateUser: { 
    type: Boolean,
    required: false
  },// Felhasználó törlése.
  deleteUser: { 
    type: Boolean,
    required: false
  }// Felhasználói belépés.
  
});

const User = mongoose.model('Permission', permissionSchema);

export default Permission