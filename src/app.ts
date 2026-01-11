import { envs } from "./config/envs";
import { ApiServer } from "./presentation/API/api-server";
import { AppRoutes } from "./presentation/API/routes";

(async ()=>{
    await main();
})();

async function main () {
    const apiServer = new ApiServer({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });
    await apiServer.start();
}