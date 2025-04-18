import EmployeeModel from "../models/Citas.js";
import bcryptjs from "bcryptjs"; //para encriptar
import jsonwebtoken from "jsonwebtoken"; //para generar token
import { config } from "../config.js";

const registerDoctoresController = {};

registerDoctoresController.register = async (req, res) => {
  const {
    name,
    especialidad,
    email,
    password,
  } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existEmployee = await EmployeeModel.findOne({ email });
    if (existEmployee) {
      return res.json({ message: "Doctor ya existe" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardemos el empleado nuevo
    const newDoctor = new DoctorModel({
      name,
      especialidad,
      email,
      password: passwordHash,
    });

    await newDoctor.save();

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: newDoctor._id },
      //2-secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4- funcion flecha
      (error, token) => {
        if (error) console.log(error);
        res.cookie("authToken", token);
        res.json({message: "Doctor registrado"})
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default registerDoctoresController;