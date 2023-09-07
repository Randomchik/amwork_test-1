export const toClientModel = (routeData) => {
    const routeCoordinates = [];
    const legs = routeData?.routes[0]?.legs;
    legs.map((leg) =>
      leg.steps?.map((step) =>
        routeCoordinates.push(
          ...step.geometry?.coordinates.map((coordinate) => [
            coordinate[1],
            coordinate[0],
          ])
        )
      )
    );
    return routeCoordinates;
  };
  