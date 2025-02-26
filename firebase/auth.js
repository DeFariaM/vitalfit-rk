import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

//! ====== INICIALIZACIÓN ====== //

const googleProvider = new GoogleAuthProvider();

//*Registrarse con mail y contraseña
export const signup = async ({ email, password, name }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { uid, photoURL } = user;
    await updateProfile(auth.currentUser, { displayName: name });

    const docref = doc(db, "users", uid);
    await setDoc(docref, {
      status: "active",
      role: "user",
      id: uid,
      email,
      photoURL,
      displayName: name,
    });
    console.log(user);
    return {
      ok: true,
      email,
      name,
    };
  } catch (error) {
    console.log(error);

    const message = error.message;
    return {
      ok: false,
      message,
    };
  }
};

//* Ingresar con mail y contraseña
export const login = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid, photoURL, displayName } = user;
    console.log(user);

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.error(error);
    const errorMessages = {
      "auth/user-not-found": "Usuario no encontrado.",
      "auth/wrong-password": "Contraseña incorrecta.",
      "auth/invalid-email": "Correo electrónico inválido.",
      "auth/user-disabled": "Usuario deshabilitado.",
      "auth/invalid-credential": "Usuario no registrado.",
    };

    const message = errorMessages[error.code] || error.message;

    console.log(message);

    return {
      ok: false,
      message,
    };
  }
};

//* Ingresar con google
export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const { uid, photoURL, displayName, email } = user;
    const docref = doc(db, "users", uid);
    await setDoc(docref, {
      status: "active",
      role: "user",
      id: uid,
      email,
      photoURL,
      displayName,
    });
    return {
      ok: true,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    const message = error.message;
    return {
      ok: false,
      message,
    };
  }
};

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
  return {
    ok: true,
  };
};
