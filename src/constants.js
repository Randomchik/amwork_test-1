export const DEFAULT_ROUTES = [
    {
      id: 0,
      routeName: "Маршрут №1",
      routePoint1: "59.84660399, 30.29496392",
      routePoint2: "59.82934196, 30.42423701",
      routePoint3: "59.83567701, 30.38064206",
    },
    {
      id: 1,
      routeName: "Маршрут №2",
      routePoint1: "59.82934196, 30.42423701",
      routePoint2: "59.82761295, 30.41705607",
      routePoint3: "59.84660399, 30.29496392",
    },
    {
      id: 2,
      routeName: "Маршрут №3",
      routePoint1: "59.83567701, 30.38064206",
      routePoint2: "59.84660399, 30.29496392",
      routePoint3: "59.82761295, 30.41705607",
    },
  ];

export const SAGA_STATUSES = {
  INITIAL: 'initial',
  READY: 'ready',
  REVERTED: 'reverted',
  PROCESSING: 'processing',
}