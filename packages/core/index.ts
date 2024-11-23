import { makeInstaller } from "@moyu-ui/utils";
import components from "./components";
import "@moyu-ui/theme/index.css"

const installer = makeInstaller(components);

export * from "@moyu-ui/components";
export default installer;