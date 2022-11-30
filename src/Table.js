import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead className="thead">
      <th>Id</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Company</th>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.items.map((item, index) => {
    var addr =
      item.address.suite +
      ", " +
      item.address.street +
      ", " +
      item.address.city +
      ", " +
      item.address.zipcode;
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{addr}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <td>{item.company.name}</td>
      </tr>
    );
  });

  return <tbody className="tbody">{rows}</tbody>;
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <table>
          <TableHeader />
          <tbody className="tbody">
            <tr>
              <td colspan="100%">Please wait....</td>
            </tr>
          </tbody>
        </table>
      );

    return (
      <table>
        <TableHeader />
        <TableBody items={items} />
      </table>
    );
  }
}

export default Table;
