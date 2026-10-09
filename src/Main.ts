import { UsuarioDAO } from "./dao/UsuarioDAO.js";
import { Usuario } from "./model/Usuario.js";

const usuarioDAO = new UsuarioDAO();

usuarioDAO.createTable();

const usuario = new Usuario(0, "Ana", "2000-06-07");
usuarioDAO.create(usuario);
usuarioDAO.read(usuario.id);

usuario.nome = "Ana Silva";
usuarioDAO.update(usuario);
usuarioDAO.read(usuario.id);

usuarioDAO.delete(usuario);
usuarioDAO.read(usuario.id);
