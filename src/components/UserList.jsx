import React from "react";
import PropTypes from "prop-types";
import { Image, Table } from "semantic-ui-react";
import ShowLoading from "./ShowLoading";

const tableDivStyle = {
  marginTop: "20px",
  marginBottom: "20px",
};

const UsersList = ({ users, showLoading }) => {
  const TableRow = users.map((el, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          <Image src={el.avtURL} rounded size="mini" />
        </Table.Cell>
        <Table.Cell>{el.login}</Table.Cell>
        <Table.Cell>{el.type}</Table.Cell>
        <Table.Cell>{el.score}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Table celled style={tableDivStyle}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User Avatar</Table.HeaderCell>
          <Table.HeaderCell>Username / Login</Table.HeaderCell>
          <Table.HeaderCell>User Type</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {showLoading ? (
          <Table.Row>
            <Table.Cell colSpan={4}>
              <ShowLoading />
            </Table.Cell>
          </Table.Row>
        ) : (
          TableRow
        )}
      </Table.Body>
    </Table>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
