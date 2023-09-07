export function toServerModel(pointsToDetermine) {
    const firstPoint = pointsToDetermine.routePoint1.split(", ");
    const secondPoint = pointsToDetermine.routePoint2.split(", ");
    const thirdPoint = pointsToDetermine.routePoint3.split(", ");
    return (
      firstPoint[1] +
      "," +
      firstPoint[0] +
      ";" +
      secondPoint[1] +
      "," +
      secondPoint[0] +
      ";" +
      thirdPoint[1] +
      "," +
      thirdPoint[0]
    );
  }
  