class ImmutableEmployee {
  constructor(name, id, dateOfJoining, addresses) {
    this._name = name;
    this._id = id;
    this._dateOfJoining = new Date(dateOfJoining.getTime()); // Deep copy of Date
    this._addresses = addresses.map(
      (addr) => new Address(addr.city, addr.state)
    ); // Proper deep copy

    // Freeze the object to prevent modifications
    Object.freeze(this);
    Object.freeze(this._addresses); // Freeze array to prevent modifications
  }

  getName() {
    return this._name;
  }

  getId() {
    return this._id;
  }

  getDateOfJoining() {
    return this._dateOfJoining.toLocaleString("en-GB");
  }

  getAddresses() {
    return this._addresses.map((addr) => new Address(addr.city, addr.state));
  }
}

class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;

    Object.freeze(this);
  } // Make Address instances immutable
}

const addresses = [
  new Address("Chennai", "Tamil Nadu"),
  new Address("Bangalore", "Karnataka"),
];

const emp = new ImmutableEmployee("Rajasekar", "EMP123", new Date(), addresses);

console.log("Name:", emp.getName());
console.log("ID:", emp.getId());
console.log("Date of Joining:", emp.getDateOfJoining());
console.log("Addresses:", emp.getAddresses());

emp.name = "New Name";
emp.getAddresses().push(new Address("Mumbai", "Maharashtra"));

console.log("Immutable Employee Data:", emp); //won't change values
