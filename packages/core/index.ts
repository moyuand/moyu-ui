import { makeInstaller } from "@moyu-ui/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@moyu-ui/theme/index.css"

const installer = makeInstaller(components);
library.add(fas); 
export * from "../components";
export default installer;