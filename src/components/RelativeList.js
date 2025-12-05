export default function RelativeList() {
  const relatives = ["Ramesh Uncle", "Sita Aunty", "Vijay Mama", "Kiran Masi"];

  return (
    <ol id="relativeList">     {/* important for test */}
      {relatives.map((name, index) => (
        <li id={`relativeListItem${index + 1}`} key={index}>  {/* test checks IDs */}
          {name}
        </li>
      ))}
    </ol>
  );
}
