import EmployeeModel from "../models/employee.js";
import bcryptjs from "bcryptjs"; //para encriptar
import jsonwebtoken from "jsonwebtoken"; //para generar token
import { config } from "../config.js";

const registerDoctoresController = {};

registerPacientesController.register = async (req, res) => {
  const {
    name,
    age,
    email,
    password,
    telephone,
    isVerified,
  } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existPaciente = await PacienteModel.findOne({ email });
    if (existPaciente) {
      return res.json({ message: "Paciente ya existe" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardemos el empleado nuevo
    const newPaciente = new PacienteModel({
        name,
        age,
        email,
        password: passwordHash,
        telephone,
        isVerified,
    });

    await newPaciente.save();

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: newPaciente._id },
      //2-secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4- funcion flecha
      (error, token) => {
        if (error) console.log(error);
        res.cookie("authToken", token);
        res.json({message: "Paciente registrado"})
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default registerEmployeesController;