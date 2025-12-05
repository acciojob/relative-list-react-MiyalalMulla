export default function RelativeList() {
  const relatives = ["Ramesh Uncle", "Sita Aunty", "Vijay Mama", "Kiran Masi"];

  return (
    <ol key="relativeList">
      {relatives.map((name, index) => (
        <li key={`relativeListItem${index + 1}`}>
          {name}
        </li>
      ))}
    </ol>
  );
}
