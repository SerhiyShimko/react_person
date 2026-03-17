export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner =
    sex === 'm' ? (
      <p className="Person__partner">{`${partnerName} is my wife`}</p>
    ) : (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried === true ? (
        partner
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
