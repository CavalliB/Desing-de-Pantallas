
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/productos", "routes/productos.tsx"),
	route("/empleados", "routes/empleados.tsx"),
	route("/reportes", "routes/reportes.tsx"),
] satisfies RouteConfig;
