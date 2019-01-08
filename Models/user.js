import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  // A felhasználó Email címe
  email: { 
    type: String,
    required: true
  },
  // A felhasználó jelszava
  password: {
    type: String,
    required: true
  },
  // A felhasználó vezetékneve
  firstname: {
    type: String,
    required: true
  },
  // A felhasználó keresztneve
  lastname: {
    type: String,
    required: true
  },
  // A felhasználót kétrehozó felhasználó (vezetéknév + keresztnév)
  creator: {
    type: String,
    required: true
  },
  // A felhasználó létrehozásának dátuma
  created: {
    type: Date,
    required: true
  },
  // A felhasználót változtató felhasználó (vezetéknév + keresztnév)
  updater: {
    type: String,
    required: false,
    default : null
  },
  // A felhasználó változtatásának dátuma
  updated: {
    type: Date,
    required: false,
    default : null
  }

});

const User = mongoose.model('User', userSchema);

export default User