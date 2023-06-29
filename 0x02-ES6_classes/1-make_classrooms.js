import ClassRoom from './0-classroom';

export default function intializeRooms() {
  const sizes = [19, 20, 34];
  const classrooms = sizes.map((size) => new ClassRoom(size));
  return classrooms;
}
