// @flow
import { connect } from "react-redux";
import { getUsers, deleteUser, setSearchTerm } from "./actions";

import CardList from "../../components/CardList";
import SearchButton from "../../components/SearchButton";
import SearchInput from "../../components/SearchInput";

const mapStateToProps = state => ({
  data: state.users.data,
  searchTerm: state.users.searchTerm,
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  getUsers: (searchTerm: string) => dispatch(getUsers(searchTerm)),
  deleteUser: (user: number) => dispatch(deleteUser(user)),
  setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm))
});

const userContainerCreator = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const CardListContainer = userContainerCreator(CardList);
export const SearchButtonContainer = userContainerCreator(SearchButton);
export const SearchInputContainer = userContainerCreator(SearchInput);
