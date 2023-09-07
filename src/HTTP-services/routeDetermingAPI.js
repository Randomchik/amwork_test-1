import { toServerModel } from "../helpers/determinedRouteToServerModel";
import { messageUser } from "../helpers/messageUser";
import server from "./server";

export async function getDeterminedRoute(pointsToDetermine) {
  try {
    const pointsServerModel = toServerModel(pointsToDetermine);
    const determinedRoute = await server.get(
      `/route/v1/driving/${pointsServerModel}?overview=false&steps=true&geometries=geojson`
    );
    return determinedRoute.data;
  } catch (error) {
    messageUser(`Networ error: ${error}`);
    return "error";
  }
}
