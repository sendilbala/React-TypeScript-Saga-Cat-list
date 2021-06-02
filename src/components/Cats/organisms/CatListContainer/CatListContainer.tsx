import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CatList from '../../molecules/CatList';
import {
  fetchCatListRequest,
  favouriteCatRequest
} from './CatListContainer.actions';
import { ApplicationState } from '../../../../store';
import { CatListProps } from '../../types/CatList.types';

const CatListContainer: React.FC<CatListProps> = (
  props: CatListProps
) => <CatList {...props} />;

const mapStateToProps = ({ catListState }: ApplicationState) => ({
  listData: catListState.listData,
  isRequest: catListState.isRequest,
  error: catListState.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchGetCatList: fetchCatListRequest,
      favouriteCatRequest : favouriteCatRequest
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CatListContainer);
